// Question # 43 : Unchanged Magicians: Preserve the original magician names while creating a new 'great' list

let magicianNames: string[] = ["Shin Lim", "Harry Houdini", "Criss Angel", "David Copperfield"];

function copyArray(arr: string[]) {
    return [...arr]
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`
    }
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const copyMagicianArray = copyArray(magicianNames);
make_great(copyMagicianArray);

console.log('\nThis is my original array:');
show_magicians(magicianNames);

console.log('\nThis is my modified copy of the array:');
show_magicians(copyMagicianArray);


// Question # 44 : Sandwiches: Summarize sandwich orders with varying ingredients.

function sandwiches(items: string[]) {
    console.log('\nThe sandwich will have:');

    items.forEach(element => {
        console.log('- ' + element);
    });
}
sandwiches(["Ham", "Cheese", "Mashrooms", "Lettuce"]);
sandwiches(["Salad", "Chicken", "Onion"]);
sandwiches(["Tomato", "Chicken", "Mayonnaise", "Cheese"]);


// Question # 45 : Create detailed car objects with flexible properties.

function storeCarInfo(manufacturer: string, modelName: string, ...additionalInfo: { [key: string]: any }[]):
    object {

    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...additionalInfo)
    }
    return carInfo;
};

let myCarDetails = storeCarInfo('Toyota', 'Corolla', { color: 'black' }, { year: 2022 }, { features: ['Navigation', 'Power window'] });
console.log(myCarDetails);



