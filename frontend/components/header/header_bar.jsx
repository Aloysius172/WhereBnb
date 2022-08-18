import React from 'react';
import { Link } from 'react-router-dom';


const HeaderBar = ({ currentUser, currentUserName, logout, openModal }) => {

  const authLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );

  
  


  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUserName.username}!</h2>
      <button className="header-button" onClick={logout}>Logout</button>
    </hgroup>
  );

  return (
    <div>
      <Link to='/' className='header-link'><h1>WhereBnb</h1></Link>
      {( currentUser ?
        personalGreeting(currentUser, logout) :
        authLinks())}
      
    </div>
      
  );
};

export default HeaderBar;
