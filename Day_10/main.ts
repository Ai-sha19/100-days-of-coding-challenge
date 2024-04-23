// Question # 28 : Stages of Life: determines a person’s stage of life with an if else chain.

let personAge : number = 40;
 if(personAge < 2) {
    console.log("The person is a baby.");
    
 } else if (personAge >= 2 && personAge < 4) {
    console.log("The person is a toddler.");
    
 } else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid.");
    
 } else if (personAge >= 13 && personAge < 20) {
    console.log("The person is a teenager.");
    
 } else if (personAge >= 20 && personAge < 65) {
    console.log("The person is an adult.");
    
 } else {
    console.log("The person is an elder.");
    
 }

// Question # 29 : Favorite Fruit: Create an array of your favorite fruits, and check if certain fruits are included

let favorite_fruits : string[] = ['Mango', 'Banana', 'Strawberry'];

if(favorite_fruits.includes('Mango')) {
    console.log("I really like mangoes!!");
    
} if(favorite_fruits.includes("Banana")) {
    console.log("I really like bananas!!");
    
} if(favorite_fruits.includes('Strawberry')) {
    console.log("I really like strawberries!!");
    
} if(favorite_fruits.includes('Cherry')) {
    console.log("I really like cherries!!");
    
} if(favorite_fruits.includes('Apple')) {
    console.log("I really like apples!!");
    
}

// Question # 30 : Hello Admin: Greet users differently, especially 'admin'.

let userNames: string[] = ['Aisha', 'Usama', 'admin', 'hamza', 'Anny'];

userNames.forEach (users => {
    if (users === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
        
    } else {
        console.log(`Hello ${users}, thank you for logging in again`);
        
    }
})