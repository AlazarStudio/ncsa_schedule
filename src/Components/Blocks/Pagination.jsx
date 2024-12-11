import React from "react";
import ReactPaginate from "react-paginate";
import { Box } from "@mui/material";

const PaginationComponent = ({ pageCount, onPageChange }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
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
    );
};

export default PaginationComponent;
