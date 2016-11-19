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

function setHtml(clase, argument) {
	document.getElementById(clase).innerHTML = argument;
}

function setImage(clase, argument) {
	document.getElementById(clase).src = argument;
}

function main() {
	//Esta funcion se realizara al momento que la pagina completa haya cargado
	console.log(testPokemon.length);
}

const testPokemon = ["Aboumasnow", "Arcanine", "Cottonee", "Crobat", "Delibird", "Gengar",
											"Koffing", "Liepard",	"Mawile",	"Murkrow", "Raichu", "Sableye",
											"Stoutland", "Weavile", "Wopper", "Zangoose"];