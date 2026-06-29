//input is = "a2b3c4"

//output should be a 2 times b 3 times c 4times
// i.e = aabbbcccc


// let input = "a1b2c3";
// let output = "";

// //step-1: visit every char one by one
// for (let i = 0; i < input.length; i++) {

// //check wheather current char is letter    
//     if(input[i] >= 'a' && input[i] <= 'z') {

// //take the number present after the letter
//         let count = Number(input[i+1]);

// //repeat the letter        
//         for(j = 0; j < count; j++) {

//             output += input[i];

//         }
//     }
// }
// console.log(output);


//eg2: h2o4d6  o/p = hhoooodddddd

let input = "h1o2d3";
let output = "";


//step1: visit every char one by one
for(let i = 0; i < input.length; i++) {

//step2: check whether character is alpabet    
    if(input[i] >= 'a' && input[i] <='z') {

//step3: if alphabet, take number present after the alphabet        
        let count = Number(input[i+1]);

//step4: repeat the alphabet and print
        for(let j = 0; j < count; j++)

            output += input[i];
    }
}
console.log(output);

