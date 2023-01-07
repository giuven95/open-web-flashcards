import React from "react";
import Deck from "./Deck";
import "./DeckList.css";

function DeckList({ decks, defaultViewFields, selectedViewFieldNames }) {
  return (
    <div className="DeckList">
      {decks.map((deck) => (
        <Deck
          key={deck.id}
          deck={deck}
          defaultViewFields={defaultViewFields}
          selectedViewFieldNames={selectedViewFieldNames}
        />
      ))}
    </div>
  );
}

export default DeckList;
