# major-arcana-demo

Check it out: https://repl.it/@Goth/arrayandobjectmethodsjs

This program demonstrates Array and Object manipulation with built-in methods and examples of their use with an abstraction of a real-world object.

The `Tarot Major Arcana` are a subset of cards within the Tarot Deck and can be represented in an object data structure, also known as a dictionary or hash.

The `majorArcana` object is comprised of a series of key-value pairs.

Each key is string data and each value is numeral data.

Most of the object methods transpose its data into an array of some sort.

This program contains an algorithm that creates a new object to represent the Major Arcana with *only* string data as its keys and values (ie. convert Arabic numerals into Roman numerals).

My favorite part of the program is this iterator:

```Javascript
numbersArray.forEach( v => {
	newEntriesArray.push([keysArray[v], romanArray[v]]);
	}
);
```

Reader be aware: the last and most crucial part of this program `Object.fromEntries` is not supported in `node.js` and it will not run in node.js.

## TLDR

### Before

```JavaScript
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
```

### After

```JavaScript
const majorArcana = {
	"The Fool": "0",
	"The Magician": "I",
	"The High Priestess": "II",
	"The Empress": "III",
	"The Emperor": "IV",
	"The Hierophant": "V",
	"The Lovers": "VI",
	"The Chariot": "VII",
	"Strength": "VIII",
	"The Hermit": "IX",
	"Wheel of Fortune": "X",
	"Justice": "XI",
	"The Hanged Man": "XII",
	"Death": "XIII",
	"Temperance": "XIV",
	"The Devil": "XV",
	"The Tower": "XVI",
	"The Star": "XVII",
	"The Moon": "XVIII",
	"The Sun": "XIX",
	"Judgement": "XX",
	"The World": "XXI"
};
```
