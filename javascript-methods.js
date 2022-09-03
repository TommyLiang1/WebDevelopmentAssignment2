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
      let temp = callbackFn(this[i], i, this);
      testArray[i] = temp;
  }

  return testArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // similar loop to the one used for the myMap implementation
  // also using value, index, array
  for(let i = 0; i < this.length; i++){
    let temp = callbackFn(this[i], i, this);

    // if any one element passes the function test then it will break and return the value
    if(temp === true){
      break;
    }
}
  return temp;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // this function is the opposite of the mySome function, so if something returns false
  // it will break and return that value
  // also using value, index, array
  for(let i = 0; i < this.length; i++){
    let temp = callbackFn(this[i], i, this);

    // if any one element passes the function test then it will break and return the value
    if(temp === false){
      break;
    }
}
  return temp;
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
  let testArray = [];

    for(i in object){
      testArray.push(i);
    }
  return testArray;
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};