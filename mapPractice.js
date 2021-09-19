// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 2, 3];
var map1 = numbers.map(function (number) {
  return number * 3;
});
console.log(map1);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var array = ["hello", "goodbye"];
var map1 = array.map(function (string) {
  return string.toUpperCase();
});
console.log(map1);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].


var people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
var map1 = people.map(function (person) {
  return person["name"];
});
console.log(map1);


// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [1, 2, 3];
var map1 = numbers.map(function (number) {
  return number + 7;
});
console.log(map1);


// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].


var greetings = ["hello", "goodbye"];
var greetingsLength = greetings.map(function (greeting) {
  return greeting.length;
});

// console.log(greetingsLength);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].
var people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
var peopleAges = people.map(function (person) {
  return person["age"];
});
console.log(peopleAges);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].


var numbers = [1, 2, 3];
var dividedNumbers = numbers.map(function (number) {
  return number / 2.0;
});
console.log(dividedNumbers);


// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

var greetings = ["hello", "goodbye"];
var map1 = greetings.map(function (greeting) {
  return greeting[0];
});
console.log(map1)





// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
var map1 = people.map(function (person) {
  return person["age"] * 2;
});
console.log(map1);


// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].


var numbers = [1, 2, 3];
var map1 = numbers.map(function (number) {
  return number.toString();
});
console.log(map1);