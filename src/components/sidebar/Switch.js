import React, { Component } from "react";
import { render } from "react-dom";
import Demo1 from "./Demo1";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlusCircle
  } from "@fortawesome/free-solid-svg-icons";
export default class Appp extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      default:console.log(name);
    }
  };
  change() // no ';' here
  {
      if (this.showHideDemo1==false) this.value = "Open Curtain";
      else this.value = "Close Curtain";
  }
  render() {
    const { showHideDemo1} = this.state;
    return (
      <div>
        
        
        <div>
          <button  style={{backgroundColor:'white',borderColor:'white',color:'black'}} onClick={() => this.hideComponent("showHideDemo1")}>
          <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
  
          </button>
          
        </div>
        {showHideDemo1 && <Demo1 />}
      </div>
    );
  }
}

