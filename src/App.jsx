import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Components/Standart/Layout/Layout";
import Main_Page from "./Components/Pages/Main_Page";
import Non_Found_Page from "./Components/Pages/Non_Found_Page";

// Импортируем компоненты для маршрутов
import Schedule from "./Components/Pages/Schedule";
import Students from "./Components/Pages/Students";
import Teachers from "./Components/Pages/Teachers";
import Groups from "./Components/Pages/Groups";
import Rooms from "./Components/Pages/Rooms";
import Conflicts from "./Components/Pages/Conflicts";

import Subjects from "./Components/Pages/Subjects";


function App() {
    const [groupSchedules, setGroupSchedules] = useState();
    // console.log(groupSchedules)
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Главная страница */}
                <Route index element={<Schedule groupSchedules={groupSchedules} setGroupSchedules={setGroupSchedules} />} />

                {/* Остальные маршруты */}
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/students" element={<Students />} />

                <Route path="/schedule" element={<Schedule groupSchedules={groupSchedules} setGroupSchedules={setGroupSchedules} />} />
                <Route path="/conflicts" element={<Conflicts groupSchedules={groupSchedules} />} />

                {/* Страница "не найдено" */}
                <Route path="*" element={<Non_Found_Page />} />
            </Route>
        </Routes>
    );
}

export default App;
