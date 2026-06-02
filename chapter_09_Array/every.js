//every: will check element with condition and
//if all elements must satisfy the condition: true
//if any one  element does not satisfy condition: false
//rarely used in automation

//syntax: [].every(condition using arrow);


let a = [10, 20, 30, 40].every(x => x >= 5);

console.log(a);  //all elements satisfied condition: true


let b = [50, 40, 10].every(c => c >= 40);

console.log(b);  //all elements does not satisfy condition: false


let d = [100, 200].every(f => f >= 20);

console.log(d);


//real time automation eg:

let f = [200, 201, 204].every(statusCode => statusCode >= 200);

console.log(f);



//some() -in this function atleast one condition should satisfy then will print true
//if no condition is satisfied will print false

//syntax: [].some(condition using arrow);


//eg:

//eg for true condition:
let g = [100, 200].some(h => h >=200);
console.log(g);  //one element satisfied the condition so true


// //eg for false condition:
let h = [200, 300].some(j => j < 200);
console.log(h);  //all elements does not satisfy the condition so false


//multiple conditions in arrow function:

let y = [100, 200, 300].every(s => (s > 90) && (s < 400));

console.log(y);  //all conditions satisfied: true


let z  = [100, 200, 500].every(w => (w > 90) && (w < 400));

console.log(z);  //all conditions not satisfied: false

