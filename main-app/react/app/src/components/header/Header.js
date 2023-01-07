import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="Header">
      <div className="HeaderFront">
        <HeaderLogo />
        <h1>OpenWebFlashcards</h1>
      </div>
      <HeaderMenu />
    </header>
  );
}
