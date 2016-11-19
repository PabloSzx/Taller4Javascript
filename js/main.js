/*
HELPER FUNCTIONS

addClass(clase, argument)
setClass(clase, argument)
setText(clase, argument)
setImage(clase, argument)
*/

/*
MAIN FUNCTIONS

FUNCIONES QUE SE REALIZARAN AL TRANSCURRIR LOS DISTINTOS EVENTOS
*/
function main() {
	//Esta funcion se realizara al momento que la pagina completa haya cargado
	button();
}
function button() {
	if (p < 16) {
	while (true) {
		const n = (Math.round(Math.random()*(testPokemon.length-1)));
		if (nAlreadyPicked.indexOf(n) === -1) {
			nAlreadyPicked[nAlreadyPicked.length]=n;
			name = testPokemon[n];

			setImage('imgPokemon',imgSrc+name+guess+png);
			break;
		}
	}

	elementos = document.getElementById('forms').elements;
	
	console.log(elementos[0].checked)
	let m;
	mAlreadyPicked = [];
	const correctAnswer = Math.round(Math.random()*5);
	console.log(correctAnswer);
	for (let i = 0; i < 5; i++) {
		if (i === correctAnswer) {
			setText(('opt'+i),name);
		}
		else {
			while (true) {
				m = (Math.round(Math.random()*(poolPokemon.length-1)))
				if (mAlreadyPicked.indexOf(m) === -1) {
					mAlreadyPicked[mAlreadyPicked.length]=m;
					setText(('opt'+i),poolPokemon[m]);
					break;
				}
			}
		}
	}
	document.getElementById('forms').reset();	
	p=p+1;
	}
}
function checkAnswer(correct) {
	
}
function hover() {
	setImage('imgPokemon',imgSrc+name+png);
}
function hoverout() {
	setImage('imgPokemon',imgSrc+name+guess+png);
}
