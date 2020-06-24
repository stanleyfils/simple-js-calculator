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
