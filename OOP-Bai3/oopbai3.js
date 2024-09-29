function Car(make, speed) {
  this.make = make;
  this.speed = speed;
  this.accelerate = function () {
    this.speed += 10;
    console.log(`'${this.make}' going to ${this.speed} km/h`);
  };
  this.brake = function () {
    this.speed -= 5;
    console.log(`'${this.make}' slowed down to ${this.speed} km/h`);
  };
}

function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
  this.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
  };
  this.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `'${this.make}' going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  };
}

const tesla = new EV("Tesla", 120, 23);
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
