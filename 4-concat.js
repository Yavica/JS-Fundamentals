// Task 4: Create a sentence
// Write a script that prints two arguments passed to it, in the following format: “ <argument1> is <argument2> ”
// - You must use console.log(...) to print all output
// - You are not allowed to use var

const arg1 = process.argv[2];
const arg2 = process.argv[3];

// console.log will print 'undefined' if an argument is not provided,
// which matches the expected output for missing arguments.
console.log(`${arg1} is ${arg2}`);