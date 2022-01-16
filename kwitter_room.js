
var firebaseConfig = {
      apiKey: "AIzaSyDAghGL-yACnWaJLfTDAX20fbpnCgM-Ht4",
      authDomain: "kwitter-51b21.firebaseapp.com",
      databaseURL: "https://kwitter-51b21-default-rtdb.firebaseio.com",
      projectId: "kwitter-51b21",
      storageBucket: "kwitter-51b21.appspot.com",
      messagingSenderId: "1070831542042",
      appId: "1:1070831542042:web:3b7b40f69b6cbba8ae16a3",
      measurementId: "G-VW5B4EX3TR"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
