import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_RQxnZGo42uhJDSH19GR_00tTowpvGKA",
    authDomain: "mead-todoapp.firebaseapp.com",
    databaseURL: "https://mead-todoapp.firebaseio.com",
    projectId: "mead-todoapp",
    storageBucket: "mead-todoapp.appspot.com",
    messagingSenderId: "889144540965"
  };
  firebase.initializeApp(config);
  var firebaseRef = firebase.database().ref();
  firebaseRef.set({
    appName:'Todo App',
    isRunning:true,
    user:{
      name:'eli',
      age:36
    }
  }).then(()=>{
    console.log('set Data success')
  },(e)=>{
    console.log('set Data failed')
  });
  firebaseRef.child('user').set({
    name:'eloo',
    age:36
  });
