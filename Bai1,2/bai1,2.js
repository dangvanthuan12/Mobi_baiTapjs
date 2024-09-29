var massMark = 78
var heightMark = 1.69
var massJohn = 95
var heighJohn = 1.88

const calBMI = (mass, height) => {
    return mass / height ** 2
}

const markBMI = calBMI(massMark, heightMark)
const johnBMI = calBMI(massJohn, heighJohn)
var markHigherBMI = false
if (markBMI > massJohn) {
    markHigherBMI = true
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}
if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
}