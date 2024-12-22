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
  const [groupSchedules, setGroupSchedules] = useState({
    "ПМ-131": {
      "monday": [],
      "tuesday": [],
      "wednesday": [],
      "thursday": [],
      "friday": [],
      "saturday": [],
      "sunday": [
        {
          "pairNumber": 1,
          "type": "type1",
          "fields": {
            "main_subject": "Математика",
            "main_teacher": "Джатдоев Алим Сеит-Алиевич",
            "main_room": "211",
            "main_type": "Лекционное занятие"
          }
        },
        {
          "pairNumber": 2,
          "type": "type2",
          "fields": {
            "subgroup1_subject": "Математика",
            "subgroup1_teacher": "Васильев Дмитрий Сергеевич",
            "subgroup1_room": "247",
            "subgroup1_type": "Лекционное занятие",
            "subgroup2_subject": "Математика",
            "subgroup2_teacher": "Алексеев Александр Александрович",
            "subgroup2_room": "247",
            "subgroup2_type": "Лекционное занятие"
          }
        },
        {
          "pairNumber": 3,
          "type": "type3",
          "fields": {
            "numerator_subject": "Математика",
            "numerator_teacher": "Васильев Дмитрий Сергеевич",
            "numerator_room": "247",
            "numerator_type": "Лекционное занятие",
            "denominator_subject": "Математика",
            "denominator_teacher": "Алексеев Александр Александрович",
            "denominator_room": "247",
            "denominator_type": "Практическое занятие"
          }
        },
        {
          "pairNumber": 4,
          "type": "type4",
          "fields": {
            "subgroup1_numerator_subject": "Математика",
            "subgroup1_numerator_teacher": "Алексеев Александр Александрович",
            "subgroup1_numerator_room": "247",
            "subgroup1_numerator_type": "Лекционное занятие",
            "subgroup1_denominator_subject": "Информатика",
            "subgroup1_denominator_teacher": "Алексеев Александр Александрович",
            "subgroup1_denominator_room": "247",
            "subgroup1_denominator_type": "Лабораторная работа",
            "subgroup2_subject": "Математика",
            "subgroup2_teacher": "Алексеев Александр Александрович",
            "subgroup2_room": "216",
            "subgroup2_type": "Практическое занятие"
          }
        },
        {
          "pairNumber": 5,
          "type": "type5",
          "fields": {
            "subgroup1_subject": "Математика",
            "subgroup1_teacher": "Алексеев Александр Александрович",
            "subgroup1_room": "247",
            "subgroup1_type": "Лабораторная работа",
            "subgroup2_numerator_subject": "Математика",
            "subgroup2_numerator_teacher": "Алексеев Александр Александрович",
            "subgroup2_numerator_room": "247",
            "subgroup2_numerator_type": "Лекционное занятие",
            "subgroup2_denominator_subject": "Математика",
            "subgroup2_denominator_teacher": "Алексеев Александр Александрович",
            "subgroup2_denominator_room": "247",
            "subgroup2_denominator_type": "Практическое занятие"
          }
        },
        {
          "pairNumber": 6,
          "type": "type6",
          "fields": {
            "subgroup1_numerator_subject": "Математика",
            "subgroup1_numerator_teacher": "Морозов Владимир Петрович",
            "subgroup1_numerator_room": "247",
            "subgroup1_numerator_type": "Лекционное занятие",
            "subgroup2_numerator_subject": "Математика",
            "subgroup2_numerator_teacher": "Алексеев Александр Александрович",
            "subgroup2_numerator_room": "218",
            "subgroup2_numerator_type": "Лекционное занятие",
            "denominator_subject": "Математика",
            "denominator_teacher": "Алексеев Александр Александрович",
            "denominator_type": "Практическое занятие",
            "denominator_room": "216"
          }
        },
        {
          "pairNumber": 7,
          "type": "type7",
          "fields": {
            "numerator_subject": "Математика",
            "numerator_teacher": "Алексеев Александр Александрович",
            "numerator_room": "216",
            "numerator_type": "Лекционное занятие",
            "subgroup1_denominator_subject": "Математика",
            "subgroup1_denominator_teacher": "Алексеев Александр Александрович",
            "subgroup1_denominator_room": "247",
            "subgroup1_denominator_type": "Практическое занятие",
            "subgroup2_denominator_subject": "Математика",
            "subgroup2_denominator_teacher": "Алексеев Александр Александрович",
            "subgroup2_denominator_room": "247",
            "subgroup2_denominator_type": "Лабораторная работа"
          }
        },
        {
          "pairNumber": 8,
          "type": "type8",
          "fields": {
            "subgroup1_numerator_subject": "Математика",
            "subgroup1_numerator_teacher": "Морозов Владимир Петрович",
            "subgroup1_numerator_room": "247",
            "subgroup1_numerator_type": "Лекционное занятие",
            "subgroup2_numerator_subject": "Информатика",
            "subgroup2_numerator_teacher": "Алексеев Александр Александрович",
            "subgroup2_numerator_room": "247",
            "subgroup2_numerator_type": "Лекционное занятие",
            "subgroup1_denominator_subject": "Математика",
            "subgroup1_denominator_teacher": "Васильев Дмитрий Сергеевич",
            "subgroup1_denominator_room": "216",
            "subgroup1_denominator_type": "Лабораторная работа",
            "subgroup2_denominator_subject": "Информатика",
            "subgroup2_denominator_teacher": "Алексеев Александр Александрович",
            "subgroup2_denominator_room": "216",
            "subgroup2_denominator_type": "Лабораторная работа"
          }
        }
      ]
    }
  });

  console.log(groupSchedules)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Главная страница */}
        <Route index element={<Schedule groupSchedules={groupSchedules} setGroupSchedules={setGroupSchedules} />} />

        {/* Остальные маршруты */}
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
