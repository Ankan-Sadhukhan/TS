"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
function greet(person) {
    return "Hello mr" + person.name + "glad that you are" + person.age;
}
// console.log(
//   greet({
//     name: "Ankan",
//     age: 21,
//   })
// );
var P = /** @class */ (function () {
    function P(name, age) {
        this.name = name;
        this.age = age;
    }
    P.prototype.greet = function () {
        return "hi mr " + this.name;
    };
    return P;
}());
var pObj = new P("Ankan", 21);
console.log(pObj.greet());
