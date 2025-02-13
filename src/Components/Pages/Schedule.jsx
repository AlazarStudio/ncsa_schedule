import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Select, MenuItem, Typography, Grid, Button, Autocomplete, TextField } from "@mui/material";
import DaySchedule from "./DaySchedule";
import { GET_fetchRequest, POST_fetchRequest_Schedule, PUT_fetchRequest, PUT_fetchRequest_Schedule } from "../../data";
import ViewDaySchedule from "./ViewDaySchedule";

const initialSchedule = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
};

const pairTypes = [
    {
        id: "type1",
        label:
            (isActive) => <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: isActive
                        ? "1px solid white"
                        : "1px solid rgba(129, 33, 45, 0.5)",
                    width: '100%',
                    height: '25px',
                }}>
                    <div style={{ width: '100%', height: '100%' }}></div>
                </div>
            </div>
    },
    {
        id: "type2",
        label:
            (isActive) => <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: isActive
                        ? "1px solid white"
                        : "1px solid rgba(129, 33, 45, 0.5)",
                    width: '100%',
                    height: '25px',
                }}>
                    <div style={{
                        width: '50%', height: '100%', borderRight: isActive
                            ? "1px solid white"
                            : "1px solid rgba(129, 33, 45, 0.5)",
                    }}></div>
                    <div style={{ width: '50%', height: '100%', }}></div>
                </div>
            </div>
    },
    {
        id: "type3",
        label:
            (isActive) => <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: isActive
                        ? "1px solid white"
                        : "1px solid rgba(129, 33, 45, 0.5)",
                    width: '100%',
                    height: '50px',
                }}>
                    <div style={{
                        width: '100%', height: '50%', borderBottom: isActive
                            ? "1px solid white"
                            : "1px solid rgba(129, 33, 45, 0.5)",
                    }}></div>
                    <div style={{ width: '100%', height: '50%', }}></div>
                </div>
            </div>
    },
    {
        id: "type4",
        label:
            (isActive) => <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: isActive
                        ? "1px solid white"
                        : "1px solid rgba(129, 33, 45, 0.5)",
                    width: '100%',
                    height: '50px',
                }}>
                    <div style={{
                        width: '50%', height: '100%', borderRight: isActive
                            ? "1px solid white"
                            : "1px solid rgba(129, 33, 45, 0.5)",
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '100%',
                        }}>
                            <div style={{
                                width: '100%', height: '50%', borderBottom: isActive
                                    ? "1px solid white"
                                    : "1px solid rgba(129, 33, 45, 0.5)",
                            }}></div>
                            <div style={{ width: '100%', height: '50%', }}></div>
                        </div>
                    </div>
                    <div style={{ width: '50%', height: '100%', }}></div>
                </div>
            </div>
    },
    {
        id: "type5",
        label:
            (isActive) => <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: isActive
                        ? "1px solid white"
                        : "1px solid rgba(129, 33, 45, 0.5)",
                    width: '100%',
                    height: '50px',
                }}>
                    <div style={{ width: '50%', height: '100%', }}></div>
                    <div style={{
                        width: '50%', height: '100%', borderLeft: isActive
                            ? "1px solid white"
                            : "1px solid rgba(129, 33, 45, 0.5)",
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '100%',
                        }}>
                            <div style={{
                                width: '100%', height: '50%', borderBottom: isActive
                                    ? "1px solid white"
                                    : "1px solid rgba(129, 33, 45, 0.5)",
                            }}></div>
                            <div style={{ width: '100%', height: '50%', }}></div>
                        </div>
                    </div>
                </div>
            </div>
    },
    {
        id: "type6",
        label:
            (isActive) => <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: isActive
                        ? "1px solid white"
                        : "1px solid rgba(129, 33, 45, 0.5)",
                    width: '100%',
                    height: '50px',
                }}>
                    <div style={{
                        width: '100%', height: '50%', borderBottom: isActive
                            ? "1px solid white"
                            : "1px solid rgba(129, 33, 45, 0.5)",
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}>
                            <div style={{
                                width: '50%', height: '100%', borderRight: isActive
                                    ? "1px solid white"
                                    : "1px solid rgba(129, 33, 45, 0.5)",
                            }}></div>
                            <div style={{ width: '50%', height: '100%', }}></div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '50%', }}></div>
                </div>
            </div>
    },
    {
        id: "type7",
        label:
            (isActive) => <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: isActive
                        ? "1px solid white"
                        : "1px solid rgba(129, 33, 45, 0.5)",
                    width: '100%',
                    height: '50px',
                }}>
                    <div style={{ width: '100%', height: '50%', }}></div>
                    <div style={{
                        width: '100%', height: '50%', borderTop: isActive
                            ? "1px solid white"
                            : "1px solid rgba(129, 33, 45, 0.5)",
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}>
                            <div style={{
                                width: '50%', height: '100%', borderRight: isActive
                                    ? "1px solid white"
                                    : "1px solid rgba(129, 33, 45, 0.5)",
                            }}></div>
                            <div style={{ width: '50%', height: '100%', }}></div>
                        </div>
                    </div>
                </div>
            </div>
    },
    {
        id: "type8",
        label:
            (isActive) => <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: isActive
                        ? "1px solid white"
                        : "1px solid rgba(129, 33, 45, 0.5)",
                    width: '100%',
                    height: '50px',
                }}>
                    <div style={{
                        width: '100%', height: '50%', borderBottom: isActive
                            ? "1px solid white"
                            : "1px solid rgba(129, 33, 45, 0.5)",
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}>
                            <div style={{
                                width: '50%', height: '100%', borderRight: isActive
                                    ? "1px solid white"
                                    : "1px solid rgba(129, 33, 45, 0.5)",
                            }}></div>
                            <div style={{ width: '50%', height: '100%', }}></div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '50%' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}>
                            <div style={{
                                width: '50%', height: '100%', borderRight: isActive
                                    ? "1px solid white"
                                    : "1px solid rgba(129, 33, 45, 0.5)",
                            }}></div>
                            <div style={{ width: '50%', height: '100%', }}></div>
                        </div>
                    </div>
                </div>
            </div>
    },
];

const today = new Date();
const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

function Schedule({ groupSchedules, setGroupSchedules }) {
    const [subjects, setSubjects] = useState([]);
    const [groups, setGroups] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        GET_fetchRequest('subjects', setSubjects);
        GET_fetchRequest('groups', setGroups);
        GET_fetchRequest('teachers', setTeachers);
        GET_fetchRequest('rooms', setRooms);
    }, []);

    const [activeDay, setActiveDay] = useState(dayOfWeek);
    const [selectedGroup, setSelectedGroup] = useState(localStorage.getItem("selectedGroup") || "");
    const [schedule, setSchedule] = useState(initialSchedule);
    const [activePairIndex, setActivePairIndex] = useState(null);


    const [isEditGroup, setIsEditGroup] = useState(false);

    const changeEditGroup = () => {
        setIsEditGroup(!isEditGroup)
    }

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
            // Изменяем только необходимую запись
            const updatedLesson = { ...prev[activeDay][index], [field]: value };
            const updatedDay = [...prev[activeDay]];
            updatedDay[index] = updatedLesson;

            return {
                ...prev,
                [activeDay]: updatedDay
            };
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

    useEffect(() => {
        // Если activePairIndex больше, чем количество занятий, сбросим его
        if (activePairIndex !== null && schedule[activeDay].length <= activePairIndex) {
            setActivePairIndex(null);
        }

        if (!isEditGroup) {
            setActivePairIndex(null);
        }
    }, [schedule, activeDay, activePairIndex, isEditGroup]);


    // Сохранение расписания для текущей группы
    const saveSchedule = () => {
        let data = {
            id: schedule.id,
            group: selectedGroup,
            monday: schedule.monday,
            tuesday: schedule.tuesday,
            wednesday: schedule.wednesday,
            thursday: schedule.thursday,
            friday: schedule.friday,
            saturday: schedule.saturday,
            sunday: schedule.sunday,
        }

        let isExist = groupSchedules[selectedGroup]?.id ? true : false;

        if (isExist) {
            PUT_fetchRequest_Schedule(data, 'group-schedules',)
        } else {
            POST_fetchRequest_Schedule(data, 'group-schedules',)
        }

        if (!selectedGroup) {
            alert("Выберите группу перед сохранением расписания.");
            return;
        }
        // setGroupSchedules((prev) => ({
        //     ...prev,
        //     [selectedGroup]: schedule
        // }));
        alert("Расписание сохранено!");
    };

    // Загрузка расписания при выборе группы
    const handleGroupChange = (group) => {
        setSelectedGroup(group);
        localStorage.setItem("selectedGroup", group);

        if (groupSchedules[group]) {
            setSchedule(groupSchedules[group]);
        } else {
            setSchedule(initialSchedule);
        }

        setActivePairIndex(null);
    };

    useEffect(() => {
        if (selectedGroup && groupSchedules && groupSchedules[selectedGroup]) {
            setSchedule(groupSchedules[selectedGroup]);
        } else {
            setSchedule(initialSchedule);
        }
    }, [selectedGroup, groupSchedules]); // Следим за группой и обновлением списка расписаний
    

    function getWeekNumber(date = new Date()) {
        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const diffInDays = Math.floor((date - startOfYear) / (1000 * 60 * 60 * 24));
        const weekNumber = Math.ceil((diffInDays + startOfYear.getDay() + 1) / 7);
        return weekNumber % 2 === 0 ? 'Знаменатель' : 'Числитель';
    }

    return (
        <Box p={2} sx={{ display: 'flex', gap: '50px' }}>
            {/* Левая панель: расписание */}
            <Box flex={3} >
                {/* Заголовок */}
                <Typography variant="h5" mb={2}>
                    <Box sx={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
                        <div>Расписание</div>
                        <div style={{ fontSize: '16px', display: 'flex', gap: '10px', alignItems: 'center' }}>Текущая неделя: <div style={{ color: '#81212D', fontWeight: '600', ml: '10px' }}>{getWeekNumber()}</div></div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={changeEditGroup}
                            sx={{ whiteSpace: "nowrap" }}
                        >
                            {!isEditGroup ? 'Редактировать' : 'Вернуться к расписанию'}
                        </Button>
                    </Box>
                </Typography>

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
                            return filtered; // Ограничиваем 5 элементами
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
                            <Tab label="Воскресенье" value="sunday" />
                        </Tabs>

                        {/* Кнопка добавить занятие */}
                        {(isEditGroup && selectedGroup) &&
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => addLesson(activeDay)}
                                sx={{ ml: 2, whiteSpace: "nowrap" }}
                            >
                                Добавить занятие
                            </Button>
                        }
                    </Box>
                )}

                {/* Расписание для выбранного дня */}
                {(isEditGroup && selectedGroup) && (
                    <Box mt={2}>
                        <DaySchedule
                            day={activeDay}
                            lessons={schedule[activeDay]}
                            subjects={subjects}
                            rooms={rooms}
                            teachers={teachers}
                            onAddLesson={() => addLesson(activeDay)}
                            onUpdateLesson={updateLesson}
                            activePairIndex={activePairIndex}
                            onPairSelect={setActivePairIndex}
                            onDeleteLesson={deleteLesson}
                        />
                    </Box>
                )}

                {(!isEditGroup && selectedGroup) && (
                    <Box mt={2}>
                        {schedule[activeDay] && schedule[activeDay].length > 0 ? (
                            <ViewDaySchedule lessons={schedule[activeDay]} />
                        ) : (
                            <Typography color="textSecondary">
                                На этот день занятий нет.
                            </Typography>
                        )}
                    </Box>
                )}
            </Box>

            {/* Правая панель: выбор типа пары */}
            {(isEditGroup && selectedGroup) && (
                <Box width={'200px'} pl={'50px'} borderLeft={1} borderColor="grey.300" sx={{
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
                            {pairTypes.map((type) => {
                                const isActive = schedule[activeDay][activePairIndex]?.type === type.id;

                                return (
                                    <Grid item xs={12} key={type.id}>
                                        <Button
                                            onClick={() => updatePairType(type.id)}
                                            fullWidth
                                            style={{
                                                padding: "10px",
                                                backgroundColor: isActive ? "#81212D" : "transparent",
                                                color: isActive ? "#fff" : "#000",
                                                border: "1px solid rgba(129, 33, 45, 0.5)",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            {type.label(isActive)} {/* Передача isActive в label */}
                                        </Button>
                                    </Grid>
                                );
                            })}
                        </Grid>

                    </Box>

                    {selectedGroup && schedule[activeDay] && schedule[activeDay].length > 0 &&
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={saveSchedule}
                            sx={{ marginTop: 6 }}
                        >
                            Сохранить
                        </Button>
                    }
                </Box>
            )}
        </Box>
    );
}

export default Schedule;
