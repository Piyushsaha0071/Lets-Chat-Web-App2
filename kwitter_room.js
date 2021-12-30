
const firebaseConfig = {
      apiKey: "AIzaSyDLWOPo2UN3c4-qgZA98tbKoL6O-LIlHnM",
      authDomain: "kwitter-181bd.firebaseapp.com",
      databaseURL: "https://kwitter-181bd-default-rtdb.firebaseio.com",
      projectId: "kwitter-181bd",
      storageBucket: "kwitter-181bd.appspot.com",
      messagingSenderId: "908235688476",
      appId: "1:908235688476:web:34304398f29707d150edd9",
      measurementId: "G-E2JSNHEHSR"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding user",
          Message : "HI How are you "
      });
  }
