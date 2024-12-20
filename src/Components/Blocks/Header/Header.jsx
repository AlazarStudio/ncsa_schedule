import React from "react";
import { AppBar, Toolbar, Typography, Button, InputBase, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from "react-router-dom";
import { useConflicts } from "../../Context/ConflictsContext";

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
}));

const ActiveButton = styled(Button)(({ theme }) => ({
    borderBottom: `2px solid #FFFFFF`, // Линия для выделения активной страницы
    borderRadius: 0,
}));

const Header = () => {
    const location = useLocation(); // Получаем текущий URL
    const { conflictCount } = useConflicts(); // Получаем количество конфликтов

    // Определяем, является ли кнопка активной
    const isActive = (path) => location.pathname === path;

    return (
        <AppBar position="static" style={{ backgroundColor: '#81212D' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="h6">
                    <StyledLink to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="/favicon-ncsa.png" // Замените на правильный путь к логотипу
                            alt="Logo"
                            style={{ width: 50, height: 50, marginRight: 16 }}
                        />
                    </StyledLink>
                </Typography>

                {/* Кнопки навигации */}
                <Box>
                    <StyledLink to="/view-schedule">
                        {isActive('/view-schedule') || isActive('/') ? (
                            <ActiveButton color="inherit">Просмотр расписания</ActiveButton>
                        ) : (
                            <Button color="inherit">Просмотр расписания</Button>
                        )}
                    </StyledLink>

                    <StyledLink to="/schedule">
                        {isActive('/schedule') ? (
                            <ActiveButton color="inherit">Расписание</ActiveButton>
                        ) : (
                            <Button color="inherit">Расписание</Button>
                        )}
                    </StyledLink>

                    <StyledLink to="/students">
                        {isActive('/students') ? (
                            <ActiveButton color="inherit">Студенты</ActiveButton>
                        ) : (
                            <Button color="inherit">Студенты</Button>
                        )}
                    </StyledLink>

                    <StyledLink to="/teachers">
                        {isActive('/teachers') ? (
                            <ActiveButton color="inherit">Преподаватели</ActiveButton>
                        ) : (
                            <Button color="inherit">Преподаватели</Button>
                        )}
                    </StyledLink>

                    <StyledLink to="/groups">
                        {isActive('/groups') ? (
                            <ActiveButton color="inherit">Группы</ActiveButton>
                        ) : (
                            <Button color="inherit">Группы</Button>
                        )}
                    </StyledLink>

                    <StyledLink to="/rooms">
                        {isActive('/rooms') ? (
                            <ActiveButton color="inherit">Аудитории</ActiveButton>
                        ) : (
                            <Button color="inherit">Аудитории</Button>
                        )}
                    </StyledLink>

                    <StyledLink to="/conflicts">
                        {isActive('/conflicts') ? (
                            <ActiveButton color="inherit">Cовпадения {conflictCount > 0 && `(${conflictCount})`}</ActiveButton>
                        ) : (
                            <Button color="inherit">Cовпадения {conflictCount > 0 && `(${conflictCount})`}</Button>
                        )}
                    </StyledLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
