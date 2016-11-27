/*
HELPER FUNCTIONS

FUNCIONES QUE SERAN DE UTILIDAD PARA LA SECCION DE MAIN FUNCTIONS
*/
function addClass(clase, argument) { 
	//En esta clase se le ingresa el nombre de la clase que se va a modificar y
	//en el argument va el nombre de la clase del style que se incrustara al final
	//del elemento
	document.getElementById(clase).className += (' '+argument);
}

function setClass(clase, argument) {
	//En esta clase se le ingresa el nombre de la clase que se va a modificar y
	//en el argument va el nombre de la clase del style que se cambiara todas las 
	//clases del elemento al argument dado
	document.getElementById(clase).className = argument;
}

function setText(clase, argument) {
	document.getElementById(clase).innerHTML = argument;
}

function addText(clase, argument, between) {
	document.getElementById(clase).innerHTML = document.getElementById(clase).innerHTML + between + argument;
}

function setImage(clase, argument) {
	document.getElementById(clase).src = argument;
}

function setMouseOut(clase, argument) {
	document.getElementById(clase).onmouseout = argument;
}

function setMouseOver(clase, argument) {
	document.getElementById(clase).onmouseover = argument;
}

function textChoose(id) {
	document.getElementById('forms').elements[id].checked = true;
} 
function playWhoIs() {
	document.getElementById('whois').play();
}

function stopWhoIs() {
	document.getElementById('whois').load();
}

function clearDelay() {
	clearTimeout(show);
	clearTimeout(hide);
	clearTimeout(clear);
}

function showRestart() {
	setClass('restart','visible');
}

function hideRestart() {
	setClass('restart','hidden');
}

function preloadImage(url)
{
    var img=new Image();
    img.src=imgSrc+url;
}

function preloadImages() {
	for (let i = testPokemon.length - 1; i >= 0; i--) {
		preloadImage(testPokemon[i]+png);
		preloadImage(testPokemon[i]+guess+png);
	}
}