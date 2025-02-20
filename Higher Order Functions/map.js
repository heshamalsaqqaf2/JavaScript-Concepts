'use strict';

let arrayNumbers = [1, 2, 3, 4, 5];

// ?Loops 
let newArrayNumbers = []; // Init Arrays 
for (let i = 0; i < arrayNumbers.length; i++) {
    newArrayNumbers.push(arrayNumbers[i] + arrayNumbers[i]);
}
console.log("For Loops: ", newArrayNumbers);

// ?Map Anonymous Functions 
let mapNum1 = arrayNumbers.map(function (element, index, arr) {
    return element + element;
}, this); // this optional
console.log("Map Anonymous: ", mapNum1);

// ?Map Arrow Functions 
let mapNum2 = arrayNumbers.map((element) => element + element);
console.log("Map Arrow: ", mapNum2);


// TODO: Exm => Practice Map Method
let ignoreNumbers = "Hes123ha4m";
let ign = ignoreNumbers.split("").map(function (element) {
    // return isNaN(parseInt(element)) ? element : "";
    if (isNaN(parseInt(element))) {
        return element;
    } return "";

}, this).join("");
console.log("Ignore Numbers: ", ign);

let swappingLetters = "hESHAm"
let sw = swappingLetters.split("").map(function (element) {
    return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase();
}).join("");
console.log("Swapping Letters: ", sw);