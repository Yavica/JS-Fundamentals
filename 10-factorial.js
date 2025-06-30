// Task 10: Factorial
// Write a script that computes and prints a factorial
// - The first argument is integer (argument can be cast as integer) used for computing the factorial
// - Factorial of NaN is 1
// - You must do it recursively
// - You must use a function
// - You must use console.log(...) to print all output
// - You are not allowed to use var

function factorial(n) {
  // Base case 1: Factorial of 0 is 1 (standard mathematical definition)
  // Base case 2: Factorial of NaN is 1 (as per assignment requirement)
  // Base case 3: Factorial of negative numbers is also often 1 for these types of problems,
  //               or undefined. Given the example output for no argument/NaN is 1,
  //               and -3 yields no output, we treat <= 0 or NaN as 1.
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  // Recursive step: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Get the first argument from the command line
const arg = process.argv[2];
// Convert the argument to an integer
const num = parseInt(arg);

// Compute the factorial using the recursive function
const result = factorial(num);

// Print the result
console.log(result);
