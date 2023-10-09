var Student = /** @class */ (function () {
    // Define the constructor here
    function Student(Name, Age, Grade) {
        this.studentName = Name;
        this.studentAge = Age;
        this.studentGrade = Grade;
    }
    // Define the displayInfo method here
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.studentName, " \n Age: ").concat(this.studentAge, " \n StudentGrade: ").concat(this.studentGrade));
    };
    // Define the isPassing method here
    Student.prototype.isPassing = function (gradeThreshold) {
        var i = gradeThreshold;
        console.log(this.studentGrade);
        console.log(gradeThreshold);
        var passingQuery = (this.studentGrade >= i);
        console.log(passingQuery);
        return passingQuery;
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var St01 = new Student("Kenneth", 30, 10);
var St02 = new Student("Dusty", 30, 55);
var St03 = new Student("Topacio", 30, 100);
St01.isPassing(55);
St02.isPassing(55);
St03.isPassing(55);
