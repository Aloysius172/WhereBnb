import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import SignUpContainer from './auth/signup_form_container'
import LoginContainer from './auth/login_form_container'
import Modal from './modal/modal';
import HeaderBarContainer from './header/header_bar_container';
const App = () => (
  <div>
    <Modal/>
    <header>
      <Link to='/' className='header-link'><h1>WhereBnb</h1></Link>
      <HeaderBarContainer/>
    </header>

 
    {/* <Switch>
      <Route exact path='/login' component={LoginContainer}/>
      <Route exact path='/signup' component = {SignUpContainer}/>

    </Switch> */}
  </div>
);

export default App;