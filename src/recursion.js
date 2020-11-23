/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  return (n * factorial(n - 1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

  let sum = 0;
  //go go through all the elements in the array
  array.forEach((element) => {
    // if the current element is an array
    if (Array.isArray(element)) {
      // call recurse on it, add the result of recur
      sum += arraySum(element);
      //otherwise, if the current element is not an array
    } else {
      // add the value of element to the sum
      sum += element;
    }
  })
  //after going through all the elements, return the total sum
  return sum;


};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n)
  if (n === 0) {
    return true
  } else if (n === 1) {
    return false
  } else {
    return isEven(n - 2)
  }

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

if (n === 0) {
  return 0;
}
if (n > 0) {
return (n - 1) + sumBelow(n - 1);
}
if (n < 0) {
  return (n + 1) + sumBelow(n + 1);
}

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x === y) {
    return [];
  }
  if (x - y === 1) {
    return [];
  }
  if (y - x === 1) {
    return [];
  }
  //if x is less than y
    //if y - x is 2 or less
      //return [x+1]
    //otherwise,
    //return [x+1].concat(recursion(x+1), y)
    if (x < y) {
      if ((y - x) === 2) {
        return [x+1];
      }
      return [x+1].concat(range(x+1, y))
    }

  //if x is greater than y
    //if x - y is 2 or less
      //return [x-1]
    //otherwise
    //return [x-1].concat(recursion(x-1), y)
    if (x > y) {
      if ((x - y) === 2) {
        return [x-1];
      }
      return [x-1].concat(range(x-1, y))
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {  //base
    return base;
  }
  if (exp > 0) {
      //return base * (recursion on base and exp-1)
  return base * exponent(base, exp - 1);
  }
  if (exp < 0) {
    //call recursion and divide base by base, each time increment exp
    return exponent(base, exp + 1) / base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  if (n < 1) {
    return false;
  }
  return powerOfTwo(n/2)
};

// 9. Write a function that reverses a string.
var reverse = function(string) {

  //base case
  if (string.length === 0) {
    return '';
  }

  return reverse(string.substr(1)) + string.charAt(0)


  //recursion
  //return character at the last index + recursion on string, lastindex - 1

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  //compare the first and last numbers, if they match, remove them and keep going
  let lastIndex = string.length - 1;
  //if the 1st and last match
  if (string.length === 0 || string.length === 1) {
    return true;
  }
  if (string[0] === string[lastIndex]) {
    //call recursion on the same string, but with the 1st and last characters removed
    return palindrome(string.slice(1, lastIndex))
  }
 return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (y === 0) {
    return NaN;
  }
  if (x < 0) {
    return -modulo(-x, y);
  }
  if ( y < 0) {
    return modulo(x, -y);
  }
  if (x < y) {
    return x;
  }
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

if (y === 0 || x === 0) {
  return 0;
}

if (x < 0 && y < 0) {
  return multiply(-x, -y);
}

if (y > 0) {
  if (x > 0) {
      --y;
  return (x + multiply(x, y));
  }
  if (x < 0) {
    --y;
    return (x + -multiply(-x, y));
  }
}

if (y < 0 && x > 0) {
   return multiply(-x, -y);
}

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (x < 0 && y < 0) {
    return 0;
  }
  if ((x > 0 || x < 0) && y > 0) {
    if (x < y) {
      return 0;
    }
    return 1 + divide(x-y, y);
  }

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (!y) {
    return x;
  }
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

//base case
//if the string length is zero return true
if (str1.length === 0 && str2.length === 0) {
  return true;
}

if (str1[0] !== str2[0]) {
  return false;
}

if (str1[0] === str2[0]) {
  return compareStr(str1.slice(1), str2.slice(1));
}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {

//let index be the index of the last character // base case
//if the index is less than 0,
 //return the array

//return recursion, call the array, but slice it on index

let index = str.length - 1;
if (index < 0) {
  return [];
}
return createArray(str.slice(0, index)).concat(str[index]);

};

// 17. Reverse the order of an array
var reverseArr = function(array) {

   //base case
   //if the array length is 0
   //return the array

   //otherwise, recursion
   //grab the last element with pop, put it in an array, and concat result of the function, reverse Arr

   if (array.length === 0) {
     return [];
   }
   return [array.pop()].concat(reverseArr(array))
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base case
  //use decrement on length, if length is 0, return the array
  if (length <= 0) {
    return [];
  }
  return [value].concat(buildList(value, length - 1));
  //recursive case
  //return [value].concat(the next value)
    //next value = concat(buildList(value, length - 1))

};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n < 1) {
    return [];
  }
  if (n % 5 === 0 && n % 3 === 0) {
    return fizzBuzz(n-1).concat(['FizzBuzz']);
  }
  if (n % 5 === 0) {
    return fizzBuzz(n-1).concat(['Buzz']);
  }
  if (n % 3 === 0) {
    return fizzBuzz(n-1).concat(['Fizz']);
  } else {
    n = n.toString();
    return fizzBuzz(n-1).concat([n])
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

if (array.length === 0) {
  return 0;
}
if (array[0] === value) {
  return 1 + countOccurrence(array.slice(1), value)
} else {
  return countOccurrence(array.slice(1), value)
}
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //make a deep copy of array
  let copy = [...array];
  //if copy's length is 1
  if (copy.length === 1) {
    //simply return the result of callback on element
    return callback(copy);
  }
  //otherwise
  //return the result of callback on the 1st element, and then concatenate the recursion of copy.slice(1), this removes the 1st element.
  return [callback(copy[0])].concat(rMap(copy.slice(1), callback))
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {

  let count = 0;
for (var objKey in obj) {
  if (objKey === key) {
    count++;
  }
  let objValue = obj[objKey];
  //if objValue is an object, recursion
  if (typeof objValue === 'object') {
    count += countKeysInObj(objValue, key);
  }
}
return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for (var key in obj) {
    if (obj[key] === value) {
      count++;
    }
    let objValue = obj[key];
    if (typeof objValue === 'object') {
      count += countValuesInObj(objValue, value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    //if the key matches oldKey
    if (key === oldKey) {
      //assign the newKey to its value
      obj[newKey] = obj[key]
      //delete the old key
      delete(obj[key])
    }
    //create variable to represent the object value
    let objValue = obj[key]
    //if the object value is an object
    if (typeof objValue === 'object') {
      //recursion
      replaceKeysInObj(objValue, oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  }
  if (n===1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }

  fibonacci(n - 1).push(fibonacci[fibonacci.length - 1]) + fibonacci[fibonacci.length - 2];
  return fibonacci(n - 1);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0 || n === 1) {
    return n;
  }
  return (nthFibo(n-1) + nthFibo(n-2));
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  }
  let firstElement = array[0];
  return [firstElement.toUpperCase()].concat(capitalizeWords(array.slice(1)))
}

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {

  if (array.length === 0) {
    return [];
  }
  let firstElement = array[0];
  let firstLetter = firstElement[0];
  return [firstLetter.toUpperCase() + firstElement.slice(1)].concat(capitalizeFirst(array.slice(1)))
}

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {


let sum = 0;
for (var key in obj) {
  if (obj[key] % 2 === 0) {
    sum += obj[key];
  }
  if (typeof obj[key] === 'object') {
    sum += nestedEvenSum(obj[key]);
  }
}
return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  //since output is a new array, declare new array
  let flatArray = [];
  //write a for loop
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = flatArray.concat(flatten(array[i]));
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;

}
// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {
  //create an object

  var length = str.length;
  var current = str.charAt(0);

  if (length === 0) {
    return obj;
  } else if (obj[current]) {
    obj[current] ++;
  } else {
    obj[current] = 1;
  }

  return letterTally(str.slice(1), obj);

  //return the object
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  //if list.length is equal to 1
    //return the list

  //if list[0] is equal to list[1]
  //don't add it ot the new array, recursion
  if (list.length <= 1) {
    return list;
  }

  if (list[0] !== list[1]) {
   return [list[0]].concat(compress(list.slice(1)));
  }
  //if they do equal
  if (list[0] === list[1]) {
    return compress(list.slice(1));
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  }
  array[0].push(aug);
  return [array[0]].concat(augmentElements(array.slice(1), aug))
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {

  if (array.length <=1) {
    return array;
  }
  if (array[0] !== array[1]) {
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
  if (array[0] === 0 && array[1] === 0) {
    return minimizeZeroes(array.slice(1));
  }


};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  }
  let lastIndex = array.length - 1;
  if (lastIndex % 2 === 0) {
    //return [array[lastIndex]].concat(alternateSign(array.slice(0, lastIndex)))
    return alternateSign(array.slice(0, lastIndex)).concat(Math.abs([array[lastIndex]]))
  }

  if (lastIndex % 2 === 1) {
    //return [-array[lastIndex]].concat(alternateSign(array.slice(0, lastIndex)))
    return alternateSign(array.slice(0, lastIndex)).concat(-Math.abs([array[lastIndex]]))
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0) {
    return '';
  }
  let arr = str.split(' ')
  if (arr[0] === '0') {
    arr[0] = 'zero';
  }
  if (arr[0] === '1') {
    arr[0] = 'one';
  }
  if (arr[0] === '2') {
    arr[0] = 'two';
  }
  if (arr[0] === '3') {
    arr[0] = 'three';
  }
  if (arr[0] === '4') {
    arr[0] = 'four';
  }
  if (arr[0] === '5') {
    arr[0] = 'five';
  }
  if (arr[0] === '6') {
    arr[0] = 'six';
  }
  if (arr[0] === '7') {
    arr[0] = 'seven';
  }
  if (arr[0] === '8') {
    arr[0] = 'eight';
  }
  if (arr[0] === '9') {
    arr[0] = 'nine';
  }

  if (arr.length === 1) {
    return arr[0].concat(numToText(arr.slice(1).join(' ')));
  }
  return arr[0].concat(' ',numToText(arr.slice(1).join(' ')));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
