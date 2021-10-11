import React , {useContext,useState} from 'react';
import  {GoogleCircleFilled ,FacebookFilled} from '@ant-design/icons';
import {Form,Button,FormGroup,Label,Input,Alert} from "reactstrap";
import { AppwriteContext } from "./Appwrite";
import {Link } from "react-router-dom"


const SignUp =() => {

     const [name, setName] = useState("")
     const [email, setEmail] = useState("");
     const[success, setSuccess] = useState(false);
     const[error, setError] = useState(false);
     const [password, setPassword] = useState("");
     const appwrite = useContext(AppwriteContext);

     const onDismissError = () => setError(false);
     const onDismissSuccess = () => setSuccess(false);

     const onSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
          alert('All fields are required');
          return;
        }
   
    appwrite.doCreateAccount(email, password, name).then((result) => {

        console.log('Success', result);
        appwrite.doAccountVerification('https://localhost').then(data => setSuccess(true));
      }).catch((error) => {
        console.log('Error', error);
        setError(false);
      });
    }
    
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
               <Button className="btn-sm"  color="success">
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
            <Alert color="success" isOpen={success} toggle={onDismissSuccess}>
              Account created successfully !
            </Alert>
            <Alert color="error" isOpen={error} toggle={onDismissError}>
              Account creation failed!
            </Alert>
       </div>
    );
}

export default SignUp;