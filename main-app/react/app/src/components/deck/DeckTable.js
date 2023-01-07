import React from "react";
import "./DeckTable.css";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

function DeckTable({ decks, defaultViewFields, selectedViewFieldNames }) {
  return (
    <div className="DeckTable">
      <Table>
        <TableHead>
          {defaultViewFields.map((field) =>
            !selectedViewFieldNames.includes(field.name) ? (
              ""
            ) : (
              <TableCell key={field.name}>{field.name}</TableCell>
            )
          )}
        </TableHead>
        <TableBody>
          {decks.map((deck) => (
            <TableRow key={deck.id}>
              {defaultViewFields.map((field) =>
                !selectedViewFieldNames.includes(field.name) ? (
                  ""
                ) : (
                  <TableCell key={field.key}>
                    {field.visualizationFunction(deck[field.key])}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DeckTable;
