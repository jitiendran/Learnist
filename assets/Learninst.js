window.onload = function(){
    document.getElementById("loading").style.display = "block";
    document.getElementById("web").style.display = "none";
    setTimeout(removeloader,2000);
}
function removeloader(){
    document.getElementById("loading").style.display = "none";
    document.getElementById("web").style.display = "block";
}