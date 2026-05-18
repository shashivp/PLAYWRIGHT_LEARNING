//let is block scoped
//let can be reassigned
//let cannot be redeclared in same scope
//Hoisted, not initialized


let a =50;
console.log("Global variable->", a);

function testshashi2() {
    let a = 60;
    console.log("inside function->", a);

    if (true) {
        let a = 70;
        console.log("inside block->", a);
    }
    console.log("after block inside function->", a);
}

testshashi2();






