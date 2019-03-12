import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyDhr0zYQYNjQZQTkGVVjvxTKVl40HHtoPM",
      authDomain: "rn-application-2.firebaseapp.com",
      databaseURL: "https://rn-application-2.firebaseio.com",
      projectId: "rn-application-2",
      storageBucket: "rn-application-2.appspot.com",
      messagingSenderId: "1018617557182",
  };
let app = Firebase.initializeApp(config);
export const db = app.database();