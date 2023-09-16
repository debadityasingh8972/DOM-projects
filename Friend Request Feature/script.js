var istatus = document.querySelector("h5");

var add = document.querySelector("#add");
var removeFriend = document.querySelector("#msg");

add.addEventListener("click", function(){
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
})

removeFriend.addEventListener("click", function(){
    istatus.innerHTML = "Stranger";
    istatus.style.color = "Red";
})