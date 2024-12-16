import React from "react";
import { Grid, TextField, Select, MenuItem, Typography, Box } from "@mui/material";

const lessonTypes = ["Лекционное занятие", "Практическое занятие", "Лабораторная работа"];

function ScheduleRow({ lesson, index, rooms, teachers, onChange, isActive }) {
    const { pairNumber, type, fields } = lesson;

    // Генерация общего набора полей
    const renderCommonFields = (prefix, label) => (
        <>
            <Grid item xs={3}>
                <TextField
                    label={`Название занятия (${label})`}
                    value={fields[`${prefix}_subject`] || ""}
                    onChange={(e) => onChange(index, "fields", { ...fields, [`${prefix}_subject`]: e.target.value })}
                    fullWidth
                />
            </Grid>
            <Grid item xs={3}>
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
            case "type1": // Обычная пара
                return (
                    <Grid container spacing={2}>
                        {renderCommonFields("main", "Общее")}
                    </Grid>
                );
            case "type2": // Подгруппы
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" mb={2}>Подгруппа 1</Typography>
                            <Grid container spacing={1}>{renderCommonFields("subgroup1", "П1")}</Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" mb={2}>Подгруппа 2</Typography>
                            <Grid container spacing={1}>{renderCommonFields("subgroup2", "П2")}</Grid>
                        </Grid>
                    </Grid>
                );
            case "type3": // Числитель/Знаменатель
                return (
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="subtitle2" mb={2}>Числитель</Typography>
                            <Grid container spacing={1}>{renderCommonFields("numerator", "Числитель")}</Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" mb={2}>Знаменатель</Typography>
                            <Grid container spacing={1}>{renderCommonFields("denominator", "Знаменатель")}</Grid>
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
