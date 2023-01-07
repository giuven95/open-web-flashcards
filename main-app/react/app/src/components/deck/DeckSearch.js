import React, { useEffect, useState } from "react";
import SearchBuilder from "../search/SearchBuilder";
import DeckList from "./DeckList";
import DeckTable from "./DeckTable";
import useUIStore from "../../hooks/useUIStore";
import { Tabs, Tab } from "@mui/material";
import DEFAULT_DECKS from "../../constants/DEFAULT_DECKS";
import DECK_API_URL from "../../constants/DECK_API_URL";
import SearchPager from "../search/SearchPager";
import DEFAULT_DECK_VIEW_FIELDS from "../../constants/DEFAULT_DECK_VIEW_FIELDS";
import SearchViewFieldFilter from "../search/SearchViewFieldFilter";
import SearchButton from "../search/SearchButton";
import DEFAULT_DECK_PAGE_SIZE from "../../constants/DEFAULT_DECK_PAGE_SIZE";
import DEFAULT_DECK_PAGE_NUMBER from "../../constants/DEFAULT_DECK_PAGE_NUMBER";
import DEFAULT_INITIAL_SEARCH_QUERY from "../../constants/DEFAULT_INITIAL_SEARCH_QUERY";
import objectEquals from "../../functions/objectEquals";

function DeckSearch() {
  const tab = useUIStore((state) => state.searchTab);
  const setTab = useUIStore((state) => state.setSearchTab);
  const [query, setQuery] = useState(DEFAULT_INITIAL_SEARCH_QUERY);
  const [decks, setDecks] = useState(DEFAULT_DECKS);
  const [page, setPage] = useState(DEFAULT_DECK_PAGE_NUMBER);
  const [pageSize, setPageSize] = useState(DEFAULT_DECK_PAGE_SIZE);
  const [selectedViewFieldNames, setSelectedViewFieldNames] = useState(
    DEFAULT_DECK_VIEW_FIELDS.map((f) => f.name)
  );

  const handleSearch = () => {
    if (
      query === {} ||
      objectEquals(query, DEFAULT_INITIAL_SEARCH_QUERY) ||
      query === null ||
      query === undefined
    )
      fetchDecks();
    else queryDecks();
  };

  const fetchDecks = async () => {
    const response = await fetch(
      DECK_API_URL + "/deck?page=" + page + "&pageSize=" + pageSize
    );
    const data = await response.json();
    setDecks(data);
  };

  const queryDecks = async () => {
    const obj = { query: query, page: page, pageSize: pageSize };
    const response = await fetch(DECK_API_URL + "/deck/query", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setDecks(data);
  };

  useEffect(handleSearch, [page, pageSize]);

  return (
    <div className="DeckSearch">
      <SearchBuilder query={query} setQuery={setQuery} />
      <SearchViewFieldFilter
        defaultViewFields={DEFAULT_DECK_VIEW_FIELDS}
        selectedViewFieldNames={selectedViewFieldNames}
        setSelectedViewFieldNames={setSelectedViewFieldNames}
      />
      <SearchButton onSearch={handleSearch} />
      <Tabs
        value={tab}
        onChange={(event, newValue) => setTab(newValue)}
        aria-label="tabs"
      >
        <Tab label="List view" value="list" />
        <Tab label="Table view" value="table" />
      </Tabs>
      {tab === "list" ? (
        <DeckList
          defaultViewFields={DEFAULT_DECK_VIEW_FIELDS}
          selectedViewFieldNames={selectedViewFieldNames}
          decks={decks}
        />
      ) : (
        <DeckTable
          defaultViewFields={DEFAULT_DECK_VIEW_FIELDS}
          selectedViewFieldNames={selectedViewFieldNames}
          decks={decks}
        />
      )}
      <SearchPager
        currentPage={page}
        pageSize={pageSize}
        setPage={setPage}
        setPageSize={setPageSize}
      />
    </div>
  );
}

export default DeckSearch;
