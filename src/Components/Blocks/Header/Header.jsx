import React from "react";
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from "react-router-dom";

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

    // Определяем, является ли кнопка активной
    const isActive = (path) => location.pathname === path;

    return (
        <AppBar position="static" style={{ backgroundColor: '#81212D' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <StyledLink to="/">
                        <img
                            src="/favicon-ncsa.png" // Замените на правильный путь к логотипу
                            alt="Logo"
                            style={{ width: 50, height: 50, marginRight: 16 }}
                        />
                    </StyledLink>
                </Typography>

                {/* Кнопки навигации */}
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
                        <ActiveButton color="inherit">Найти совпадения</ActiveButton>
                    ) : (
                        <Button color="inherit">Найти совпадения</Button>
                    )}
                </StyledLink>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
