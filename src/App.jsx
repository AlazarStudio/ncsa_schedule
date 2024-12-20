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


function App() {
  const [groupSchedules, setGroupSchedules] = useState({
    "ПМ-131": {
      "monday": [
        {
          "pairNumber": 1,
          "type": "type1",
          "fields": {
            "main_subject": "ДВС: Высокоуровневые методы информатики и программирования",
            "main_teacher": "Башиева Асият Сеитовна",
            "main_room": "228",
            "main_type": "Лекционное занятие"
          }
        },
        {
          "pairNumber": 2,
          "type": "type2",
          "fields": {
            "subgroup1_subject": "Визуальные среды",
            "subgroup1_teacher": "Кузнецов Алексей Андреевич",
            "subgroup1_room": "216",
            "subgroup1_type": "Лабораторная работа",
            "subgroup2_subject": "Численные методы",
            "subgroup2_teacher": "Васильев Дмитрий Сергеевич",
            "subgroup2_room": "247",
            "subgroup2_type": "Лекционное занятие"
          }
        }
      ],
      "tuesday": [],
      "wednesday": [],
      "thursday": [],
      "friday": [],
      "saturday": []
    },
    "ПМ-132": {
      "monday": [
        {
          "pairNumber": 1,
          "type": "type1",
          "fields": {
            "main_subject": "ДВС: Высокоуровневые методы информатики и программирования",
            "main_teacher": "Башиева Асият Сеитовна",
            "main_room": "228",
            "main_type": "Лекционное занятие"
          }
        }
      ],
      "tuesday": [],
      "wednesday": [],
      "thursday": [],
      "friday": [],
      "saturday": []
    }
  });
  console.log(groupSchedules)
  return (
    <ConflictsProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Главная страница */}
          <Route index element={<Schedule groupSchedules={groupSchedules} setGroupSchedules={setGroupSchedules} />} />

          {/* Остальные маршруты */}
          <Route path="/schedule" element={<Schedule groupSchedules={groupSchedules} setGroupSchedules={setGroupSchedules} />} />
          <Route path="/view-schedule" element={<ViewSchedule groupSchedules={groupSchedules} />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/conflicts" element={<Conflicts groupSchedules={groupSchedules} />} />

          {/* Страница "не найдено" */}
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
      </Routes>
    </ConflictsProvider>
  );
}

export default App;
