import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <NavLink to="/Home" className="header" style={{fontFamily:'Satisfy',fontSize:'30px'}}>
      <i class="fas fa-university"></i> Home
      </NavLink>
      <ul
        className="navbar-links"
        style={{ width: "35%", transform: open ? "translateX(0px)" : "" }}
      >
        {/* <li>
          <NavLink to="/Registration" activeClassName="nav-active">
             Registration
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/Voting" activeClassName="nav-active">
            <i className="fas fa-vote-yea" /> Voting
          </NavLink>
        </li>
        <li>
          <NavLink to="/Results" activeClassName="nav-active">
          <i class="far fa-clipboard"></i> Results
          </NavLink>
        </li>
      </ul>
      <i onClick={() => setOpen(!open)} className="fas fa-bars burger-menu"></i>
    </nav>
  );
}
