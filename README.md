# major-arcana-demo.js

## What is this?

This program demonstrates Array and Object manipulation with built-in methods and examples of their use with an abstraction of a real-world object.

The `Tarot Major Arcana` are a subset of cards within the Tarot Deck and can be represented in an object data structure, also known as a dictionary or hash.

## What does it do?

The `majorArcana` object is comprised of a series of key-value pairs, where each key is string data and each value is numeral data.

This program contains an algorithm that creates a new object to represent the Major Arcana with *only* string data as its keys and values (ie. convert Arabic numerals into Roman numerals).

## What's so cool about this?

My favorite part of the program is this iterator. I first attempted it using nested for loops... This is way better and I'm happy with how it turned out:

```Javascript
numbersArray.forEach( v => {
	newEntriesArray.push([keysArray[v], romanArray[v]]);
	}
);
```

## TLDR

### My algorithm takes this:

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

### And turns it into that:

```JavaScript
const romanArcana = {
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

Check it out: https://repl.it/@Goth/arrayandobjectmethodsjs

Reader be aware! The `Object.fromEntries()` method is not supported yet by `node.js` and has been commented out in the above `repl.it` to keep everything else running.
