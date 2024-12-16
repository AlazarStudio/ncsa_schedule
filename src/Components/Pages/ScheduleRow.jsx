import React from "react";
import { Grid, TextField, Select, MenuItem, Typography, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const lessonTypes = ["Лекционное занятие", "Практическое занятие", "Лабораторная работа"];

function ScheduleRow({ lesson, index, rooms, teachers, onChange, isActive, onDelete }) {
    const { pairNumber, type, fields } = lesson;

    // Генерация общего набора полей
    const renderCommonFields = (prefix) => (
        <>
            <Grid item xs={3}>
                <Typography variant="subtitle2" mb={1}>Название занятия</Typography>
                <TextField
                    label={`Название занятия`}
                    value={fields[`${prefix}_subject`] || ""}
                    onChange={(e) => onChange(index, "fields", { ...fields, [`${prefix}_subject`]: e.target.value })}
                    fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <Typography variant="subtitle2" mb={1}>Преподаватель</Typography>
                <Select
                    value={fields[`${prefix}_teacher`] || ""}
                    onChange={(e) => onChange(index, "fields", { ...fields, [`${prefix}_teacher`]: e.target.value })}
                    displayEmpty
                    fullWidth
                >
                    <MenuItem value="" disabled>Выберите преподавателя</MenuItem>
                    {teachers.map((teacher) => (
                        <MenuItem key={teacher.id} value={teacher.fullName}>
                            {teacher.fullName}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="subtitle2" mb={1}>Аудитория</Typography>
                <Select
                    value={fields[`${prefix}_room`] || ""}
                    onChange={(e) => onChange(index, "fields", { ...fields, [`${prefix}_room`]: e.target.value })}
                    displayEmpty
                    fullWidth
                >
                    <MenuItem value="" disabled>Выберите аудиторию</MenuItem>
                    {rooms.map((room) => (
                        <MenuItem key={room.id} value={room.fullName}>
                            {room.fullName}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="subtitle2" mb={1}>Тип занятия</Typography>
                <Select
                    value={fields[`${prefix}_type`] || ""}
                    onChange={(e) => onChange(index, "fields", { ...fields, [`${prefix}_type`]: e.target.value })}
                    displayEmpty
                    fullWidth
                >
                    <MenuItem value="" disabled>Выберите тип занятия</MenuItem>
                    {lessonTypes.map((type, i) => (
                        <MenuItem key={i} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        </>
    );

    // Генерация полей для разных типов пар
    const renderFields = () => {
        switch (type) {
            case "type1":
                return (
                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px' }}>
                        <Grid container spacing={2}>
                            {renderCommonFields("main")}
                        </Grid>
                    </Box>
                );
            case "type2":
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2}>Подгруппа 1</Typography>
                                <Grid container spacing={1} >{renderCommonFields("subgroup1")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2}>Подгруппа 2</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup2")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type3":
                return (
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2}>Числитель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("numerator")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px' }}>
                                <Typography variant="subtitle2" mb={2}>Знаменатель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("denominator")}</Grid>
                            </Box>
                        </Grid>
                    </Grid>
                );
            case "type4":
                return (
                    <Grid container spacing={2} >
                        <Grid item xs={6}>
                            <Box mb={2} sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 1 - Числитель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup1_numerator")}</Grid>
                            </Box>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 1 - Знаменатель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup1_denominator")}</Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={6} >
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px', height: '100%' }}>
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
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px', height: '100%' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 1 - Общая</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup1")}</Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box mb={2} sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 2 - Числитель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup2_numerator")}</Grid>
                            </Box>
                            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', padding: '15px', borderRadius: '4px' }}>
                                <Typography variant="body2" mb={2} fontWeight={600}>Подгруппа 2 - Знаменатель</Typography>
                                <Grid container spacing={1}>{renderCommonFields("subgroup2_denominator")}</Grid>
                            </Box>
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
            border={2}
            borderRadius={1}
            borderColor={isActive ? "primary.main" : "grey.300"}
            sx={{ position: "relative" }}
        >
            {/* Номер пары и тип */}
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                    <TextField
                        label="№ пары"
                        type="number"
                        value={pairNumber}
                        onChange={(e) => onChange(index, "pairNumber", e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={1} sx={{ position: "absolute", top: -8, right: 8 }}>
                    <IconButton color="error" onClick={onDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
                {/* <Grid item xs={10}>
                    <Typography variant="subtitle2">
                        Текущий тип пары: {type}
                    </Typography>
                </Grid> */}
            </Grid>

            {/* Поля ввода */}
            <Box mt={2}>{renderFields()}</Box>
        </Box>
    );
}

export default ScheduleRow;
