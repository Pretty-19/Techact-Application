import React from 'react';
import  {GoogleCircleFilled ,FacebookFilled} from '@ant-design/icons';
import {Nav,NavItem, NavLink,Form,Button,FormGroup,Label,Input} from "reactstrap";

const Login =() => {
    return(
    <div id="login-page">
        <div id="login-card">
            <h2 style={{ color: '#5b5b5b' }}>Welcome to Techat!!</h2>
            <Form className="login-form">
               <FormGroup>
                 <Label className="col-sm-2 col-form-label col-form-label-sm "  >Name</Label>
                <Input type="email" placeholder="First name*"></Input>
               </FormGroup>
               <FormGroup>
                 <Label className="col-sm-2 col-form-label col-form-label-sm " >Email</Label>
                <Input type="email" placeholder="Email Address*"></Input>
               </FormGroup>
               <FormGroup>
                <Label className="col-sm-2 col-form-label col-form-label-sm " >Password</Label>
                <Input type="password" aria-describedby="emailHelp" placeholder="Password*"></Input>
               </FormGroup>
               <br/>
               <div className="d-grid gap-2">
               <Button className="btn-sm"  color="success">
                   Sign Up
               </Button>
               </div>
            </Form>
            <br/>
            <Label className="form-control form-control-sm">Or Sign Up Using </Label>
            <br/>
            <div className="login-button google">
            <GoogleCircleFilled/> 
            </div>
            &nbsp;
            <div className="login-button  facebook">
            <FacebookFilled/>
            </div>
            <Nav className="justify-content-center">
            <NavItem>
              <NavLink href="#">Log In</NavLink>
             </NavItem>
            </Nav>
        </div>
    </div>
    );
}

export default Login;