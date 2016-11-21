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
	playWhoIs();
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
	if (p<=16) {
		p=p+1;
	}
	document.getElementById('forms').reset();
		if (p===17) {
			final();
		}
	
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

function final() {
	addClass('restart','visible');
	setClass('forms','hidden');
	setClass('imgPokemon','hidden');
	setText('question','Juego Terminado');
	setClass('question','end-question');
	setClass('arrow','hidden');
	checkAnswer();
	let good = 0, bad = 0;
	for (let i = 0; i < finalScore.length; i++) {
		if (finalScore[i] === 1) {
			good++;
		}
		else {
			bad++;
		}
	}
	setText('finalScore','Has acertado '+(good)+' pokémon');
	addText('finalScore','Te has equivocado '+bad+' veces',br);

	p++;
}




/*

<div id="main" class="background-black">
		<img id="imgPokemon" onmouseover="hover()" onmouseout="hoverout()">
		<input type="button" onclick="button()" id="button" value="Siguiente imagen">
		<form id="forms" method="post">
		  <input type="radio" id="a" name="selection" value="opcion a"><span id="opt0">A</span><br>
		  <input type="radio" id="b" name="selection" value="opcion b"><span id="opt1">B</span><br>
		  <input type="radio" id="c" name="selection" value="opcion c"><span id="opt2">C</span><br>
		  <input type="radio" id="d" name="selection" value="opcion d"><span id="opt3">D</span><br>
		  <input type="radio" id="e" name="selection" value="opcion e"><span id="opt4">E</span><br>
		</form>
		<button type="submit" onclick="printScore()">Imprimir en consola resultados del test</button>
	</div>

	*/
