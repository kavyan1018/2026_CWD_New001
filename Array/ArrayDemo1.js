let stu = ["Harsh", "Riya", "Priya", "Amit"]

console.log(stu)


let n = Number(prompt("Enter the Size of Array :"))

let arr = []   // blank array 

for (let i = 0; i < n; i++) {
    
    arr[i] = Number(prompt("Enter the Elements :"))
    
}

console.log("Array :", arr)