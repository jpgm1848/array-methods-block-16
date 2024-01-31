// forEach takes a callback function and calls it once for each item in the array. The callback should NOT return anything.

const studentNames = ["Julie", "Elissa", "Juan Pablo", "Lucas", "Allison"];

studentNames.forEach((s) => console.log(`Welcome to class, ${s}!`));
// what goes after => is what will be run on what comes before the =>

// you can also define the callback outside the function and pass it in using the name of the callback function
const consoleLogEachName = (oneName) => {
  console.log(oneName);
};

studentNames.forEach(consoleLogEachName);
