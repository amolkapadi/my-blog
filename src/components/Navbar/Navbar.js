import React from 'react'
import { Menu } from 'react-feather';
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-footer">
  <div className="container">
    <Link className="navbar-brand" to="/">The Web Desginer</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel ">Welcome</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link "  to="/htmlcss">HTML&CSS</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/javascriptpage">JavaScript</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/reactpage">React JS</Link>
          </li>
         
        </ul>
       
      </div>
    </div>
  </div>
</nav>
   </>
  )
}
