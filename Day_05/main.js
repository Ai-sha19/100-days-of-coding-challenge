// Question # 13 : Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ['Motocycle', 'Car', 'Bus', 'Train'];
transportation.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
// Question # 14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ['Aisha', 'Afshan', 'Naeema'];
guestList.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", It is my pleasure to invite you for dinner."));
});
// Question # 15 : Changing Guest List: One of your guests can’t make the dinner, so you need to send out a new set of invitations with a replacement guest.
var unableToAttend = "Afshan";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
guestList.splice(1, 1, 'Safa');
// New invitations
guestList.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", It is my pleasure to invite you for dinner."));
});
// Question # 15 : More Guests: You just found a bigger dinner table, so now more space is available.
console.log("\nMy dining table has expanded, and so has the possibility for laughter and shared moments.\n");
// Adding more guests
guestList.unshift('Aliya');
guestList.splice(guestList.length / 2, 0, "Yumna");
guestList.push('Sameena');
// New invitations
guestList.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", It is my pleasure to invite you for dinner."));
});
