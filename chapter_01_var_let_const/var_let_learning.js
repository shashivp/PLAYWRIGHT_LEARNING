//variable is a container for storing data values
//variable is function scoped
//variable can be redeclared and updated

var a = 20;

console.log("Global ->", a);

function testShashi() {

    var a = 30;

    console.log("Inside function ->", a);

    if (true) {

        var a = 40;
        console.log("Inside if ->", a);

    }

    console.log("final ->", a); 

}

testShashi();
    
