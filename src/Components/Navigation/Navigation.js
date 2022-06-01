import React from 'react'
import { Link } from 'react-router-dom'
import transitions from 'bootstrap'

const Navigation = ({ setActive, active }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid bg-faded padding-media">
        <div className="container padding-media">
          <nav className="navbar navbar-toggleable.md navbar-light">
            <button
              className="navbar-toggler mt-3 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <li
                    className={`nav-item nav-link ${
                      active === 'home' ? 'active' : ''
                    }`}
                    onClick={() => setActive('home')}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/#about" style={{ textDecoration: 'none' }}>
                  <li
                    className={`nav-item nav-link ${
                      active === 'about' ? 'active' : ''
                    }`}
                    onClick={() => setActive('about')}
                  >
                    About
                  </li>
                </Link>
                <Link to="/#services" style={{ textDecoration: 'none' }}>
                  <li
                    className={`nav-item nav-link ${
                      active === 'services' ? 'active' : ''
                    }`}
                    onClick={() => setActive('services')}
                  >
                    services
                  </li>
                </Link>
                <Link to="/#portfolio" style={{ textDecoration: 'none' }}>
                  <li
                    className={`nav-item nav-link ${
                      active === 'portfolio' ? 'active' : ''
                    }`}
                    onClick={() => setActive('portfolio')}
                  >
                    Portfolio
                  </li>
                </Link>
                <Link to="/#contact" style={{ textDecoration: 'none' }}>
                  <li
                    className={`nav-item nav-link ${
                      active === 'contact' ? 'active' : ''
                    }`}
                    onClick={() => setActive('contact')}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item nav-link">Let's Talk</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
