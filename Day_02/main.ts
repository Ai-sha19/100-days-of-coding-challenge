/* Question # 01 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/

let famousQuote: string = 'Life is like riding a bicycle. To keep your balance, you must keep moving.';
let authorName: string = 'Albert Einstein';
console.log(authorName + ' once said, "' + famousQuote + '"');

/* Question # 02 Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message */

let famous_person: string = 'Albert Einstein';
let message: string = `${famous_person} once said, "Life is like riding a bicycle. To keep your balance, you must keep moving."`;
console.log(message);

/* Question # 03 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/

let myName: string = '\t\n  aisha  \t\n';
console.log(myName);
console.log(myName.trim());



