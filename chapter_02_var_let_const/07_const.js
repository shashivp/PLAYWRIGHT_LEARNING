//const is block scoped
//const cannot be redeclared in the same scope
//const cannot be reassigned
//Hoisted, not initialized
//must be initialized atr declaration

const a =80;
console.log("global variable->", a);

function testshashi3() {
    const a = 90;
    console.log("inside function-.", a);

    if (true) {
        const a = 100;
        console.log("inside block->", a);
    }
    console.log("after block inside function->", a);
}

testshashi3();



