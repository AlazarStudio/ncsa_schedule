import React, { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

function Conflicts({ groupSchedules }) {
    const [conflicts, setConflicts] = useState([]);

    // Логика поиска конфликтов
    useEffect(() => {
        const foundConflicts = [];
        const groups = Object.keys(groupSchedules);

        // Сравнение расписаний между группами
        for (let i = 0; i < groups.length; i++) {
            for (let j = i + 1; j < groups.length; j++) {
                const group1 = groups[i];
                const group2 = groups[j];
                const schedule1 = groupSchedules[group1];
                const schedule2 = groupSchedules[group2];

                // Проверяем каждый день недели
                Object.keys(schedule1).forEach((day) => {
                    const lessons1 = schedule1[day];
                    const lessons2 = schedule2[day];

                    // Проверяем каждую пару
                    lessons1.forEach((lesson1, index1) => {
                        lessons2.forEach((lesson2, index2) => {
                            const conflictingFields = findConflictingFields(lesson1, lesson2);
                            if (conflictingFields.length > 0) {
                                foundConflicts.push({
                                    group1,
                                    group2,
                                    day,
                                    pairNumber1: lesson1.pairNumber,
                                    pairNumber2: lesson2.pairNumber,
                                    conflictingFields
                                });
                            }
                        });
                    });
                });
            }
        }

        setConflicts(foundConflicts);
    }, [groupSchedules]);

    // Функция для нахождения конфликтующих полей
    const findConflictingFields = (lesson1, lesson2) => {
        const fieldsToCheck = ["pairNumber", "fields.teacher", "fields.room", "fields.type"];
        const conflicts = [];

        fieldsToCheck.forEach((field) => {
            const [field1, field2] = field.split(".");
            const value1 = field2 ? lesson1[field1]?.[field2] : lesson1[field1];
            const value2 = field2 ? lesson2[field1]?.[field2] : lesson2[field1];

            if (value1 && value2 && value1 === value2) {
                conflicts.push(field1 + (field2 ? `.${field2}` : ""));
            }
        });

        return conflicts;
    };

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
                                            <Typography variant="body2">
                                                <strong>Поля конфликта:</strong> {conflict.conflictingFields.join(", ")}
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
