import React, { useState } from "react";
import DeckSearch from "../components/deck/DeckSearch";
import "./AnkiDeckSearch.css";

function AnkiDeckSearch() {
  return (
    <div className="AnkiDeckSearch AppPage">
      <h2>Search Anki decks</h2>
      <DeckSearch />
    </div>
  );
}

export default AnkiDeckSearch;
