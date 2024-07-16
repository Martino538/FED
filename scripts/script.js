// JavaScript Document
var menuButton = document.querySelector("header nav button");
menuButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
}