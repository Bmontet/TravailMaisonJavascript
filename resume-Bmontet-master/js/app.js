console.log("JavaScript files are located in the js folder");
var buttonColor = document.getElementById('boutton');
var buttonColorNuit = document.getElementById('bouttonNuit');


buttonColor.onclick = function () {
changeColor();};

buttonColorNuit.onclick = function () {
changeColor2();};

function changeColor() {
	document.body.style.background="white";
	document.getElementById("img1").src = "img/Jour.png";

}

function changeColor2() {
	document.body.style.background="black";
	document.getElementById("img1").src = "img/Nuit.png";

}