import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
}));

const Header = () => {
    // Стилизация для поиска и кнопок
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#f5f5f5',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#81212D',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
            color: '#000000',
        },
    }));

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

                <StyledLink to="/schedule">
                    <Button color="inherit">Расписание</Button>
                </StyledLink>
                <StyledLink to="/students">
                    <Button color="inherit">Студенты</Button>
                </StyledLink>
                <StyledLink to="/teachers">
                    <Button color="inherit">Преподаватели</Button>
                </StyledLink>
                <StyledLink to="/groups">
                    <Button color="inherit">Группы</Button>
                </StyledLink>
                <StyledLink to="/rooms">
                    <Button color="inherit">Аудитории</Button>
                </StyledLink>
                <StyledLink to="/conflicts">
                    <Button color="inherit">Найти совпадения</Button>
                </StyledLink>

                {/* Поиск */}
                <Search sx={{ marginLeft: '30px' }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Поиск…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
