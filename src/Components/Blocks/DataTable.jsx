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
        <TableContainer component={Paper} sx={{ boxShadow: "none", height: "662px", minHeight: "662px", overflow: 'hidden' }}>
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
                        <TableCell>
                            <TableSortLabel
                                active={sortConfig.key === "fullName"}
                                direction={sortConfig.key === "fullName" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("fullName")}
                            >
                                ФИО
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortConfig.key === "recordBookNumber"}
                                direction={sortConfig.key === "recordBookNumber" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("recordBookNumber")}
                            >
                                Номер зачетки
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortConfig.key === "group"}
                                direction={sortConfig.key === "group" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("group")}
                            >
                                Группа
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortConfig.key === "subgroup"}
                                direction={sortConfig.key === "subgroup" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("subgroup")}
                            >
                                Подгруппа
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortConfig.key === "login"}
                                direction={sortConfig.key === "login" ? sortConfig.direction : "asc"}
                                onClick={() => onSort("login")}
                            >
                                Логин
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
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
                            <TableCell sx={{ padding: "17px 16px" }}>{row.fullName}</TableCell>
                            <TableCell sx={{ padding: "17px 16px" }}>{row.recordBookNumber}</TableCell>
                            <TableCell sx={{ padding: "17px 16px" }}>{row.group}</TableCell>
                            <TableCell sx={{ padding: "17px 16px" }}>{row.subgroup}</TableCell>
                            <TableCell sx={{ padding: "17px 16px" }}>{row.login}</TableCell>
                            <TableCell sx={{ padding: "17px 16px" }}>{row.password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
