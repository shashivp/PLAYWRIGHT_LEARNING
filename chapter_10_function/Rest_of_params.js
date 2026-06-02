//Rets of param can take any number of arguements.
//it can be written only at the end
//it is array of object (o/p is in array format).



function test1(suit_name, ...r) {
    console.log(suit_name);
    console.log(r);
}

test1("login", 1, 2, 3);  //called with 2 param

test1("reg_page", 2,4,"hello", "hi");   //called with 4 params




