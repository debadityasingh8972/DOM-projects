var istatus = document.querySelector("h5");
var button = document.querySelector("button");
var add = document.querySelector("#add");
// var removeFriend = document.querySelector("#msg");
var flag = 0;

add.addEventListener("click", function(){
    if(flag == 0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        button.innerHTML = "Remove";
        flag = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "Red";
        button.innerHTML = "Add Friend";
        flag = 0;
    }
})

// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "Red";
// })