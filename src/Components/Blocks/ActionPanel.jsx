import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ActionPanel = ({ selectedCount, onEdit, onDelete }) => {
    const isEditDisabled = selectedCount !== 1; // Изменить можно только одного студента

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 2,
                padding: 2,
                borderTop: "1px solid #ddd",
            }}
        >
            <Box>
                <Typography>
                    Выбрано: {selectedCount}
                </Typography>
            </Box>
            <Box>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={onEdit}
                    disabled={isEditDisabled} // Блокируем кнопку, если больше одного студента
                    sx={{ marginRight: 1 }}
                >
                    Изменить
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={onDelete}
                    disabled={selectedCount === 0} // Блокируем кнопку, если ничего не выбрано
                >
                    Удалить
                </Button>
            </Box>
        </Box>
    );
};

export default ActionPanel;
