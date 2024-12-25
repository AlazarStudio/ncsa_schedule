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

const StudentModal = ({ open, onClose, onSave, item, columns, type }) => {
    const [formData, setFormData] = useState({});

    // Инициализация формы
    useEffect(() => {
        if (item) {
            setFormData(item); // Если редактируем, подгружаем данные
        } else {
            // Если создаём новый элемент, заполняем пустые значения
            const emptyForm = columns.reduce((acc, column) => {
                acc[column.key] = "";
                return acc;
            }, {});
            setFormData(emptyForm);
        }
    }, [item, columns]);

    // Обработка изменений в полях формы
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value, type: type }));
    };

    // Сохранение формы
    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose} disableScrollLock={true}>
            <Box sx={modalStyle}>
                <Typography variant="h6" component="h2" mb={2}>
                    {item ? "Редактировать запись" : "Добавить запись"}
                </Typography>
                {columns.map((column) => (
                    <Box key={column.key} mb={2}>
                        {column.type === "select" ? (
                            <TextField
                                fullWidth
                                select
                                label={column.label}
                                name={column.key}
                                value={formData[column.key] || ""}
                                onChange={handleChange}
                            >
                                {column.options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        ) : (
                            <TextField
                                fullWidth
                                label={column.label}
                                name={column.key}
                                value={formData[column.key] || ""}
                                onChange={handleChange}
                                type={column.type || "text"}
                            />
                        )}
                    </Box>
                ))}
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
