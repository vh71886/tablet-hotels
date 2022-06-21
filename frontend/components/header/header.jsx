import React from "react";
import { Link } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
    const display = currentUser ? (               // a current user exists
        <div>
            <p className="welcome-user">Hello, {currentUser.fname}</p>
            <button className="logout-button" onClick={logout}>Logout</button>
        </div>
            ) : (                                 // no users logged in
        <div>
            <Link className="btn" to="/">Search Hotels</Link>
            <Link className="btn" to="/hotelsyoulove">My Lists</Link>
            <Link className="btn" to="/register">Register</Link>
            <Link className="btn" to="/signin">Sign In</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <Link className="logo" to="/">Terra l'Hotels</Link>
            <div className="nav-links">
                {display}
            </div>
            <div className="nav-menu">
                <div className="nav-user-icon"></div>
                <div className="nav-menu-icon"></div>
            </div>
        </header>
    );
}

export default Header;