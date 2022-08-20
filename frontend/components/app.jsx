import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import SignUpContainer from './auth/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import LoginContainer from './auth/login_form_container'
import Modal from './modal/modal';
// import HeaderBarContainer from './header/header_bar_container';
import Splash from './slash/splash';
import NavBarContainer from './header/nav_bar_container';
const App = () => (
  <div  className='app-box'>
    <NavBarContainer/>
    <Switch>
      <AuthRoute exact path="/" component ={ Splash }/>
    </Switch>
  </div>
);

export default App;