// Task 3: Value of my argument
// Write a script that prints the first argument passed to it:
// - If no arguments are passed to the script, print “No argument”
// - You must use console.log(...) to print all output
// - You are not allowed to use var
// - You are not allowed to use length (for checking argument presence)

// process.argv[2] holds the first user-provided argument
const firstArg = process.argv[2];

// Check if the argument is undefined (means no argument was passed)
if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}