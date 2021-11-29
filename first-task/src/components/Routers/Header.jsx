import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

function Header(){
  return (
    <div className="Header"> 
          <Link className="HeaderItem" to="/table">Table</Link>
          <Link className="HeaderItem" to="/user">Form</Link>
    </div>
  )
}

export default Header;