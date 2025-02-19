import React from "react";
import { Box, Button } from "@mui/material";
import ScheduleRow from "./ScheduleRow";

function DaySchedule({ day, lessons, rooms, teachers, subjects, onAddLesson, onUpdateLesson, activePairIndex, onPairSelect, onDeleteLesson }) {
    return (
        <Box sx={{
            maxHeight: '620px',
            overflow: 'hidden',
            overflowY: 'scroll'
        }}>
            {lessons.map((lesson, index) => (
                <Box key={index} onClick={() => onPairSelect(index)} sx={{ cursor: "pointer" }}>
                    <ScheduleRow
                        index={index}
                        lesson={lesson}
                        rooms={rooms}
                        teachers={teachers}
                        subjects={subjects}
                        onChange={onUpdateLesson} // Передаём функцию обновления
                        isActive={activePairIndex === index}
                        onDelete={() => onDeleteLesson(index)}
                    />
                </Box>
            ))}
        </Box>
    );
}

export default DaySchedule;
