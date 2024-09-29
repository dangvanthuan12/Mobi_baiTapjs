const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let choose = prompt(
      "What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++"
    );
    const regex = /^[0-3]$/;
    if (regex.test(choose)) {
      this.answers[choose]++;
      this.displayResults();
      this.displayResults("string");
    } else {
      window.alert("Chọn sai cú pháp");
    }
  },
  displayResults(type = "array") {
    if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    } else {
      console.log(this.answers);
    }
  },
};

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, "array");
