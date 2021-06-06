import React from "react";

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span>LinkShortner</span>
        <button
          className="navbar-toggler"
          type="button"
          //   aria-expanded="false"
          //   aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://github.com/M-Hegazy">
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
