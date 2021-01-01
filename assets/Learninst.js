window.onload = function(){
    document.getElementById("loading").style.display = "block";
    document.getElementById("web").style.display = "none";
    setTimeout(removeloader,2000);
}
function removeloader(){
    document.getElementById("loading").style.display = "none";
    document.getElementById("web").style.display = "block";
}
function register(){
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.getElementById("register").style.display = "block";
}
function login(){
    document.getElementById("content").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
}
function back(){
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("register").style.display = "none";
}