// Question # 13 : Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ['Motocycle', 'Car', 'Bus', 'Train'];

transportation.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});


// Question # 14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = ['Aisha', 'Afshan', 'Naeema'];
guestList.forEach(guests => {
    console.log(`Dear ${guests}, It is my pleasure to invite you for dinner.`);
});


// Question # 15 : Changing Guest List: One of your guests can’t make the dinner, so you need to send out a new set of invitations with a replacement guest.

let unableToAttend = "Afshan";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
guestList.splice(1, 1, 'Safa');

// New invitations
guestList.forEach(guests => {
    console.log(`Dear ${guests}, It is my pleasure to invite you for dinner.`);
});





