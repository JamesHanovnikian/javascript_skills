// #  1. Use a nested loop to convert an array of number pairs into a single flattened array.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

var numberPairs = [[1, 3], [8, 9], [2, 16]];
var newArray = [];
var i = 0;
while (i < numberPairs.length) {
  var i2 = 0;
  while (i2 < numberPairs[i].length) {
    newArray.push(numberPairs[i][i2]);
    i2++;
  }
  i++;
}

console.log(newArray);



// #  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// #     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

var lettersA = ["a", "b", "c"];
var lettersD = ["d", "e", "f", "g"];
var newArray = [];

var i = 0;
while (i < lettersA.length) {
  var i2 = 0;
  while (i2 < lettersD.length) {
    newArray.push(lettersA[i] + lettersD[i2]);
    i2++;
  }
  i++;
}
console.log(newArray);



// #  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// #     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].


var letters = ["a", "b", "c", "d"];
var newArray = [];
var i = 0;

while (i < letters.length) {
  var i2 = 0;
  while (i2 < letters.length) {
    if (i !== i2) {
      newArray.push(letters[i] + letters[i2]);

    }
    i2++;
  }
  i++;
}

console.log(newArray);

// #  4. Use a nested loop to find the largest product of any two different numbers within a given array.
// #     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

var numbers = [5, -2, 1, -9, -7, 2, 6];

var product = 1;
var highestProduct = numbers[0] * numbers[1];

var i = 0;
while (i < numbers.length) {
  var i2 = 0;
  while (i2 < numbers.length) {
    if (i !== i2) {
      product = numbers[i] * numbers[i2];
      if (product > highestProduct) {
        highestProduct = product;
      }
    }
    i2++;
  }
  i++;
}
console.log(highestProduct);
// #  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.


var numbers = [[1, 3], [8, 9], [2, 16]];
var sum = 0;
var i = 0;
while (i < numbers.length) {
  var i2 = 0;
  while (i2 < numbers[i].length) {
    sum = sum + numbers[i][i2];
    i2++;
  }
  i++;
}
console.log(sum);


// #  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// #     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

var lowNums = [1, 2];
var highNums = [6, 7, 8];
var newArray = [];
var sum = 0;
var i = 0;
while (i < lowNums.length) {
  var i2 = 0;
  while (i2 < highNums.length) {

    newArray.push(lowNums[i] + highNums[i2]);

    i2++;
  }
  i++;
}
console.log(newArray);

// #  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// #     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

var numbers = [2, 8, 3];
var newArray = [];

var i = 0;

while (i < numbers.length) {
  var i2 = 0;
  while (i2 < numbers.length) {
    newArray.push(numbers[i] * numbers[i2]);
    i2++;
  }
  i++;
}
console.log(newArray);




// #  8. Use a nested loop to find the largest sum of any two different numbers within an array.
// #     For example, [1, 8, 3, 10] becomes 18.


var numbers = [1, 8, 3, 10];
var sum = 0;
var highestSum = numbers[0] + numbers[1];
var i = 0;
while (i < numbers.length) {
  var i2 = 0;
  while (i2 < numbers.length) {
    if (i !== i2) {
      sum = numbers[i] + numbers[i2];
      if (sum > highestSum) {
        highestSum = sum;
      }
    }
    i2++;
  }
  i++;
}
console.log(highestSum);




// #  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// #     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

var numbers = [2, 5, 3, 1, 0, 7, 11];
var newArray = [];
var i = 0;
var sum = 0;

while (i < numbers.length) {
  var i2 = 0;
  while (i2 < numbers.length) {
    if (i !== i2) {
      sum = numbers[i] + numbers[i2];
      if (sum === 10) {
        newArray.push(numbers[i]);
      }
    }
    i2++;
  }
  i++;
}
console.log(newArray);

// # 10. Use a nested loop to convert an array of string arrays into a single string.
// #     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

var words = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
var newWord = "";

var i = 0;

while (i < words.length) {
  var i2 = 0;
  while (i2 < words[i].length) {
    newWord = newWord + words[i][i2];
    i2++;
  }
  i++;
}
console.log(newWord);

