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
const ford = new CarCl("Ford", 120);

ford.accelerate();
ford.brake();

ford.speedUS = 90;
console.log(`Ford's speed in mi/h: ${ford.speedUS}.`);
