import React from 'react';
import { NavLink } from 'react-router-dom'; // Make sure this import is present

const Header = () => {
  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src="./logo/amazon-logo-png-2400x2001_abf78dd4_transparent_202878.png-removebg-preview.png/500x300?text=About+Us+Image" alt="" />
            logo
          </a>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to='/' className='nav-link'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='/products'>Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
              </li>
            </ul>

            {/* Search bar */}
            <form className="d-flex me-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>

            {/* User & Cart icons */}
            <div className="d-flex">
              <a href="/contact" className="btn btn-outline-secondary me-2">
                <i className="bi bi-person"></i> Account
              </a>
              <a href="/cart" className="btn btn-outline-secondary">
                <i className="bi bi-cart"></i> Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
