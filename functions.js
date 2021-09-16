// # 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.


function double(num) {
  return num * num;
}

console.log(double(2));



// # 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.


function upcase(string) {
  return string.toUpperCase();
}

console.log(upcase("hello"));


// # 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

function subtract(num1, num2) {
  return num2 - num1;
}

console.log(subtract(2, 10));

// # 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

function multiply(num) {
  return num * num;
}

console.log(multiply(4));

// # 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

function firstLetter(string) {
  return string[0];
}

console.log(firstLetter("James"));



// # 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

function combinedStrings(string1, string2, string3) {
  return `${string1} ${string2} ${string3}`;
}
console.log(combinedStrings("Studying", "at", "Starbucks!"));

// # 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

function changeToString(num) {
  return num.toString();
}
console.log(changeToString(10));

// # 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

function repeater(string) {
  return string.repeat(5);
}

console.log(repeater("hi"));

// # 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

function avg(num1, num2, num3) {
  return (num1 + num2 + num3) / 3.0;
}

console.log(avg(3, 4, 5));



// # 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

function mathProblem(num) {
  return (num * 10) + 30;
}

console.log(mathProblem(2));