//YOUR FIREBASE LINKS
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
    roomname=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name=message_data["name"];
      message=message_data["message"];
      like=message_data["like"];
      namewithtag="<h4>"+name+"<img src='tick.png'class='user_tick'></h4>";
      messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
      likebutton="<button class='btn btn-warning' id='"+firebase_message_id+"' value="+like+" onclick='updatelike(this.id)'>";
      spantag="<span class='glyphicon glyphicon-thumbs-up'>like : "+like+"</span></button><hr>";
      row=namewithtag+messagewithtag+likebutton+spantag;
      document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
    }
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
            name : username,
            message : msg,
            like : 0    
          })
          document.getElementById("msg").innerHTML=" ";
    }
    function updatelike(message_id){
      console.log("click on button like - " + message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedlikes=Number(likes)+1;
      firebase.database().ref(roomname).child(message_id).update({like:updatedlikes});
    }
    