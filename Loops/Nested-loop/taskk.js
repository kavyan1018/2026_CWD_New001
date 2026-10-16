// 18. Hollow Triangle

/*

                *
                **
                ***
                ****
                *****


*/

// *
// **
// * *
// *  *
// *****

let n = 5

for (let i = 1; i <= n; i++) {    // row

    let row = "";

    for (let j = 1; j <= i; j++) {     // cols
                                                                // 1 === 1        // 2 === 2   // 3 === 3    // 4 === 4
        // if else 
        if (j === 1 || j === i || i === n) {   //   1 === 1   -> *        // j === i   -> last cols of the  current row  i === n 
            row += "*";
        }
        else {
            row += " ";  // print the space
        }
    }

    console.log(row)
}