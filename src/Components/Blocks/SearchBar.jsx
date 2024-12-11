import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch, value }) => {
    return (
        <Box sx={{ marginBottom: 2 }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Поиск..."
                value={value} // Текущее значение строки поиска
                onChange={(e) => onSearch(e.target.value)} // Вызываем onSearch при изменении
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default SearchBar;
