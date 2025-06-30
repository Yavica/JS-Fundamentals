// Task 8: Square
// Write a script that prints a square
// - The first argument is the size of the square
// - If the first argument can’t be converted to an integer, print “Missing size”
// - You must use the character X to print the square
// - You must use console.log(...) to print all output
// - You are not allowed to use var
// - You must use a loop (while, for, etc.)

const size = parseInt(process.argv[2]);

if (Number.isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  // Build a row of X's
  const row = 'X'.repeat(size);
  let squareOutput = "";

  // Loop to create the square
  for (let i = 0; i < size; i++) {
    squareOutput += row;
    if (i < size - 1) {
      squareOutput += "\n"; // Add newline for all but the last row
    }
  }
  console.log(squareOutput);
}