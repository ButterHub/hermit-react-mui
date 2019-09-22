import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Join } from './pages/Join';
import './App.css';
import { Container, createMuiTheme, CssBaseline } from '@material-ui/core';
import MissingPage from './pages/MissingPage';
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
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/join" component={Join}></Route>
            <Route component={MissingPage}></Route>
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
