// Task 7: I love C
// Write a script that prints x times “C is fun”
// - Where x is the first argument of the script
// - If the first argument can’t be converted to an integer, print “Missing number of occurrences”
// - You must use console.log(...) to print all output
// - You are not allowed to use var
// - You can use only two console.log
// - You must use a loop (while, for, etc.)

const numOccurrences = parseInt(process.argv[2]);

// Check if the argument is a valid positive integer
if (Number.isNaN(numOccurrences) || numOccurrences <= 0) {
  console.log("Missing number of occurrences");
} else {
  // Use a loop to print "C is fun" the specified number of times
  // Building the string and then logging once to meet "only two console.log" rule (one for error, one for output)
  let output = "";
  for (let i = 0; i < numOccurrences; i++) {
    output += "C is fun";
    if (i < numOccurrences - 1) {
      output += "\n"; // Add newline for all but the last line
    }
  }
  console.log(output);
}