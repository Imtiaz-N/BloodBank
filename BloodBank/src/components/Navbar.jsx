import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${styles.Container}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${styles.NavbarBrand}`} href="#">
          <img src="/blooddrop.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
            DONATE BLOOD SAVE LIFE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
            <ul className={`navbar-nav mb-2 mb-lg-0 ${styles.NavLinks}`}>
              <li className="nav-item">
                <a className={`nav-link ${styles.NavLink}`} aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.NavLink}`} href="#">
                  Camping
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.NavLink}`} href="#">
                  Gallary
                </a>
              </li>
            </ul>
            <form className="d-flex ms-auto" role="search">
              <input
                className={`form-control me-2 ${styles.FormControl}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className={`btn btn-outline-success ${styles.SearchButton}`} type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
