import React, { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import { useConflicts } from "../Context/ConflictsContext";

function Conflicts({ groupSchedules }) {
    const [conflicts, setConflicts] = useState([]);
    const { recalculateConflicts } = useConflicts();

    useEffect(() => {
        recalculateConflicts(groupSchedules); // Пересчитываем конфликты
    }, [groupSchedules, recalculateConflicts]);

    const daysInRussian = {
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Суббота",
        sunday: "Воскресенье",
    };

    const fieldNamesInRussian = {
        pairNumber: "Номер пары",
        subject: "Название занятия",
        teacher: "Преподаватель",
        room: "Аудитория",
    };

    // Функция для извлечения полей из урока
    function extractLessonFields(lesson) {
        const { pairNumber, type, fields } = lesson;
        const result = [];

        const addFields = (prefix) => {
            if (fields[`${prefix}_subject`] || fields[`${prefix}_teacher`] || fields[`${prefix}_room`]) {
                result.push({
                    pairNumber,
                    subject: fields[`${prefix}_subject`],
                    teacher: fields[`${prefix}_teacher`],
                    room: fields[`${prefix}_room`],
                    prefix,
                });
            }
        };

        switch (type) {
            case "type1":
                addFields("main");
                break;
            case "type2":
                addFields("subgroup1");
                addFields("subgroup2");
                break;
            case "type3":
                addFields("numerator");
                addFields("denominator");
                break;
            case "type4":
                addFields("subgroup1_numerator");
                addFields("subgroup1_denominator");
                addFields("subgroup2");
                break;
            case "type5":
                addFields("subgroup1");
                addFields("subgroup2_numerator");
                addFields("subgroup2_denominator");
                break;
            case "type6":
                addFields("subgroup1_numerator");
                addFields("subgroup2_numerator");
                addFields("denominator");
                break;
            case "type7":
                addFields("numerator");
                addFields("subgroup1_denominator");
                addFields("subgroup2_denominator");
                break;
            case "type8":
                addFields("subgroup1_numerator");
                addFields("subgroup2_numerator");
                addFields("subgroup1_denominator");
                addFields("subgroup2_denominator");
                break;
            default:
                break;
        }

        return result;
    }

    // Функция для нахождения конфликтующих полей
    const findConflictingFields = (fields1, fields2) => {
        const fieldsToCheck = ["pairNumber", "subject", "teacher", "room"]; // Убрали "type"
        const conflicts = [];

        fieldsToCheck.forEach((field) => {
            const value1 = fields1[field];
            const value2 = fields2[field];

            if (value1 && value2 && value1 === value2) {
                conflicts.push({ field, value: value1 });
            }
        });

        // Исключаем конфликты, где совпадает только "Номер пары"
        if (conflicts.length === 1 && conflicts.some((c) => c.field === "pairNumber")) {
            return [];
        }

        return conflicts;
    };

    // Логика поиска конфликтов
    useEffect(() => {
        const foundConflicts = [];
        const groups = Object.keys(groupSchedules);

        for (let i = 0; i < groups.length; i++) {
            for (let j = i + 1; j < groups.length; j++) {
                const group1 = groups[i];
                const group2 = groups[j];
                const schedule1 = groupSchedules[group1];
                const schedule2 = groupSchedules[group2];

                Object.keys(schedule1).forEach((day) => {
                    const lessons1 = schedule1[day] || [];
                    const lessons2 = schedule2[day] || [];

                    lessons1.forEach((lesson1) => {
                        lessons2.forEach((lesson2) => {
                            const fields1 = extractLessonFields(lesson1);
                            const fields2 = extractLessonFields(lesson2);

                            fields1.forEach((fieldSet1) => {
                                fields2.forEach((fieldSet2) => {
                                    const conflictingFields = findConflictingFields(fieldSet1, fieldSet2);

                                    if (conflictingFields.length > 0) {
                                        const conflictId = `${group1}-${group2}-${day}-${fieldSet1.pairNumber}-${conflictingFields.map((c) => c.field).join(",")}`;
                                        if (!foundConflicts.some((c) => c.id === conflictId)) {
                                            foundConflicts.push({
                                                id: conflictId,
                                                group1,
                                                group2,
                                                day: daysInRussian[day],
                                                pairNumber1: fieldSet1.pairNumber,
                                                pairNumber2: fieldSet2.pairNumber,
                                                conflictingFields,
                                                details1: fieldSet1,
                                                details2: fieldSet2,
                                            });
                                        }
                                    }
                                });
                            });
                        });
                    });
                });
            }
        }

        setConflicts(foundConflicts);
    }, [groupSchedules]);

    return (
        <Box>
            <Typography variant="h5" mb={3}>Совпадения</Typography>
            {conflicts.length === 0 ? (
                <Typography color="green">Совпадений не найдено!</Typography>
            ) : (
                <List>
                    {conflicts.map((conflict, index) => (
                        <React.Fragment key={index}>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={`Конфликт между группами ${conflict.group1} и ${conflict.group2}`}
                                    secondary={
                                        <>
                                            <Typography variant="body2">
                                                <strong>День:</strong> {conflict.day}
                                            </Typography>
                                            <Typography variant="body2">
                                                <strong>Номер пары:</strong> {conflict.pairNumber1} (Группа {conflict.group1}), {conflict.pairNumber2} (Группа {conflict.group2})
                                            </Typography>
                                            {/* <Typography variant="body2">
                                                <strong>Совпадающие поля:</strong>
                                                <ul>
                                                    {conflict.conflictingFields.map((conflictField, idx) => (
                                                        <li key={idx}>
                                                            {fieldNamesInRussian[conflictField.field]}: {conflictField.value}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Typography> */}
                                            <Typography variant="body2">
                                                <strong>Описание:</strong> В группе {conflict.group1} и группе {conflict.group2} на {conflict.day} совпадают:
                                                <ul style={{ paddingLeft: '40px' }}>
                                                    {conflict.conflictingFields.map((conflictField, idx) => (
                                                        <li key={idx}>
                                                            {fieldNamesInRussian[conflictField.field]} — {conflictField.value}.
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            )}
        </Box>
    );
}

export default Conflicts;
