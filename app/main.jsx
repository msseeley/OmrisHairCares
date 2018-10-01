import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as firebase from 'firebase';

// import store from './store'
import Root from './components/Root.jsx'

var config = {
  apiKey: "AIzaSyCFcc250BAECQCAASzW2k95pObE6r5H4pU",
  authDomain: "omri-s-hair-cares.firebaseapp.com",
  databaseURL: "https://omri-s-hair-cares.firebaseio.com",
  projectId: "omri-s-hair-cares",
  storageBucket: "",
  messagingSenderId: "46915340850"
};

firebase.initializeApp(config);

//same thing as ReactDOM.render because render is imported from react-dom
render(
  <Root />,
  document.getElementById('main')
)

{/* <Provider store={store}></Provider> */ }
