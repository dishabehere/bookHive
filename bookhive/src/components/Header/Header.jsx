import React, { useState } from 'react';
import logo from '../../assets/Logo.jpg';
import home from '../../assets/icons/home.svg';
import profile from '../../assets/icons/profile.svg'
import './Header.scss';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogin = () => setAuth(true);
  const handleLogout = () => setAuth(false);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <section className="header">
      <img className="header__logo" src={logo} alt="BookHive Logo" />
      
      <nav className="header__nav-bar">
        <img className="header__home" src={home} alt="Home icon" />
        
        <div className="header__container">
            <Badge color="secondary" badgeContent={0} showZero>
            <ShoppingCartIcon className="header__cart" />
            </Badge>
            
            {auth ? (
            <div className="header__account">
                <img className="header__profile" src={profile} onClick={handleMenu} alt="Profile Icon" />

                <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Add Book</MenuItem>
                <MenuItem onClick={handleClose}>My Rentals</MenuItem>
                <MenuItem onClick={handleClose}>My Listings</MenuItem>
                <MenuItem onClick={() => { handleClose(); handleLogout(); }}>Logout</MenuItem>
                </Menu>
            </div>
            ) : (
            <button className="header__login" onClick={handleLogin}>Login</button>
            )}
        </div>
      </nav>
    </section>
  );
}

export default Header;
