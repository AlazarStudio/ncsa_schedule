import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Paper,
} from "@mui/material";

const DataTable = ({ data, onSelectRow, selectedRows, onSelectAll }) => {
    const isAllSelected = data.length > 0 && selectedRows.length === data.length; // Все строки выбраны
    const isSomeSelected = selectedRows.length > 0 && selectedRows.length < data.length; // Частично выбраны

    return (
        <TableContainer component={Paper} sx={{ boxShadow: 'none', minHeight: '662px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                checked={isAllSelected} // Отмечен, если выбраны все строки
                                indeterminate={isSomeSelected} // Отмечен частично
                                onChange={(e) => onSelectAll(e.target.checked)} // Выбор всех строк
                            />
                        </TableCell>
                        <TableCell>ФИО</TableCell>
                        <TableCell>Номер зачетки</TableCell>
                        <TableCell>Группа</TableCell>
                        <TableCell>Подгруппа</TableCell>
                        <TableCell>Логин</TableCell>
                        <TableCell>Пароль</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            selected={selectedRows.includes(row.id)}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedRows.includes(row.id)}
                                    onChange={() => onSelectRow(row.id)}
                                />
                            </TableCell>
                            <TableCell sx={{ padding: '17px 16px' }}>{row.fullName}</TableCell>
                            <TableCell sx={{ padding: '17px 16px' }}>{row.recordBookNumber}</TableCell>
                            <TableCell sx={{ padding: '17px 16px' }}>{row.group}</TableCell>
                            <TableCell sx={{ padding: '17px 16px' }}>{row.subgroup}</TableCell>
                            <TableCell sx={{ padding: '17px 16px' }}>{row.login}</TableCell>
                            <TableCell sx={{ padding: '17px 16px' }}>{row.password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
