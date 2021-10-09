import React  from 'react';
import  {GoogleOutlined ,FacebookOutlined} from '@ant-design/icons';


const Login =() => {
    return(
    <div id="login-page">
        <div id="login-card">
            <h2>Welcome to Techat!!</h2>
            
            <div className="login-button google">
            <GoogleOutlined/> Sign in with Google
            </div>
            &nbsp;
            <div className="login-button  facebook">
            <FacebookOutlined/> Sign in with Facebook
            </div>
             </div>
    </div>
    );
}

export default Login;