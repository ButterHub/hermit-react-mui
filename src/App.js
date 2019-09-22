import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { home } from './pages/home';

import './App.css';
import { login } from './pages/login';
import { signup } from './pages/signup';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/" component={home}></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/signup" component={signup}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
