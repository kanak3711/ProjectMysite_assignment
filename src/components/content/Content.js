import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import About from './About';
import About1 from './About1';
import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
     
      <Route exact path="/" component={() => <About />}  />
      <Route exact path="/Pages" component={() => "Pages"} />
      
      <Route exact path="/about1" component={() => <About1 />} />
      
      <Route exact path="/page-1" component={() => "page-1"} />
     
    </Switch>
  </Container>
);

export default Content;
