let car = {
    name : 'Fortuner',
    color : 'red',
    speed : 120,
    run : function () {
        console.log("car is running");
    }
}
// console.log(car.run);

function cars(givenname,givencolor,givenspeed) {
    this.name = givenname;
    this.color = givencolor;
    this.speed = givenspeed;
    this.run = function(){
        console.log(` ${this.name} is running`);
    }
    this.analyze = function(){
        console.log(` ${this.name} is slower by ${200 - this.speed} KM/H than mercedes` );
    }
}
let car1 = new cars('Fortuner','black',150);
// console.log(car1.analyze);
car2 = new cars('Scorpio','white',130);
car3 = new cars('Brio','red',170);
console.log(car1.color,car2.speed,car3.name);
