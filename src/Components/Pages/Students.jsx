import React, { useMemo, useState } from "react";
import PageHeader from "../Blocks/PageHeader";
import SearchBar from "../Blocks/SearchBar";
import DataTable from "../Blocks/DataTable";
import PaginationComponent from "../Blocks/Pagination";
import ActionPanel from "../Blocks/ActionPanel";
import StudentModal from "../Blocks/StudentModal";

const dummyData = [
    { id: 1, fullName: "Джатдоев Алим Сеит-Алиевич", recordBookNumber: "0525", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Djatdoev", password: "00001111" },
    { id: 2, fullName: "Иванов Иван Иванович", recordBookNumber: "0526", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Ivanov", password: "12345678" },
    { id: 3, fullName: "Петров Петр Петрович", recordBookNumber: "0527", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Petrov", password: "abcdef12" },
    { id: 4, fullName: "Сидоров Сидор Сидорович", recordBookNumber: "0528", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Sidorov", password: "00002222" },
    { id: 5, fullName: "Кузнецов Алексей Андреевич", recordBookNumber: "0529", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Kuznetsov", password: "qwerty34" },
    { id: 6, fullName: "Смирнов Андрей Викторович", recordBookNumber: "0530", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Smirnov", password: "pass1234" },
    { id: 7, fullName: "Васильев Дмитрий Сергеевич", recordBookNumber: "0531", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Vasiliev", password: "abcd1234" },
    { id: 8, fullName: "Алексеев Александр Александрович", recordBookNumber: "0532", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Alexeev", password: "4321abcd" },
    { id: 9, fullName: "Морозов Владимир Петрович", recordBookNumber: "0533", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Morozov", password: "zxcvbnm" },
    { id: 10, fullName: "Николаев Никита Игоревич", recordBookNumber: "0534", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Nikolaev", password: "asdfgh12" },
    { id: 11, fullName: "Кравцов Константин Валерьевич", recordBookNumber: "0535", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Kravtsov", password: "09876543" },
    { id: 12, fullName: "Михайлов Михаил Сергеевич", recordBookNumber: "0536", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Mikhailov", password: "11223344" },
    { id: 13, fullName: "Григорьев Григорий Павлович", recordBookNumber: "0537", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Grigoryev", password: "55667788" },
    { id: 14, fullName: "Андреев Андрей Аркадьевич", recordBookNumber: "0538", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Andreev", password: "22334455" },
    { id: 15, fullName: "Максимов Максим Олегович", recordBookNumber: "0539", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Maximov", password: "33445566" },
    { id: 16, fullName: "Федоров Федор Иванович", recordBookNumber: "0540", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Fedorov", password: "44556677" },
    { id: 17, fullName: "Тихонов Тимофей Алексеевич", recordBookNumber: "0541", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Tikhonov", password: "66778899" },
    { id: 18, fullName: "Киселев Кирилл Олегович", recordBookNumber: "0542", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Kiselev", password: "99887766" },
    { id: 19, fullName: "Ильин Илья Викторович", recordBookNumber: "0543", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Ilin", password: "88997766" },
    { id: 20, fullName: "Герасимов Герман Валерьевич", recordBookNumber: "0544", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Gerasimov", password: "77665544" },
    { id: 21, fullName: "Артемов Артем Николаевич", recordBookNumber: "0545", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Artemov", password: "66778844" },
    { id: 22, fullName: "Волков Виталий Степанович", recordBookNumber: "0546", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Volkov", password: "55555555" },
    { id: 23, fullName: "Зайцев Захар Олегович", recordBookNumber: "0547", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Zaytsev", password: "44444444" },
    { id: 24, fullName: "Соловьев Семен Сергеевич", recordBookNumber: "0548", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Solovyev", password: "33333333" },
    { id: 25, fullName: "Павлов Павел Михайлович", recordBookNumber: "0549", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Pavlov", password: "22222222" },
    { id: 26, fullName: "Семенов Сергей Артемович", recordBookNumber: "0550", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Semenov", password: "11111111" },
    { id: 27, fullName: "Егоров Егор Ефимович", recordBookNumber: "0551", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Egorov", password: "01010101" },
    { id: 28, fullName: "Романов Роман Тимурович", recordBookNumber: "0552", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Romanov", password: "02020202" },
    { id: 29, fullName: "Дмитриев Дмитрий Константинович", recordBookNumber: "0553", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Dmitriev", password: "03030303" },
    { id: 30, fullName: "Королев Константин Анатольевич", recordBookNumber: "0554", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Korolev", password: "04040404" },
];

const Students = () => {
    const [data, setData] = useState([...dummyData]);
    const [filteredData, setFilteredData] = useState(data)
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // Строка поиска
    const [sortConfig, setSortConfig] = useState({ key: 'fullName', direction: "asc" });

    const itemsPerPage = 11;

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

    const handleSaveStudent = (student) => {
        if (student.id) {
            // Изменение существующего студента
            setData((prev) =>
                prev.map((item) => (item.id === student.id ? student : item))
            );
            setFilteredData((prev) =>
                prev.map((item) => (item.id === student.id ? student : item))
            );
        } else {
            // Добавление нового студента
            const newStudent = { ...student, id: data.length + 1 };
            setData((prev) => [...prev, newStudent]);
            setFilteredData((prev) => [...prev, newStudent]);
        }
        setModalOpen(false); // Закрываем модальное окно
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
            // Выбрать все строки из всего списка (глобально)
            setSelectedRows(filteredData.map((row) => row.id));
        } else {
            // Снять выделение со всех строк
            setSelectedRows([]);
        }
    };

    return (
        <>
            <PageHeader onAdd={() => handleOpenModal()} />
            <SearchBar onSearch={handleSearch} value={searchQuery} />
            <DataTable
                data={paginatedData}
                onSort={handleSort}
                sortConfig={sortConfig}
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
