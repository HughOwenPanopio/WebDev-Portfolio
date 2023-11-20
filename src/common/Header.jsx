import React from "react";
import "../css/header.css";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";

const Header = () => {
  return (
    <>
      <header>
        <Nav>
          <div className="container text-center">
            <div className="row">
              <div className="col logo-container">
                <Link to='/'>
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <div className="col page-container">
                <ul>
                  <li>About</li>
                  <li>Experience</li>
                  <li>Project</li>
                  <li>contact</li>
                </ul>
              </div>
            </div>
          </div>
        </Nav>
      </header>
    </>
  );
};

export default Header;
