const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = bills.map((bill) => calcTip(bill));
const total = bills.map((bill, index) => bill + tips[index]); //index chỉ số hiện tại của biến bill trong hàm map
console.log(total);
