
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCnIIryn5bG5Q7E4vFus8ZWZs2NASglWUo",
      authDomain: "adv-93-44679.firebaseapp.com",
      databaseURL: "https://adv-93-44679-default-rtdb.firebaseio.com",
      projectId: "adv-93-44679",
      storageBucket: "adv-93-44679.appspot.com",
      messagingSenderId: "143034340386",
      appId: "1:143034340386:web:15c47a53770f939e89e67b",
      measurementId: "G-ZYXZ9Q5X2P"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+username;
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row="<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row
      });});}
getData();
function addRoom(){
      var roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
        purpose : "adding roomname"
    });
    localStorage.setItem("room_name",roomname);
    window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";

}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}
