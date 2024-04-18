// Question # 10: Adding Comments: Choose two of the programs you've written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// Author: Aisha
// Date: 18 April, 2024
// This program shows my favourite number
var favouriteNumber = 3;
console.log("My favourite number is ".concat(favouriteNumber));
// Author: Aisha
// Date: 18 April, 2024
// This program performs Arithmetic Operator
console.log(2 + 6); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(32 / 4); // Division
// Question # 11:  Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names1 = ['fatima', 'hafsa', 'jannat', 'qunoot'];
var i = 0;
while (i < names1.length) {
    console.log(names1[i]);
    i++;
}
// Question # 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names2 = ['fatima', 'hafsa', 'jannat', 'qunoot'];
var a = 0;
while (a < names2.length) {
    console.log("Hello ".concat(names2[a], ", have a great day"));
    a++;
}
