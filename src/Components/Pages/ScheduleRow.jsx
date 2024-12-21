import React, { memo } from "react";
import { Grid, TextField, Select, MenuItem, Typography, Box, IconButton, Autocomplete } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const lessonTypes = ["Лекционное занятие", "Практическое занятие", "Лабораторная работа"];

const ScheduleRow = memo(function ScheduleRow({ lesson, index, rooms, subjects, teachers, onChange, isActive, onDelete }) {
    const { pairNumber, type, fields } = lesson;

    // Генерация общего набора полей
    const renderCommonFields = (prefix, type) => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        }}>
            <div style={{ width: '50px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${isActive ? '#81212D' : '#e0e0e0'}` }}>{pairNumber}</div>
            <div style={{ width: 'calc(100% - 50px)', display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
                <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>{type || "Не указана"}</div>
                <Autocomplete
                    options={subjects.map((subject) => subject.fullName)}
                    value={fields[`${prefix}_subject`] || ""}
                    onChange={(e, newValue) =>
                        onChange(index, "fields", { ...fields, [`${prefix}_subject`]: newValue })
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Выберите предмет"
                            variant="outlined"
                            fullWidth
                            sx={{
                                "& .MuiInputBase-root": {
                                    padding: "0px",
                                },
                                "& .MuiInputBase-input": {
                                    padding: "12px",
                                    fontSize: "14px",
                                },
                                "& .MuiInputLabel-root": {
                                    padding: "0px",
                                    fontSize: "14px",
                                    transform: "translate(14px, 12px) scale(1)",
                                },
                                "& .MuiInputLabel-shrink": {
                                    transform: "translate(14px, -6px) scale(0.75)",
                                },
                                "& .MuiAutocomplete-input": {
                                    padding: "12px !important",
                                },
                            }}
                        />
                    )}
                />
                <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
                    <div style={{ width: '50%' }}>
                        <Autocomplete
                            options={teachers.map((teacher) => teacher.fullName)}
                            value={fields[`${prefix}_teacher`] || ""}
                            onChange={(e, newValue) =>
                                onChange(index, "fields", { ...fields, [`${prefix}_teacher`]: newValue })
                            }
                            renderInput={(params) => (
                                <TextField {...params} label="Выберите преподавателя" variant="outlined" fullWidth
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            padding: "0px",
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "12px",
                                            fontSize: "14px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            padding: "0px",
                                            fontSize: "14px",
                                            transform: "translate(14px, 12px) scale(1)",
                                        },
                                        "& .MuiInputLabel-shrink": {
                                            transform: "translate(14px, -6px) scale(0.75)",
                                        },
                                        "& .MuiAutocomplete-input": {
                                            padding: "12px !important",
                                        },
                                    }} />
                            )}
                        />
                    </div>
                    <div style={{ width: '25%' }}>
                        <Autocomplete
                            options={rooms.map((room) => room.fullName)}
                            value={fields[`${prefix}_room`] || ""}
                            onChange={(e, newValue) =>
                                onChange(index, "fields", { ...fields, [`${prefix}_room`]: newValue })
                            }
                            renderInput={(params) => (
                                <TextField {...params} label="Выберите аудиторию" variant="outlined" fullWidth
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            padding: "0px",
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "12px",
                                            fontSize: "14px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            padding: "0px",
                                            fontSize: "14px",
                                            transform: "translate(14px, 12px) scale(1)",
                                        },
                                        "& .MuiInputLabel-shrink": {
                                            transform: "translate(14px, -6px) scale(0.75)",
                                        },
                                        "& .MuiAutocomplete-input": {
                                            padding: "12px !important",
                                        },
                                    }} />
                            )}
                        />
                    </div>
                    <div style={{ width: '25%' }}>
                        <Autocomplete
                            options={lessonTypes}
                            value={fields[`${prefix}_type`] || ""}
                            onChange={(e, newValue) =>
                                onChange(index, "fields", { ...fields, [`${prefix}_type`]: newValue })
                            }
                            renderInput={(params) => (
                                <TextField {...params} label="Выберите тип занятия" variant="outlined" fullWidth
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            padding: "0px",
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "12px",
                                            fontSize: "14px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            padding: "0px",
                                            fontSize: "14px",
                                            transform: "translate(14px, 12px) scale(1)",
                                        },
                                        "& .MuiInputLabel-shrink": {
                                            transform: "translate(14px, -6px) scale(0.75)",
                                        },
                                        "& .MuiAutocomplete-input": {
                                            padding: "12px !important",
                                        },
                                    }} />
                            )}
                        />
                    </div>
                </div>
            </div>
        </div >
    );

    {/* 
        <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
            <TextField
                label="№"
                type="number"
                value={pairNumber}
                onChange={(e) => onChange(index, "pairNumber", e.target.value)}
                fullWidth
                sx={{
                    "& .MuiInputBase-root": {
                        padding: "0px",
                    },
                    "& .MuiInputBase-input": {
                        padding: "12px",
                        fontSize: "14px",
                    },
                    "& .MuiInputLabel-root": {
                        padding: "0px",
                        fontSize: "14px",
                        transform: "translate(14px, 12px) scale(1)",
                    },
                    "& .MuiInputLabel-shrink": {
                        transform: "translate(14px, -6px) scale(0.75)",
                    },
                    "& .MuiAutocomplete-input": {
                        padding: "12px !important",
                    },
                }}
            />
        </Grid>

        <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
            <Autocomplete
                options={subjects.map((subject) => subject.fullName)}
                value={fields[`${prefix}_subject`] || ""}
                onChange={(e, newValue) =>
                    onChange(index, "fields", { ...fields, [`${prefix}_subject`]: newValue })
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Выберите предмет"
                        variant="outlined"
                        fullWidth
                        sx={{
                            "& .MuiInputBase-root": {
                                padding: "0px",
                            },
                            "& .MuiInputBase-input": {
                                padding: "12px",
                                fontSize: "14px",
                            },
                            "& .MuiInputLabel-root": {
                                padding: "0px",
                                fontSize: "14px",
                                transform: "translate(14px, 12px) scale(1)",
                            },
                            "& .MuiInputLabel-shrink": {
                                transform: "translate(14px, -6px) scale(0.75)",
                            },
                            "& .MuiAutocomplete-input": {
                                padding: "12px !important",
                            },
                        }}
                    />
                )}
            />
        </Grid>

        <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
            <Autocomplete
                options={teachers.map((teacher) => teacher.fullName)}
                value={fields[`${prefix}_teacher`] || ""}
                onChange={(e, newValue) =>
                    onChange(index, "fields", { ...fields, [`${prefix}_teacher`]: newValue })
                }
                renderInput={(params) => (
                    <TextField {...params} label="Выберите преподавателя" variant="outlined" fullWidth
                        sx={{
                            "& .MuiInputBase-root": {
                                padding: "0px",
                            },
                            "& .MuiInputBase-input": {
                                padding: "12px",
                                fontSize: "14px",
                            },
                            "& .MuiInputLabel-root": {
                                padding: "0px",
                                fontSize: "14px",
                                transform: "translate(14px, 12px) scale(1)",
                            },
                            "& .MuiInputLabel-shrink": {
                                transform: "translate(14px, -6px) scale(0.75)",
                            },
                            "& .MuiAutocomplete-input": {
                                padding: "12px !important",
                            },
                        }} />
                )}
            />
        </Grid>

        <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
            <Autocomplete
                options={rooms.map((room) => room.fullName)}
                value={fields[`${prefix}_room`] || ""}
                onChange={(e, newValue) =>
                    onChange(index, "fields", { ...fields, [`${prefix}_room`]: newValue })
                }
                renderInput={(params) => (
                    <TextField {...params} label="Выберите аудиторию" variant="outlined" fullWidth
                        sx={{
                            "& .MuiInputBase-root": {
                                padding: "0px",
                            },
                            "& .MuiInputBase-input": {
                                padding: "12px",
                                fontSize: "14px",
                            },
                            "& .MuiInputLabel-root": {
                                padding: "0px",
                                fontSize: "14px",
                                transform: "translate(14px, 12px) scale(1)",
                            },
                            "& .MuiInputLabel-shrink": {
                                transform: "translate(14px, -6px) scale(0.75)",
                            },
                            "& .MuiAutocomplete-input": {
                                padding: "12px !important",
                            },
                        }} />
                )}
            />
        </Grid>

        <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
            <Autocomplete
                options={lessonTypes}
                value={fields[`${prefix}_type`] || ""}
                onChange={(e, newValue) =>
                    onChange(index, "fields", { ...fields, [`${prefix}_type`]: newValue })
                }
                renderInput={(params) => (
                    <TextField {...params} label="Выберите тип занятия" variant="outlined" fullWidth
                        sx={{
                            "& .MuiInputBase-root": {
                                padding: "0px",
                            },
                            "& .MuiInputBase-input": {
                                padding: "12px",
                                fontSize: "14px",
                            },
                            "& .MuiInputLabel-root": {
                                padding: "0px",
                                fontSize: "14px",
                                transform: "translate(14px, 12px) scale(1)",
                            },
                            "& .MuiInputLabel-shrink": {
                                transform: "translate(14px, -6px) scale(0.75)",
                            },
                            "& .MuiAutocomplete-input": {
                                padding: "12px !important",
                            },
                        }} />
                )}
            />
        </Grid>  
    */}

    // Генерация полей для разных типов пар
    const renderFields = () => {
        switch (type) {
            case "type1":
                return (
                    <Box>
                        <Grid container spacing={2} sx={{ marginTop: '16px', marginLeft: '0px', width: '100%' }}>
                            {renderCommonFields("main", 'Общая')}
                        </Grid>
                    </Box>
                );
            case "type2":
                return (
                    <Grid container spacing={2} sx={{ m: '0px', width: '100%', height: '100%' }}>
                        <Grid item xs={6} sx={{ paddingLeft: '0px !important' }}>
                            <Box>
                                <Grid container spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup1", "Подгруппа 1")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{ paddingLeft: '0px !important' }}>
                            <Box borderLeft={1} borderColor={isActive ? "primary.main" : "grey.300"}>
                                <Grid container spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup2", "Подгруппа 2")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type3":
                return (
                    <Grid container spacing={2} direction="column" sx={{ m: '0', width: '100%', height: '100%' }}>
                        <Grid item sx={{ padding: '0px !important' }}>
                            <Box>
                                <Grid container spacing={1} sx={{ p: '0', m: '0', mt: '15px', width: '100%', height: '100%' }}>{renderCommonFields("numerator", "Числитель")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item sx={{ padding: '0px !important' }}>
                            <Box borderTop={1} borderColor={isActive ? "primary.main" : "grey.300"}>
                                <Grid container spacing={1} sx={{ p: '0', m: '0', width: '100%', height: '100%' }}>{renderCommonFields("denominator", "Знаменатель")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type4":
                return (
                    <Grid container spacing={2} sx={{ m: '0', width: '100%', height: '100%' }}>
                        <Grid item xs={6} sx={{ padding: '0px !important' }}>
                            <Box>
                                <Grid container spacing={1} sx={{ p: '0', m: '0', mt: '15px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup1_numerator", "Подгруппа 1 - Числитель")}</Grid>
                            </Box>
                            <Box >
                                <Grid container borderTop={1} borderColor={isActive ? "primary.main" : "grey.300"} spacing={1} sx={{ p: '0', m: '0', width: '100%', height: '100%' }}>{renderCommonFields("subgroup1_denominator", "Подгруппа 1 - Знаменатель")}</Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={6} sx={{ padding: '0px !important' }}>
                            <Box sx={{ height: 'calc(100% - 15px)' }}>
                                <Grid container spacing={1} borderLeft={1} borderColor={isActive ? "primary.main" : "grey.300"} sx={{ p: '0', m: '0', mt: '15px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup2", "Подгруппа 2 - Общая")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type5":
                return (
                    <Grid container spacing={2} sx={{ m: '0', width: '100%', height: '100%' }}>
                        <Grid item xs={6} sx={{ padding: '0px !important' }}>
                            <Box sx={{ height: 'calc(100% - 15px)' }}>
                                <Grid container spacing={1} borderRight={1} borderColor={isActive ? "primary.main" : "grey.300"} sx={{ p: '0', m: '0', mt: '15px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup1", "Подгруппа 1 - Общая")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{ padding: '0px !important' }}>
                            <Box >
                                <Grid container spacing={1} sx={{ p: '0', m: '0', mt: '15px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup2_numerator", "Подгруппа 2 - Числитель")}</Grid>
                            </Box>
                            <Box>
                                <Grid container borderTop={1} borderColor={isActive ? "primary.main" : "grey.300"} spacing={1} sx={{ p: '0', m: '0', width: '100%', height: '100%' }}>{renderCommonFields("subgroup2_denominator", "Подгруппа 2 - Знаменатель")}</Grid>
                            </Box>
                        </Grid>

                    </Grid>
                );
            case "type6":
                return (
                    <Grid container spacing={2} direction="column" sx={{ m: '0', width: '100%', height: '100%' }}>
                        <Grid item sx={{ padding: '0px !important' }}>
                            <Grid container spacing={2} sx={{ m: '0px', width: '100%', height: '100%' }}>
                                <Grid item xs={6} sx={{ paddingLeft: '0px !important' }}>
                                    <Box >
                                        <Grid container spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup1_numerator", "Подгруппа 1 - Числитель")}</Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sx={{ paddingLeft: '0px !important' }}>
                                    <Box borderLeft={1} borderColor={isActive ? "primary.main" : "grey.300"}>
                                        <Grid container spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup2_numerator", "Подгруппа 2 - Числитель")}</Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ padding: '0px !important' }}>
                            <Box>
                                <Grid container borderTop={1} borderColor={isActive ? "primary.main" : "grey.300"} spacing={1} sx={{ p: '0', m: '0', width: '100%', height: '100%' }}>{renderCommonFields("denominator", "Знаменатель")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type7":
                return (
                    <Grid container spacing={2} direction="column" sx={{ m: '0', mt: '15px', width: '100%', height: '100%' }}>
                        <Grid item sx={{ padding: '0px !important' }}>
                            <Box>
                                <Grid container borderBottom={1} borderColor={isActive ? "primary.main" : "grey.300"} spacing={1} sx={{ p: '0', m: '0', width: '100%', height: '100%' }}>{renderCommonFields("numerator", "Числитель")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item sx={{ padding: '0px !important' }}>
                            <Grid container spacing={2} sx={{ m: '0px', width: '100%', height: '100%' }}>
                                <Grid item xs={6} sx={{ padding: '0px !important' }}>
                                    <Box>
                                        <Grid container spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup1_denominator", "Подгруппа 1 - Знаменатель")}</Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sx={{ padding: '0px !important' }}>
                                    <Box borderLeft={1} borderColor={isActive ? "primary.main" : "grey.300"}>
                                        <Grid container spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup2_denominator", "Подгруппа 2 - Знаменатель")}</Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                );
            case "type8":
                return (
                    <Grid container spacing={2} direction="column" sx={{ m: '0', width: '100%', height: '100%' }}>
                        <Grid item sx={{ padding: '0px !important' }}>
                            <Grid container spacing={2} sx={{ m: '0px', width: '100%', height: '100%' }}>
                                <Grid item xs={6} sx={{ paddingLeft: '0px !important' }}>
                                    <Box >
                                        <Grid container borderBottom={1} borderColor={isActive ? "primary.main" : "grey.300"} spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup1_numerator", "Подгруппа 1 - Числитель")}</Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sx={{ paddingLeft: '0px !important' }}>
                                    <Box borderLeft={1} borderColor={isActive ? "primary.main" : "grey.300"}>
                                        <Grid container borderBottom={1} borderColor={isActive ? "primary.main" : "grey.300"} spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup2_numerator", "Подгруппа 2 - Числитель")}</Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ padding: '0px !important' }}>
                            <Grid container spacing={2} sx={{ m: '0px', width: '100%', height: '100%' }}>
                                <Grid item xs={6} sx={{ padding: '0px !important' }}>
                                    <Box>
                                        <Grid container spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup1_denominator", "Подгруппа 1 - Знаменатель")}</Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sx={{ padding: '0px !important' }}>
                                    <Box borderLeft={1} borderColor={isActive ? "primary.main" : "grey.300"}>
                                        <Grid container spacing={1} sx={{ m: '0px', width: '100%', height: '100%' }}>{renderCommonFields("subgroup2_denominator", "Подгруппа 2 - Знаменатель")}</Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                );
            default:
                return <Typography variant="body2" color="textSecondary">Неизвестный тип пары</Typography>;
        }
    };

    return (
        <Box
            border={1}
            borderRadius="12px"
            borderColor={isActive ? "primary.main" : "grey.300"}
            sx={{ position: "relative" }}
        >
            {/* Номер пары и тип */}
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={1} sx={{ position: "absolute", top: 0, right: 15 }}>
                    <IconButton color="error" onClick={onDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>

            {/* Поля ввода */}
            <Box> {renderFields()}</Box>
        </Box >
    );
})

export default ScheduleRow;
