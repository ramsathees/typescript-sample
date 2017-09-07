var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 25;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("old guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Satheeskumar", "sathees");
console.log(person.name, person.username);
person.printAge();
//person.setType('cool guy'); //wont work with private method
//inhertance
var Sathees = /** @class */ (function (_super) {
    __extends(Sathees, _super);
    //name="satheesRamar";
    function Sathees(username) {
        var _this = _super.call(this, "satheesramar", username) || this;
        _this.age = 27; //you can access protected varaible and methods here but yu cant access private var and methods
        return _this;
    }
    return Sathees;
}(Person));
//const sathees=new Sathees("sathees","ramar");without constructor
var sathees = new Sathees("ramar");
console.log(sathees);
//GETTERS & SETTERS
console.log("GETTERS & SETTERS");
var Planet = /** @class */ (function () {
    function Planet() {
        this._species = "default";
    }
    Object.defineProperty(Planet.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Planet;
}());
var planet = new Planet();
console.log(planet.species);
planet.species = "AB";
console.log(planet.species);
planet.species = "Green planet";
console.log(planet.species);
//static properties and methods
console.log('static properties and methods');
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calCircumfrences = function (diameter) {
        return this.PI * diameter;
    };
    Helper.PI = 3.14;
    return Helper;
}());
console.log(2 * Helper.PI);
console.log(Helper.calCircumfrences(8));
//ABSTRACT CLASS
console.log("ABSTRACT CLASS");
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "default";
        this.budget = 1000;
    }
    Project.prototype.clacBudget = function () {
        return 2 * this.budget;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newproject = new ITProject();
console.log(newproject);
newproject.changeName("Super IT Project");
console.log(newproject);
//EXCERCISE
console.log('EXCERCISE');
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log('Toooooooooot');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var baseObject = /** @class */ (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    return baseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(baseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Person1 = /** @class */ (function () {
    function Person1() {
        this._fname = "";
    }
    Object.defineProperty(Person1.prototype, "fname", {
        get: function () {
            return this._fname;
        },
        set: function (value) {
            if (value.length > 3) {
                this._fname = value;
            }
            else {
                this._fname = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person1;
}());
var person1 = new Person1();
console.log(person1.fname);
person1.fname = "Ma";
console.log(person1.fname);
person1.fname = "Maximilian";
console.log(person1.fname);
//# sourceMappingURL=app.js.map