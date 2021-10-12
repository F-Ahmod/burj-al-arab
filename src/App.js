import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import AuthProvider from './components/contex/AuthProvider';
import Privet from './components/Privet/Privet';


function App() {
  return (
     <AuthProvider>
 <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Privet path="/book/:bedType">
              <Book />
            </Privet>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
     </AuthProvider>
       
      
  );
}

export default App;
