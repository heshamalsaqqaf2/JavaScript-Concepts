'use strict';

// TODO: Exm 1
let friendsName = ['Hesham', 'Marwan', 'Obad', 'Mahmmod', 'Eshaq', 'Mohammed'];
let filterFriendsName = friendsName.filter(function (element) {
    return element.startsWith("M");
});
console.log(filterFriendsName);

// TODO: Exm 2
let numbers = [6, 12, 15, 20, 17, 8, 5];

// ? Filter Arrow Functions
let filterNumbersArrow = numbers.filter((element) => element % 2 === 0);
console.log(filterNumbersArrow);

// ? Filter Arrow Functions
let filterNumbersAnonymous = numbers.filter(function (element) {
    return element % 2 === 0;
});
console.log(filterNumbersAnonymous);