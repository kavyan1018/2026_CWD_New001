/*

        if(condition){
            // code to be executed if condition is true
        }
        else if(){
            // 2nd condition code
        }
        else{
            // else code 
        } 
*/

let a = Number(prompt("Enter the A Number : "));
let b = Number(prompt("Enter the B Number : "));
let c = Number(prompt("Enter the C Number : "));


if (a > b && a > c) {
    console.log("a is Max");
}
else if (b > a && b > c) {
    console.log("b is Max");
}
else {
    console.log("c is Max");
}