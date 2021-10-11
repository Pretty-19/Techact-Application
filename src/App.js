import React from "react"
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Home from "./components/Home"
//import Landing from './components/Landing';
// import { AuthProvider } from "../contexts/AuthContext"
// import Chats from "./Chats"




function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
         <Switch>
          <Route path={ROUTES.SIGN_UP}  component={SignUp} /> 
          <Route path={ROUTES.SIGN_IN}   component={SignIn} /> 
          <Route path={ROUTES.HOME}   component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
