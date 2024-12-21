import React, { createContext, useContext, useState } from "react";

const ConflictsContext = createContext();

export const useConflicts = () => useContext(ConflictsContext);

export const ConflictsProvider = ({ children }) => {
    const [conflictCount, setConflictCount] = useState(0);

    const recalculateConflicts = (groupSchedules) => {
        const groups = Object.keys(groupSchedules);
        let totalConflicts = 0;

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

                            const fieldsToCheck = ["subject", "teacher", "room"];
                            let hasConflict = false;

                            fieldsToCheck.forEach((field) => {
                                const value1 = lesson1[field];
                                const value2 = lesson2[field];
                                if (value1 && value2 && value1 === value2) {
                                    hasConflict = true;
                                }
                            });

                            if (hasConflict) {
                                totalConflicts++;
                            }
                        });
                    });
                });
            }
        }

        // Проверка внутри одной группы
        groups.forEach((group) => {
            const schedule = groupSchedules[group];

            Object.keys(schedule).forEach((day) => {
                const lessons = schedule[day] || [];

                lessons.forEach((lesson) => {
                    const { pairNumber, type, fields } = lesson;
                    const extractedFields = [];

                    const addFields = (prefix) => {
                        if (fields[`${prefix}_subject`] || fields[`${prefix}_teacher`] || fields[`${prefix}_room`]) {
                            extractedFields.push({
                                pairNumber,
                                subject: fields[`${prefix}_subject`],
                                teacher: fields[`${prefix}_teacher`],
                                room: fields[`${prefix}_room`],
                                type: prefix,
                            });
                        }
                    };

                    // Обрабатываем типы расписания
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

                    for (let i = 0; i < extractedFields.length; i++) {
                        for (let j = i + 1; j < extractedFields.length; j++) {
                            const field1 = extractedFields[i];
                            const field2 = extractedFields[j];

                            // Пропускаем совпадения числителя и знаменателя
                            if (
                                (field1.type.includes("numerator") && field2.type.includes("denominator")) ||
                                (field1.type.includes("denominator") && field2.type.includes("numerator"))
                            ) {
                                continue;
                            }

                            const fieldsToCheck = ["subject", "teacher", "room"];
                            let hasConflict = false;

                            fieldsToCheck.forEach((field) => {
                                if (field1[field] && field2[field] && field1[field] === field2[field]) {
                                    hasConflict = true;
                                }
                            });

                            if (hasConflict) {
                                totalConflicts++;
                            }
                        }
                    }
                });
            });
        });

        setConflictCount(totalConflicts); // Обновляем количество конфликтов
    };

    return (
        <ConflictsContext.Provider value={{ conflictCount, recalculateConflicts }}>
            {children}
        </ConflictsContext.Provider>
    );
};
