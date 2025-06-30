JS-Fundamentals
This repository contains solutions to foundational JavaScript programming tasks, focusing on basic syntax, variable declaration, control flow, functions, and interaction with command-line arguments using Node.js.

Each script addresses a specific problem, demonstrating key JavaScript concepts as required by the assignment.

Files in this Repository:
0-javascript_is_amazing.js:

Prints the string "JavaScript is amazing" using a constant variable and console.log().

1-multi_languages.js:

Prints three distinct lines: "C is fun", "Python is cool", and "JavaScript is amazing" using console.log().

2-arguments.js:

Checks the number of arguments passed to the script and prints a message: "No argument", "Argument found", or "Arguments found".

3-value_argument.js:

Prints the first argument passed to the script. If no argument is provided, it prints "No argument".

4-concat.js:

Prints two arguments in the format "first_argument is second_argument". Handles cases where arguments might be undefined.

5-to_integer.js:

Attempts to convert the first argument to an integer. If successful, prints "My number: ", otherwise prints "Not a number".

6-multi_languages_loop.js:

Prints the three language lines ("C is fun", "Python is cool", "JavaScript is amazing") using an array of string and a loop, with only one console.log() call.

7-multi_c.js:

Prints "C is fun" a specified number of times (x), where x is the first argument converted to an integer. Handles cases where x is not a number or is non-positive.

8-square.js:

Prints a square of 'X' characters, where the size is determined by the first argument converted to an integer. Handles cases where the size is missing or invalid.

9-add.js:

Defines a function add(a, b) that returns the sum of two integers. The script then calls this function with the first two command-line arguments and prints the result.

How to Run the Scripts:
Each JavaScript file can be run using Node.js from your terminal. Navigate to the directory containing the script and use the node command followed by the filename.

Example:

node 0-javascript_is_amazing.js

Some scripts accept command-line arguments:

Example for 2-arguments.js:

node 2-arguments.js
node 2-arguments.js Hello
node 2-arguments.js Hello World

