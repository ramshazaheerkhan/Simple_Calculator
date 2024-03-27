
/* I am facing an error in await command which is "The current file is a CommonJS module and cannot use 'await' at the top level.ts(1309)"
To resolve this,I need to wrap my code in an asynchronous function and then call that function.*/ 
async function main() {
  const inquirer = (await import("inquirer")).default;

  const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "FirstNumber" },
    { message: "Enter second number", type: "number", name: "SecondNumber" },
    {
      message: "Select one of the operators to perform action",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]); // call for user input , await use for waiting for user data
console.log(answer);
}
 /* const { FirstNumber, SecondNumber, operator } = answer;

  let result;
  switch (operator) {
    case "Addition":
      result = FirstNumber + SecondNumber;
      break;
    case "Subtraction":
      result = FirstNumber - SecondNumber;
      break;
    case "Multiplication":
      result = FirstNumber * SecondNumber;
      break;
    case "Division":
      if (SecondNumber === 0) {
        console.log("Error: Division by zero");
        return;
      }
      result = FirstNumber / SecondNumber;
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  console.log(`Result of ${operator} is: ${result}`); 
} */

// main(); // Call the main function to start the program 
