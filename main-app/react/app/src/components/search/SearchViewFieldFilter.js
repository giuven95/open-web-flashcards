import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SearchViewFieldFilter.css";

function SearchViewFieldFilter({
  defaultViewFields,
  selectedViewFieldNames,
  setSelectedViewFieldNames,
}) {
  const handleChange = (event) => {
    const fieldName = event.target.value;
    const newSelectedViewFields = selectedViewFieldNames.includes(fieldName)
      ? selectedViewFieldNames.filter((f) => f !== fieldName)
      : [...selectedViewFieldNames, fieldName];
    setSelectedViewFieldNames(newSelectedViewFields);
  };

  return (
    <div className="SearchViewFieldFilter">
      <p>Choose what fields to include in the view.</p>
      {defaultViewFields.map((field) => (
        <FormControlLabel
          key={field.name}
          control={
            <Checkbox
              key={field.name}
              checked={selectedViewFieldNames.includes(field.name)}
              onChange={handleChange}
              value={field.name}
            />
          }
          label={field.name}
        />
      ))}
    </div>
  );
}

export default SearchViewFieldFilter;
