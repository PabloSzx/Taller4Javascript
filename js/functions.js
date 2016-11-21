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

function setValue(clase, argument) {
	document.getElementById(clase).value = argument;
}

function textChoose(id) {
	document.getElementById('forms').elements[id].checked = true;
} 

function hover() {
	setImage('imgPokemon',imgSrc+name+png);
}
function hoverout() {
	setImage('imgPokemon',imgSrc+name+guess+png);
}