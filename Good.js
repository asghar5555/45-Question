"use strict";
//  ===> Question No 1 <=== 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest_List = void 0;
var personName = "ERIC";
console.log("Hellow ".concat(personName, ", would you like to learn some Python today?\u201D"));
//  ===> Question No 2 <=== 
// title case
var person_name = "Ali Asghar";
console.log("title:", person_name.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
// Upper Case
console.log("uppercase:", person_name.toUpperCase());
// Lower Case
console.log("lowercase:", person_name.toLowerCase());
//  ===> Question No 3 <=== 
var qoutes = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(qoutes, "\""));
//  ===> Question No 4 <=== 
var qoute = "A person who never made a mistake never tried anything new.";
var famous_person = "Albert Einstein";
var massage = "".concat(famous_person, " once said, \"").concat(qoute, "\"");
console.log(massage);
//  ===> Question No 5 <=== 
var personname = "\n\t Ali Asghar \t\n";
console.log(person_name);
var stripped = personname.trim();
console.log(stripped);
//  ===> Question No 6 <===
console.log(2 + 6);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
//  ===> Question No 7 <=== 
console.log(5 + 3);
//  ===> Question No 8 <=== 
var Favorite_Number = 67;
var message = "My Favorite Number is : ".concat(Favorite_Number);
console.log(message);
//  ===> Question No 9 <=== 
//My Name is : Ali Asghar
//Date : 15/April/2024
//This Program will Run Simple Code : "Hellow Ali Asghar"
console.log("Hellow Ali Asghar");
//My Name is : Ali Asghar
//Date : 15/april/2024
//This Program Will Run Simple Code : "Coding Boy"
console.log("Coding Boy");
//  ===> Question No 10 <=== 
var Coding = ["ali", "sajjad", "hassan",];
for (var i = 0; i < Coding.length; i++) {
    console.log(Coding[i]);
}
//  ===> Question No 11 <=== 
var Codings = ["ali", "sajjad", "hassan"];
var massages = "hum sab kal lunch pe jae ge : ";
for (var i = 0; i < Codings.length; i++) {
    console.log(massages + Codings[i]);
}
//  ===> Question No 12 <=== 
var Transportations = ["Bike", "car", "train", "Red Lin Bus"];
for (var i = 0; i < Transportations.length; i++) {
    console.log("This My Favorite Transportation : " + Transportations[i]);
}
//  ===> Question No 13 <=== 
var Guest_List = ["Ali", "Raza", "Sajjad", "Hassan"];
exports.Guest_List = Guest_List;
for (var i = 0; i < Guest_List.length; i++) {
    console.log("\nDear ".concat(Guest_List[i], ",\n\n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special.\n\nThank you"));
}
//  ===> Question No 14 <=== 
var guests = ["Ali", "Raza", "Sajjad", "Hassan"];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], " : \n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special. \nThank You"));
}
var Not_attend = "Raza";
var new_guests = "Wahaj";
guests[1] = new_guests;
for (var i = 0; i < guests.length; i++) {
    console.log("\nDear ".concat(guests[i], " : \n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special. \nThank You"));
}
console.log("Respected ".concat(Not_attend, " : \nWill not attend evening Dinner.\nThank You"));
//  ===> Question No 15 <=== 
var guest = ["Ali", "Raza", "Sajjad", "Hassan"];
var Notattend = "Raza";
var newguest = "Wahaj";
guest[1] = newguest;
for (var i = 0; i < guest.length; i++) {
    console.log("\nDear ".concat(guest[i], " : \n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special. \nThank You"));
}
guest.unshift("Atta", "Waqas", "Yousuf");
for (var i = 0; i < guest.length; i++) {
    console.log("\nDear ".concat(guest[i], " : \n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special. Good news! We found a bigger dinner table!\" \nThank You"));
}
//  ===> Question No 16 <=== 
var old_guest = ["Ali", "Raza", "Sajjad", "Hassan"];
var Not_attends = "Raza";
var new_guest = "Wahaj";
guests[1] = new_guests;
guests.unshift("Atta", "Waqas", "Yousuf");
console.log("\nI am Sorry! Will no Arrange Big Table.But Arrang Small Table 2 Sit Maybe 2 Guest Invite.\nThank you\n");
while (guests.length > 2) {
    var Remove_guest = guests.pop();
    console.log("Sorry! Dear ".concat(Remove_guest, " : \nWill not Invite For Evening Dinner. \nThank you"));
}
for (var i = 0; i < guests.length; i++) {
    console.log("\nDear ".concat(guests[i], " : \nDear Will Still To Invite Evening Dinner.\nThank You"));
}
guests.splice(0, 2);
console.log(guests);
//  ===> Question No 17 <=== 
var locations = ["Canda", "Dehli", "Falastin", "Pakistan", "Balochistan"];
console.log("\nOriginal : ".concat(locations));
console.log("Copy : " + __spreadArray([], locations, true).sort());
console.log("Original : ".concat(locations));
console.log("Copy : " + __spreadArray([], locations, true).sort().reverse());
console.log("Original : " + __spreadArray([], locations, true).sort().reverse());
console.log("Original : " + locations.sort());
console.log("Original : " + locations.sort().reverse());
//  ===> Question No 18 <=== 
var guestList = ["Ali", "butt", "ejaz", "Dina"];
var numberOfGuests = guestList.length;
console.log("I am inviting ".concat(numberOfGuests, " people to dinner."));
//  ===> Question No 19 <=== 
var countries = ["Pakistan", "Brazil", "Japan", "Germany", "Canada"];
console.log("List of countries:");
countries.forEach(function (country) {
    console.log(country);
});
var Item = {
    name: "Notebook",
    quantity: 10,
    price: 2.99,
    inStock: true,
    tags: ["stationery", "school", "office"]
};
console.log(Item);
//  ===> Question No 21 <=== 
var numbers = [1, 2, 3, 4, 5];
// Intentional error: Accessing an index out of bounds
console.log(numbers[5]); // This will cause an error because the valid indices are 0-4
// Corrected code
console.log(numbers[4]); // This will correctly log the last element of the array
//  ===> Question No 22 <=== 
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False
var P_age = 25;
console.log("Is age == 25? I predict True.");
console.log(P_age == 25); // True
console.log("Is age > 30? I predict False.");
console.log(P_age > 30); // False
var person = 'Ali';
console.log("Is name != 'Bob'? I predict True.");
console.log(person != 'Bob'); // True
console.log("Is name == 'Ali'? I predict False.");
console.log(person == 'Ali'); // False
var isStudent = true;
console.log("Is isStudent == true? I predict True.");
console.log(isStudent == true); // True
console.log("Is isStudent == false? I predict False.");
console.log(isStudent = false); // True
var scores = [85, 90, 78];
console.log("Is scores.length == 3? I predict True.");
console.log(scores.length == 3); // True
console.log("Is scores.length == 5? I predict False.");
console.log(scores.length == 5); // False
//  ===> Question No 23 <=== 
var fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // True
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana'); // True
console.log("Is fruit == 'Apple'? I predict False.");
console.log(fruit == 'Apple'); // False
console.log("Is fruit != 'apple'? I predict False.");
console.log(fruit != 'apple'); // False
// Using the lower case function
var city = 'London';
console.log("Is city.toLowerCase() == 'london'? I predict True.");
console.log(city.toLowerCase() == 'london'); // True
console.log("Is city.toLowerCase() == 'LONDON'? I predict False.");
console.log(city.toLowerCase() == 'LONDON'); // False
// Numerical tests
var num = 100;
console.log("Is number == 100? I predict True.");
console.log(num == 100); // True
console.log("Is number != 100? I predict False.");
console.log(num != 100); // False
console.log("Is number > 50? I predict True.");
console.log(num > 50); // True
console.log("Is number < 150? I predict True.");
console.log(num < 150); // True
console.log("Is number >= 100? I predict True.");
console.log(num >= 100); // True
console.log("Is number <= 50? I predict False.");
console.log(num <= 50); // False
// Using "and" and "or" operators
var temperature = 75;
console.log("Is temperature > 70 and temperature < 80? I predict True.");
console.log(temperature > 70 && temperature < 80); // True
console.log("Is temperature < 70 or temperature > 80? I predict False.");
console.log(temperature < 70 || temperature > 80); // False
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'cherry'];
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana')); // True
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape')); // False
// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape')); // True
console.log("Is 'banana' not in fruits? I predict False.");
console.log(!fruits.includes('banana')); // False
//  ===> Question No 24 <=== 
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
var aliens_color = 'red';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
//  ===> Question No 25 <=== 
var aliencolor = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
var aliencolors = 'yellow';
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
//  ===> Question No 26 <=== 
var aliene_color = 'green';
if (alien_color === 'green') {
    console.log("Player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}
var aliene_colors = 'yellow';
if (alien_color === 'green') {
    console.log("Player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}
var alienes_color = 'red';
if (alien_color === 'green') {
    console.log("Player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}
//  ===> Question No 27 <=== 
var age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else if (age >= 65) {
    console.log("The person is an elder.");
}
//  ===> Question No 28 <=== 
var favorite_fruits = ['mango', 'apple', 'banana'];
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
//  ===> Question No 29 <=== 
var usernames = ['nakim', 'atta', 'Jameel', 'Malik', 'Sabir'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//  ===> Question No 30 <=== 
var users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
// Removing all users
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
//  ===> Question No 31 <=== 
var current_users = ["Ali", "Baber", "Camir", "Danish", "Ejaz"];
var new_users = ["Furkan", "Majid", "Allam", "Abeer", "Hakim"];
var _loop_1 = function (new_user) {
    var userExists = current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (userExists) {
        console.log("The username ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(new_user, " is available."));
    }
};
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    _loop_1(new_user);
}
//  ===> Question No 32 <=== 
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number_1 = numbers_1[_b];
    if (number_1 === 1) {
        console.log("".concat(number_1, "st"));
    }
    else if (number_1 === 2) {
        console.log("".concat(number_1, "nd"));
    }
    else if (number_1 === 3) {
        console.log("".concat(number_1, "rd"));
    }
    else {
        console.log("".concat(number_1, "th"));
    }
}
//  ===> Question No 33 <=== 
var c_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_2 = numbers; _c < numbers_2.length; _c++) {
    var c_number_1 = numbers_2[_c];
    if (c_number_1 === 1) {
        console.log("".concat(number, "st"));
    }
    else if (c_number_1 === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (c_number_1 === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
//  ===> Question No 34 <=== 
var animals = ["Dog", "Cat", "Rabbit"];
for (var _d = 0, animals_1 = animals; _d < animals_1.length; _d++) {
    var animal = animals_1[_d];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
//  ===> Question No 35 <=== 
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and the message on it is \"").concat(message, "\"."));
}
make_shirt("Medium", "Hello World!");
//  ===> Question No 36 <=== 
function makeshirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message on it is \"").concat(message, "\"."));
}
makeshirt();
makeshirt("Medium");
makeshirt("Small", "JavaScript Rocks!");
//  ===> Question No 37 <=== 
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("New York");
describe_city("Tokyo", "Japan");
describe_city("Paris", "Nepal");
//  ===> Question No 38 <=== 
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist1", "Title1"));
console.log(make_album("Artist2", "Title2", 10));
console.log(make_album("Artist3", "Title3"));
//  ===> Question No 40 <=== 
function city_countrys(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_countrys("Lahore", "Pakistan"));
console.log(city_countrys("New York", "USA"));
console.log(city_countrys("Tokyo", "Japan"));
//  ===> Question No 41 <=== 
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["David Copperfield", "Penn Jillette", "Teller"];
show_magicians(magicians);
//  ===> Question No 42 <=== 
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
make_great(magicians);
show_magicians(magicians);
//  ===> Question No 43 <=== 
function make_great_copy(magicians) {
    var great_magicians = __spreadArray([], magicians, true);
    for (var i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = "The Great " + great_magicians[i];
    }
    return great_magicians;
}
var great_magicians = make_great_copy(magicians);
show_magicians(magicians);
show_magicians(great_magicians);
//  ===> Question No 44 <=== 
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with: ".concat(items.join(", ")));
}
make_sandwich("Ham", "Cheese");
make_sandwich("Turkey", "Lettuce", "Tomato");
make_sandwich("Peanut Butter", "Jelly", "Banana", "Honey");
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
console.log(make_car("Toyota", "Camry", ["color", "blue"], ["sunroof", true]));
console.log(make_car("Honda", "Civic", ["color", "red"], ["gps", true]));
