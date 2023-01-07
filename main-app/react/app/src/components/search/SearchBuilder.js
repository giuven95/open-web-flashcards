import React, { useState } from "react";
import { QueryBuilder } from "react-querybuilder";
import "./SearchBuilder.css";
import DEFAULT_FIELDS from "../../constants/DEFAULT_FIELDS";
import QUERY_BUILDER_OPERATORS from "../../constants/QUERY_BUILDER_OPERATORS";

function SearchBuilder({ query, setQuery }) {
  return (
    <div className="SearchBuilder">
      <p>Choose the query to send to the database.</p>
      <QueryBuilder
        operators={QUERY_BUILDER_OPERATORS}
        fields={DEFAULT_FIELDS}
        query={query}
        onQueryChange={setQuery}
      />
    </div>
  );
}

export default SearchBuilder;
