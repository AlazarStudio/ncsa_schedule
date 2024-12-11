import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";

const PageHeader = ({ onAdd, title }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2,
            }}
        >
            <Typography variant="h5">{title}</Typography>
            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    // sx={{ marginRight: 1 }}
                    onClick={onAdd} // Вызываем обработчик при клике
                >
                    Добавить студента
                </Button>
                {/* <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<PrintIcon />}
                >
                    Печать
                </Button> */}
            </Box>
        </Box>
    );
};

export default PageHeader;
