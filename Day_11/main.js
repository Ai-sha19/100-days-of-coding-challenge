// Question # 31 : No Users: Ensure your user list is not an empty
var userNames = ['Aisha', 'Usama', 'admin', 'hamza', 'Anny'];
if (userNames.length === 0) {
    console.log('We need to find some users!');
}
else {
    userNames = [];
    console.log('All usernames have been removed. ' + userNames.length);
}
// Question # 32 : Checking Usernames: Ensure uniqueness in usernames
var current_users = ['Ahmed', 'hamna', 'Raheel', 'Asra', 'Jawaid'];
var new_users = ['Hammad', 'Hamna', 'Danish', 'raheel', 'Mustafa'];
// Making a condition for username already exist and save in condition variable
new_users.forEach(function (newUserName) {
    var condition = current_users.some(function (newCurrentUser) { return newCurrentUser.toLowerCase() === newUserName.toLowerCase(); });
    // Print different message using if-else statements
    if (condition) {
        console.log("Sorry ".concat(newUserName, " is already taken"));
    }
    else {
        console.log("This Username ".concat(newUserName, " is availabe"));
    }
});
// Question # 32 : Ordinal Numbers: Dispaly numbers with their ordinal suffixes
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 1) {
//         console.log(numbers[i] + 'st');
//     } else if (numbers[i] === 2) {
//         console.log(numbers[i] + 'nd');
//     } else if (numbers[i] === 3) {
//         console.log(numbers[i] + 'rd');
//     } else {
//         console.log(numbers[i] + 'th');
//     }
// }
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
