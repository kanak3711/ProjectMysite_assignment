import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle, faQuestionCircle,faSyncAlt, faTable, faWifi } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
 
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,Jumbotron
} from "reactstrap";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => {setTopbarOpen(!topbarIsOpen);console.log(topbarIsOpen);}
  console.log(topbarIsOpen);
  return (
    <div>
    <Jumbotron className="text-right"  style={{backgroundColor:"white", color:"grey",padding:"10px 10px",fontSize:"30px", margin: "1%"}}>
    <FontAwesomeIcon icon={faCircle} className="mr-2" /> Kishore <FontAwesomeIcon icon={faBell} className="mr-2" />  
    <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
    </Jumbotron>
    <Navbar
    
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      
      <NavbarToggler  />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav  navbar className="text-left">
          <NavItem  onClick={toggleTopbar} className="coll" >
            <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faWifi} className="mr-2" /> Permissions
            </NavLink>
          </NavItem >
          <NavItem >
            <NavLink tag={Link} to={"/page-1"}>
            <FontAwesomeIcon icon={faTable} className="mr-2" /> Approval Matrix
            </NavLink>
          </NavItem>
          
          <NavItem >
            <NavLink tag={Link} to={"/page-1"}>
            <FontAwesomeIcon icon={faSyncAlt} className="mr-2" />Last sync 15 min ago
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
   
    </div>
  );
};

export default Topbar;
