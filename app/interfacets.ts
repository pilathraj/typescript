interface Person{
    firstName: String;
    lastName: String;
}

function greeter(person: Person){
    return person.firstName + " " + person.lastName;
}

var username = { firstName:"Pilath", lastName: "Raj"};

document.body.innerHTML = greeter(username);