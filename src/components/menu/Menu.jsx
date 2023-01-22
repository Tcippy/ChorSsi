import "./menu.scss";
import React from "react";
import { Link } from "react-router-dom";

function Menu({ menuOpen, setMenuOpen }) {

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul className={"menulist"}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                    <li onClick={() => setMenuOpen(false)}>Modeler</li>
                </Link>
                <Link to="/ledger" style={{ color: '#fff', textDecoration: 'none' }}>
                    <li onClick={() => setMenuOpen(false)}>Ledger</li>
                </Link>
                <Link to="/wallet" style={{ color: '#fff', textDecoration: 'none' }}>
                    <li onClick={() => setMenuOpen(false)}>Wallet</li>
                </Link>
            </ul>
        </div>
    );
}

export default Menu;
