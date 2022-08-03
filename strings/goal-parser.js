// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"

// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

function interpret(command) {
  let result = "";

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") result += "G";
    if (command[i] === "(" && command[i + 1] === ")") result += "o";
    if (command[i] === "l" && command[i + 1] === ")") result += "al";
  }

  return result;
}

function interpret2(command) {
  return command.split("()").join("o").split("(al)").join("al");
}

const interpret3 = (command) =>
  command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
