function addUser(){
    window.location="kwitter_room.html";
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name)
}