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
var i = 0;
var slides = ["slide1","slide2","slide3","slide4","slide5","slide6"];
function slide(){
    var n = (i+4);
    if(n < 6){
        document.getElementById(slides[i]).style.display = "none";
        document.getElementById(slides[n]).style.display = "block";
        i++;
    } 
}
function prev(){
    console.log("The i now is : "+i);
    var a = i-1;
    var b = a+4;
    if(a >= 0){
        document.getElementById(slides[a]).style.display= "block";
        document.getElementById(slides[b]).style.display = "none";
        i--;
    }  
}