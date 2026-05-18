//Variable is function scoped.
//Variable can be redeclared.
//Variable can be reassigned
//Hoisted, initialized as undefined

var a = 20;
console.log("Global variable->", a);

function test1() {

    var a = 30;
    console.log("Inside function ->", a);

    if (true) {
        var a = 40;
        console.log("inside block->", a);
    }
    console.log("after block inside function->", a);
}
test1();