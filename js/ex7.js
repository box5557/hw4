/* Q7
Guess Number
Write a program that generates a random number between 1 and 100, inclusive.
It then prompts the user to guess the number (assume valid entry).
The program will provide the following feedback after each guess:
 Too low, guess again
 Too high, guess again
 Correct
If correct, also display how many attempts it took.  For example:
Correct!  It took you 7 attempts to guess the correct number.
*/

/* remove
let randnum = Math.floor(Math.random() * 101);
console.log("Cheat: the answer is: " + randnum);
let attempts = 1
var user_input_num_1 = prompt("Guess the number (between 0 and 100)");
while (user_input_num_1 != randnum){
    var user_input_num_1 = prompt("Wrong! Guess again (between 0 and 100");
    attempts++
}
if (user_input_num_1 == randnum){
    console.log("You guessed it!");
    console.log("It took you " + attempts + " attempts.");
}
*/

const myString = "JavaScript is fun!";
console.log(myString.length);
console.log(myString[1]);
console.log(myString.indexOf("i"));
console.log(myString.indexOf("e"));
console.log(myString.indexOf("a", 2));
console.log(myString.lastIndexOf("i"));
console.log(myString.substring(4,10));
