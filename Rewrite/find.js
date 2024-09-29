Array.prototype.find2 = function(cbfc) {
    const length = this.length
    for (let index = 0; index < length; index++) {
        if (cbfc(this[index], index, this)) {
            return this[index]
        }

    }
}

const array1 = [5, 12, 8, 130, 44];
const found = array1.find2((element) => element > 10);
console.log(found);