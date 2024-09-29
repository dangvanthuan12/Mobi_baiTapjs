Array.prototype.filter2 = function(cbfc) {
    const newArr = []
    const length = this.length
    for (let index = 0; index < length; index++) {
        if (cbfc(this[index], index, this)) {
            newArr.push(this[index])
        }

    }
    return newArr;
}
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter2((word) => word.length > 7);

console.log(result);