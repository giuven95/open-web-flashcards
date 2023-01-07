import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import "./FooterLinks.css";
import DEFAULT_PAGES from "../../constants/DEFAULT_PAGES";

function FooterLinks() {
  return (
    <div className="FooterLinks">
      <h3>Internal links</h3>
      <List>
        {DEFAULT_PAGES.map((page) => (
          <ListItem key={page.href} component={Link} to={page.href}>
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default FooterLinks;
