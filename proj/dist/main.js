"use strict";
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
exports.__esModule = true;
var greet_1 = require("./greet");
function hello2(compiler) {
    console.log("Hello from " + compiler);
}
hello("TypeScript");
console.log(greet_1.sayHello("Pilathraj"));
