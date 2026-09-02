let a = prompt("Enter a number: ");

if (a > 18) {

    let b = prompt("You Have valid id for Vote : Yes or No ?");
    if (b == "yes" || b == "Yes" || b == "YES") {
        console.log("You are eligible to vote.");
    }
    else {
        console.log("You don't have Valid id !.");
    }

}
else {
    console.log("You are Under Age !");
}
