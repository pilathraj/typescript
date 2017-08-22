function greeter(person) {
    return person.firstName + " " + person.lastName;
}
var username = { firstName: "Pilath", lastName: "Raj" };
document.body.innerHTML = greeter(username);
