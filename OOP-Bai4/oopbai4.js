class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  getSpeedUS() {
    return this.speed / 1.6;
  }
  setSpeedUS(speed) {
    this.speed = speed * 1.6;
  }
  getMake() {
    return this.make;
  }
  setMake(make) {
    this.make = make;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} slowed down to ${this.speed} km/h.`);
  }
}
class EXCl extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  getCharge() {
    return this.charge;
  }
  setCharge(charge) {
    this.charge = charge;
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }
  accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `'${this.make}' going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  }
}
const tesla = new EXCl("Tesla", 120, 23);
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
