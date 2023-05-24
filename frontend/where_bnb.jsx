// import React from "react";
// import ReactDOM from "react-dom";
// import Root from "./components/root";
// import configureStore from './store/store'


// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("root");
//   const store = configureStore();
//   ReactDOM.render(<Root store = {store}/>, root);
// });
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createReservation, fetchReservations} from './utils/reservations_utils'
// import {fetchReservations} from './actions/reservations/reservation_actions'
import { createReview } from './utils/reviews_util'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);



  window.getState = store.getState
  // window.createReservation = createReservation
  window.fetchReservations = fetchReservations
  window.createReview = createReview
 
});
