// This program demonstrates several Array and Object methods and examples of their use with an abstraction of a real-world object

// The Tarot Major Arcana is a data-set uniquely appropriate for these examples for several reasons:

// Each card has a proper name and a Roman numeral value, a natural key-value pair for an object structure

// This example uses data from Rider-Waite tarot deck

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

console.log(majorArcana);

// This method prevents majorArcana from being mutated (sorry to non-fans of Rider-Waite!)
Object.freeze(majorArcana);

// Objects can be iterated over with a for...in statement, a loop method unique to the Object class.

for (card in majorArcana) {
	console.log(`${card} is number ${majorArcana[card]}.`)
}

// Objects can be converted into arrays with built-in methods from the global Object class.

// If a user does not know the names of Tarot cards, they may find any aribitrary card by selecting a number between 0 and 21 to reference its array index.

// That can be found with a chain operator
// Return an array, where every element is a sub-array whose elements are the key and value of each card
const entriesArray = Object.entries(majorArcana);
console.log(entriesArray);
console.log(entriesArray[4][0]); // The Emperor

// Since the Major Arcana is already zero-indexed, let's eliminate the need of chain operators
// Return an array where each element is the key of each property
const keysArray = Object.keys(majorArcana);
console.log(keysArray);
// Thus, reference any "key element" by its index to get its name
console.log(keysArray[6]); // The Lovers
console.log(keysArray[8]); // Strength
console.log(keysArray[14]); // Temperance

// The Major Arcana values are usually represented by Roman numerals. This representation uses Arabic numerals.
// Let us recreate the Major Arcana with Roman numerals!
// The Romans didn't have 0 but we will use it in our array literal

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

// Easily make an array of numbers using values from the original object
// Return an array where each element is the value of each property
const numbersArray = Object.values(majorArcana);
console.log(numbersArray);


// We will store our entries in a new array
const newEntriesArray = [];

// And populate it with sub-arrays whose elements are the name and roman numeral
// This is my favorite part of the program :)

numbersArray.forEach( v => {
	newEntriesArray.push([keysArray[v], romanArray[v]]);
	}
);

console.log(newEntriesArray);

// The above output looks a lot like entriesArray!
// Indeed, every element is a sub-array whose elements are the key and value of each card
// Hence, we can create a proper Object from newDeck, by using the reverse of Object.entries

// Return an object with properties taken from an array's key-value sub-arrays.
const romanArcana = Object.fromEntries(newEntriesArray);

// Behold!
console.log(romanArcana);
