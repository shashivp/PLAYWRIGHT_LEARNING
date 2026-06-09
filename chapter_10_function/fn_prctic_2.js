// //add 2 numbers:

// const { useMemo } = require("react");

// function add(a, b) {

//     c =a+b;
//     console.log(c);
// }

// add(2, 4);


// //check number is even or odd:

// function check(a) {

//     if (a % 2 === 0) {
//         console.log("It is even number");
//     } 

//     else if (a % 2 !== 0) {
//         console.log("number is odd");
//     }
// }

// check(5);


//without parameter

// function test2() {
    
//     let number = 15;

//     if (number % 2 === 0) {
//         console.log("even");
        
//     }
//     else if (number %2 !== 0) {
//         console.log("odd");
        
//     }
// }

// test2();


//no param with return:

// function test3() {

//     let number = 18;

//     if (number % 2 === 0) {
//         return "even";
        
//     }
//     else if (number % 2 !== 0) {
//         return "odd";
        
//     }
// }

// let x = test3();
// console.log(x);


//with param with return:

function test4(number) {
    if (number % 2 === 0) {
        return "even";
    }
    else if (number %2 !== 0) {
        return "odd";
    }
}

y = test4(18);
console.log(y);

