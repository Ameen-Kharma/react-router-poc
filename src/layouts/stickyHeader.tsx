import { useState } from "react";
import "../assest/style/header.css";
import { Link } from "react-router";
import { Button } from "react-bootstrap";

const StickyHeader: React.FC = () => {
  return (
    <div className="sticky-header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/News">News</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <input type="text" value={"text"} />
      <Button> click me !</Button>
    </div>
  );
};

export default StickyHeader;
