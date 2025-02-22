'use strict';

var users = {
    name: "Hesham",
    age: 25,
    skills: ["Node.js", 'Javascript', "Mysql", "Linux"],
    available: false,
    address: {
        ksa: "Riyadh",
        yemen: {
            one: "Taiz",
            two: "Ibb",
        },
    },
    // ES6
    checkAvailable() {
        return users.available === true ? "Yse, Users Is Available." : "No, Users Is Not Available.";
    },
    // checkAvailable: function () {
    //     return users.available === true ? "Yse, Users Is Available." : "No, Users Is Not Available.";
    // },
};
/*console.log(users.name);
console.log(users.age);
console.log(users.skills.join(' | '));
console.log(users.address);
console.log(users.address.ksa);
console.log(users.address.yemen);
console.log(users.address.yemen.one);
console.log(users.checkAvailable());
console.log("\n");

console.log(users["address"]);
console.log(users["address"].ksa);
console.log(users["address"]["yemen"]["two"]);
console.log("\n");
*/



// TODO: Dynamic property access
let key = "name";
let key2 = "age";
console.log(users[key]); // Hesham
console.log(users[key2]); // 25

// TODO: Adding new properties
users.name2 = "Yassen";
users["isAdmin"] = true;
console.log(users.name2);       // Yassen
console.log(users["isAdmin"]);  // true

// TODO: // Deleting properties
delete users.name2;
console.log(users.name2);// undefined

// TODO: Checking if Properties Exist
console.log(users.hasOwnProperty(users, 'name2'));
console.log(Object.hasOwn(users, 'age')); // Modern ES6
console.log("name2" in users); // Using in operator

// TODO: // Get all keys
console.log(Object.keys(users));

// TODO: // Get all value
console.log(Object.values(users));

// TODO: // Get key-value pairs as arrays
console.log(Object.entries(users));

// TODO: Creating a copy using spread operator
let userCopy = { ...users };
let userCopy2 = { users };
userCopy.name = "Mohammed";

console.log(users.name); // "Hesham"
console.log(userCopy.name); // "Mohammed"

console.log(typeof userCopy);
console.log(userCopy);
console.log(typeof userCopy2);
console.log(userCopy2);
console.log("\n");

// TODO: Enhanced Object Literals
let carName = "GMC";
let carData = "2025";
let city = "New York";

// Before ES6
let car = {
    carName: carName,
    carData: carData,
};
// With ES6
let car2 = {
    carName,
    carData,
    city,
};
console.log(car.carName); // "GMC"
console.log(car.carData); // "2025"
console.log(car2.carName); // "GMC"
console.log(car2.carData); // "2025"
console.log("\n");

// TODO: Iterating Over Object Properties
// ?Using for...in Loop
for (let key in car2) {
    console.log(`${key}: ${car2[key]}`);
}
console.log("\n");

// ?Using Object Methods for Iteration
let product = {
    name: "Laptop",
    price: 999,
    inStock: true,
};
// Using Object.keys()
Object.keys(product).forEach((key) => {
    console.log(`${key}: ${product[key]}`);
});
console.log("\n");

// Using Object.values()
Object.values(product).forEach((value) => {
    console.log(value);
});
console.log("\n");

// Using Object.entries()
Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});