import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ snacks, drinks }) {
    return (
        <div>
            <Navbar expand="lg">
                <NavLink exact to="/" className="navbar-brand">
                    Snack or Booze
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/new-item">Add your recipe!</NavLink>

                        <NavLink to="/snacks">Snacks ({snacks.length})</NavLink>

                        <NavLink to="/drinks">Drinks ({drinks.length})</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;
