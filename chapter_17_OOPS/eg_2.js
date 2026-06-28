// class student {

//     constructor(math, science, english) {

//         this.math = math;
//         this.science = science;
//         this.english = english;

//     }

//     addMarks() {
//         let add = this.math + this.science + this.english;
//         console.log(add);
        

//     }

//     calculateAVG() {
//         let AVG = (this.math + this.science + this.english) / 3;
//         console.log(AVG);
        
//     }

//     displayResults() {
//         console.log("math=", this.math, "sciemce=", this.science, "english=", this.english);
        
//     }
// }

// obj_4 = new student(80, 90, 70);
// obj_4.addMarks();
// obj_4.calculateAVG();
// obj_4.displayResults();





class Result {

    constructor(name, score) {
        this.name = name;
        this.score = score;

    }

    annual() {

        console.log("name is", this.name, "&scored", this.score);
    
    }

}

ob_1 =  new Result("shashi", 98);
ob_1.annual();