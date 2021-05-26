import React from 'react';
import { Button,Table} from 'reactstrap';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import {
      faArrowLeft,
      faPen,faPlusCircle
      } from "@fortawesome/free-solid-svg-icons";
import {
       
        Nav,
        NavItem,
        NavLink
      } from "reactstrap";
import { Link } from 'react-router-dom';
import './S.css';
import RowContent from './RowSolve';
class  About1 extends React.Component {

  constructor() {
    super();
    
    this.state = {
      open1: false,
      open: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false
    }
  }  
  
  toggleRow1(e) {
    console.log('toggleRow');
    
    this.setState({open1: !this.state.open1});
  }
  toggleRow(e) {
    console.log('toggleRow');
    
    this.setState({open: !this.state.open});
  }
  toggleRow2(e) {
    console.log('toggleRow');
    
    this.setState({open2: !this.state.open2});
  }
  toggleRow3(e) {
    console.log('toggleRow');
    
    this.setState({open3: !this.state.open3});
  }
  toggleRow4(e) {
    console.log('toggleRow');
    
    this.setState({open4: !this.state.open4});
  }
  toggleRow5(e) {
    console.log('toggleRow');
    
    this.setState({open5: !this.state.open5});
  }
  render(){
   
    if(this.state.open)
    console.log("kanak");
    return(
     
        <div className="container">
           <div className="row" style={{color:"#381863"}}>
             <Button style={{backgroundColor:'white',borderColor:'white',color:'black'}} tag={Link} to={"/"}>
            <p ><FontAwesomeIcon icon={faArrowLeft} className="mr-3"  />
            Management Team    <FontAwesomeIcon icon={faPen} className="mr-3" /></p></Button>
          </div>
           <div className="row">
             
             </div>
          <div className="row">
                <Nav >
              <NavItem className="coll">
                <NavLink href="#">Access Control</NavLink>
              </NavItem>
              <p></p>
              <NavItem>
                <NavLink href="#">Assiged Members</NavLink>
              </NavItem>
              
            </Nav>
            
              </div>
          <div className="row">
                <Table>
              <thead style={{backgroundColor:"lightgray"}}>
                <tr>
                  <th> </th>
                  <th>Deparment/Role Name</th>
                  <th>Access Level</th>
                  <th>Summary</th>
                  <th>Last update</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
              <tr onClick={this.toggleRow1.bind(this)}>
                <th scope="row" ><Button   style={{backgroundColor:'white',borderColor:'white',color:'black'}} tag={Link} to={"/about1"}> 
                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" /></Button></th>
                  <td>Budget</td>
                  <td><Button className="buttoon" >All Access</Button></td>
                  <td>View Create Edit Delete</td>
                  <td>1 min ago</td>
                  <th ><label class="switch">
                    <input type="checkbox" unchecked onclick="toggleState(this)"/>
                    <span class="slider round"></span></label>
                    </th>
                </tr>
                <div>
                <RowContent open={this.state.open1}/>
                </div>
                <tr onClick={this.toggleRow.bind(this)}>
                <th scope="row" ><Button   style={{backgroundColor:'white',borderColor:'white',color:'black'}} tag={Link} to={"/about1"}> 
                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" /></Button></th>
                  <td>Binding</td>
                  <td><Button  className="bbutton" >No Access</Button></td>
                  <td>-</td>
                  <td>1 min ago</td>
                  <th ><label class="switch">
                    <input type="checkbox" unchecked onclick="toggleState(this)"/>
                    <span class="slider round"></span></label>
                    </th>
                    
                </tr>
                <div>
                <RowContent open={this.state.open}/>
                </div>
                
                <tr onClick={this.toggleRow2.bind(this)}>
                <th scope="row" ><Button   style={{backgroundColor:'white',borderColor:'white',color:'black'}} tag={Link} to={"/about1"}> 
                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" /></Button></th>
                  <td>Vendor Portal</td>
                  <td><Button className="buttonn">Restricted Access</Button></td>
                  <td>View Create </td>
                  <td>1 min ago</td>
                  <th ><label class="switch">
                    <input type="checkbox" unchecked onclick="toggleState(this)"/>
                    <span class="slider round"></span></label>
                    </th>
                </tr>
                <div>
                <RowContent open={this.state.open2}/>
                </div>
                <tr onClick={this.toggleRow3.bind(this)}>
                <th scope="row" ><Button   style={{backgroundColor:'white',borderColor:'white',color:'black'}} tag={Link} to={"/about1"}> 
                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" /></Button></th>
                  <td>Purchase Order/Work Order</td>
                  <td><Button className="buttonn">Restricted Access</Button></td>
                  <td>View Create </td>
                  <td>1 min ago</td>
                  <th ><label class="switch">
                    <input type="checkbox" unchecked onclick="toggleState(this)"/>
                    <span class="slider round"></span></label>
                    </th>
                </tr>
                <div>
                <RowContent open={this.state.open3}/>
                </div>
                <tr onClick={this.toggleRow4.bind(this)}>
                <th scope="row" ><Button   style={{backgroundColor:'white',borderColor:'white',color:'black'}} tag={Link} to={"/about1"}> 
                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" /></Button></th>
                  <td>Organizational Profile</td>
                  <td><Button className="buttoon">All Access</Button></td>
                  <td>View Create Edit Delete</td>
                  <td>1 min ago</td>
                  <th ><label class="switch">
                    <input type="checkbox" unchecked onclick="toggleState(this)"/>
                    <span class="slider round"></span></label>
                    </th>
                </tr>
                <div>
                <RowContent open={this.state.open4}/>
                </div>
                <tr onClick={this.toggleRow5.bind(this)}>
                <th scope="row" ><Button   style={{backgroundColor:'white',borderColor:'white',color:'black'}} tag={Link} to={"/about1"}> 
                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" /></Button></th>
                  <td>Permission "/&"Access Control</td>
                  <td><Button className="bbutton">No Access</Button></td>
                  <td>-</td>
                  <td>1 min ago</td>
                  <th ><label class="switch">
                    <input type="checkbox" unchecked onclick="toggleState(this)"/>
                    <span class="slider round"></span></label>
                    </th>
                </tr>
                <div>
                <RowContent open={this.state.open5}/>
                </div>
              </tbody>
            </Table>
            </div>
            
            </div>
            
       
    )
}
};
//<p class="text-left">Leader {leader.name}</p>
export default About1;    
/*<RowContent open={this.state.open}/>
        */