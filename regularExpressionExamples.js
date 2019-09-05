// Here are some example regular expressions for future use.

//The following expression will identify UPPERCASE letters in a string.

// /(?=[A-Z])/

//This is best used to call on a string with .split() to split a camelCased string into a sentance.
// e.g.

let b = "AndTheyShallKnowNoFear"

b.split(/(?=[A-Z])/))

// expected output:
// ["And", "They", "Shall", "Know", "No", "Fear"]

//DON'T forget .split returns the array, the regex is the formula through which it splits
