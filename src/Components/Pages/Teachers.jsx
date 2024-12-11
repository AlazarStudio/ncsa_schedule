import React, { useMemo, useState } from "react";
import PageHeader from "../Blocks/PageHeader";
import SearchBar from "../Blocks/SearchBar";
import DataTable from "../Blocks/DataTable";
import ActionPanel from "../Blocks/ActionPanel";
import StudentModal from "../Blocks/StudentModal";
import DeleteConfirmationDialog from "../Blocks/DeleteConfirmationDialog";

const dummyData = [
    { id: 1, fullName: "Джатдоев Алим Сеит-Алиевич", position: "Преподаватель", login: "Djatdoev", password: "00001111" },
    { id: 2, fullName: "Иванов Иван Иванович", position: "Преподаватель", login: "Ivanov", password: "12345678" },
    { id: 3, fullName: "Петров Петр Петрович", position: "Преподаватель", login: "Petrov", password: "abcdef12" },
    { id: 4, fullName: "Сидоров Сидор Сидорович", position: "Преподаватель", login: "Sidorov", password: "00002222" },
    { id: 5, fullName: "Кузнецов Алексей Андреевич", position: "Преподаватель", login: "Kuznetsov", password: "qwerty34" },
    { id: 6, fullName: "Смирнов Андрей Викторович", position: "Преподаватель", login: "Smirnov", password: "pass1234" },
    { id: 7, fullName: "Васильев Дмитрий Сергеевич", position: "Преподаватель", login: "Vasiliev", password: "abcd1234" },
    { id: 8, fullName: "Алексеев Александр Александрович", position: "Преподаватель", login: "Alexeev", password: "4321abcd" },
    { id: 9, fullName: "Морозов Владимир Петрович", position: "Преподаватель", login: "Morozov", password: "zxcvbnm" },
    { id: 10, fullName: "Николаев Никита Игоревич", position: "Преподаватель", login: "Nikolaev", password: "asdfgh12" },
    { id: 11, fullName: "Кравцов Константин Валерьевич", position: "Преподаватель", login: "Kravtsov", password: "09876543" },
    { id: 12, fullName: "Михайлов Михаил Сергеевич", position: "Преподаватель", login: "Mikhailov", password: "11223344" },
    { id: 13, fullName: "Григорьев Григорий Павлович", position: "Преподаватель", login: "Grigoryev", password: "55667788" },
    { id: 14, fullName: "Андреев Андрей Аркадьевич", position: "Преподаватель", login: "Andreev", password: "22334455" },
    { id: 15, fullName: "Максимов Максим Олегович", position: "Преподаватель", login: "Maximov", password: "33445566" },
    { id: 16, fullName: "Федоров Федор Иванович", position: "Преподаватель", login: "Fedorov", password: "44556677" },
    { id: 17, fullName: "Тихонов Тимофей Алексеевич", position: "Преподаватель", login: "Tikhonov", password: "66778899" },
    { id: 18, fullName: "Киселев Кирилл Олегович", position: "Преподаватель", login: "Kiselev", password: "99887766" },
    { id: 19, fullName: "Ильин Илья Викторович", position: "Преподаватель", login: "Ilin", password: "88997766" },
    { id: 20, fullName: "Герасимов Герман Валерьевич", position: "Преподаватель", login: "Gerasimov", password: "77665544" },
    { id: 21, fullName: "Артемов Артем Николаевич", position: "Преподаватель", login: "Artemov", password: "66778844" },
    { id: 22, fullName: "Волков Виталий Степанович", position: "Преподаватель", login: "Volkov", password: "55555555" },
    { id: 23, fullName: "Зайцев Захар Олегович", position: "Преподаватель", login: "Zaytsev", password: "44444444" },
    { id: 24, fullName: "Соловьев Семен Сергеевич", position: "Преподаватель", login: "Solovyev", password: "33333333" },
    { id: 25, fullName: "Павлов Павел Михайлович", position: "Преподаватель", login: "Pavlov", password: "22222222" },
    { id: 26, fullName: "Семенов Сергей Артемович", position: "Преподаватель", login: "Semenov", password: "11111111" },
    { id: 27, fullName: "Егоров Егор Ефимович", position: "Преподаватель", login: "Egorov", password: "01010101" },
    { id: 28, fullName: "Романов Роман Тимурович", position: "Преподаватель", login: "Romanov", password: "02020202" },
    { id: 29, fullName: "Дмитриев Дмитрий Константинович", position: "Преподаватель", login: "Dmitriev", password: "03030303" },
    { id: 30, fullName: "Королев Константин Анатольевич", position: "Преподаватель", login: "Korolev", password: "04040404" },
];

const Teachers = () => {
    const [data, setData] = useState([...dummyData]);
    const [filteredData, setFilteredData] = useState(data)
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // Строка поиска
    const [sortConfig, setSortConfig] = useState({ key: 'fullName', direction: "asc" });
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const itemsPerPage = 11;

    const handleSelectRow = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    const handleDelete = () => {
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
                        student.position.toLowerCase().includes(query.toLowerCase()) ||
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
        { key: "fullName", label: "ФИО", sortable: true, width: '55%' },
        { key: "position", label: "Должность", sortable: true, width: '15%' },
        { key: "login", label: "Логин", sortable: true, width: '15%' },
        { key: "password", label: "Пароль", sortable: true, width: '15%' },
    ];

    return (
        <>
            <PageHeader onAdd={() => handleOpenModal()} title={'Преподаватели'} />
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

export default Teachers;
