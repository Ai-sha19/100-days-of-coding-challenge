// Question 34 : Pizzas: Share your favourite pizzas and express your love for them
var favouritePizza = ['fajita', 'BBQ', 'pepperoni'];
for (var i = 0; i < favouritePizza.length; i++) {
    console.log("I like ".concat(favouritePizza[i], " pizza"));
}
console.log('I really love pizza!');
// Question 35 : Animals: Highlight animals with a common trait.
var animals = ["dog", "rabbit", "cat"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal, " would make a great pet"));
}
console.log('Any of these animals would make a great pet!');
// Question 36 : T-Shirt: Create a function of customizing t-shirts. 
function make_shirt(size, message) {
    console.log("This is a ".concat(size, " t-shirt with a message ").concat(message, " on it"));
}
make_shirt('medium', 'I love TypeSciprt');
