//callback by anonymous fn:

//eg1: item is in cart, so display buy now

function display(item, callback) {
    console.log("main");
    callback()
    
}

display("shashi", function() {
    console.log("passed as arg anonymous");
    
})






//eg2: pass arg as anonymous fn:
function main(i, cb) {
    console.log("first execution");
    cb()
    
}

main(100, function() {
    console.log("fn passed as arg and executed at last");
    
})





//eg3: 
function main1(item, cb1) {
    console.log("i will always execute first");
    cb1()
    
}

main1("box", function() {
    console.log("fn added as arg and called at last");
    
})



// //eg4:
// function main2(i, cb2) {
//     console.log("main fn will execute first");
//     cb2()
// }

// main2(100, function() {
//     console.log("passed anonymous fn as arg again");
    
// })



//eg: 2nd way: by anonymous fn:
function t1(i, clbk) {
    console.log("cbbbbb fn");
    clbk()

}

t1(100, function() {
    console.log("mainnnnn fn");
    
})


//eg: anonymous cb fn:
function d1(item, calbk) {
    console.log("cbb fnnn");
    calbk()
}

d1("xyz", function() {
    console.log("im anonymous fn as arg");
    
})