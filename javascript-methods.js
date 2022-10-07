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
  // If the array is empty, an TypeError is thrown.
  if(this.length === 0)
    throw new TypeError("Reduce of empty array with no initial value");
  if(this.length === 1)
    return this[0];
  let result = this[0];
  for(let i = 1; i < this.length; i++) {
    if(this[i] === undefined)
      continue;
    result = callbackFn(result, this[i]);    
  }
  return result;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === searchElement)
      return true;
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
  //the keys function will iterate over the 'object' and return the variables/enumerables
  let testArray = [];

  //using a for in loop to iterate through each variable/enumerable in the 'object' and pushing it to the testArray
    for(i in object){
      testArray.push(i);
    }

  return testArray;
};

// VALUES //
Object.myValues = function(object) {
  //the values function is the opposite of the keys function and 
  //will iterate over the 'object' and return the values of the variables/enumerables
  let testArray = [];

  //using a for in loop to iterate through each value in the variables/enumerables in the 'object' and pushing it to the testArray
    for(i in object){
      testArray.push(object[i]);
    }
    
  return testArray;
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

const maxNum = (a, b) => { 
  if(a > b)
    return a;
  return b;
}

let testArray1 = [];
let testArray2 = [3, 5, 7, 10, 25];
let testArray3 = [2, , 10, 20, 6, 8];
let testArray4 = [3, 11, 5, 10, 12, ,];
let testArray5 = [, 3, 6, 5, 9, 11];

let newArray1 = [];
let newArray2 = [];

