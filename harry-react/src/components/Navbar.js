import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
       <>
          <nav className="main-nav">
              <div className="circle"></div>
              <div className="logo">
              <h2>
                  <span>KLE </span>
                  <span>I</span>nstitute of Technology
              </h2>
              </div>
          </nav>
       </>  
    );
};

export default Navbar;
