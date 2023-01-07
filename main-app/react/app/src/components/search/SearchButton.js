import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchButton.css";

function SearchButton({ onSearch }) {
  function handleClick(evt) {
    onSearch();
  }

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className="SearchButton"
      startIcon={<SearchIcon />}
      onClick={handleClick}
    >
      Search
    </Button>
  );
}

export default SearchButton;
