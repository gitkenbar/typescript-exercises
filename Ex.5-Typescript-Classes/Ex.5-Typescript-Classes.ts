class Student {
    // Define the properties here
    studentName: string;
    studentAge: number;
    studentGrade: number;
    // Define the constructor here
    constructor (Name, Age, Grade) {
        this.studentName = Name;
        this.studentAge = Age;
        this.studentGrade = Grade;
     }
    // Define the displayInfo method here
    displayInfo() {
        console.log(`Name: ${this.studentName} \n Age: ${this.studentAge} \n StudentGrade: ${this.studentGrade}`)
    }
    // Define the isPassing method here
    isPassing(gradeThreshold:number) {
        let i = gradeThreshold;
        console.log(this.studentGrade);
        console.log(gradeThreshold);
        let passingQuery:boolean = (this.studentGrade >= i);
        console.log(passingQuery);
        return passingQuery;
    }
}

// Instantiate a new student object and call the methods to test your class

let St01 = new Student("Kenneth", 30, 10);
let St02 = new Student("Dusty", 30, 55);
let St03 = new Student("Topacio", 30, 100)
St01.isPassing(55);
St02.isPassing(55);
St03.isPassing(55);