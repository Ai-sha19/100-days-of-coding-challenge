// Question 37 : Large Shirts: Default values in make_shirt()

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`This is a ${size} size t-shirt with a message "${message}" on it.`);

}
make_shirt()
make_shirt('medium');
make_shirt('small', 'web developer')

// Question 38 : Cities: Describing cities with a function.

function describe_city(city: string, country: string = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('Gaza', 'Palestine');


// Question 39 : City Names: Formatting city country pairs.

function city_country(city: string, country: string): string {
    return `${city}, ${country}`
}
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Sydney', 'Australia'));