import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/#menu" onClick={handleClick("menu")}>
            Menu
          </a>
        </li>
        <li>
          <Link to="/reservations">Book a table</Link>
        </li>
        <li>
          <Link to="/#about" onClick={handleClick("about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#contacts" onClick={handleClick("footer")}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
