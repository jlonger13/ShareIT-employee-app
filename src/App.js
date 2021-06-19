import { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Register from "./components/Register";
import Account from "./components/Account";

import PropsRoute from './components/PropsRoute';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import EmailSent from './components/EmailSent';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/register" exact component={Register}/>
        <Route path="/myaccount" exact component={Account}/>
        <PropsRoute path='/login' exact component={Login}/>
        <PropsRoute path='/forgot' exact component={ForgotPassword}/>
        <PropsRoute path='/confirm' exact component={EmailSent}/>
      </BrowserRouter>
    )
  }
}

export default App;
