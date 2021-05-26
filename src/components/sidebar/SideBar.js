import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faBriefcase,
  faShieldAlt,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";



const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "white" }}>
        &times;
      </span>
      <h3 style={{color:"	rgb(75,0,130)"}}>MYSITE</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
      <NavItem className="sim">
      <NavLink tag={Link} to={"/page-1"}>
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-5" />
            Project
          </NavLink>
        </NavItem>
        <NavItem  className="sim">
        <NavLink tag={Link} to={"/page-1"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-5" />
            Organization Profile
          </NavLink>
        </NavItem >
        <NavItem className="colll" style={{height:"60px"}}>
          <NavLink tag={Link} to={"/"}>
            <FontAwesomeIcon icon={faShieldAlt} className="mr-5" />
            Access Control
          </NavLink>
        </NavItem>
        
      </Nav>
    </div>
  </div>
);



export default SideBar;
