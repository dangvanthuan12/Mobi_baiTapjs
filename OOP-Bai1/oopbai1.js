function Car(make, speed) {
  this.make = make;
  this.speed = speed;
  this.accelerate = function () {
    this.speed += 10;
    console.log(`'${this.make}' going to ${this.speed} km/h`);
  };
  this.brake = function () {
    this.speed -= 5;
    console.log(`'${this.make}' going to ${this.speed} km/h`);
  };
}

const bmw = new Car("BMW", 120);
bmw.accelerate();
bmw.brake();
const mercedes = new Car("Mercedes", 95);
mercedes.accelerate();
mercedes.brake();
