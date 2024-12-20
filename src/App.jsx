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
  const [groupSchedules, setGroupSchedules] = useState(
    {
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
          },
          {
            "pairNumber": 3,
            "type": "type3",
            "fields": {
              "numerator_subject": "gwergergwer",
              "numerator_teacher": "Иванов Иван Иванович",
              "numerator_room": "211",
              "numerator_type": "Практическое занятие",
              "denominator_subject": "ewrt54rq34efg134fg234213",
              "denominator_teacher": "Алексеев Александр Александрович",
              "denominator_room": "216",
              "denominator_type": "Лабораторная работа"
            }
          },
          {
            "pairNumber": 4,
            "type": "type4",
            "fields": {
              "subgroup1_numerator_subject": "423525345",
              "subgroup1_numerator_teacher": "Джатдоев Алим Сеит-Алиевич",
              "subgroup1_numerator_room": "211",
              "subgroup1_numerator_type": "Лекционное занятие",
              "subgroup1_denominator_subject": "324523462346wefgw",
              "subgroup1_denominator_teacher": "Кузнецов Алексей Андреевич",
              "subgroup1_denominator_room": "216",
              "subgroup1_denominator_type": "Практическое занятие",
              "subgroup2_subject": "2345234563245",
              "subgroup2_teacher": "Смирнов Андрей Викторович",
              "subgroup2_room": "218",
              "subgroup2_type": "Практическое занятие"
            }
          },
          {
            "pairNumber": 5,
            "type": "type5",
            "fields": {
              "subgroup1_subject": "1243",
              "subgroup1_teacher": "Сидоров Сидор Сидорович",
              "subgroup1_room": "247",
              "subgroup1_type": "Лекционное занятие",
              "subgroup2_numerator_subject": "124",
              "subgroup2_numerator_teacher": "Иванов Иван Иванович",
              "subgroup2_numerator_type": "Лекционное занятие",
              "subgroup2_numerator_room": "233",
              "subgroup2_denominator_subject": "124142142",
              "subgroup2_denominator_teacher": "Сидоров Сидор Сидорович",
              "subgroup2_denominator_room": "214",
              "subgroup2_denominator_type": "Лекционное занятие"
            }
          },
          {
            "pairNumber": 6,
            "type": "type6",
            "fields": {
              "subgroup1_numerator_subject": "1242354125",
              "subgroup1_numerator_teacher": "Сидоров Сидор Сидорович",
              "subgroup1_numerator_room": "216",
              "subgroup1_numerator_type": "Лабораторная работа",
              "subgroup2_numerator_subject": "423562346346234",
              "subgroup2_numerator_teacher": "Иванов Иван Иванович",
              "subgroup2_numerator_room": "233",
              "subgroup2_numerator_type": "Практическое занятие",
              "denominator_subject": "2346243326",
              "denominator_teacher": "Алексеев Александр Александрович",
              "denominator_room": "247",
              "denominator_type": "Практическое занятие"
            }
          },
          {
            "pairNumber": 7,
            "type": "type7",
            "fields": {
              "numerator_subject": "1",
              "numerator_teacher": "Джатдоев Алим Сеит-Алиевич",
              "numerator_room": "222",
              "numerator_type": "Практическое занятие",
              "subgroup1_denominator_subject": "23",
              "subgroup1_denominator_teacher": "Алексеев Александр Александрович",
              "subgroup1_denominator_room": "216",
              "subgroup1_denominator_type": "Практическое занятие",
              "subgroup2_denominator_subject": "5467327",
              "subgroup2_denominator_teacher": "Алексеев Александр Александрович",
              "subgroup2_denominator_room": "247",
              "subgroup2_denominator_type": "Лабораторная работа"
            }
          },
          {
            "pairNumber": 8,
            "type": "type8",
            "fields": {
              "subgroup1_numerator_subject": "123525",
              "subgroup2_numerator_subject": "1235123513251235",
              "subgroup1_denominator_subject": "12351253235",
              "subgroup2_denominator_subject": "125312351232",
              "subgroup1_numerator_teacher": "Петров Петр Петрович",
              "subgroup1_numerator_room": "222",
              "subgroup1_numerator_type": "Практическое занятие",
              "subgroup2_numerator_teacher": "Иванов Иван Иванович",
              "subgroup2_numerator_room": "233",
              "subgroup2_numerator_type": "Лабораторная работа",
              "subgroup1_denominator_teacher": "Алексеев Александр Александрович",
              "subgroup1_denominator_room": "233",
              "subgroup1_denominator_type": "Лекционное занятие",
              "subgroup2_denominator_teacher": "Алексеев Александр Александрович",
              "subgroup2_denominator_room": "247",
              "subgroup2_denominator_type": "Лабораторная работа"
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
    }
  );
  return (
    <ConflictsProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Главная страница */}
          <Route index element={<ViewSchedule groupSchedules={groupSchedules} setGroupSchedules={setGroupSchedules} />} />

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
