import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Paper,
    TableSortLabel,
} from "@mui/material";

const DataTable = ({ data, onSort, sortConfig, onSelectRow, selectedRows, onSelectAll }) => {
    const isAllSelected = data.length > 0 && data.every((row) => selectedRows.includes(row.id));
    const isSomeSelected = data.some((row) => selectedRows.includes(row.id)) && !isAllSelected;

    return (
        <TableContainer component={Paper} sx={{ boxShadow: "none", height: "659px", minHeight: "659px", overflow: 'hidden' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                checked={isAllSelected}
                                indeterminate={isSomeSelected}
                                onChange={(e) => onSelectAll(e.target.checked)}
                            />
                        </TableCell>
                        <TableCell sx={{ padding: "25px 16px" }}>
                            <TableSortLabel
                                active={sortConfig.key === "fullName"}
                                direction={sortConfig.key === "fullName" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("fullName")}
                            >
                                ФИО
                            </TableSortLabel>
                        </TableCell>
                        <TableCell sx={{ padding: "25px 16px" }}>
                            <TableSortLabel
                                active={sortConfig.key === "recordBookNumber"}
                                direction={sortConfig.key === "recordBookNumber" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("recordBookNumber")}
                            >
                                Номер зачетки
                            </TableSortLabel>
                        </TableCell>
                        <TableCell sx={{ padding: "25px 16px" }}>
                            <TableSortLabel
                                active={sortConfig.key === "group"}
                                direction={sortConfig.key === "group" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("group")}
                            >
                                Группа
                            </TableSortLabel>
                        </TableCell>
                        <TableCell sx={{ padding: "25px 16px" }}>
                            <TableSortLabel
                                active={sortConfig.key === "subgroup"}
                                direction={sortConfig.key === "subgroup" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("subgroup")}
                            >
                                Подгруппа
                            </TableSortLabel>
                        </TableCell>
                        <TableCell sx={{ padding: "25px 16px" }}>
                            <TableSortLabel
                                active={sortConfig.key === "login"}
                                direction={sortConfig.key === "login" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("login")}
                            >
                                Логин
                            </TableSortLabel>
                        </TableCell>
                        <TableCell sx={{ padding: "25px 16px" }}>
                            <TableSortLabel
                                active={sortConfig.key === "password"}
                                direction={sortConfig.key === "password" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("password")}
                            >
                                Пароль
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id} selected={selectedRows.includes(row.id)}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedRows.includes(row.id)}
                                    onChange={() => onSelectRow(row.id)}
                                />
                            </TableCell>
                            <TableCell>{row.fullName}</TableCell>
                            <TableCell>{row.recordBookNumber}</TableCell>
                            <TableCell>{row.group}</TableCell>
                            <TableCell>{row.subgroup}</TableCell>
                            <TableCell>{row.login}</TableCell>
                            <TableCell>{row.password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
