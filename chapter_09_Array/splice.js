//slice: will remove element from required index and
//replace with new value if required

//syntax: 
//varable_name.splice('from which index', 'delete count', 'replace values');


let x = [100, 200, 300, 400];

//delete from required index.
x.splice(1, 1);
console.log(x);

//delete from required index and replace value
x.splice(2, 1, 200);
console.log(x);

//don't delete the value but add value at the required index.
x.splice(2, 0, 500);
console.log(x);

//replace multiple elements
x.splice(2, 2, 1000, 400);
console.log(x);


