let amount = Number(prompt("Entee the Amount "));

let n500 = 0;
let n200 = 0;
let n100 = 0;
let n50 = 0;
let n20 = 0;
let n10 = 0;
let n5 = 0;
let n1 = 0;


if (amount >= 500) {
    n500 = parseInt(amount / 500);
    amount = amount % 500;
}

if (amount >= 200) {
    n200 = parseInt(amount / 200);
    amount = amount % 200;
}


console.log("500 - ", n500)
console.log("200 - ", n200)