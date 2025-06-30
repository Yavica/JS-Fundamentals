// Task 5: An Integer
// Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:
// - If the argument can’t be converted to an integer, print “Not a number”
// - You must use console.log(...) to print all output
// - You are not allowed to use var
// - You are not allowed to use try/catch

const firstArg = process.argv[2];
const number = parseInt(firstArg); // Convert the argument to an integer

// Check if the result of parseInt is NaN (Not-a-Number)
// If parseInt cannot parse a valid integer, it returns NaN.
// Number.isNaN() is a reliable way to check for NaN.
if (Number.isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}