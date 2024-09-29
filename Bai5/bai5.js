const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log(`No team wins`);
  }
}

const dataDolphins1 = calcAverage(44, 23, 71);
const dataKoalas1 = calcAverage(65, 54, 49);
const dataDolphins2 = calcAverage(85, 54, 41);
const dataKoalas2 = calcAverage(23, 34, 27);
checkWinner(dataDolphins1, dataKoalas1);
checkWinner(dataDolphins2, dataKoalas2);
