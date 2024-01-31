// const userInputString = prompt(
//   "Please enter the flavors you want, separated by commas.",
//   "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
// );
const items = [
  { id: 1, nameOne: "foo", price: 7 },
  { id: 2, nameOne: "bar", price: 6 },
  { id: 3, nameOne: "bazz", price: 9 },
  { id: 3, nameOne: "quq", price: 13 },
];

const nameOne = prompt(
  "Enter a name of an item, we will try and find it.",
  "foo"
);

const found = items.find((item) => item.nameOne === nameOne);

if (found) {
  console.log(`We found the item.`);
  console.log(found);
} else {
  console.log(`The item was not found.`);
}

// ---------

const search = prompt(
  "Enter the name of a string, we will try to find it.",
  "foo"
);

const foundItems = items.filter((item) => item.nameOne.indexOf(search) !== -1);
console.log(foundItems);

const keyForMapping = prompt(
  "Enter a key: id, nameOne, or price so we can display its value.",
  "price"
);

const mappedValues = items.map((item) => item[keyForMapping]);
console.log(mappedValues);

const reducedValues = prompt(
  "Enter the id, nameOne, or ideally price and we will return the sum of all of them.",
  "price"
);

const initialValue = 0;
const summedValues = items.reduce((acc, item) => {
  acc = acc + item[reducedValues];
  return acc;
}, initialValue);

console.log(summedValues);
