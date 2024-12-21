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

import ViewSchedule from "./Components/Pages/ViewSchedule";
import Subjects from "./Components/Pages/Subjects";


function App() {
  const [groupSchedules, setGroupSchedules] = useState({
    "ПМ-131": {
      "monday": [
        {
          "pairNumber": 1,
          "type": "type2",
          "fields": {
            "subgroup1_subject": "Информатика",
            "subgroup2_subject": "Математика",
            "subgroup1_teacher": "Алексеев Александр Александрович",
            "subgroup2_teacher": "Петров Петр Петрович",
            "subgroup1_room": "247",
            "subgroup2_room": "216",
            "subgroup1_type": "Лекционное занятие",
            "subgroup2_type": "Лекционное занятие"
          }
        },
        {
          "pairNumber": 2,
          "type": "type6",
          "fields": {
            "subgroup1_numerator_subject": "Информатика",
            "subgroup1_numerator_teacher": "Петров Петр Петрович",
            "subgroup1_numerator_room": "216",
            "subgroup1_numerator_type": "Лабораторная работа",
            "subgroup2_numerator_subject": "Математика",
            "subgroup2_numerator_teacher": "Алексеев Александр Александрович",
            "subgroup2_numerator_room": "247",
            "subgroup2_numerator_type": "Лабораторная работа",
            "denominator_subject": "Математика",
            "denominator_teacher": "Петров Петр Петрович",
            "denominator_room": "222",
            "denominator_type": "Лекционное занятие"
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
          "pairNumber": 2,
          "type": "type1",
          "fields": {
            "main_subject": "Математика",
            "main_teacher": "Кузнецов Алексей Андреевич",
            "main_room": "211",
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

  return (
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
  );
}

export default App;
