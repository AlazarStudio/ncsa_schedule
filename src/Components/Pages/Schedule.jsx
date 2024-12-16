import React, { useState } from "react";
import { Box, Tabs, Tab, Select, MenuItem, Typography, Grid, Button } from "@mui/material";
import DaySchedule from "./DaySchedule";
import { rooms, teachers, groups } from "../../data";

const initialSchedule = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
};

const pairTypes = [
    { id: "type1", label: "Тип 1" },
    { id: "type2", label: "Тип 2" },
    { id: "type3", label: "Тип 3" },
    { id: "type4", label: "Тип 4" },
    { id: "type5", label: "Тип 5" },
    { id: "type6", label: "Тип 6" },
    { id: "type7", label: "Тип 7" },
    { id: "type8", label: "Тип 8" }
];

function Schedule() {
    const [activeDay, setActiveDay] = useState("monday");
    const [selectedGroup, setSelectedGroup] = useState("");
    const [schedule, setSchedule] = useState(initialSchedule);
    const [activePairIndex, setActivePairIndex] = useState(null);

    // Добавление новой пары
    const addLesson = (day) => {
        setSchedule((prev) => {
            // Находим максимальный pairNumber в текущем дне
            const currentLessons = prev[day];
            const maxPairNumber = currentLessons.reduce(
                (max, lesson) => Math.max(max, Number(lesson.pairNumber || 0)),
                0
            );

            return {
                ...prev,
                [day]: [
                    ...currentLessons,
                    { pairNumber: maxPairNumber + 1, type: "type1", fields: {} }
                ]
            };
        });
    };


    // Обновление данных пары
    const updateLesson = (index, field, value) => {
        setSchedule((prev) => {
            const updatedDay = [...prev[activeDay]];
            updatedDay[index] = { ...updatedDay[index], [field]: value };
            return { ...prev, [activeDay]: updatedDay };
        });
    };

    // Обновление типа пары
    const updatePairType = (type) => {
        if (activePairIndex !== null) {
            updateLesson(activePairIndex, "type", type);
        }
    };

    // Сохранение расписания
    const saveSchedule = () => {
        const result = {
            group: selectedGroup,
            schedule
        };
        console.log("Сохранённое расписание:", result);
        alert("Расписание сохранено! Проверьте консоль для подробностей.");
    };

    // Удаление пары по индексу
    const deleteLesson = (index) => {
        setSchedule((prev) => {
            const updatedDay = [...prev[activeDay]];
            updatedDay.splice(index, 1); // Удаляем элемент по индексу
            return { ...prev, [activeDay]: updatedDay };
        });
    };

    return (
        <Box display="flex" p={2}>
            {/* Левая панель: расписание */}
            <Box flex={3} pr={'40px'}>
                {/* Заголовок */}
                <Typography variant="h5" mb={2}>Расписание</Typography>

                {/* Выбор группы */}
                <Box mb={2}>
                    <Select
                        value={selectedGroup}
                        onChange={(e) => setSelectedGroup(e.target.value)}
                        displayEmpty
                        fullWidth
                    >
                        <MenuItem value="" disabled>Выберите группу</MenuItem>
                        {groups.map((group) => (
                            <MenuItem key={group.id} value={group.fullName}>
                                {group.fullName}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>

                {/* Tabs для дней недели */}
                {selectedGroup && (
                    <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                        <Tabs
                            value={activeDay}
                            onChange={(e, newValue) => {
                                setActiveDay(newValue);
                                setActivePairIndex(null);
                            }}
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

                        {/* Кнопка добавить занятие */}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => addLesson(activeDay)}
                            sx={{ ml: 2, whiteSpace: "nowrap" }}
                        >
                            Добавить занятие
                        </Button>
                    </Box>
                )}


                {/* Расписание для выбранного дня */}
                {selectedGroup && (
                    <>
                        <Box mt={2}>
                            <DaySchedule
                                day={activeDay}
                                lessons={schedule[activeDay]}
                                rooms={rooms}
                                teachers={teachers}
                                onAddLesson={() => addLesson(activeDay)}
                                onUpdateLesson={updateLesson}
                                activePairIndex={activePairIndex}
                                onPairSelect={setActivePairIndex}
                                onDeleteLesson={deleteLesson}
                            />
                        </Box>
                    </>
                )}
            </Box>

            {/* Правая панель: выбор типа пары */}
            {selectedGroup && (
                <Box width={'200px'} pl={'40px'} borderLeft={1} borderColor="grey.300" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100vh - 136px)',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <Typography variant="subtitle1" mb={2} sx={{ textAlign: 'center' }}>
                            Выберите тип:
                        </Typography>
                        <Grid container spacing={1}>
                            {pairTypes.map((type) => (
                                <Grid item xs={12} key={type.id}>
                                    <Button
                                        variant={
                                            schedule[activeDay][activePairIndex]?.type === type.id
                                                ? "contained"
                                                : "outlined"
                                        }
                                        onClick={() => updatePairType(type.id)}
                                        fullWidth
                                    >
                                        {type.label}
                                        {/* <img src={`/${type.id}.png`} alt="" /> */}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={saveSchedule}
                        sx={{ marginTop: 6 }}
                    >
                        Сохранить
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default Schedule;
