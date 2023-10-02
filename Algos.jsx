// 10/1
//https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// 1. DNA to RNA Conversion
function DNAtoRNA(dna) {
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "T") {
            dna = dna.replace("T", "U");
        }
    }
    return dna;
}
// 2. https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript

function getAge(inputString) {
    return parseInt(inputString);
}

// 3.Correct the mistakes of the character recognition software
function correct(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "5":
                newString += "S";
                break;
            case "0":
                newString += "O";
                break;
            case "1":
                newString += "I";
                break;
            default:
                newString += string[i];

        }
    }
    return newString;
}

//4.
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//So for this, we need to split the string into two parts, then compare the two parts.
// if x > y, then add 3 points to the total
// if x < y, then add 0 points to the total
// if x = y, then add 1 point to the total
// then return the total

function points(games) {
    let total = 0;
    for (let i = 0; i < games.length; i++) {
        let x = parseInt(games[i].split(":")[0]);
        let y = parseInt(games[i].split(":")[1]);
        if (x > y) {
            total += 3;
        } else if (x < y) {
            total += 0;
        } else {
            total += 1;
        }
    }
    return total;
}


//5. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

//For this, we need to input a month, and decide which quarter that month belongs to.
//The month input is given, so we need to split the year into quarters.

const quarterOf = (month) => {
    if (month <= 3) {
        return 1; // First quarter
    } else if (month <= 6) {
        return 2; // Second quarter
    } else if (month <= 9) {
        return 3; // Third quarter
    } else {
        return 4; // Fourth quarter
    }
}

//6. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//So this is input with a boolean, and if True is input, print "Yes," if false is input, print "No"

function boolToWord(bool) {
    if (bool === true) {
        return "Yes";
    } else {
        return "No";
    }
}

//7. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//This takes an input (int) and returns even if even, or odd if odd.

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}

//8. Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// Okay, so for this, we have an array, and we need to remove every second element, so [0, 1, 2, 3, 4, 5] will be [0, 2, 4]? That doesn't make sense.
//Okay, how about this, we loop through the array, starting at 0 and go to arr.length, easy enough. 
//

function removeEveryOther(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//9. Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//Given n, return a list of all the powers of 2 with the exponent going from 0 to n.
//Okay, so n is coming in, we need to multiply 2 by n while n > 0.
//n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
function powersOfTwo(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));  // 2 raised to the power i
    }
    return result;
}