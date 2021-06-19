import { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./components/Register";
import Account from "./components/Account";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/register" exact component={Register}/>
        <Route path="/myaccount" exact component={Account}/>
      </BrowserRouter>
    )
  }
}

export default App;
