import React , {useContext,useState} from 'react';
import {Form,Button,FormGroup,Label,Input} from "reactstrap";
import {Link,useHistory } from "react-router-dom"
import  {GoogleCircleFilled ,FacebookFilled} from '@ant-design/icons';
import { AppwriteContext } from "./Appwrite";
import * as ROUTES from '../constants/routes';


const SignUp =() => {

     const [name, setName] = useState("")
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const appwrite = useContext(AppwriteContext);
     const history = useHistory();


     const onSubmit = (e) => {
      e.preventDefault();
      if (name === '' || email === '' || password === '') {
        alert('All fields are required');
        return;
      }
     
      appwrite
        .doCreateAccount(email, password, name)
        .then(() => {
          history.replace(ROUTES.SIGN_IN);
          alert('User created sucessfully');
        })
        .catch((error) => {
          console.log('Error', error);
        });
    };

    return(
    <div id="login-page">
        <div id="login-card">
            <h2 style={{ color: '#5b5b5b' }}>Welcome to Techat!!</h2>
            <Form className="login-form" onSubmit={onSubmit}>
               <FormGroup>
                 <Label className="col-sm-2 col-form-label col-form-label-sm "  >Name</Label>
                <Input type="name" placeholder="First name*" 
                      value={name} 
                       onChange={(e)=>setName(e.target.value)} ></Input>
               </FormGroup>
               <FormGroup>
                 <Label className="col-sm-2 col-form-label col-form-label-sm " >Email</Label>
                <Input type="email" placeholder="Email Address*" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} ></Input>
               </FormGroup>
               <FormGroup>
                <Label className="col-sm-2 col-form-label col-form-label-sm " >Password</Label>
                <Input type="password" aria-describedby="emailHelp" placeholder="Password*" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} ></Input>
               </FormGroup>
               <br/>
               <div className="d-grid gap-2">
               <Button className="btn-sm"  color="success" disabled={!name || !email || !password} >
                   Sign Up
               </Button>
               </div>
            </Form>
            <br/>
            <Label className="form-control form-control-sm">Or  Sign In Using</Label>
            <br/>
            <div className="login-button google">
            <GoogleCircleFilled/> 
            </div>
            &nbsp;
            <div className="login-button  facebook">
            <FacebookFilled/>
            </div>
            &nbsp;
            <br/>
            <Link to="/signin" style={{ textDecoration: 'none' }} >
              Sign In
            </Link>
            </div>
       </div>
    );
}

export default SignUp;