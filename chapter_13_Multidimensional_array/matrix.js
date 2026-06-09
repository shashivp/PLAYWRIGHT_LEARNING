//row and column start from zero:
//for 3 * 3 matrix is called as Grid


//eg1: print all elements of matrix:
// let matri = [[1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]];

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(matri[i] [j]);
//     }
// }


//to print all elements:

// let Grid = [[1, 2, 3, 4],
//             [4, 5, 6, 7],
//             [7, 8, 9, 10],
//             [11, 12, 13, 14]];


// for (let i = 0; i <4; i++) {
//     for (let j = 0; j < 4; j++) {
//         console.log(Grid[i] [j]);
//     }
// }            


//eg3:

let x = [[1, 2, 3],                     //empty value of the column prints undefined
         [4, 5, 6],                     //empty value of the column prints undefined
         [7, 8, 9, 10]];

for (let i = 0; i < 3; i++) {           //for row
    for (let j = 0; j < 4; j++) {       //for column
        console.log(x[i][j]);           //prints value of particular index
        
    }
}