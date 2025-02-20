/**
 * Q1 Print Fall Name Using Arrow Functions
 *
 * @param {...{}} fallNames 
 * @returns {string} 
 */
let printFallNameArrowFunctions = (...fallNames) => `String [${fallNames.join("],[")}] => Done !`;
console.log(printFallNameArrowFunctions("Hesham", "Zohir", "Alsaqqaf"));

// Q2 - First Idea Sum Grope Number = 80 Using Arrow Functions
let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...numbers) => numbers[+(!Array.isArray(myNumbers))] + one + two;
console.log(`Calc 1 = ${calc(20, 50, 10, 60)}`); // 80

// Q2 - Second Idea Sum Grope Number = 80 => Smart
let calc2 = (one, two, ...numbers) => {
    if ((numbers[1] + one) === 80) return numbers[1] + one;
    return numbers[0] + one + two;
}
console.log(`Calc 2 = ${calc2(20, 50, 10, 60)}`); // 80
