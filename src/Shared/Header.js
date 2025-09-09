import React, { useState } from "react";

function Header() {
  var [navClassList, setNavClassList] = useState("collapse navbar-collapse");
  var isNavShowing = false;

  function handleNavToggle() {
    if (isNavShowing === false) {
      isNavShowing = true;
      setNavClassList("navbar-collapse");
    } else {
      isNavShowing = false;
      setNavClassList("collapse navbar-collapse");
    }
  }
  return (
    <nav className="navbar shadow mt-3 navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://www.softwareschool.co/static/media/tl7.1e0cf81f982b9f1e2b8a.png"
            width="200px"
            alt="home-logo"
          />
        </a>
        <button className="navbar-toggler" onClick={(e) => handleNavToggle()}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={navClassList}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/courses">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product-list">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile-update">
                ProfileUpdate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">
                UserList
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/create-account">
                Create Account
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
