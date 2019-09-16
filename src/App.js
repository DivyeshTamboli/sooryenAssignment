import React from 'react';
import './App.css';
import { Login } from "./components/login/login";
import {Notes} from './components/notes/notes'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
    <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/notes" component={Notes} />
    </Switch>
</BrowserRouter>
  
  );
}

export default App;
