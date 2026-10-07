/*

    for(){   // row rep
        for()   // cols rep 
        {
        }
    }
*/


/*  
    ******
    ******
    ******
    ******
    ******
*/


for (let i = 0; i < 5; i++) {
    // 0 to 4    -> 5
    
    let row = "";

    for (let j = 0; j < 5; j++) {   // cols    0 to 4 
        row += "*";    // row = row + "*"
    }

    console.log(row);    // 0 1 2 3 4 
}


for (let i = 0; i < 5; i++) {

    let row = "";

    for (let j = 0; j < i; j++) {
        row += "*";
    }

    console.log(row);
}