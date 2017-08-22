var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter2(person) {
    return "Hello " + person.firstName + person.lastName;
}
var user = new Student("pilath", "raj");
document.body.innerHTML = greeter2(user);
