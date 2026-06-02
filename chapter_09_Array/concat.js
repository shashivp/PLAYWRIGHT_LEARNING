let a = [1, 2, 3, 4];

let b = [5, 6, 7, 8];

let c = a. concat(b);  //concat function will cancatenate arrays.

console.log(c);


//bu using spread (... -> will print all elements)

let d = [...a , ...b];
console.log(d);


let e = ["pass", "fail", "skip"].join("-");  //will join elements '-' will add - between elements
console.log(e);


//to check wheather it is array or not
//Array.isArray() function is used.

let x = (Array.isArray([1,2,3,4]));
console.log(x);

let x1= (Array.isArray("shahsi"));
console.log(x1);


let x2 = Array.isArray(["abc"]);
console.log(x2);