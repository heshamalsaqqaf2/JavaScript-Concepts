'use strict';

// TODO: Exm 1
let friendsName = ['Hesham', 'Marwan', 'Obad', 'Mahmmod', 'Eshaq', 'Mohammed'];
let filterFriendsName = friendsName.filter(function (element) {
    return element.startsWith("M");
});
console.log(filterFriendsName);

// TODO: Exm 2
let numbers = [6, 12, 15, 20, 17, 8, 5];
// ? Use Filter Arrow Functions
let filterNumbersArrow = numbers.filter((element) => element % 2 === 0);
console.log(filterNumbersArrow);

// ? Use Filter Arrow Functions
let filterNumbersAnonymous = numbers.filter(function (element) {
    return element % 2 === 0;
});
console.log(filterNumbersAnonymous);


// TODO: Practice Filter Method
let mix = "A13BS2ZX";
// ?Use Anonymous Functions
let filterNumberAnonymous = mix.split("").filter(function (element) {
    return parseInt(element);
}).map(function (element) {
    return element * element;
}).join("");
console.log("Anonymous: ", filterNumberAnonymous);

// ?use Arrow Functions
let filterNumberArrow = mix.split("")
    .filter((element) => parseInt(element))
    .map((element) => element * element).join("");
console.log("Arrow: ", filterNumberArrow);
