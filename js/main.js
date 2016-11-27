/*
HELPER FUNCTIONS

addClass(clase, argument)
setClass(clase, argument)
setText(clase, argument)
addText(clase, argument, separator)
setImage(clase, argument)
textChoose(id)
playWhoIs()
*/

/*
MAIN FUNCTIONS

FUNCIONES QUE SE REALIZARAN AL TRANSCURRIR LOS DISTINTOS EVENTOS
*/
function main() {
	//Esta funcion se realizara al momento que la pagina completa haya cargado
	button();
}
function button() {	//n es para testpokemon
	if (p < 16) {
	playWhoIs();
	while (true) {
		const n = (Math.round(Math.random()*(testPokemon.length-1)));
		if (nAlreadyPicked.indexOf(n) === -1) {
			nAlreadyPicked[nAlreadyPicked.length]=n;
			name = testPokemon[n];
			setImage('imgPokemon',imgSrc+name+guess+png);
			break;
		}
	}	
	let m; //es para poolpokemon
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
	checkAnswer();
	if (p<=16) {
		p=p+1;
	}
	document.getElementById('forms').reset(); //resetea el forms para que se destickee
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
function checkAnswer() { //para revisar si esta correcto (modifica pokebolas y conteo final)
	if (p > 0) {
		for (let i = 0; i < p; i++) {
			imgId=('s'+(i));
			try{
				if (score[i][0] === score[i][1]) {
					finalScore[i] = 1;
					setImage(imgId,correct);
				}
				else {
					finalScore[i] = 0;
					setImage(imgId,wrong);
				}
			}
			catch (err) {
				//Este catch esta diseñado para cuando no existe el score[i][1] y no se salga del script
			}
			}
		}
	}

function final() { //hace aparecer y desaparecer lo primero
	setClass('restart','visible'); 
	setMouseOut('restart','');
	setMouseOver('restart','');
	setClass('forms','visibilityHidden');
	setClass('imgPokemon','displayNone');
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
	setText('finalScore','Has acertado '+good+' pokémon');
	if (bad === 1) {
		addText('finalScore','Te has equivocado '+bad+' vez',br);
	} 
	else if (bad === 0) {
		addText('finalScore','No te has equivocado, felicitaciones, ¡Eres un verdadero maestro Pokémon!',br);
	}
	else {
		addText('finalScore','Te has equivocado '+bad+' veces',br);
	}
}

function showAnswer() {
	setImage('pokeCorrect',imgSrc+name+png);
	addClass('forms','hidden');
	clearDelay();
	
	show = setTimeout(function(){ setClass('forms','visibilityHidden'); setClass('pokeCorrect','visible');}, 300);
	hide = setTimeout(function(){ setClass('imgPokemon','hidden'); setClass('pokeCorrect','hidden'); stopWhoIs();}, 2000);
	clear = setTimeout(
		function(){ 
			button(); 
			if (p !== 17) { 
			setClass('forms','visible');
			setClass('imgPokemon','visible'); 
			}
			setImage('pokeCorrect',''); 
		}, 2400)


}


