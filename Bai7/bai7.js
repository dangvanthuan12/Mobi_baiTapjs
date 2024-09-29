const MarkMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / (this.height * 2);
  },
};
const JohnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / (this.height * 2);
  },
};
const BMIJohn = JohnSmith.calcBMI();
console.log(BMIJohn);
const BMIMark = MarkMiller.calcBMI();
if (BMIJohn > BMIMark) {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
} else {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
}
