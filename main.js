//How to accept uder input

//easy way with a window prompt

// let username = window.prompt("Hey!! I'm learning JavaScript!");
// console.log(username);

//difficult way HTML textbox

let username; 

document.getElementById("button").onclick = function() {
    username = document.getElementById ("name").value;
    console.log(username);
    document.getElementById("label").innerHTML = "Hello, " + username;
}

