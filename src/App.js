import React from 'react';
import SignIn from './components/sign_in/Index';
import Dashboard from "./components/dashboard/index";
import Signup from './components/register-teacher/index';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import './App.css';

 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path="/">
            <SignIn />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/register_teacher">
            <Signup/>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
