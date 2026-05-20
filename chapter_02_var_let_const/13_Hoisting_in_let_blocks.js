

let a = "SVP";

console.log(a);

function testshashi5() {

    console.log(a);
    //TDZ
    //TDZ
    //TDZ
    //TDZ
    let a = "VIP";

    console.log(a);

}

testshashi5();