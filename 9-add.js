// Task 9: Add
// Write a script that prints the addition of 2 integers
// - The first argument is the first integer
// - The second argument is the second integer
// - You have to define a function with this prototype: function add(a, b)
// - You must use console.log(...) to print all output
// - You are not allowed to use var

function add(a, b) {
  // parseInt will convert the arguments to integers.
  // If conversion fails (e.g., "School"), it will result in NaN,
  // and NaN + any_number is NaN, matching the expected output.
  const numA = parseInt(a);
  const numB = parseInt(b);
  return numA + numB;
}

// Get arguments from command line
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Call the add function with the command-line arguments
const sum = add(arg1, arg2);

console.log(sum);