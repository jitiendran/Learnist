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
    close_nav();
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.getElementById("register").style.display = "block";
}
function login(){
    close_nav();
    document.getElementById("content").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
}
function back(){
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("register").style.display = "none";
}
function open_nav(){
    document.getElementById("nav-hidden").style.display = "block";
}
function close_nav(){
    document.getElementById("nav-hidden").style.display = "none";

}