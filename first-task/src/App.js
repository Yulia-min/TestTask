import './App.css';
import React from 'react';
import ScrollToBottom from './components/Scroll/ScrollToBottom';
import ScrollToTop from "./components/Scroll/ScrollToTop"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
//import Header from './components/Routers/Header';
import UserList from './components/Users/UserList';
import UsersContextProvider from './components/Users/UsersContext';
import Table  from './components/Table';

function Header(){
  return (
    <div className="Header"> 
          <Link className="HeaderItem" to="/table">Table</Link>
          <Link className="HeaderItem" to="/user">Form</Link>
    </div>
  )
}

function App(){
  return(  
    <div className="App">
      <ScrollToTop/>
      <ScrollToBottom/>
      <Router>  
          <Header/>       
          <Route path="/table" exact><Table/></Route>
          <Route path="/user" exact><UsersContextProvider><UserList/></UsersContextProvider></Route>
      </Router>
    </div>
  )
}

export default App;
