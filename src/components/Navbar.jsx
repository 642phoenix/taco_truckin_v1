import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">

    <Link style={{textDecoration: 'none'}} to='/'>
      <div className="navlink">HOME</div>
    </Link>

    {/* <Link style={{textDecoration: 'none'}} to='/Login'>
      <div className="navlink">LOGIN</div>
    </Link>

    <Link style={{textDecoration: 'none'}} to='/Signup'>
      <div className="navlink">SIGNUP</div>
    </Link> */}

    <Link style={{textDecoration: 'none'}} to='/Menu'>
      <div className="navlink">MENU</div>
    </Link>

    <Link style={{textDecoration: 'none'}} to='/Contact'>
      <div className="navlink">CONTACT</div>
    </Link>
    
     
  </div>
  );
}

export default Navbar;
