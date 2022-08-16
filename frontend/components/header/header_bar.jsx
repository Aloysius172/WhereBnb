import React from 'react';



const HeaderBar = ({ currentUser, logOut, openModal }) => {

  const authLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logOut}>Logout</button>
    </hgroup>
  );

  return (
    currentUser ?
      personalGreeting(currentUser, logOut) :
      authLinks()
  );
};

export default HeaderBar;
