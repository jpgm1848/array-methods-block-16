// array loop example
// given an array of dog names, return an array of all the names that are 5 letters long or less

dogArray = ["bob", "fred", "jerry", "max", "roger", "jeremiah", "jeff"];

const fiveLetters = (array) => {
  let newArray = [];

  for (i = 0; i < array.length; i++) {
    if (array[i].length <= 5) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(fiveLetters(dogArray));
