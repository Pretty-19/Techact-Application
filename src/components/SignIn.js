import React , {useContext,useState} from 'react';
import {Form,Button,FormGroup,Label,Input} from "reactstrap";
import { AppwriteContext } from "./Appwrite";


const SignIn =() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const appwrite = useContext(AppwriteContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if ( email === '' || password === '') {
          alert('All fields are required');
          return;
        }
   
    appwrite.doLogin(email, password).then((result) => {
        console.log('Success', result);
      }).catch((error) => {
        console.log('Error', error);
      });
    }


    return(
<div id="login-page">
        <div id="login-card">
            <h2 style={{ color: '#5b5b5b' }}>Welcome to Techat!!</h2>
            <Form className="login-form" onSubmit={onSubmit} >
               <FormGroup>
                 <Label className="col-sm-2 col-form-label col-form-label-sm " >Email</Label>
                <Input type="email" placeholder="Email Address*"
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}   ></Input>
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
                   Sign In
               </Button>
               </div>
            </Form>
            </div>
            </div>
    );
}

export default SignIn;