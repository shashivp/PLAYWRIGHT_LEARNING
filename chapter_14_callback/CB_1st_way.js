// function test1() {
//     console.log("i'm CB function");
    
// }

// function main1(Item1, CB) {
//     console.log("im main fn");
//     CB();
    
// }

// main1("It1", test1);

// main1("It2", test1);












//eg2:
function x1() {
    console.log("CB fn");
    
}

function x2(i, CB) {
    console.log("main fn");
    CB()
    
}

x2(1, x1)












//eg3:
function clickButton() {
    console.log("now will click button");
    
}

function loadingPage(wait, callack) {
    console.log("Page is loaded");
    callack()
    
}

loadingPage(10, clickButton)












//eg4:
function overDone() {
    console.log("Over completed");
    
}

function ball6(i, callback) {
    console.log("last ball is bowled");
    callback()
}

ball6(6, overDone)












//eg5: if id card is there allow entry
function entry() {
    console.log("so entry is allowed");
    
}

function showCard(name, callback) {
    console.log("i have the employee card");
    callback()
    
}

showCard("shashi", entry)





//eg: callback first way:
function t1() {
    console.log("cbbbb fn")
}

function t2(item, callbck) {
    console.log("mainnnn fn");
    callbck()
    
}

t2("my item", t1)