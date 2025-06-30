// Task 2: Arguments
// Write a script that prints a message depending on the number of arguments passed:
// - If no arguments are passed to the script, print “No argument”
// - If only one argument is passed to the script, print “Argument found”
// - Otherwise, print “Arguments found”
// - You must use console.log(...) to print all output
// - You are not allowed to use var
// - Reference: process.argv

// process.argv[0] is 'node' executable path
// process.argv[1] is the script file path (e.g., '2-arguments.js')
// Actual arguments start from process.argv[2]
const numArgs = process.argv.length - 2; // Subtract 2 to get only user-provided arguments

if (numArgs === 0) {
  console.log("No argument");
} else if (numArgs === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}