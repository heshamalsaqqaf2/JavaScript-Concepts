'use strict';

let numbers = [10, 20, 30, 40];
let reduceNumber = numbers.reduce(function (accumulator, currentElement, index, array) {
    console.log(`Accumulator ${accumulator}`);
    console.log(`Current Element ${currentElement}`);
    console.log(`Index ${index}`);
    console.log(`Array ${array}`);
    console.log(accumulator + currentElement);
    console.log(`--------------------------------------`);
    return accumulator + currentElement;
    //? Default Value Accumulator = [0] then => index = [1]
}); // Initialize Values in Accumulator = [5] then => index = [0]
console.log("Sum Array of Numbers = ", reduceNumber);

// TODO: Practice Reduce Method

