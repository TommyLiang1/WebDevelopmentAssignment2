/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Creating results array that will be returned at the end of function call
  let results = [];
  // Iterate through passed in array
  for(let i = 0; i < this.length; i++) {
    if(this[i] == null)
      continue;
    // Call back function will return a boolean
    if(callbackFn(this[i]))
      // If Call back function is passed, push element to results[]
      results.push(this[i]);
  }
  return results;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};

function greaterFive(x){
  return x > 5;
}

let testArray = [];
let testArray1 = [3, 5, 7, 10, 25];
let testArray2 = [2, , 10, 5, 3, 15];
let testArray3 = [3, 11, 5, 10, 12, ,];
let testArray4 = [, 3, 6, 5, 9, 11];

// TESTS FOR myFilter FUNCTION
/*
console.log("Initial Array: ");
console.log(testArray);
let newArray = testArray.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray = testArray.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray);

console.log("Initial Array: ");
console.log(testArray1);
newArray = testArray1.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray = testArray1.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray);

console.log("Initial Array: ");
console.log(testArray2);
newArray = testArray2.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray = testArray2.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray);

console.log("Initial Array: ");
console.log(testArray3);
newArray = testArray3.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray = testArray3.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray);

console.log("Initial Array: ");
console.log(testArray4);
newArray = testArray4.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray = testArray4.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray);
*/