// Takes a callback function which will return a boolean value to let us know whether or not the item has been found.
// It WILL return the first item in the array that satisfies the test.

const dogNames = ["Rex", "Spot", "Buddy", "Charlie"];

const firstShortName = dogNames.find((dogName) => {
  if (dogName.length <= 5) {
    return true;
  } else {
    return false;
  }
});

console.group(firstShortName);

// find the first gift on the registry that is within my budget

const giftRegistry = [
  { item: "toaster", price: 40 },
  { item: "napkins", price: 20 },
  { item: "blender", price: 70 },
  { item: "tablecloth", price: 400 },
  { item: "espresso machine", price: 35 },
];

const minPrice = 50;
const maxPrice = 100;

const callbackForFindFunction = (singleGift) => {
  return singleGift.price > minPrice && singleGift.price < maxPrice;
};

const giftToBuy = giftRegistry.find(callbackForFindFunction);

console.log(giftToBuy);
