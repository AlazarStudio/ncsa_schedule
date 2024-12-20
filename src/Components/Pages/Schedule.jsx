import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Select, MenuItem, Typography, Grid, Button, Autocomplete, TextField } from "@mui/material";
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

function Schedule({ groupSchedules, setGroupSchedules }) {
    const [activeDay, setActiveDay] = useState("monday");
    const [selectedGroup, setSelectedGroup] = useState("");
    const [schedule, setSchedule] = useState(initialSchedule);
    const [activePairIndex, setActivePairIndex] = useState(null);

    useEffect(() => {
        const lastGroup = localStorage.getItem("lastSelectedGroup");
        if (lastGroup) {
            setSelectedGroup(lastGroup);
            setSchedule(groupSchedules[lastGroup] || initialSchedule);
        }
    }, [groupSchedules]);

    // Добавление новой пары
    const addLesson = (day) => {
        setSchedule((prev) => {
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

    // Удаление пары по индексу
    const deleteLesson = (index) => {
        setSchedule((prev) => {
            const updatedDay = [...prev[activeDay]];
            updatedDay.splice(index, 1);
            return { ...prev, [activeDay]: updatedDay };
        });
    };

    // Сохранение расписания для текущей группы
    const saveSchedule = () => {
        if (!selectedGroup) {
            alert("Выберите группу перед сохранением расписания.");
            return;
        }
        setGroupSchedules((prev) => ({
            ...prev,
            [selectedGroup]: schedule
        }));
        alert("Расписание сохранено!");
    };

    // Загрузка расписания при выборе группы
    const handleGroupChange = (group) => {
        setSelectedGroup(group);
        setSchedule(groupSchedules[group] || initialSchedule); // Загружаем расписание, если оно есть
        setActivePairIndex(null); // Сбрасываем выбранную пару
        localStorage.setItem("lastSelectedGroup", group); // Сохраняем в localStorage
    };

    return (
        <Box display="flex" p={2}>
            {/* Левая панель: расписание */}
            <Box flex={3} pr={'40px'}>
                {/* Заголовок */}
                <Typography variant="h5" mb={2}>Расписание</Typography>

                {/* Выбор группы */}
                <Box mb={2}>
                    <Autocomplete
                        value={selectedGroup}
                        onChange={(event, newValue) => handleGroupChange(newValue)}
                        options={groups.map((group) => group.fullName)}
                        renderInput={(params) => (
                            <TextField {...params} label="Выберите группу" variant="outlined" fullWidth />
                        )}
                        filterOptions={(options, { inputValue }) => {
                            // Показываем только первые 5 вариантов или фильтруем по вводу
                            const filtered = options.filter((option) =>
                                option.toLowerCase().includes(inputValue.toLowerCase())
                            );
                            return filtered.slice(0, 5); // Ограничиваем 5 элементами
                        }}
                        isOptionEqualToValue={(option, value) => option === value}
                    />
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
