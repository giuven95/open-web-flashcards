import React, { useState } from "react";
import "./Deck.css";

function Deck({ deck, defaultViewFields, selectedViewFieldNames }) {
  function helper(deck, field) {
    return deck[field.key] === null ||
      deck[field.key] === undefined ||
      (Array.isArray(deck[field.key]) && deck[field.key].length === 0) ? (
      ""
    ) : (
      <div key={field.key} className={field.className}>
        {field.position === "top" ? "" : field.name + ": "}
        {field.visualizationFunction(deck[field.key])}
      </div>
    );
  }

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="Deck AppItem">
      <div className="DeckTop">
        {defaultViewFields
          .filter((field) => selectedViewFieldNames.includes(field.name))
          .filter((field) => field.position === "top")
          .map((field) => helper(deck, field))}
      </div>
      <div className="DeckMiddle">
        {defaultViewFields
          .filter((field) => selectedViewFieldNames.includes(field.name))
          .filter((field) => field.position === "middle")
          .map((field) => helper(deck, field))}
      </div>
      <div
        className="DeckToggle"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore === true ? "Show less ▲" : "Show more ▼"}
      </div>
      {showMore === true ? (
        <div className="DeckExtra">
          {defaultViewFields
            .filter((field) => selectedViewFieldNames.includes(field.name))
            .filter((field) => field.position === "extra")
            .map((field) => helper(deck, field))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Deck;
