import React, { useState } from "react";
import { FormGroup, Button } from "@mui/material";
import "./ContactMe.css";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [wasSent, setWasSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // send the contact information and message to the server or handle it in some other way
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setWasSent(true);
  };

  return (
    <div className="ContactMe AppPage">
      <h2>Contact me</h2>
      {wasSent ? (
        <p>Thank you! I will read your email as soon as possible.</p>
      ) : (
        <>
          <p>
            You can use this form to contact me. Your message will be sent to my
            email inbox.
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </FormGroup>
            <Button type="submit">Send</Button>
          </form>
        </>
      )}
    </div>
  );
}

export default ContactMe;
