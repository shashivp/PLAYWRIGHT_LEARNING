//find : will print first value of the comparison.
//findIndex: will print index of the value.
//syntax: find(x => x > 'value'): prints value.
//syntax: findIndex(x => x < 'value'): prints index.


let x = [100, 200, 300, 400];


console.log(x.find(x => x > 101));

console.log(x.find(x => x <= 200));

console.log(x.findIndex(x => x > 200));
