const majorArcana = {
	"The Fool": 0,
	"The Magician": 1,
	"The High Priestess": 2,
	"The Empress": 3,
	"The Emperor": 4,
	"The Hierophant": 5,
	"The Lovers": 6,
	"The Chariot": 7,
	"Strength": 8,
	"The Hermit": 9,
	"Wheel of Fortune": 10,
	"Justice": 11,
	"The Hanged Man": 12,
	"Death": 13,
	"Temperance": 14,
	"The Devil": 15,
	"The Tower": 16,
	"The Star": 17,
	"The Moon": 18,
	"The Sun": 19,
	"Judgement": 20,
	"The World": 21
};

Object.freeze(majorArcana);

for (card in majorArcana) {
	console.log(`${card} is number ${majorArcana[card]}.`)
}

const keysArray = Object.keys(majorArcana);

const romanArray = [
	"O",
	"I",
	"II",
	"III",
	"IV",
	"V",
	"VI",
	"VII",
	"VIII",
	"IX",
	"X",
	"XI",
	"XII",
	"XIII",
	"XIV",
	"XV",
	"XVI",
	"XVII",
	"XVIII",
	"XIX",
	"XX",
	"XXI"
];

const numbersArray = Object.values(majorArcana);

const newEntriesArray = [];

numbersArray.forEach( v => {
	newEntriesArray.push([keysArray[v], romanArray[v]]);
	}
);

const romanArcana = Object.fromEntries(newEntriesArray);

for (card in romanArcana) {
	console.log(`${card} is number ${romanArcana[card]}.`)
}
