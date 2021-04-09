var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var modalCl = document.getElementsByClassName("close_popup");

btn.onclick = function () {
    modal.style.display = "block"; 
}
modalCl.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}