import React, { useState } from "react";
import PageHeader from "../Blocks/PageHeader";
import SearchBar from "../Blocks/SearchBar";
import DataTable from "../Blocks/DataTable";
import PaginationComponent from "../Blocks/Pagination";
import ActionPanel from "../Blocks/ActionPanel";
import StudentModal from "../Blocks/StudentModal";

const dummyData = [
    { id: 1, fullName: "Джатдоев Алим Сеит-Алиевич", recordBookNumber: "0525", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Djatdoev", password: "00001111" },
    // Добавьте остальные записи
];

const Students = () => {
    const [data, setData] = useState(dummyData);
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

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
            // Выбираем все строки
            setSelectedRows(currentData.map((row) => row.id));
        } else {
            // Снимаем выделение со всех
            setSelectedRows([]);
        }
    };

    const handleSaveStudent = (student) => {
        if (student.id) {
            // Изменение существующего студента
            setData((prev) =>
                prev.map((item) => (item.id === student.id ? student : item))
            );
        } else {
            // Добавление нового студента
            setData((prev) => [
                ...prev,
                { ...student, id: prev.length + 1 },
            ]);
        }
    };

    return (
        <>
            <PageHeader onAdd={() => handleOpenModal()} />
            <SearchBar />
            <DataTable
                data={currentData}
                selectedRows={selectedRows}
                onSelectRow={handleSelectRow}
                onEdit={(id) => handleOpenModal(data.find((student) => student.id === id))}
                onSelectAll={handleSelectAll}
            />
            <PaginationComponent
                pageCount={Math.ceil(data.length / itemsPerPage)}
                onPageChange={setCurrentPage}
            />
            <ActionPanel
                selectedCount={selectedRows.length}
                onEdit={() => handleOpenModal(data.find((student) => student.id === selectedRows[0]))}
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
