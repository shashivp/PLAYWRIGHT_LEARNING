//we can store function and call it


//regular calling of fn:
function test7() {
    console.log("Hi expression");
}

test7();


//fn as expression: store fn and call by name:

const test8 = function() {              //store fn in test8 and use const always
    
    console.log("Hi expression2");
}

test8();                                //call by name