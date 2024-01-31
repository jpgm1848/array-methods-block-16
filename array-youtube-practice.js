const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// filter - filters out things given a specific instruction (For example, everything that costs less than x price)

const filteredItems = items.filter((items) => {
  return items.price <= 100;
});

// items indicates the temporary variable to describe each object that is being worked on through the loop, => indicates what will occur
// will occur afterwards, and the curly braces include the actual process being done on "items"

console.log(filteredItems);

// map - takes one array, and returns it into a new array with a specific key, such as names

const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);

// find - finds a single object in an array. a boolean statement must be returned, where the truth-value
// is weighed against the desired object key (such as item.name)
// it returns the first foudn item

const foundItem = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItem);

// forEach - does not return anything. it's going to go through every object, and for each one, do a specific thing
// such as print out a name. it does not get "const".
// it's automatically run, it does not need to be invoked.

items.forEach((item) => {
  console.log(item.name);
});

// some - returns true or false depending on if the array meets the requirements, such as an item having a price less than 100.
// if it returns true, then ANYTHING in the array meets the requirements, not all.

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItems);

// every - same as sum, but checks if EVERY item in the array meets the requirement.

const hasNonExpensiveItems = items.every((item) => {
  return item.price <= 100;
});

console.log(hasNonExpensiveItems);

// reduce

const total = items.reduce((acc, curr) => {
  return curr.price + acc;
}, 0);

console.log(total);

// includes - simply checks if the array has a given element, returns a boolean

const numbers = [1, 2, 3, 4, 5];

const incudesTwo = numbers.includes(2);

console.log(incudesTwo);
