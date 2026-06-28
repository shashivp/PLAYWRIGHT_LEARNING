// class TestCase {

//     constructor(name, status, priority) {

//         this.name = name;
//         this.status = status;
//         this.priority = priority;

//     }

//     tc1() {

//         console.log("for tc", this.name, "with status", this.status, "has priority", this.priority);
        
//     }



// }

// obj1 = new TestCase("login", "fail", "P0")

// obj1.tc1();




//eg2:

// class TestCase2 {

//     constructor(name, type) {

//         this.name = name;
//         this.type = type;
//     }

//     person() {

//         console.log("he is", this.name, "and of type", this.type);
        
//     }
// }

// obj2 = new TestCase2("shashi", "always angry");

// obj2.person();


//iq:1

class Employee {

    constructor(id, name, department) {

        this.id = id;
        this.name = name;
        this.department = department;

    }

    displayEmployee() {

        console.log("ID:", this.id, "Name:", this.name, "Department:", this.department);

    }
}

obj_3 = new Employee("101", "shahsi", "QA");

obj_3.displayEmployee();