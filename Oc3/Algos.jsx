// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//This take in a number, n, and returns the number of bits equal to the binary representatin of that number. The input will always be positive.
//We need to know how to convert numbers to bits.

//To convert integer to binary, start with the integer in question and divide it by 2 keeping notice of the quotient and the remainder. Continue dividing the quotient by 2 until you get a quotient of zero. Then just write out the remainders in the reverse order.

//So you'd get 12 in, and:
// 12 / 2 = 6 + 0 
// 6 / 2 = 3 + 0
// 3 / 2 = 1 + 1
// 1 / 2 = 1 + 1

//Then we reverse it for some reason? So 0 0 1 1 would become 1 1 0 0. 
//Turns out, no we don't? I don't know. That's weird af. Google says to, but this problem says you don't need to? I do not understand.


//So the code would need to receive n, then divide n by 2, store the output, and then if it equals 0, store the 0. If it doesn't, then store that as a 1. 
//Then reverse all of those, and spit out the binary number.

var countBits = function (n) {
    let count = 0;

    while (n > 0) {
        if (n % 2 === 1) {
            count++;
        }
        n = Math.floor(n / 2);
    }

    return count;
}

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//This takes a string, and its purpose is to return a statement that reports the number of repeated letters.

//That means it needs to for loop through the string.

//In the for loop, we need to somehow keep track of each letter, should this be as its own variable? Or as an array?

//The for loop should have a counter, probably, to keep track / ++ when a matching letter is returned.

//The return statement should be handled as well, some way to string interpolate a possible 26 / case (upper / lower) repeats.


function duplicateCount(text) {
    text = text.toLowerCase();
    let occurrences = new Map();
    if (text.length === 0) {
        return 0;
    }
    for (let letter of text) {
        if (occurrences.has(letter)) {
            occurrences.set(letter, occurrences.get(letter) + 1);
        } else {
            occurrences.set(letter, 1);
        }
    }
    let repeatedCount = 0;
    for (let count of occurrences.values()) {
        if (count > 1) {
            repeatedCount++;
        }
    }
}

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

//So this will need a sample array of letters, which I've made as const alphabet.

//This will then need to compare the given array against alphabet and populate the missing letter.

//Would we need to have it match to the start? So if it starts at L, it doesn't try to add A?


function findMissingLetter(array) {

    let expectedCharCode = array[0].charCodeAt(0);

    for (letter of array) {
        if (letter !== String.fromCharCode(expectedCharCode)) {
            return String.fromCharCode(expectedCharCode);
        }
        expectedCharCode++;
    }

    return ' ';
}