/**
 * @name Hoisting-Function
 * @description Define a function using Function Hoisting Declaration.
 *   *  Advantages:
 *        Hoisting: A function can be called before it is defined in the code.
 *        Clarity of definition: Clear and simple form.
 *   *  Disadvantages:
 *        Less flexible: When a function needs to be stored in a variable or passed as a parameter.
 * 
 * @param {string} name - Any string.
 * @returns {string}  Return The name.
 */

console.log(greet("Hesham")); // This Is Hoisting.
function greet(name) {
  return `Hi ${name}`;
}
// *------------------------------------------------------------------------------------------------------------* //

/**
 * @name Expression-OR-Anonymous-Function
 * @description Define a function using Function Expression Declaration [Anonymous Functions].
 *   *  Advantages:
 *        Greater flexibility: A function can be passed as an argument or returned from other functions.
 *        Execution time limitation: The function is defined when the line is executed, not before.
 *   *  Disadvantages:
 *        No hoisting: The function cannot be called before it is defined.
 *
 * @param {string} userName 
 */

let printUserFullName = function (userName) {
  console.log(userName);
}
printUserFullName("Hesham Zohir Alsaqqaf");
// *------------------------------------------------------------------------------------------------------------* //

/**
 * @name Arrow-Function
 * @description Define a function using Arrow Function Declaration.
 *   *  Advantages:
 *        Abbreviated typing: Minimize typing, especially in small functions.
 *        No own 'this' property: This makes them suitable as callback functions in some cases.
 *   *  Disadvantages:
 *        Lack of this special: May be unsuitable if you need to bind the function to the context of a particular object.
 *        Not suitable for functions that need to use arguments: because they don't provide the default arguments object.
 *
 * @param {number} a - Any Number.
 * @param {number} b - Any Number.
 * @returns {number} - The Sum Of To Numbers a, b.
 */
const sumTwoNumbers = (a, b) => a + b;
console.log(`Sum = ${sumTwoNumbers(5, 9)}`);
// *------------------------------------------------------------------------------------------------------------* //

/**
 * @name Immediately-Invoked-Function-Expression-[IIFE]
 * @description Define a function using IIFE Function Declaration.
 *   *  Advantages:
 *        A function that is both defined and called at the same time. It is often used to isolate the scope and prevent 
 *          contamination of the global scope.
 *        Scope isolation: Protects variables from interfering with the rest of the code.
 *        Immediate execution: Execute the code without the need for a subsequent call.
*/
(function () {
  let message = "This is the text inside the IIFE";
  console.log(message);
})(); // Called immediately after being defined

// TODO: Trying to access the variable message outside of IIFE will produce an error
// !console.log(message); // ReferenceError: message is not defined
