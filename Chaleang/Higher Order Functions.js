/**
 * @description : Higher Order Functions Challenges
 *  * You Can Use
 *     ,
 *     _
 *     Space
 *     True => 1 => One Time Only In The Code
 * 
 *  * You Cannot Use
 *     Numbers
 *     Letters
 *  
 *  ? You Must Use [Filter + Map + Reduce + Your Knowledge]
 *  ? Order Is Not Important
 *  ? All In One Chain
 * 
 * @summary : Hesham Zohir Alsaqqaf
*/

let myString = "1,2,3,HH,e,s,h,a,m,_,Z,o,h,i,r,_,A,l,s,a,q,q,a,f,2,0,Z";

let solution = myString.split(",").map(function (element) {
    return element === '_' ? ' ' : element;

}).filter(function (element) {
    return isNaN(parseInt(element));

}).reduce(function (acc, element) {
    return `${acc}${element}`;

}).slice(true, -isNaN(myString)); // (1, -1)

console.log(solution); // Hesham Zohir Alsaqqaf
