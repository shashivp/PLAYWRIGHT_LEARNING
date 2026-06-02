//1. //it is case sensitive: will return -1
//if value not matches or not present

//2. if duplicate elements are there:
//indexOf -will return first element.
//lastIndexOf- will return last element.



let x = ["pass", "fail", "skip", "fail", "fail"];


//get value/duplicate value at first index
console.log(x.indexOf("fail"));

//get index of the value
console.log(x.indexOf("pass"));

//value not matching: -1 o/p
console.log(x.indexOf("PASS"));

//get value/duplicate value at lastindex:
console.log(x.lastIndexOf("fail"));

//get value/duplicate value at required index:
console.log(x.indexOf("fail", 2));
