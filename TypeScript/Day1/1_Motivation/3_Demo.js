var Person = /** @class */ (function () {
    function Person(n) {
        this._name = n;
    }
    Person.prototype.getName = function () {
        return this._name;
    };
    Person.prototype.setName = function (n) {
        this._name = n;
    };
    return Person;
}());
var p1 = new Person("Herin");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());
var p2 = new Person("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());
