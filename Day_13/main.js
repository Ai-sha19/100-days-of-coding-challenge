// Question 37 : Large Shirts: Default values in make_shirt()
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("This is a ".concat(size, " size t-shirt with a message \"").concat(message, "\" on it."));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'web developer');
// Question 38 : Cities: Describing cities with a function.
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('Gaza', 'Palestine');
// Question 39 : City Names: Formatting city country pairs.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Sydney', 'Australia'));
