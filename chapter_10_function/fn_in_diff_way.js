//difference between fn , fn as expression, and arrow fn

//for arrow and exp: cannot call before fn defn:



//check if statuscode is > 200 and <300 then pass:


//regular function

function test1(status) {
    if  (status >= 200 && status < 300);

    console.log("pass");
}

test1();




//fn as expression:

const test2 = function(status2) {

    if (status2 >= 200 && status2 <= 300);

    console.log("pass as expression");
}

test2();




//fn as arrow fn:

const test3 = (status3) => {
    if (status3 >= 200 && status3 <=300);
    console.log("pass as arrow");
}

test3();