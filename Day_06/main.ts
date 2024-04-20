// Question # 16 : More Guests: You just found a bigger dinner table, so now more space is available.

// Starting the program from Excercise 15
let guestList: string[] = ['Aisha', 'Afshan', 'Naeema'];

// Print statement about the guest who can't make it
console.log(`\nUnfortunately Mrs. ${guestList[1]} is not coming to the dinner.\n`);

// Modify the guest list to replace the guest who can't make it
guestList.splice(1, 1, 'Safa');

// Message print for bigger table
console.log("Good News! We have found a bigger table for dinner.\n");

// Add one new guest to the beginning of the array
guestList.unshift('Aliya');

// Add one new guest to the middle of the array
guestList.splice(guestList.length / 2, 0, "Yumna");

// Add one new guest at ending of the array
guestList.push('Sameena');

// New invitations
guestList.forEach(guests => {
    console.log(`Dear ${guests}, It is my pleasure to invite you for dinner.`);
});


// Question # 17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

console.log("\nUnfortunately, I can only invite two guests for dinner\n");

// Removing the last two guests from the list.
while(guestList.length > 2){
    let removeGuest = guestList.pop()
    console.log(`Sorry ${removeGuest}, I can't invite you to dinner.\n`);
}

// Print invitations to the remaining two guests
guestList.forEach(guests => {
    console.log(`Luckily ${guests}, you are still invited to dinner.`);
});

// Removing the last two guests from the list and print the empty array
guestList.splice(0, guestList.length);
console.log('Empty guest list:',guestList);


// Question # 18 : Seeing the World: Think of at least five places in the world you’d like to visit.

// Making the array of place to visit and prints it's original order
let placesToVisit: string[] = ['Dubai', 'Istanbol', 'Norway', 'China', 'Paris'];
console.log('\nOriginal Order:' ,placesToVisit);

// Print the array in Alphabetical Order without modifying the actual list.
console.log("\nAlphabetical Order:", [...placesToVisit].sort());

// Show that the array is still in it's original order
console.log('\nOriginal Order after sorting:', placesToVisit);

// Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Show that the array is still in it's original order
console.log('\nOriginal Order after sorting:', placesToVisit);

// Reverse the order of the list and print the array to show that its order has changed.
console.log('\nOriginal Array Reversed Order:', placesToVisit.reverse());

// Reverse the order of the list again to bring it back to the original order
console.log('\nBack to Original Order:', placesToVisit.reverse());

// Print the array to show that it's order has been changed in Alphabetical Order now
console.log('\nSorted in Alphabetical Order:', placesToVisit.sort());

// Print the array again in reverse alphabetical order to show that its order has changed.
console.log('\nOriginal Array Reverse Alphabetical Order:', placesToVisit.reverse());













