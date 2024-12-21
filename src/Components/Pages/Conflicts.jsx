import React, { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

function Conflicts({ groupSchedules }) {
    const [conflicts, setConflicts] = useState([]);

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

    function extractLessonFields(lesson) {
        const { pairNumber, type, fields } = lesson;
        const result = [];

        const addFields = (prefix) => {
            if (fields[`${prefix}_subject`] || fields[`${prefix}_teacher`] || fields[`${prefix}_room`]) {
                result.push({
                    pairNumber,
                    subject: fields[`${prefix}_subject`] || null,
                    teacher: fields[`${prefix}_teacher`] || null,
                    room: fields[`${prefix}_room`] || null,
                    type: prefix, // Указываем тип (numerator, denominator и т.д.)
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

    const findConflictingFields = (fields1, fields2) => {
        const fieldsToCheck = ["subject", "teacher", "room"];
        const conflicts = [];

        // Если числитель и знаменатель внутри одной пары, это не конфликт
        if (
            (fields1.type.includes("numerator") && fields2.type.includes("denominator")) ||
            (fields1.type.includes("denominator") && fields2.type.includes("numerator"))
        ) {
            return [];
        }

        fieldsToCheck.forEach((field) => {
            const value1 = fields1[field];
            const value2 = fields2[field];

            // Сравниваем только одинаковые значения
            if (value1 && value2 && value1 === value2) {
                conflicts.push({ field, value: value1 });
            }
        });

        // Исключаем конфликты, если совпадает только предмет (но разные преподаватели или аудитории)
        if (
            conflicts.length === 1 &&
            conflicts[0].field === "subject" &&
            (fields1.teacher !== fields2.teacher || fields1.room !== fields2.room)
        ) {
            return [];
        }

        return conflicts;
    };

    const formatPairNumbers = (details1, details2) => {
        const getPairDescription = (details) => {
            if (!details || !details.type) return `${details.pairNumber}`; // Безопасная проверка на наличие prefix

            if (details.type.includes("numerator")) return `${details.pairNumber} (Числитель)`;
            if (details.type.includes("denominator")) return `${details.pairNumber} (Знаменатель)`;
            if (details.type.includes("subgroup1")) return `${details.pairNumber} (Подгруппа 1)`;
            if (details.type.includes("subgroup2")) return `${details.pairNumber} (Подгруппа 2)`;

            return `${details.pairNumber}`; // Возврат только номера пары, если prefix не распознан
        };

        return `${getPairDescription(details1)} и ${getPairDescription(details2)}`;
    };

    useEffect(() => {
        const foundConflicts = [];
        const groups = Object.keys(groupSchedules ?? {});

        groups.forEach((group) => {
            const schedule = groupSchedules[group];

            Object.keys(schedule).forEach((day) => {
                const lessons = schedule[day] || [];

                // Проверка внутри одной группы
                lessons.forEach((lesson) => {
                    const fields = extractLessonFields(lesson);

                    for (let i = 0; i < fields.length; i++) {
                        for (let j = i + 1; j < fields.length; j++) {
                            const conflictingFields = findConflictingFields(fields[i], fields[j]);

                            if (conflictingFields.length > 0) {
                                const conflictId = `${group}-${day}-${fields[i].pairNumber}-${fields[j].pairNumber}-${conflictingFields.map((c) => c.field).join(",")}`;
                                if (!foundConflicts.some((c) => c.id === conflictId)) {
                                    foundConflicts.push({
                                        id: conflictId,
                                        group,
                                        day: daysInRussian[day],
                                        pairNumber1: fields[i].pairNumber,
                                        pairNumber2: fields[j].pairNumber,
                                        conflictingFields,
                                        details1: fields[i],
                                        details2: fields[j],
                                    });
                                }
                            }
                        }
                    }
                });
            });
        });

        // Проверка между группами
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
                            if (lesson1.pairNumber !== lesson2.pairNumber) return; // Только совпадающие пары

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
                                    primary={
                                        conflict.group1 && conflict.group2
                                            ? `Конфликт между группами ${conflict.group1} и ${conflict.group2}`
                                            : `Конфликт в группе ${conflict.group || "неизвестно"}`
                                    }
                                    secondary={
                                        <>
                                            <Typography variant="body2">
                                                <strong>День:</strong> {conflict.day}
                                            </Typography>
                                            <Typography variant="body2">
                                                <strong>Номер пары:</strong> {formatPairNumbers(conflict.details1, conflict.details2)}
                                            </Typography>
                                            <Typography variant="body2">
                                                <strong>Описание:</strong> {conflict.group1 && conflict.group2
                                                    ? `В группе ${conflict.group1} и группе ${conflict.group2} на ${conflict.day} совпадают:`
                                                    : `В группе ${conflict.group || "неизвестно"} на ${conflict.day} совпадают:`}
                                                <ul style={{ paddingLeft: "40px" }}>
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
