function testVar() {
    if (true) {
        var a = 10; //Todo: Var is Visible everywhere in the functions
    }
    console.log(a); // Visible everywhere Blocks
}

function testConstAndLet() {
    let x = 15; // Visible everywhere in the functions
    if (true) {
        /*
            Todo: [ Let and const => y,z ] It is only confined to the function block, 
            Todo: And can not be visible in any other block within the functions
        */
        let y = 30;
        const z = 20;
        console.log(y, z);
    }
    console.log(x);
    // console.log(y, z); // ! Error can'not find name y,z;
}

testVar();
testConstAndLet();


var myName = "Hesham";
let myName2 = "Hesham";

if (true) {
    var myName = "Yassen";
    let myName2 = "Yassen";
}
console.log(myName);    // Output Yassen => Using Local Scope Var  
console.log(myName2);   // Output Hesham => Using Global Scope let  