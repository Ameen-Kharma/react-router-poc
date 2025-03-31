import { useState } from "react";
import "../assest/style/header.css";

const StickyHeader: React.FC = () => {
  return (
    <div className="sticky-header">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <input type="text" value={"text"} />
    </div>
  );
};

export default StickyHeader;
