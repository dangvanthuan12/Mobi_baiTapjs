Array.prototype.map2 = function(cbfc) {
    const newArr = []
    const length = this.length
    for (let index = 0; index < length; index++) {
        newArr.push(cbfc(this[index], index, this))

    }
    return newArr;
}

const arrNum = [5, 8, 5, 1, 2]

const changeVulue = arrNum.map2((ele, index, array) => {
    console.log(index);
    return ele * 2
})
console.log(changeVulue);