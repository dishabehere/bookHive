import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import home from "../../assets/icons/home.svg";
import profile from "../../assets/icons/profile.svg";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.scss";

function Header({ auth, handleLogin, handleLogout, cartCount }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <section className="header">
      <Link to={`/`} className="header__landing-link">
        <img className="header__logo" src={logo} alt="BookHive Logo" />
      </Link>
      <nav className="header__nav-bar">
        <Link to={`/Home`} className="header__home-link">
          <img className="header__home" src={home} alt="Home icon" />
        </Link>
        <div className="header__container">
          <Badge color="secondary" badgeContent={cartCount}>
            <ShoppingCartIcon className="header__cart" />
          </Badge>

          {auth ? (
            <div className="header__account">
              <img className="header__profile" src={profile} onClick={handleMenu} alt="Profile Icon" />
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <Link to={`/users/:id`} className="header__link">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to={`/books/add`} className="header__link">
                  <MenuItem onClick={handleClose}>Add Book</MenuItem>
                </Link>
                <Link to={`/users/:id/rentalBooks`} className="header__link">
                  <MenuItem onClick={handleClose}>My Rentals</MenuItem>
                </Link>
                <Link to={`/users/:id/myBooks`} className="header__link">
                  <MenuItem onClick={handleClose}>My Listings</MenuItem>
                </Link>
                <MenuItem onClick={() => { handleClose(); handleLogout(); }}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <button className="header__login" onClick={handleLogin}>
              <h3>LogIn</h3>
            </button>
          )}
        </div>
      </nav>
    </section>
  );
}

export default Header;
