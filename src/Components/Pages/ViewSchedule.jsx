import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography, Autocomplete, TextField } from "@mui/material";
import ViewDaySchedule from "./ViewDaySchedule";
import { groups } from "../../data";

const ViewSchedule = ({ groupSchedules }) => {
    const lastGroup = localStorage.getItem("lastSelectedGroup");

    const [activeDay, setActiveDay] = useState("monday");
    const [selectedGroup, setSelectedGroup] = useState(lastGroup);
    const [schedule, setSchedule] = useState({});


    useEffect(() => {
        if (selectedGroup) {
            setSchedule(groupSchedules[selectedGroup] || {});
        }
    }, [selectedGroup, groupSchedules]);

    return (
        <Box p={2}>
            {/* Заголовок */}
            <Typography variant="h5" mb={2}>Просмотр расписания</Typography>

            {/* Выбор группы */}
            <Box mb={2}>
                <Autocomplete
                    value={selectedGroup}
                    onChange={(event, newValue) => setSelectedGroup(newValue)}
                    options={groups.map((group) => group.fullName)}
                    renderInput={(params) => (
                        <TextField {...params} label="Выберите группу" variant="outlined" />
                    )}
                    fullWidth
                />
            </Box>

            {/* Tabs для дней недели */}
            {selectedGroup && (
                <>
                    <Tabs
                        value={activeDay}
                        onChange={(e, newValue) => setActiveDay(newValue)}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Понедельник" value="monday" />
                        <Tab label="Вторник" value="tuesday" />
                        <Tab label="Среда" value="wednesday" />
                        <Tab label="Четверг" value="thursday" />
                        <Tab label="Пятница" value="friday" />
                        <Tab label="Суббота" value="saturday" />
                    </Tabs>

                    {/* Расписание для выбранного дня */}
                    <Box mt={2}>
                        {schedule[activeDay] && schedule[activeDay].length > 0 ? (
                            <ViewDaySchedule lessons={schedule[activeDay]} />
                        ) : (
                            <Typography color="textSecondary">
                                На этот день занятий нет.
                            </Typography>
                        )}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ViewSchedule;
