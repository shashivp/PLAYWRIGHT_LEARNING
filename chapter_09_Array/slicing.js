let x = [10, 20, 30, 40, 50];

console.log(x.slice(1, 3));    //[20,30]

//syntax: variable name.slice(start index, end-1 index)


console.log(x.slice(0, 2));  //[10,20]


console.log(x.slice(1));  //from 1st index all will be printed

console.log(x.slice(-2));  //from -2 index all will be printed


//splice wil modify existing array so cannot use it
//slice will not modify, instead it will create new array


