import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from '../lib/AuthProvider';

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    return (
      <nav className='navbar'>
        <Link to={"/"} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {
          isLoggedIn ? 
          (<>
            <p className="navbar-user">username: {user.username}</p>	{/* 	<-- UPDATE HERE     */}
            <button className="navbar-button" onClick={logout}>Logout</button>	{/* 	<-- UPDATE HERE     */}
          </>) 
         : 
          (<>
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>
            </Link>
          </>)
        }
      </nav>
    );
  }
}

export default withAuth(Navbar);


