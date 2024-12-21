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

import { ConflictsProvider } from "./Components/Context/ConflictsContext";
import ViewSchedule from "./Components/Pages/ViewSchedule";
import Subjects from "./Components/Pages/Subjects";


function App() {
  const [groupSchedules, setGroupSchedules] = useState({});

  return (
    <ConflictsProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Главная страница */}
          <Route index element={<ViewSchedule groupSchedules={groupSchedules} setGroupSchedules={setGroupSchedules} />} />

          {/* Остальные маршруты */}
          <Route path="/view-schedule" element={<ViewSchedule groupSchedules={groupSchedules} />} />
          <Route path="/schedule" element={<Schedule groupSchedules={groupSchedules} setGroupSchedules={setGroupSchedules} />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/conflicts" element={<Conflicts groupSchedules={groupSchedules} />} />

          {/* Страница "не найдено" */}
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
      </Routes>
    </ConflictsProvider>
  );
}

export default App;
