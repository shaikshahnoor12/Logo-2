
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      const firebaseConfig = {
            apiKey: "AIzaSyB0IVfSIJYpu2RC_QZ9OxmBUPyDUX8KPxw",
            authDomain: "lets-chat-app-8d0fa.firebaseapp.com",
            dataURL:"https://console.firebase.google.com/project/lets-chat-app-8d0fa/database/lets-chat-app-8d0fa-default-rtdb/data/~2F",
            projectId: "lets-chat-app-8d0fa",
            storageBucket: "lets-chat-app-8d0fa.appspot.com",
            messagingSenderId: "377990416286",
            appId: "1:377990416286:web:2c8662bd910a1cf778388f"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
      //End code
      });});}
getData();
