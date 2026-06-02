//2 ways to create array


//type-1 -always used this type for automation
let browser = ["chrome", "firefox", "safari"]

//to access array elements
console.log(browser[1]);

//type-2   "new Array()"
browser = new Array("safari", "chrome", "firefox");
console.log(browser);


//type-3

let test = Array.of(1, 2, 4);
console.log(test);


//eg2:

let a = [10, 20, 30];

console.log(a)


//eg3:

a = new Array(10, 20, "firefox");
console.log(a);


//eg4: t1:

let b = [20, 40];
console.log(b[1]);


//eg5: t2:

b = new Array("shahsi", 2, "k");
console.log(b[1]);


//eg6: t1

let c = [200, 400];
console.log(c.at(-1));

// eg7: t2

c =new Array("svp", 10, 7.5);
console.log(c.at(-2));

//eg8: type3

let d = Array.of(10, 20, "shashi");
console.log(d[1]);
console.log(d.at(-3));

//eg9: type3

let test1 = Array.of(100, 200, 400);
console.log(test1);

//eg 10: type3

let test2 = Array.of("one", "two", 3);
console.log(test2.at(-1));