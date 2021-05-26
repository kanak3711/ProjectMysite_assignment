import React from 'react';
import { Button,Table} from 'reactstrap';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import {
      faCircle,
      faEye,
        faPen, faPlus, faTrashAlt
      } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';

function About() {

   
    return(
        <div className="container">
            <div className="row">
            <Button tag={Link} to={"/about1"} style={{backgroundColor:"#5e3891", color:"white", margin: "1%"}}><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Role</Button>{'   '}
            <Button style={{backgroundColor:"white", color:"grey", margin: "1%"}}><FontAwesomeIcon icon={faPen} className="mr-2" /></Button>{' '}
            <Button  style={{backgroundColor:"white", color:"grey", margin: "1%"}}><FontAwesomeIcon icon={faTrashAlt} className="mr-2" /></Button>{' '}
            </div>
            <div className="row">
                <Table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Deparment/Role Name</th>
                  <th>Access Level</th>
                  <th>No of member</th>
                  <th>Last update</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" ><Button style={{backgroundColor:'white',borderColor:'white',color:'black'}} tag={Link} to={"/about1"}> <FontAwesomeIcon icon={faCircle} className="mr-2" /></Button></th>
                  <td>Management Team</td>
                  <td><Button className="buttoon">All Access</Button></td>
                  <td>4</td>
                  <td>1 min ago</td>
                  <th ><FontAwesomeIcon icon={faEye} className="mr-2" /></th>
                </tr>
                <tr>
                <th scope="row"><FontAwesomeIcon icon={faCircle} className="mr-2" /></th>
                  <td>Procurement Team</td>
                  <td><Button className="buttonn">Restricted Access</Button></td>
                  <td>8</td>
                  <td>1 min ago</td>
                  <th ><FontAwesomeIcon icon={faEye} className="mr-2" /></th>
                </tr>
                <tr>
                <th scope="row"><FontAwesomeIcon icon={faCircle} className="mr-2" /></th>
                  <td>Project Team</td>
                  <td><Button className="buttonn">Restricted Access</Button></td>
                  <td>16</td>
                  <td>1 min ago</td>
                  <th ><FontAwesomeIcon icon={faEye} className="mr-2" /></th>
                </tr>
                <tr>
                <th scope="row"><FontAwesomeIcon icon={faCircle} className="mr-2" /></th>
                  <td>IT Team</td>
                  <td><Button className="buttonn">Restricted Access</Button></td>
                  <td>4</td>
                  <td>1 min ago</td>
                  <th ><FontAwesomeIcon icon={faEye} className="mr-2" /></th>
                </tr>
                <tr>
                <th scope="row"><FontAwesomeIcon icon={faCircle} className="mr-2" /></th>
                  <td>Super Admin</td>
                  <td><Button className="buttoon">All Access</Button></td>
                  <td>1</td>
                  <td>1 min ago</td>
                  <th ><FontAwesomeIcon icon={faEye} className="mr-2" /></th>
                </tr>
              </tbody>
            </Table>
            </div>
        </div>
            
         
    );
}
//<p class="text-left">Leader {leader.name}</p>
export default About;    