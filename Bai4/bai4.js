var bill = 275;

const calTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

console.log(`The bill was ${bill}, the tip was ${calTip(bill)}, and the total value ${bill+calTip(bill)}`)