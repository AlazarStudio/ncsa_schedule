import React, { useState } from "react";
import PageHeader from "../Blocks/PageHeader";
import SearchBar from "../Blocks/SearchBar";
import DataTable from "../Blocks/DataTable";
import PaginationComponent from "../Blocks/Pagination";
import ActionPanel from "../Blocks/ActionPanel";
import StudentModal from "../Blocks/StudentModal";

const dummyData = [
    { id: 1, fullName: "Джатдоев Алим Сеит-Алиевич", recordBookNumber: "0525", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Djatdoev", password: "00001111" },
    { id: 2, fullName: "Иванов Иван Иванович", recordBookNumber: "0526", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Ivanov", password: "12345678" }
    // Добавьте остальные записи
];

const Students = () => {
    const [data, setData] = useState(dummyData);
    const [filteredData, setFilteredData] = useState(dummyData)
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // Строка поиска

    const itemsPerPage = 11;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const handleSelectRow = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    const handleDelete = () => {
        setData((prev) => prev.filter((row) => !selectedRows.includes(row.id)));
        setSelectedRows([]);
    };

    const handleOpenModal = (student = null) => {
        setEditingStudent(student);
        setModalOpen(true);
    };

    const handleSelectAll = (checked) => {
        if (checked) {
            setSelectedRows(currentData.map((row) => row.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSaveStudent = (student) => {
        if (student.id) {
            setData((prev) =>
                prev.map((item) => (item.id === student.id ? student : item))
            );
        } else {
            setData((prev) => [
                ...prev,
                { ...student, id: prev.length + 1 },
            ]);
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

    return (
        <>
            <PageHeader onAdd={() => handleOpenModal()} />
            <SearchBar onSearch={handleSearch} value={searchQuery} />
            <DataTable
                data={currentData}
                selectedRows={selectedRows}
                onSelectRow={handleSelectRow}
                onEdit={(id) => handleOpenModal(filteredData.find((student) => student.id === id))}
                onSelectAll={handleSelectAll}
            />
            {/* <PaginationComponent
                pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                onPageChange={setCurrentPage}
            /> */}
            <ActionPanel
                pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                onPageChange={setCurrentPage}
                selectedCount={selectedRows.length}
                onEdit={() => handleOpenModal(filteredData.find((student) => student.id === selectedRows[0]))}
                onDelete={handleDelete}
            />
            <StudentModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSaveStudent}
                student={editingStudent}
            />
        </>
    );
};

export default Students;
