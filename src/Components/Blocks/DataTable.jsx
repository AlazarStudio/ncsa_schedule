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
    TableSortLabel,
} from "@mui/material";

const DataTable = ({
    data,
    onSort,
    sortConfig,
    selectedRows,
    onSelectRow,
    onSelectAll,
    columns, // Новые пропсы
}) => {
    const isAllSelected = data.length > 0 && data.every((row) => selectedRows.includes(row.id));
    const isSomeSelected = data.some((row) => selectedRows.includes(row.id)) && !isAllSelected;

    return (
        <TableContainer component={Paper} sx={{ boxShadow: "none", height: "659px", minHeight: "659px", overflow: "hidden" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {/* Чекбокс для выбора всех строк */}
                        <TableCell padding="checkbox">
                            <Checkbox
                                checked={isAllSelected}
                                indeterminate={isSomeSelected}
                                onChange={(e) => onSelectAll(e.target.checked)}
                            />
                        </TableCell>
                        {/* Динамические заголовки */}
                        {columns.map((column) => (
                            <TableCell key={column.key} sx={{ padding: "25px 16px", width: column.width, fontWeight: '600' }}>
                                {column.sortable ? (
                                    <TableSortLabel
                                        active={sortConfig.key === column.key}
                                        direction={sortConfig.key === column.key ? sortConfig.direction : "asc"}
                                        onClick={() => onSort(column.key)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                ) : (
                                    column.label
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Динамические строки */}
                    {data.map((row) => (
                        <TableRow key={row.id} selected={selectedRows.includes(row.id)}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedRows.includes(row.id)}
                                    onChange={() => onSelectRow(row.id)}
                                />
                            </TableCell>
                            {columns.map((column) => (
                                <TableCell key={column.key}>{row[column.key]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
