import React, { useState } from "react";
import { FormGroup, Button } from "@mui/material";
import "./Ideas.css";

function Ideas() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [wasSent, setWasSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Idea: " + idea);
    setWasSent(true);
  };

  return (
    <div className="Ideas AppPage">
      <h2>Ideas</h2>
      <ul>
        <li>
          Fixing number of notes, which currently displays 0 for all decks.
        </li>
        <li>Adding support for searching Memrise and Quizlet decks.</li>
        <li>Adding support for sharing search results.</li>
        <li>Adding support for ordering search results.</li>
        <li>Adding a way to get notified when a search result changes.</li>
        <li>Adding a way to favorite decks and cards.</li>
        <li>
          Adding support for writing cards and decks collaboratively and storing
          them on OpenWebFlashcards.
        </li>
        <li>
          Adding support for generating decks from videos, books and articles
          with the help of AI.
        </li>
        <li>Adding multilingual support.</li>
      </ul>
      {wasSent ? (
        <p>
          Thank you for your idea! I will review it and consider it for the
          future of the project.
        </p>
      ) : (
        <>
          <p>
            Have an idea for a project or feature that you think I should work
            on? Use the form below to submit it to me.
          </p>
          <form onSubmit={handleSubmit} className="AppForm">
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="idea">Idea</label>
              <textarea
                id="idea"
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
              />
            </FormGroup>
            <Button type="submit">Send</Button>
          </form>
        </>
      )}
    </div>
  );
}

export default Ideas;
