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
	let m;
	mAlreadyPicked = [];
	const correctAnswer = Math.round(Math.random()*4);
	for (let i = 0; i < 5; i++) {
		if (i === correctAnswer) {
			setText(('opt'+i),name);
			score[p][0]=i;
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
	}
	updateScore();
	if (p<16) {
		p=p+1;
	}
	document.getElementById('forms').reset();
	
}
function updateScore() {
	for (let i = 0; i < 5; i++) {
			if ((document.getElementById('forms').elements)[i].checked) {
					score[p-1][1] = i;
				}
		}
}
function checkAnswer() {
	if (p > 1) {
		for (let i = 0; i < p-1; i++) {
				if (score[i][0] === score[i][1]) {
					finalScore[i] = 1;
				}
				else {
					finalScore[i] = 0;
				}
			}
		}
	}

function printScore() {
	checkAnswer();
	console.log(finalScore)
}
function hover() {
	setImage('imgPokemon',imgSrc+name+png);
}
function hoverout() {
	setImage('imgPokemon',imgSrc+name+guess+png);
}
