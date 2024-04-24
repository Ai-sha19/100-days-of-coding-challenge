// Question 34 : Pizzas: Share your favourite pizzas and express your love for them

let favouritePizza: string[] = ['fajita', 'BBQ', 'pepperoni'];

for (let i = 0; i < favouritePizza.length; i++) {
    console.log(`I like ${favouritePizza[i]} pizza`);
}
console.log('I really love pizza!');


// Question 35 : Animals: Highlight animals with a common trait.

let animals: string[] = ["dog", "rabbit", "cat"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet`);
}
console.log('Any of these animals would make a great pet!');


// Question 36 : T-Shirt: Create a function of customizing t-shirts. 

function make_shirt(size: string, message: string) {
 console.log(`This is a ${size} size t-shirt with a message "${message}" on it`);
    
}
make_shirt('medium', 'I love TypeSciprt');


