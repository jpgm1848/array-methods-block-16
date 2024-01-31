// use reduce to find the largest number in the array

const numsArray = [42, 33, 73, 99, 104, -60, 0, 0.1];

// no initial value because we don't know how large/small the numbers are in the array
const largest = numsArray.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
  // if the current number is larger than the largest number we've seen so far, return it
  // else, return the currrent accumulator (largest number we've seen so far)
});

console.log(numsArray);
console.log(largest);

//
