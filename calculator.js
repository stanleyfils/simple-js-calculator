// returns the math history value
const getHistory = () => {
  return document.getElementById("history-value").innerText;
};

// renders math history above output result
const printHistory = (num) => {
  document.getElementById("history-value").innerText = num;
};

// returns math output
const getOutput = () => {
  return document.getElementById("output-value").innerText;
};

// if statement needed here. If number is 0, return number, else, use geFormattedNumber function in order to return the number as a comma formatted number
const printOutput = (num) => {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
};

// this function reads the mth number and returns the number as a comma formatted number using toLocaleString and "en" as a parameter
const getFormattedNumber = (num) => {
  let n = Number(num);
  let value = n.toLocaleString("en");

  return value;
};

// to manipulate the output value, you first need to remove the formatted number with commas back to the original number. The character you want to replace should be placed bwtween / and /g. The character you want to replace it with should be after the comma. In this case, we're not replacing it with anything so we leave it empty.
const reverseNumberFormat = (num) => {
  return Number(num.replace(/,/g, ""));
};

// The operator class is a list of operators. Using a for loop here to access the operator classes one by one. addEventListener is used to perform an action when the user clicks.
let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    // check if id is clear and set both history and output to an empty character
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    }
    // for backspace, first convert it to the basic number format so backspace operator does not consider commas. Convert the output to a string and remove the last chaacter using the subString function and print it back
    else if (this.id == "backspace") {
      let output = reverseNumberFormat(getOutput()).toString();
      // if output has a value
      if (output) {
        output = output.substring(0, output.length - 1);
        printOutput(output);
      }
    }
  });
}

// The number class is a list of operators. Using a for loop here to access the operator classes one by one. addEventListener is used to perform an action when the user clicks.
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = reverseNumberFormat(getOutput());
    // if output is a number
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}
