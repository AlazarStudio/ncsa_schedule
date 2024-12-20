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
                            const fieldsToCheck = ["pairNumber", "subject", "teacher", "room"];
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

        setConflictCount(totalConflicts); // Обновляем количество конфликтов
    };

    return (
        <ConflictsContext.Provider value={{ conflictCount, recalculateConflicts }}>
            {children}
        </ConflictsContext.Provider>
    );
};
