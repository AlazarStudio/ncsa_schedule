import React from "react";
import { Grid, TextField, Select, MenuItem, Typography, Box, IconButton, Autocomplete } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const lessonTypes = ["Лекционное занятие", "Практическое занятие", "Лабораторная работа"];

function ScheduleRow({ lesson, index, rooms, teachers, onChange, isActive, onDelete }) {
    const { pairNumber, type, fields } = lesson;

    // Генерация общего набора полей
    const renderCommonFields = (prefix) => (
        <>
            <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
                {/* <Typography variant="subtitle2" mb={1}>Номер</Typography> */}
                <TextField
                    label="№"
                    type="number"
                    value={pairNumber}
                    onChange={(e) => onChange(index, "pairNumber", e.target.value)}
                    fullWidth
                    sx={{
                        "& .MuiInputBase-root": {
                            padding: "0px", // Убираем дополнительные отступы
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
                            transform: "translate(14px, -6px) scale(0.75)", // Позиция для сжатого label
                        },
                        "& .MuiAutocomplete-input": {
                            padding: "12px !important", // Убираем отступы вокруг текста
                        },
                    }}
                />
            </Grid>
            <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
                {/* <Typography variant="subtitle2" mb={1}>Название</Typography> */}
                <TextField
                    label={`Название занятия`}
                    value={fields[`${prefix}_subject`] || ""}
                    onChange={(e) => onChange(index, "fields", { ...fields, [`${prefix}_subject`]: e.target.value })}
                    fullWidth
                    sx={{
                        "& .MuiInputBase-root": {
                            padding: "0px", // Убираем дополнительные отступы
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
                            transform: "translate(14px, -6px) scale(0.75)", // Позиция для сжатого label
                        },
                        "& .MuiAutocomplete-input": {
                            padding: "12px !important", // Убираем отступы вокруг текста
                        },
                    }}
                />
            </Grid>
            <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
                {/* <Typography variant="subtitle2" mb={1}>Преподаватель</Typography> */}
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
                                    padding: "0px", // Убираем дополнительные отступы
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
                                    transform: "translate(14px, -6px) scale(0.75)", // Позиция для сжатого label
                                },
                                "& .MuiAutocomplete-input": {
                                    padding: "12px !important", // Убираем отступы вокруг текста
                                },
                            }} />
                    )}
                />
            </Grid>
            <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
                {/* <Typography variant="subtitle2" mb={1}>Аудитория</Typography> */}
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
                                    padding: "0px", // Убираем дополнительные отступы
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
                                    transform: "translate(14px, -6px) scale(0.75)", // Позиция для сжатого label
                                },
                                "& .MuiAutocomplete-input": {
                                    padding: "12px !important", // Убираем отступы вокруг текста
                                },
                            }} />
                    )}
                />
            </Grid>
            <Grid item sx={{ width: '100%', paddingTop: '10px !important' }}>
                {/* <Typography variant="subtitle2" mb={1}>Тип занятия</Typography> */}
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
                                    padding: "0px", // Убираем дополнительные отступы
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
                                    padding: "12px !important", // Убираем отступы вокруг текста
                                },
                            }} />
                    )}
                />
            </Grid>
        </>
    );

    // Генерация полей для разных типов пар
    const renderFields = () => {
        switch (type) {
            case "type1":
                return (
                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                        <Typography variant="subtitle2" mb={2} fontWeight={600}>Общая</Typography>
                        <Grid container spacing={2}>
                            {renderCommonFields("main")}
                        </Grid>
                    </Box>
                );
            case "type2":
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 1</Typography>
                                <Grid container spacing={1} >{renderCommonFields("subgroup1")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 2</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup2")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type3":
                return (
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2} fontWeight={600}>Числитель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("numerator")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2} fontWeight={600}>Знаменатель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("denominator")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type4":
                return (
                    <Grid container spacing={2} >
                        <Grid item xs={6}>
                            <Box mb={2} sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 1 - Числитель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup1_numerator")}</Grid>
                            </Box>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 1 - Знаменатель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup1_denominator")}</Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={6} >
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 2 - Общая</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup2")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type5":
                return (
                    <Grid container spacing={2} >
                        <Grid item xs={6} >
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 1 - Общая</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup1")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box mb={2} sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 2 - Числитель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup2_numerator")}</Grid>
                            </Box>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 2 - Знаменатель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup2_denominator")}</Grid>
                            </Box>
                        </Grid>

                    </Grid>
                );
            case "type6":
                return (
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                        <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 1 - Числитель</Typography>
                                        <Grid container spacing={1} >{renderCommonFields("subgroup1_numerator")}</Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                        <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 2 - Числитель</Typography>
                                        <Grid container spacing={1}>{renderCommonFields("subgroup2_numerator")}</Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2} fontWeight={600}>Знаменатель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("denominator")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type7":
                return (
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2} fontWeight={600}>Числитель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("numerator")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                        <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 1 - Знаменатель</Typography>
                                        <Grid container spacing={1} >{renderCommonFields("subgroup1_denominator")}</Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                        <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 2 - Знаменатель</Typography>
                                        <Grid container spacing={1}>{renderCommonFields("subgroup2_denominator")}</Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                );
            case "type8":
                return (
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                        <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 1 - Числитель</Typography>
                                        <Grid container spacing={1} >{renderCommonFields("subgroup1_numerator")}</Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                        <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 2 - Числитель</Typography>
                                        <Grid container spacing={1}>{renderCommonFields("subgroup2_numerator")}</Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                        <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 1 - Знаменатель</Typography>
                                        <Grid container spacing={1} >{renderCommonFields("subgroup1_denominator")}</Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '10px', borderRadius: '4px' }}>
                                        <Typography variant="subtitle2" mb={2} fontWeight={600}>Подгруппа 2 - Знаменатель</Typography>
                                        <Grid container spacing={1}>{renderCommonFields("subgroup2_denominator")}</Grid>
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
            p={2}
            mb={2}
            mr={1}
            border={2}
            borderRadius={1}
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
            <Box mt={2}>{renderFields()}</Box>
        </Box>
    );
}

export default ScheduleRow;
