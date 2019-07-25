import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase/app';

import Root from './components/Root'

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
