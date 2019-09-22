import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { home } from './pages/home';

import './App.css';
import { login } from './pages/login';
import { join } from './pages/join';
import { Container } from '@material-ui/core';
import missingPage from './pages/missingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/" component={home}></Route>
            <Route exact path="/login" component={login}></Route>
            <Route exact path="/join" component={join}></Route>
            <Route component={missingPage}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
