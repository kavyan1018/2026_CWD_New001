/*

    ternary op
    condition ? true : false
*/

// u are adult or not

// let a = 18;
// //        condition?   true        :   false      
// let res =  a >= 18 ? "u are adult" : "u are not adult";
// console.log(res);


a = prompt("Enter any value :"); 

let res = a >= '0' && a <= '9' ? "U entered a number" :
          (a >= 'A' && a <= 'Z') || (a >= 'a' && a <= 'z') ? "U entered a letter" :
          "U entered a special character";

console.log(res);