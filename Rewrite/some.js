Array.prototype.some2 = function(cbfc) {
    const length = this.length
    for (let index = 0; index < length; index++) {
        if (cbfc(this[index], index, this)) {
            return true
        }

    }
}
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some2(even));