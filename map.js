const priceNums = [1.99, 5.49, 60, 55.95];

const turnToString = (number) => {
  return `$${number}`;
};

// map indicates that the function will be run on and for every element in the array.
const stringifiedNums = priceNums.map(turnToString);

console.log(stringifiedNums);

// given an array of numbers, create a function that returns an array of the squares of those numbers

const startingNums = [1, 2, 3, 4, 5];
function squareTheNums(numsArray) {
  return numsArray.map((num) => num * num);
}

console.log(squareTheNums(startingNums));
