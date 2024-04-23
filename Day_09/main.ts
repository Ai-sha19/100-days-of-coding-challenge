// Question # 25 : Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow' or 'red' to a variabel called align_color.

// Version that passes
let align_color = 'green';
if (align_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Version that fails
if (align_color === 'red') {
    console.log("Congratulations! You just earned 5 points.");
}

// Question # 26 : Alien Colors # 2: Choose a color for an alien then write an if-else chain

// Version that runs the if block
if (align_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Version that runs the else block
if (align_color === 'Green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Question # 27 : Alien Colors #3: Covert your if-else chain to handle three colors: grren, yellow, red

// First version in which alien is green
if (align_color === 'green') {
    console.log("The player earned 5 points");
} else if (align_color === 'yellow') {
    console.log("The player earned 10 points");
} else if (align_color === 'red') {
    console.log("The player earned 15 points");
}

// Second version in which alien is yellow

let align_color2 = 'yellow';

if (align_color2 === 'green') {
    console.log("The player earned 5 points");
} else if (align_color2 === 'yellow') {
    console.log("The player earned 10 points");
} else if (align_color2 === 'red') {
    console.log("The player earned 15 points");
}

// Second version in which alien is red

let align_color3 = 'red';

if (align_color3 === 'green') {
    console.log("The player earned 5 points");
} else if (align_color3 === 'yellow') {
    console.log("The player earned 10 points");
} else if (align_color3 === 'red') {
    console.log("The player earned 15 points");
}