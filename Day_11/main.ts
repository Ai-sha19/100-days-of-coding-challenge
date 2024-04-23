// Question # 31 : No Users: Ensure your user list is not an empty

let userNames: string[] = ['Aisha', 'Usama', 'admin', 'hamza', 'Anny'];
if (userNames.length === 0) {
    console.log('We need to find some users!');
} else {
    userNames = []
    console.log('All usernames have been removed. ' + userNames.length);
}

// Question # 32 : Checking Usernames: Ensure uniqueness in usernames

let current_users: string[] = ['Ahmed', 'hamna', 'Raheel', 'Asra', 'Jawaid'];
let new_users: string[] = ['Hammad', 'Hamna', 'Danish', 'raheel', 'Mustafa'];

// Making a condition for username already exist and save in condition variable
new_users.forEach(newUserName => {
    let condition = current_users.some(newCurrentUser => newCurrentUser.toLowerCase() === newUserName.toLowerCase())

    // Print different message using if-else statements
    if (condition) {
        console.log(`Sorry ${newUserName} is already taken`);
    } else {
        console.log(`This Username ${newUserName} is availabe`);
    }
})

// Question # 33 : Ordinal Numbers: Dispaly numbers with their ordinal suffixes

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === 1) {
        console.log(numbers[i] + 'st');

    } else if (numbers[i] === 2) {
        console.log(numbers[i] + 'nd');

    } else if (numbers[i] === 3) {
        console.log(numbers[i] + 'rd');

    } else {
        console.log(numbers[i] + 'th');
    }
}