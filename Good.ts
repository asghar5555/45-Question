//  ===> Question No 1 <=== 

let personName: string= "ERIC";
console.log(`Hellow ${personName}, would you like to learn some Python today?”`);


//  ===> Question No 2 <=== 

// title case
let person_name: string = "Ali Asghar"
console.log("title:", person_name.replace(/\bw/g, c => c. toUpperCase()));
// Upper Case
console.log("uppercase:", person_name.toUpperCase());
// Lower Case
 console.log("lowercase:", person_name.toLowerCase());

//  ===> Question No 3 <=== 

let qoutes: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${qoutes}"`);

//  ===> Question No 4 <=== 

let qoute: string = `A person who never made a mistake never tried anything new.`;
let famous_person: string = `Albert Einstein`;
let massage = `${famous_person} once said, "${qoute}"`;
console.log(massage);

//  ===> Question No 5 <=== 


let personname: string = `\n\t Ali Asghar \t\n`;
console.log(person_name);
let stripped: string = personname.trim();
console.log(stripped);


//  ===> Question No 6 <===

console.log(2 + 6);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);

//  ===> Question No 7 <=== 

console.log(5 + 3);

//  ===> Question No 8 <=== 

let Favorite_Number : number = 67;
let message : string = `My Favorite Number is : ${Favorite_Number}`;
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

let Coding : string[] = ["ali","sajjad","hassan",];
for (let i = 0; i<Coding.length; i++){
    console.log(Coding[i]);
}


//  ===> Question No 11 <=== 

let Codings : string[] = ["ali","sajjad","hassan"];
let massages : string = "hum sab kal lunch pe jae ge : ";
for (let i = 0; i<Codings.length; i++){
    console.log(massages + Codings[i]);
}

//  ===> Question No 12 <=== 

let Transportations : string[] = ["Bike","car","train","Red Lin Bus"];
for(let i =0; i<Transportations.length; i++){
    console.log("This My Favorite Transportation : "+ Transportations[i]);
}

//  ===> Question No 13 <=== 

let Guest_List : string[] = ["Ali", "Raza", "Sajjad", "Hassan"];
for(let i = 0; i<Guest_List.length; i++){
    console.log(`\nDear ${Guest_List[i]},\n\n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special.\n\nThank you`);
}
export{Guest_List}

//  ===> Question No 14 <=== 

let guests : string[] = ["Ali","Raza","Sajjad","Hassan"];
for(let i = 0; i < guests.length; i++){
    console.log (`Dear ${guests[i]} : \n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special. \nThank You`); 
}
let Not_attend : string = "Raza";
let new_guests : string = "Wahaj";
guests[1] = new_guests;
for(let i = 0; i < guests.length; i++){
    console.log (`\nDear ${guests[i]} : \n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special. \nThank You`); 
}
console.log(`Respected ${Not_attend} : \nWill not attend evening Dinner.\nThank You`);

//  ===> Question No 15 <=== 

let guest : string[] = ["Ali","Raza","Sajjad","Hassan"];
let Notattend : string = "Raza";
let newguest : string = "Wahaj";
guest[1] = newguest;
for(let i = 0; i < guest.length; i++){
    console.log (`\nDear ${guest[i]} : \n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special. \nThank You`); 
}
guest.unshift("Atta","Waqas","Yousuf");
for(let i = 0; i < guest.length; i++){
    console.log (`\nDear ${guest[i]} : \n I Would Be Honored To Invite You To Dinner, Your Presence Would Make the Evening Truly Special. Good news! We found a bigger dinner table!" \nThank You`); 
}

//  ===> Question No 16 <=== 
let old_guest : string[] = ["Ali","Raza","Sajjad","Hassan"];
let Not_attends : string = "Raza";
let new_guest : string = "Wahaj";
guests[1] = new_guests;
guests.unshift("Atta","Waqas","Yousuf");
console.log("\nI am Sorry! Will no Arrange Big Table.But Arrang Small Table 2 Sit Maybe 2 Guest Invite.\nThank you\n");
while(guests.length > 2){
    let Remove_guest = guests.pop();
    console.log(`Sorry! Dear ${Remove_guest} : \nWill not Invite For Evening Dinner. \nThank you`)
}
for(let i = 0; i < guests.length; i++){
    console.log (`\nDear ${guests[i]} : \nDear Will Still To Invite Evening Dinner.\nThank You`); 
}
guests.splice(0 , 2);
console.log(guests);

//  ===> Question No 17 <=== 

let locations : string[] = ["Canda","Dehli","Falastin","Pakistan","Balochistan"];
console.log(`\nOriginal : ${locations}`);
console.log("Copy : " + [...locations].sort());
console.log(`Original : ${locations}`);
console.log("Copy : " + [...locations].sort().reverse());
console.log("Original : " + [...locations].sort().reverse());
console.log("Original : " + locations.sort());
console.log("Original : " + locations.sort().reverse());


//  ===> Question No 18 <=== 

const guestList: string[] = ["Ali", "butt", "ejaz", "Dina"];
const numberOfGuests: number = guestList.length;
console.log(`I am inviting ${numberOfGuests} people to dinner.`);

//  ===> Question No 19 <=== 

const countries: string[] = ["Pakistan", "Brazil", "Japan", "Germany", "Canada"];
console.log("List of countries:");
countries.forEach((country) => {
    console.log(country);
});

//  ===> Question No 20 <=== 

interface StoreItems {
    name: string;
    quantity: number;
    price: number;
    inStock: boolean;
    tags: string[];
}
const Item : StoreItems = {
    name: "Notebook",
    quantity: 10,
    price: 2.99,
    inStock: true,
    tags: ["stationery", "school", "office"]
};
console.log(Item);

//  ===> Question No 21 <=== 

let numbers: number[] = [1, 2, 3, 4, 5];
// Intentional error: Accessing an index out of bounds
console.log(numbers[5]); // This will cause an error because the valid indices are 0-4
// Corrected code
console.log(numbers[4]); // This will correctly log the last element of the array

//  ===> Question No 22 <=== 

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru') // True

console.log("Is car == 'honda'? I predict False.")
console.log(car == 'honda') // False

let P_age = 25;
console.log("Is age == 25? I predict True.")
console.log(P_age == 25) // True

console.log("Is age > 30? I predict False.")
console.log(P_age > 30) // False

let person = 'Ali';
console.log("Is name != 'Bob'? I predict True.")
console.log(person != 'Bob') // True

console.log("Is name == 'Ali'? I predict False.")
console.log(person == 'Ali') // False

let isStudent : boolean = true;
console.log("Is isStudent == true? I predict True.")
console.log(isStudent == true);// True

console.log("Is isStudent == false? I predict False.")
console.log(isStudent = false); // True

let scores = [85, 90, 78];
console.log("Is scores.length == 3? I predict True.")
console.log(scores.length == 3) // True

console.log("Is scores.length == 5? I predict False.")
console.log(scores.length == 5) // False

//  ===> Question No 23 <=== 

let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.")
console.log(fruit == 'apple') // True

console.log("Is fruit != 'banana'? I predict True.")
console.log(fruit != 'banana') // True

console.log("Is fruit == 'Apple'? I predict False.")
console.log(fruit == 'Apple') // False

console.log("Is fruit != 'apple'? I predict False.")
console.log(fruit != 'apple') // False

// Using the lower case function
let city = 'London';
console.log("Is city.toLowerCase() == 'london'? I predict True.")
console.log(city.toLowerCase() == 'london') // True

console.log("Is city.toLowerCase() == 'LONDON'? I predict False.")
console.log(city.toLowerCase() == 'LONDON') // False

// Numerical tests
let num = 100;
console.log("Is number == 100? I predict True.")
console.log(num == 100) // True

console.log("Is number != 100? I predict False.")
console.log(num != 100) // False

console.log("Is number > 50? I predict True.")
console.log(num > 50) // True

console.log("Is number < 150? I predict True.")
console.log(num < 150) // True

console.log("Is number >= 100? I predict True.")
console.log(num >= 100) // True

console.log("Is number <= 50? I predict False.")
console.log(num <= 50) // False

// Using "and" and "or" operators
let temperature = 75;
console.log("Is temperature > 70 and temperature < 80? I predict True.")
console.log(temperature > 70 && temperature < 80) // True

console.log("Is temperature < 70 or temperature > 80? I predict False.")
console.log(temperature < 70 || temperature > 80) // False

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry'];
console.log("Is 'banana' in fruits? I predict True.")
console.log(fruits.includes('banana')) // True

console.log("Is 'grape' in fruits? I predict False.")
console.log(fruits.includes('grape')) // False

// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.")
console.log(!fruits.includes('grape')) // True

console.log("Is 'banana' not in fruits? I predict False.")
console.log(!fruits.includes('banana')) // False

//  ===> Question No 24 <=== 

let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}

let aliens_color: string = 'red';

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}

//  ===> Question No 25 <=== 

let aliencolor: string = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

let aliencolors: string = 'yellow';

if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

//  ===> Question No 26 <=== 

let aliene_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}

let aliene_colors: string = 'yellow';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}

let alienes_color: string = 'red';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}

//  ===> Question No 27 <=== 

let age: number = 30;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else if (age >= 65) {
    console.log("The person is an elder.");
}

//  ===> Question No 28 <=== 

let favorite_fruits: string[] = ['mango', 'apple', 'banana'];

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

let usernames: string[] = ['nakim', 'atta', 'Jameel', 'Malik', 'Sabir'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

//  ===> Question No 30 <=== 

let users: string[] = [];

if (users.length === 0) {
    console.log("We need to find some users!");
}

// Removing all users
users = [];

if (users.length === 0) {
    console.log("We need to find some users!");
}


//  ===> Question No 31 <=== 

let current_users: string[] = ["Ali", "Baber", "Camir", "Danish", "Ejaz"];
let new_users: string[] = ["Furkan", "Majid", "Allam", "Abeer", "Hakim"];

for (let new_user of new_users) {
    let userExists = current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase());
    if (userExists) {
        console.log(`The username ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}

//  ===> Question No 32 <=== 

let number : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

//  ===> Question No 33 <=== 

let c_number : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let c_number of numbers) {
    if (c_number === 1) {
        console.log(`${number}st`);
    } else if (c_number === 2) {
        console.log(`${number}nd`);
    } else if (c_number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

//  ===> Question No 34 <=== 

let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

//  ===> Question No 35 <=== 

function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message on it is "${message}".`);
}

make_shirt("Medium", "Hello World!");

//  ===> Question No 36 <=== 

function makeshirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message on it is "${message}".`);
}

makeshirt();
makeshirt("Medium");
makeshirt("Small", "JavaScript Rocks!");

//  ===> Question No 37 <=== 

function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

describe_city("New York");
describe_city("Tokyo", "Japan");
describe_city("Paris", "Nepal");


//  ===> Question No 38 <=== 

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));


//  ===> Question No 39 <=== 

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album("Artist1", "Title1"));
console.log(make_album("Artist2", "Title2", 10));
console.log(make_album("Artist3", "Title3"));

//  ===> Question No 40 <=== 

function city_countrys(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_countrys("Lahore", "Pakistan"));
console.log(city_countrys("New York", "USA"));
console.log(city_countrys("Tokyo", "Japan"));

//  ===> Question No 41 <=== 

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller"];

show_magicians(magicians);

//  ===> Question No 42 <=== 

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

make_great(magicians);
show_magicians(magicians);

//  ===> Question No 43 <=== 

function make_great_copy(magicians: string[]): string[] {
    let great_magicians = [...magicians];
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = "The Great " + great_magicians[i];
    }
    return great_magicians;
}

let great_magicians = make_great_copy(magicians);
show_magicians(magicians);
show_magicians(great_magicians);

//  ===> Question No 44 <=== 

function make_sandwich(...items: string[]): void {
    console.log(`You ordered a sandwich with: ${items.join(", ")}`);
}

make_sandwich("Ham", "Cheese");
make_sandwich("Turkey", "Lettuce", "Tomato");
make_sandwich("Peanut Butter", "Jelly", "Banana", "Honey");

//  ===> Question No 45 <=== 

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

console.log(make_car("Toyota", "Camry", ["color", "blue"], ["sunroof", true]));
console.log(make_car("Honda", "Civic", ["color", "red"], ["gps", true]));