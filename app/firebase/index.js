import firebase from 'firebase';

try{
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
}catch(e){

}
  export var firebaseRef = firebase.database().ref();
  export default firebase;
