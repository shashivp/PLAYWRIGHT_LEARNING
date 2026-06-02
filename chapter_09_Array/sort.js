let alp = ["shashi", "abhi", "vikas"];

alp.sort();

console.log(alp);  //abhi, shashi, vikas


let alp2 = ["SHASHI", "abhi", "Vikas"];

alp2.sort();

console.log(alp2); //uppercase will be first priority than character


let alp3 = [1, 10, 20, 2];

alp3.sort();

console.log(alp3);

//o/p: [1, 10, 2,20]: Lexicographic sorting: compares first number and print
//by default arrays are sorted in lexicographic order
//if not getting proper order use a-b and b-a



//to get in ascending order:
alp3.sort((a, b) => a - b);
console.log(alp3);


//to get in descending order:
alp3.sort((a, b) => b - a);
console.log(alp3);

