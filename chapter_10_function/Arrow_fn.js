// ' => ' arrow function
//it can be used only when return type is there
//to use arrow function: will have to remove function and return keywords, {}, 
// and use only ' => '
//it was introduced in ES6 (updated version of js)


//eg:

function test1(a, b) {
    return a+b;
}

let x = test1(10, 20);
console.log(x);


//same prgram using arrow function:

const test2 = (a, b) => (a+b);

let y = test2(10, 20);
console.log(y);