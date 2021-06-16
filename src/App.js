import { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Firebase from "./firebase/Firebase";

import Register from "./components/Register";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/register" exact component={Register}/>
      </BrowserRouter>
    )
  }
}

export default App;
