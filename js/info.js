const testPokemon = 
["Abomasnow", "Arcanine", "Cottonee", "Crobat", "Delibird", "Gengar",
"Koffing", "Liepard",	"Mawile",	"Murkrow", "Raichu", "Sableye",
"Stoutland", "Weavile", "Wooper", "Zangoose"];

const poolPokemon =
["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", 
"Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", 
"Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Spearow", 
"Fearow", "Ekans", "Arbok", "Sandshrew", "Sandslash", "Pikachu", "Machop", 
"Machoke", "Machamp", "Geodude", "Graveler", "Golem", "Abra", "Kadabra", 
"Alakazam","Chikorita","Bayleef","Meganium","Totodile","Crononaw","Feraligatr",
"Heracross","Larvitar","Pupitar","Tyranitar","Quagsire","Snover","Growlithe",
"Weezing","Zubat","Golbat","Haunter","Gastly","Honchkrow","Pichu","Sneasel",
"Pawniard","Purrloin","Herdier","Lillipup","Mudkip","Marshtomp","Swampert",
"Torchic","Combusken","Blaziken","Treecko","Grovyle","Sceptile","Zigzagoon",
"Linoone","Wurmple","Cascoon","Silcoon","Beautifly","Dustox","Corphish",
"Crawdaunt","Barboach","Wishcash","Lunatone","Solrock","Seviper","Piplup",
"Prinplup","Empoleon","Chimchar","Monferno","Infernape","Turtwig","Grotle",
"Torterra","Starly","Staravia","Staraptor","Litten","Popplio","Rowlett"];

let score = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

let finalScore = [];

let nAlreadyPicked = [];

let mAlreadyPicked = [];

let p = 0;

const imgSrc = "imgs/";

const png = ".png";

const correct = imgSrc+"tick.png"

const wrong = imgSrc+"cross.png"

const br = "<br>"

const guess = "-guess"