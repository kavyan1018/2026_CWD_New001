let m = Number(prompt("Enter marks of maths: "));
let p = Number(prompt("Enter marks of physics: "));
let c = Number(prompt("Enter marks of chemistry: "));
let com = Number(prompt("Enter marks of computer: "));
let b = Number(prompt("Enter marks of biology: "));


let sum = m + p + c + com + b;

let percentage = (sum / 500) * 100;

if (percentage >= 90) {
    console.log("A Grade")
}
else if (percentage >= 80 && percentage < 90) {

    console.log("B Grade")

}
else if (percentage >= 70 && percentage < 80) {

    console.log("C Grade")

} else if (percentage >= 60 && percentage < 70) {

    console.log("D Grade")

}
else if (percentage >= 50 && percentage < 60) {

    console.log("E Grade")

}
else if (percentage >= 40 && percentage < 50) {

    console.log("E Grade")

}
else {
    console.log("Failed")
}