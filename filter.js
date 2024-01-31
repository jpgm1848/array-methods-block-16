// filter will create a copy of the array with all the items taht match the test
const giftRegistry = [
  { item: "toaster", price: 40 },
  { item: "napkins", price: 20 },
  { item: "blender", price: 70 },
  { item: "tablecloth", price: 400 },
  { item: "espresso machine", price: 35 },
];
const minPrice = 30;
const maxPrice = 100;

const callbackForFindFunction = (singleGift) => {
  return singleGift.price > minPrice && singleGift.price < maxPrice;
};

const allAffordableGiftOptions = giftRegistry.filter(callbackForFindFunction);

console.log(allAffordableGiftOptions);
