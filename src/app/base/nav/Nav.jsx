import React from "react";
import NavDropdown from "./NavDropdown";
import { caretDown, chevronRight } from "../SVG";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <NavDropdown title={"Betonvloeren"} />
        <NavDropdown title={"Betonvloeren afwerking"} />
        <a href="#" className="nav__inner-link">
          Betonvloeren prijs
        </a>
        <a href="#" className="nav__inner-link">
          Foto’s
        </a>
        <a href="#" className="nav__inner-link">
          Contact
        </a>
      </div>
    </nav>
  );
}
