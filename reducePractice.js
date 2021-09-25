// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// var numbers = [5, 10, 8, 3];

// var sum = numbers.reduce(function (sum, number) {
//   return sum + number;
// });

// console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// var sports = ["volleyball", "basketball", "badminton"];

// var combinedSports = sports.reduce(function (total, sport) {
//   return total + sport;
// });
// console.log(combinedSports);


// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.


// var items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];



// var itemsSum = items.reduce(function (sum, item) {
//   return item["price"] + sum;
// }, 0);
// console.log(itemsSum);


// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

// var numbers = [5, 10, 8, 3, 9];

// var minNumber = numbers.reduce(function (min, number) {
//   if (number < min) {
//     min === number;
//   } else
//     return min;

// });

// console.log(minNumber);


// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// var sports = ["volleyball", "basketball", "badminton"];

// var totalLength = sports.reduce(function (total, sport) {

//   return total + sport.length;

// }, 0);
// console.log(totalLength);


// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// var numbers = [5, 10, 8, 3];
// var product = numbers.reduce(function (product, number) {
//   return number * product;
// });
// console.log(product);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".
var sports = ["volleyball", "basketball", "badminton"];
var sportsDash = sports.reduce(function (allSports, sport) {
  return "-" + sports + "-" + allSports;
});
console.log(sportsDash);


// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.