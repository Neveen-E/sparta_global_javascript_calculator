console.log("Simple Calculator");
var num1 = parseFloat(prompt("Enter the value of the first number"));
var num2 = parseFloat(prompt("Enter the value of the second number"));
var op = prompt("What operation do you want to perform?");

var answer;

if (op == "+"){
answer = num1 + num2;
}
else if (op == "-") {
  answer = num1 - num2;

}
else if (op == "*") {
  answer = num1 * num2;

}
else if (op == "/") {
  answer = num1 / num2;
}
else if (op == " "){
  answer = num1 + num2;
}
else {
  answer = "Not a valid operator"
}

alert("The answer is " + answer);
