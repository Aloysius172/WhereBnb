import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Splash from './splash/splash';
import NavBarContainer from './header/nav_bar_container';
import FilterBar from './fliter/filter_bar';
const App = () => (
  <div  className='app-box'>
    <NavBarContainer/>
    <FilterBar/>
    <Switch>
      <AuthRoute exact path="/" component = { Splash }/>
    </Switch>
  </div>
);

export default App;