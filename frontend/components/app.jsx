import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Splash from './splash/splash';
import NavBarContainer from './header/nav_bar_container';
import ListingShowContainer from './listings/listing_show_container';
const App = () => (
  <div  className='app-box'>
    <NavBarContainer/>
    <Switch>
      <Route exact path="/" component = { Splash }/>
      <Route exact path={`/api/listings/:listingId`} component={ListingShowContainer} />
    </Switch>
  </div>
);

export default App;