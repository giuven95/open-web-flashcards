import React from "react";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SearchPager({ total, pageSize, currentPage, setPageSize, setPage }) {
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
  };

  return (
    <div className="SearchPager">
      <p>Choose page number and page size.</p>
      <Pagination
        count={Math.ceil(total / pageSize)}
        page={currentPage}
        onChange={handlePageChange}
      />
      <Select value={pageSize} onChange={handlePageSizeChange}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
    </div>
  );
}

export default SearchPager;
