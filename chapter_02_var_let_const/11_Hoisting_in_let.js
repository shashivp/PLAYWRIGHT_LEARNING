//ReferenceError: Cannot access 'a' before initialization
//if we try to print or access before initialization, we'll get referrence error
//until let a is initialized tat zone is called as TDZ
//Temporal Dead Zone
//let and constant  will not allow to access before initialization



console.log(a)
//TDZ
//TDZ
//TDZ
//TDZ
let a = "shashi"

console.log(a);
