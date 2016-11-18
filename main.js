function addClass(clase, argument) {
	//En esta clase se le ingresa el nombre de la clase que se va a modificar y
	//en el argument va el nombre de la case del style que se incrustara al final
	//del archivo
	//SI SE VA A REEMPLAZAR UN ATRIBUTO YA ESTABLECIDO, FAVOR QUE AGREGAR "!important"
	//A LOS ATRIBUTOS DEL STYLE A REEMPLAZAR
	document.getElementById(clase).className += argument;
}

function setClass(clase, argument) {
	document.getElementById(clase).className = argument;
}

function setHtml(clase, argument) {
	document.getElementById(clase).innerHTML = argument;
}

function setImage(clase, argument) {
	document.getElementById(clase).src = argument;
}

function function_name(argument) {
	// body...
}