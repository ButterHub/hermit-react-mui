import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home';

import './App.css';
import { login } from './pages/login';
import { join } from './pages/join';
import { Container, createMuiTheme, CssBaseline } from '@material-ui/core';
import missingPage from './pages/missingPage';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <CssBaseline/>
      <BrowserRouter>
        <Navbar></Navbar>
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={login}></Route>
            <Route exact path="/join" component={join}></Route>
            <Route component={missingPage}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6C71C4",
    },
    secondary: {
      main: "#76CEE1",
    },
  }
})

export default App;
