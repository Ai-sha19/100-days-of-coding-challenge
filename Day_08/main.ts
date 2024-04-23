// Question # 22 : Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// // Index Error
// let pakCricketTeam: string[] = ['Rizwan', 'Babar', 'Fakhar', 'Shaheen', 'Iftikhar'];
// console.log(pakCricketTeam[5]);

// // Correction
// console.log(pakCricketTeam[2]);


// /* Question # 23 : Conditional Tests: Write a series of conditional tests. Predict the result of each test*/

// Test # 1
let fruit = 'Apple';
console.log("Is fruit == 'apple'? I predict False.")
console.log(fruit == 'apple');

// Test # 2
let vegetable = 'Potato';
console.log("Is vegetable === 'potato'? I predict True.")
console.log(vegetable.toLowerCase() === 'potato');

// Test # 3
let num1 = 30;
console.log("Is number <= 29 ? I predict False.")
console.log(num1 <= 29);

// Test # 4
let num2 = 100;
console.log("Is num2 !== 101 ? I predict True.")
console.log(num2 !== 101);

// Test # 5
let subject = "math";
console.log("Is subject == 'science' ? I predict False.")
console.log(subject == 'science');

// Test # 6
let Temperature = 24;
console.log("Is Temperature > 14 ? I predict True.")
console.log(Temperature > 14);

// Test # 7
let weather = "Hot";
console.log("Is weather == 'cold' ? I predict False.")
console.log(weather == 'cold');

// Test # 8
let gadgets = 'mobile';
console.log("Is gadgets != 'tablet' ? I predict True.")
console.log(gadgets != 'tablet');

// Test # 9
let num3 = 1000;
console.log("Is num3 < 1000 ? I predict False.")
console.log(num3 < 1000);

// Test # 10
let friend = 'afshan';
console.log("Is friend !== 'otherfriends' ? I predict True.")
console.log(friend !== 'otherfriends');


// Question # 24 : More Conditional Tests:  Expand your conditional tests to cover a wider range of comparisons

console.log("Tests for equality and inequality with strings:");
console.log('Aisha' === 'Aisha');
console.log('Aisha' !== 'Aisha');

console.log("Tests using the lower case function:");
console.log("CAR".toLowerCase() == "car");
console.log("CAR".toLowerCase() === "Car");

console.log("Numerical tests involving equality and inequality:");
console.log(20 == 20);
console.log(25 !== 25);

console.log("Numerical tests involving greater than:");
console.log(45 > 40);
console.log(10 > 20);

console.log("Numerical tests involving less than:");
console.log(25 < 30);
console.log(100 < 20);

console.log("Numerical tests involving greater than or equal to:");
console.log(2 >= 2);
console.log(4 >= 5);

console.log("Numerical tests involving less than or equal to:");
console.log(0 <= 1);
console.log(25 <= 10);

console.log("Tests using 'and' and 'or' operators:");
console.log(true && true);
console.log(true && false);
console.log(false || true);
console.log(false || false);


let names: string[] = ['alishba', 'samra', 'javeria', 'yumna'];

console.log("Test whether an item is in a array:");
console.log(names.includes('alishba'));

console.log("Test whether an item is not in a array:");
console.log(!names.includes('samra'));










