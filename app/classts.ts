/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class Student{
    fullName: String;
    constructor(public firstName, public lastName) {
        this.fullName = firstName+" "+lastName; 
    }
}

interface Person{
    firstName: String;
    lastName: String;
}

function greeter2(person: Person){
    return "Hello " + person.firstName + person.lastName;
}
var user  = new Student("pilath", "raj");

document.body.innerHTML = greeter2(user);
