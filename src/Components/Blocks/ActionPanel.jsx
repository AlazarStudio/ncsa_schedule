import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ReactPaginate from "react-paginate";

const ActionPanel = ({ selectedCount, onEdit, onDelete, pageCount, onPageChange }) => {
    const isEditDisabled = selectedCount !== 1;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: '20px'
            }}
        >
            <Box
                sx={{
                    width: '30%',
                }}
            >
                <Typography>
                    Выбрано: {selectedCount}
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: '30%',
                }}
            >
                <ReactPaginate
                    previousLabel={"←"}
                    nextLabel={"→"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={(event) => onPageChange(event.selected + 1)} // event.selected – индекс страницы (начинается с 0)
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </Box>

            <Box
                sx={{
                    width: '30%',
                    display: 'flex',
                    justifyContent: "flex-end",
                    alignItems: "center"
                }}
            >
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
