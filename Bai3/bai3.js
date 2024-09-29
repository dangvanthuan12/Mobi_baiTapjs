var avgDolphins = (96 + 108 + 89) / 3
var avgKoalas = (88 + 91 + 110) / 3


if (avgDolphins > avgKoalas) {
    console.log("The winner is Dolphins")
} else if (avgDolphins = avgKoalas) {
    console.log("2 teams draw")
} else {
    console.log("The winner is Koalas")
}
avgDolphins = (97 + 180 + 101) / 3
avgKoalas = (178 + 95 + 123) / 3
var compareDolphinsWith100 = avgDolphins >= 100 ? true : false
var compareKoalasWith100 = avgKoalas >= 100 ? true : false
if (compareDolphinsWith100 && compareKoalasWith100) {
    if (avgDolphins > avgKoalas) {
        console.log("The winner is Dolphins")
    } else if (avgDolphins == avgKoalas) {
        console.log("2 teams draw")
    } else {
        console.log("The winner is Koalas")
    }
} else if (compareDolphinsWith100 && compareKoalasWith100 == false) {
    console.log("The winner is Dolphins")
} else if (compareDolphinsWith100 == false && compareKoalasWith100) {
    console.log("The winner is Koalas")
} else {
    console.log("No teams win")
}