import React, { useEffect, useMemo, useState } from "react";
import { DELETE_fetchRequest, GET_fetchRequest, POST_fetchRequest, PUT_fetchRequest } from "../../data";

import PageHeader from "../Blocks/PageHeader";
import SearchBar from "../Blocks/SearchBar";
import DataTable from "../Blocks/DataTable";
import ActionPanel from "../Blocks/ActionPanel";
import StudentModal from "../Blocks/StudentModal";
import DeleteConfirmationDialog from "../Blocks/DeleteConfirmationDialog";



const Students = () => {
    const [students, setStudents] = useState([]);
    const [groups, setGroups] = useState([]);
    const [groupOptions, setGroupOptions] = useState([]);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // Строка поиска
    const [sortConfig, setSortConfig] = useState({ key: 'fullName', direction: "asc" });
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const itemsPerPage = 11;

    useEffect(() => {
        GET_fetchRequest('students', setStudents);
    }, []);

    useEffect(() => {
        GET_fetchRequest('groups', setGroups);
    }, []);

    useEffect(() => {
        setData(students);
        setFilteredData(students);
        setGroupOptions(groups.map((group) => ({
            value: group.fullName,
            label: group.fullName,
        })))
    }, [students, groups]);

    const handleSelectRow = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    const handleDelete = () => {
        selectedRows.map((id) => DELETE_fetchRequest(id, 'students'))

        const updatedData = data.filter((row) => !selectedRows.includes(row.id));
        setData(updatedData);

        const updatedFilteredData = filteredData.filter((row) => !selectedRows.includes(row.id));
        setFilteredData(updatedFilteredData);

        setSelectedRows([]);
    };

    const handleOpenDeleteDialog = () => {
        if (selectedRows.length === 0) {
            alert("Выберите хотя бы одну строку для удаления.");
            return;
        }
        setDeleteDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        handleDelete();
        setDeleteDialogOpen(false);
    };

    const handleOpenModal = (student = null) => {
        setEditingStudent(student);
        setModalOpen(true);
    };

    const handleSaveStudent = (student) => {
        let data

        student.id ?
            data = PUT_fetchRequest(student, 'students')
            :
            data = POST_fetchRequest(student, 'students')

        if (data) {
            if (student.id) {
                setData((prev) =>
                    prev.map((item) => (item.id === student.id ? student : item))
                );
                setFilteredData((prev) =>
                    prev.map((item) => (item.id === student.id ? student : item))
                );
            } else {
                const newStudent = { ...student, id: data.length + 1 };
                setData((prev) => [...prev, newStudent]);
                setFilteredData((prev) => [...prev, newStudent]);
            }
            setModalOpen(false);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === "") {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter(
                    (student) =>
                        student.fullName.toLowerCase().includes(query.toLowerCase()) ||
                        student.recordBookNumber.toLowerCase().includes(query.toLowerCase()) ||
                        student.group.toLowerCase().includes(query.toLowerCase()) ||
                        student.subgroup.toLowerCase().includes(query.toLowerCase()) ||
                        student.login.toLowerCase().includes(query.toLowerCase()) ||
                        student.password.toLowerCase().includes(query.toLowerCase())
                )
            );
        }
    };

    const handleSort = (key) => {
        setSortConfig((prev) => {
            const isSameKey = prev.key === key;
            const direction = isSameKey && prev.direction === "asc" ? "desc" : "asc";
            return { key, direction };
        });
    };

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;
        return [...filteredData].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? 1 : -1;
            }
            return 0;
        });
    }, [filteredData, sortConfig]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return sortedData.slice(startIndex, startIndex + itemsPerPage);
    }, [sortedData, currentPage, itemsPerPage]);

    const handleSelectAll = (checked) => {
        if (checked) {
            setSelectedRows(filteredData.map((row) => row.id));
        } else {
            setSelectedRows([]);
        }
    };

    const columns = [
        { sortable: true, width: '45%', key: "fullName", label: "ФИО", type: "text" },
        { sortable: true, width: '15%', key: "recordBookNumber", label: "Номер зачетки", type: "text" },
        {
            sortable: true, width: '10%', key: "group", label: "Группа", type: "select", options: groupOptions
        },
        {
            sortable: true, width: '10%', key: "subgroup", label: "Подгруппа", type: "select", options: [
                { value: "нет подгруппы", label: "нет подгруппы" },
                { value: "1 подгруппа", label: "1 подгруппа" },
                { value: "2 подгруппа", label: "2 подгруппа" },
            ]
        },
        { sortable: true, width: '10%', key: "login", label: "Логин", type: "text" },
        { sortable: true, width: '10%', key: "password", label: "Пароль", type: "password" },
    ];

    return (
        <>
            <PageHeader onAdd={() => handleOpenModal()} title={'Студенты'} />
            <SearchBar onSearch={handleSearch} value={searchQuery} />
            <DataTable
                data={paginatedData}
                columns={columns}
                onSort={handleSort}
                sortConfig={sortConfig}
                selectedRows={selectedRows}
                onSelectRow={handleSelectRow}
                onEdit={(id) => handleOpenModal(filteredData.find((student) => student.id === id))}
                onSelectAll={handleSelectAll}
            />
            <ActionPanel
                pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                onPageChange={setCurrentPage}
                selectedCount={selectedRows.length}
                onEdit={() => handleOpenModal(filteredData.find((student) => student.id === selectedRows[0]))}
                onDelete={handleOpenDeleteDialog}
            />
            <StudentModal
                columns={columns}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSaveStudent}
                item={editingStudent}
            />
            <DeleteConfirmationDialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleConfirmDelete}
            />

        </>
    );
};

export default Students;
