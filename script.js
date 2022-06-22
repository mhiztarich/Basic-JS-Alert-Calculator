// SIGN INDICATES THE MATHEMATICAL
// OPERATTION THE USER HOPES TO CARRY OUT

const sign = prompt(
  "What operation are you carring out? \n Either +, -, *, or /"
);

// FIRST/INITIAL NUMBER

const numOne = parseFloat(prompt("First number"));

// SECOND NUMBER

const numTwo = parseFloat(prompt(numOne + sign));


// FUNCTIONALITY

if (sign === "-") {

// SUBTRACTION FUNCTIONALITY

  result = numOne - numTwo;

} else if (sign == "*") {

// MULTIPLICATION FUNCTIONALITY

  result = numOne * numTwo;

} else if (sign == "/") {

// DIVISION FUNCTIONALITY

  result = numOne / numTwo;

} else if (sign == "+") {

// ADDITION FUNCTIONALITY

  result = numOne + numTwo;

} else if (sign == "") {

// IF NO SIGN/OPERATION WAS INPUTED

  alert("No operation carried out");

} else {

// IF SOMETHING ELSE THAT ISN'T VALID IS INPUTED

  alert("Wrong operation");
}

// HOW RESULT IS DISPLAYED

alert("Answer is " + result);

// WHAT NEXT AFTER RESULT

alert("Reload the page to carry out another operation");
