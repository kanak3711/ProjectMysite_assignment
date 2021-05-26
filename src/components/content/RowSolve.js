import React from 'react';
import './RowSolve.css'


import { Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
    <Form>
     
        <legend>Access Control</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            All Access
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Restricted Access
          </Label>
        </FormGroup>
        
        <legend>Permissions</legend>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          view items in access
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Edit items in access
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          create items in access
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Delete items in access
        </Label>
      </FormGroup>
     
    </Form>
    </div>
  );
}

export default class RowContent extends React.Component {
  
  clicker() {
    
  }
  
  render(){
    
    let jsxhtml = (<div onClick={this.clicker.bind(this)}>
       
      </div>);
    
    if (this.props.open) {
      jsxhtml = (<div  onClick={this.clicker.bind(this)}>
          
      <Example/>
      </div>);
    }
    
    return (
      <div>
      {jsxhtml}
        </div>
    )
  }
  
};

