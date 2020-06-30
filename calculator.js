const getHistory = () => {
  return document.getElementById("history-value").innerText;
};

const printHistory = (num) => {
  document.getElementById("history-value").innerText = num;
};

const getOutput = () => {
  return document.getElementById("output-value").innerText;
};

const printOutput = (num) => {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
};

const getFormattedNumber = (num) => {
  let n = Number(num);
  let value = n.toLocaleString("en");

  return value;
};

const reverseNumberFormat = (num) => {
  return Number(num.replace(/,/g, ""));
};

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    alert("the operator clicked:" + this.id);
  });

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    alert("the number clicked:" + this.id);
  });
}
