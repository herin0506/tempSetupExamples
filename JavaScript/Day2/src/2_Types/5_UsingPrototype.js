var Person = (function () {
    function Person(name) {
        this._name = name;
    }

    Person.prototype.getName = function () {
        return this._name.toUpperCase();
    }

    Person.prototype.setName = function (name) {
        this._name = name;
    }

    return Person;
})();

var p1 = new Person("Herin");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());
