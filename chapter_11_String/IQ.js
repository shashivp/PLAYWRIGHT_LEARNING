//1. Reverse a string (palindrome) w/o using inbuilt funtion
//2. Reverse string using inbuilt function.

// function reverseString(str) {

//     let reverse = "";

//     for (i = str.length - 1; i >=0; i--) {

//         reverse = reverse + str[i];
//     }

//     return reverse;
// }

// //console.log(reverseString("Team"));     //2 ways to print for return type.

// let y = reverseString("team");
// console.log(y);




//eg2: Palindrome: word remain same after reverse. w/o inbuilt fn

// function rString(str) {
//     let x = "";

//     for (i = str.length - 1; i >=0; i--) {
//         x = x + str[i];
//     }
//     return x;
// }
// y = rString("DAd");
// console.log(y);




//eg3: reverse string w/o inbuilt fn:

// function ReverseString(str) {
//     let emptyString = "";
    
//     for (i = str.length - 1; i>=0; i--) {
//         emptyString = emptyString + str[i];
//     }
//     return emptyString;
// }
// z = ReverseString("Shashi");
// console.log(z);





//Reverse string w/o inbuilt fn:

// function ReverseString(str) {

//     let Reverse = "";

//     for (i = str.length - 1; i >=0; i--) {
//         Reverse = Reverse + str[i];
//     }
//             return Reverse;
   
// }
// let y = ReverseString("shashi");
// console.log(y);



//eg4:

function Reverstring(str) {
    let Reverse = "";

    for (i = str.length - 1; i >=0; i--) {
        Reverse = Reverse + str[i];
    }
    return Reverse;
} 
let y = Reverstring("Dad");
console.log(y);
