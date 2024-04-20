// Question # 19 : Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


// Program 14 to 18
let guestList: string[] = ['Aisha', 'Afshan', 'Naeema'];

// Modify the guest list to replace the guest who can't make it
guestList.splice(1, 1, 'Safa');

// Add one new guest to the beginning of the array
guestList.unshift("Aliya");

// Add one new guest to the middle of the array
guestList.splice(guestList.length / 2, 0, "Yumna");

// Add one new guest at ending of the array
guestList.push('Sameena');

// Using while loop to remove guests from the list until only two guests remain
while (guestList.length > 2) {
    const removeGuest = guestList.pop();
}

// Removing the last two guests from the list and print the empty array
guestList.splice(0, guestList.length);
console.log('Empty guest list:',guestList);

// Print a message to the number of people inviting to the dinner
console.log(`Total number of guests are : ${guestList.length}`);


// Question # 20 : Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languages: string[] = ['html', 'css', 'javascript', 'python'];
console.log("Languages I'd like to learn:");

languages.forEach(computerLanguages => {
    console.log(computerLanguages);
});


// Question # 20 : They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let studentBio : {name: string, rollNo: number, Course: string } = {
    name: 'Aisha',
    rollNo: 93272,
    Course: 'Artificial Intelligence'
};
console.log('Student Bio:',studentBio);
