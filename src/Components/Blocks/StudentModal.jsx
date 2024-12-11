import React, { useState, useEffect } from "react";
import {
    Modal,
    Box,
    TextField,
    Button,
    Typography,
    MenuItem,
} from "@mui/material";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

const StudentModal = ({ open, onClose, onSave, student }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        recordBookNumber: "",
        group: "",
        subgroup: "",
        login: "",
        password: "",
    });

    useEffect(() => {
        if (student) {
            setFormData(student);
        } else {
            setFormData({
                fullName: "",
                recordBookNumber: "",
                group: "",
                subgroup: "",
                login: "",
                password: "",
            });
        }
    }, [student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6" component="h2" mb={2}>
                    {student ? "Изменить студента" : "Добавить студента"}
                </Typography>
                <TextField
                    fullWidth
                    label="ФИО"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Номер зачетки"
                    name="recordBookNumber"
                    value={formData.recordBookNumber}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Группа"
                    name="group"
                    value={formData.group}
                    onChange={handleChange}
                    margin="normal"
                    select
                >
                    <MenuItem value="ПМИ 161">ПМИ 161</MenuItem>
                    <MenuItem value="ПМИ 162">ПМИ 162</MenuItem>
                </TextField>
                <TextField
                    fullWidth
                    label="Подгруппа"
                    name="subgroup"
                    value={formData.subgroup}
                    onChange={handleChange}
                    margin="normal"
                    select
                >
                    <MenuItem value="1 подгруппа">1 подгруппа</MenuItem>
                    <MenuItem value="2 подгруппа">2 подгруппа</MenuItem>
                </TextField>
                <TextField
                    fullWidth
                    label="Логин"
                    name="login"
                    value={formData.login}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Пароль"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                />
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button variant="outlined" onClick={onClose}>
                        Закрыть
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Сохранить
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default StudentModal;
