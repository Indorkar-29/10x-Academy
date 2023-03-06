import React from "react";
import { NavLink } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Index } from "../Pages/Index";

export const NavBar = () => {
  return (
    <nav>
      <ul>
      <li className="index-link" >
          <NavLink to="/">
          
            {<Index />}
            
          </NavLink>
          </li>
        
        <li className="home-link" >
          <NavLink to="/home">
            {<Home />}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
