var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBkKP_muX82RPqbFLR3UiwGVq7WamySzNk",
    authDomain: "kanvan-f7b71.firebaseapp.com",
    databaseURL: "https://kanvan-f7b71.firebaseio.com",
    projectId: "kanvan-f7b71",
    storageBucket: "kanvan-f7b71.appspot.com",
    messagingSenderId: "297503844903"
  };
  firebase.initializeApp(config);

var database = firebase.database();

export default database