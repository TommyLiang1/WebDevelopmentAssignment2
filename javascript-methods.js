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
  // created a test array to hold the contents of the map
  // using let instead of var so there wont be any redeclaration errors
  let testArray = [];

  // this is being used as a way to globally call the array from callbackFn 
  // callbackFn will also be using the standard map syntax so it would be map(element, index, array)
  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined) {
      //console.log("null at index " + i);
      //testArray[i] = null;
      continue;
    }   
    testArray[i] = callbackFn(this[i], i, this);
    //testArray.push(callbackFn(this[i], i, this));
  }
  return testArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Creating results array that will be returned at the end of function call
  let results = [];
  // Iterate through passed in array
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) {
      continue;
    }
    // Call back function will return a boolean
    if(callbackFn(this[i], i, this))
      // If Call back function is passed, push element to results[]
      results.push(this[i]);
  }
  return results;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // similar loop to the one used for the myMap implementation
  // also using value, index, array
  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined)
      continue;
    if(callbackFn(this[i], i, this))
      return true;
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // this function is the opposite of the mySome function, so if something returns false
  // it will break and return that value
  // also using value, index, array
  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined)
      continue;
    if(!callbackFn(this[i], i, this))
      return false;
  }
  return true; 
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0 ; i < this.length ; i++){
    if(this[i] == searchElement) return true;
  }
  return false;

};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for(let i = 0; i < this.length ; i++){
    if(this[i] == searchElement) return i ;
  }
  return -1;
};


// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for(let i = this.length -1; i > -1  ; i--){
    if(this[i] == searchElement) return i 
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};

const timesTwo = (x) => {
  return 2 * x;
}

const greaterFive = (x) => { 
  return x > 5;
}

const modX = (x) => {
  return x % 15 == 0;
}

const modTwo = (x) => {
  return x % 2 == 0;
}

let testArray = [];
let testArray1 = [3, 5, 7, 10, 25];
let testArray2 = [2, , 10, 20, 6, 8];
let testArray3 = [3, 11, 5, 10, 12, ,];
let testArray4 = [, 3, 6, 5, 9, 11];

let newArray = [];
let newArray1 = [];

/*
// TESTS FOR myMap FUNCTION
console.log("TESTS FOR myMap FUNCTION");
console.log("Test 1");
console.log("Initial Array: ");
console.log(testArray);
newArray = testArray.myMap(timesTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray.map(timesTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 2");
console.log("Initial Array: ");
console.log(testArray1);
newArray = testArray1.myMap(timesTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray1.map(timesTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 3");
console.log("Initial Array: ");
console.log(testArray2);
newArray = testArray2.myMap(timesTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray2.map(timesTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 4");
console.log("Initial Array: ");
console.log(testArray3);
newArray = testArray3.myMap(timesTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray3.map(timesTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 5");
console.log("Initial Array: ");
console.log(testArray4);
newArray = testArray4.myMap(timesTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray4.map(timesTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));
console.log("\n");


// TESTS FOR myFilter FUNCTION

console.log("TESTS FOR myFilter FUNCTION");
console.log("Test 1");
console.log("Initial Array: ");
console.log(testArray);
newArray = testArray.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 2");
console.log("Initial Array: ");
console.log(testArray1);
newArray = testArray1.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray1.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 3");
console.log("Initial Array: ");
console.log(testArray2);
newArray = testArray2.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray2.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 4");
console.log("Initial Array: ");
console.log(testArray3);
newArray = testArray3.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray3.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 5");
console.log("Initial Array: ");
console.log(testArray4);
newArray = testArray4.myFilter(greaterFive);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray4.filter(greaterFive);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));
console.log("\n");


// TESTS FOR mySome FUNCTION

console.log("TESTS FOR mySome FUNCTION");
console.log("Test 1");
console.log("Initial Array: ");
console.log(testArray);
newArray = testArray.mySome(modX);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray.some(modX);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 2");
console.log("Initial Array: ");
console.log(testArray1);
newArray = testArray1.mySome(modX);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray1.some(modX);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 3");
console.log("Initial Array: ");
console.log(testArray2);
newArray = testArray2.mySome(modX);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray2.some(modX);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 4");
console.log("Initial Array: ");
console.log(testArray3);
newArray = testArray3.mySome(modX);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray3.some(modX);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 5");
console.log("Initial Array: ");
console.log(testArray4);
newArray = testArray4.mySome(modX);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray4.some(modX);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));
console.log("\n");


// TESTS FOR myEvery FUNCTION

console.log("TESTS FOR myEvery FUNCTION");
console.log("Test 1");
console.log("Initial Array: ");
console.log(testArray);
newArray = testArray.myEvery(modTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray.every(modTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 2");
console.log("Initial Array: ");
console.log(testArray1);
newArray = testArray1.myEvery(modTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray1.every(modTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 3");
console.log("Initial Array: ");
console.log(testArray2);
newArray = testArray2.myEvery(modTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray2.every(modTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 4");
console.log("Initial Array: ");
console.log(testArray3);
newArray = testArray3.myEvery(modTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray3.every(modTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));

console.log("\nTest 5");
console.log("Initial Array: ");
console.log(testArray4);
newArray = testArray4.myEvery(modTwo);
console.log("My Test Function: ");
console.log(newArray);
newArray1 = testArray4.every(modTwo);
console.log("Built in Function: ");
console.log(newArray1);
console.log("Own Test Function == Built in Function?");
console.log(JSON.stringify(newArray) == JSON.stringify(newArray1));
*/