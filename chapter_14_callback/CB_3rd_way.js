//callback byt arrow fn:

//eg:
function a1(item, cb1) {
    console.log("cb");
    cb1()
}

a1("200", () => {console.log("arrow fn as arg")}
)