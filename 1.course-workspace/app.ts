class Person{
    name:string;
    private type:string;
    protected age:number=25;

    constructor(name:string, public username:string){
        this.name=name;
    }

    printAge(){
        console.log(this.age);
        this.setType("old guy");
    }

    private setType(type){
        this.type=type;
        console.log(this.type);
    }
}
const person=new Person("Satheeskumar","sathees");
console.log(person.name,person.username);
person.printAge();
//person.setType('cool guy'); //wont work with private method


//inhertance

class Sathees extends Person{
    //name="satheesRamar";

    constructor(username:string){
        super("satheesramar",username );
        this.age=27; //you can access protected varaible and methods here but yu cant access private var and methods
    }
}
//const sathees=new Sathees("sathees","ramar");without constructor
const sathees=new Sathees("ramar");
console.log(sathees);




//GETTERS & SETTERS
console.log("GETTERS & SETTERS");

class Planet{
    private _species:string ="default";

    get species(){
        return this._species;
    }
    set species(value:string){
        if(value.length > 3){
            this._species=value;
        }else{
            this._species="default";
        }
    }
}
let planet=new Planet();
console.log(planet.species);
planet.species="AB";
console.log(planet.species);
planet.species="Green planet";
console.log(planet.species);


//static properties and methods
console.log('static properties and methods');

class Helper{
   static PI:number=3.14;
   static calCircumfrences(diameter:number):number{
       return this.PI *diameter;
   }
}

console.log(2 * Helper.PI);
console.log(Helper.calCircumfrences(8));





//ABSTRACT CLASS
console.log("ABSTRACT CLASS");

abstract class Project{
    projectName:string="default";
    budget:number=1000;
    
    abstract changeName(name:string):void;

    clacBudget(){
        return 2 * this.budget;
    }
}


class ITProject extends Project{
   changeName(name:string):void{
       this.projectName=name;
   }
}

let newproject=new ITProject();
console.log(newproject);
newproject.changeName("Super IT Project");
console.log(newproject);



//EXCERCISE

console.log('EXCERCISE')
class Car{
    public acceleration:number=0
    constructor(public name:string){

    }
    honk(){
        console.log('Toooooooooot');
    }
    accelerate(speed:number){
        this.acceleration=this.acceleration+speed;
    }
}
 let car =new Car("BMW");
 car.honk();
 console.log(car.acceleration);
 car.accelerate(10);
 console.log(car.acceleration);


 // Exercise 2 - Two objects, based on each other ...


abstract class baseObject{
    width:number=0;
    length:number=0;
    
    
}

class Rectangle extends baseObject{
    calcSize()  {
        return this.width *this.length;
    }
}
let rectangle=new Rectangle();
rectangle.width=5;
rectangle.length=10;
console.log(rectangle.calcSize());


// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person1{
    private _fname="";

    get fname(){
        return this._fname;
    }
    set fname(value:string){
      if(value.length>3){
          this._fname=value;
      }else {
        this._fname = "";
    }
    }
}
let person1=new Person1();
console.log(person1.fname);
person1.fname = "Ma";
console.log(person1.fname);
person1.fname = "Maximilian";
console.log(person1.fname);
