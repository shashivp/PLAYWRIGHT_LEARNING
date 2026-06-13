//defn: a fn passed into a another fn as an arg which is then executed 
// once after the main fn is executed is called cb fn
//cb fn wil always execute at last.
//we will not prefer cb fn in realtime automation becoz,
// in every fn we have to add cb fn which is not preferable in automation.
//in automation callback is done only once, so callback functions are not used for automation
// callback, callback hell and callback pyramid: multiple fns and multiples cbs is
// called cb hell.
//if cb hell is extended it becomes cb pyramid.
//cb with parameter is possible
//cb with return is possible
//eg for pyramid: open browser: wait : go to login page : wait : enter details and 
// click login : wait for page to load:



//logic:

// 1. Define the callback function
function logGoodbye() {
    
    console.log("Goodbye!");
}

// 2. Define the main function that accepts the callback
function greet(name, callback) {
    
    console.log(`Hello, ${name}!`);
    
    callback(); // 3. Execute the callback function
}

// 4. Pass 'logGoodbye' as an argument (without parentheses)
greet("Alice", logGoodbye); 



// eg:2

function test1() {
    console.log("will execute as callback");
    
}

function test2(item, test1) {
    console.log("i'm main fn");
    test1();
}

//first way of CB: normal cb.
//test2("item1", test1);

//2nd way of CB: anonymous fn.
test2("item2", function() {
    console.log("anonymous fn");
    
});


//3rd way: arrow fn.
test2("item3", () => {
    console.log("arrow fn");
    
})

