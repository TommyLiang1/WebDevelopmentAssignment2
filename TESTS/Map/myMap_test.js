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
      console.log(testArray[i]);
      continue;
    }   
    testArray[i] = callbackFn(this[i], i, this);
    //testArray.push(callbackFn(this[i], i, this));
  }
  return testArray;
};

const timesTwo = (x) => {
  return 2 * x;
}

////////////////// myMap TESTS //////////////////
console.log("----->TESTS FOR myMap FUNCTION<-----");

///// myMap TEST 1 /////
let testArray1 = [];
let newArray1 = [], newArray2 = [];

console.log("//Test 1\\\\");
console.log("Initial Array: ", testArray1);
newArray1 = testArray1.myMap(timesTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray1.map(timesTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myMap TEST 2 /////
let testArray2 = [3, 5, 7, 10, 25];

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = testArray2.myMap(timesTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray2.map(timesTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myMap TEST 3 /////
let testArray3 = [2, , 10, 20, 6, 8];

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray3);
newArray1 = testArray3.myMap(timesTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray3.map(timesTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myMap TEST 4 /////
let testArray4 = [3, 11, 5, 10, 12, ,];

console.log("\n//Test 4\\\\");
console.log("Initial Array: ", testArray4);
newArray1 = testArray4.myMap(timesTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray4.map(timesTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myMap TEST 5 /////
let testArray5 = [, 3, 6, 5, 9, 11];

console.log("\n//Test 5\\\\");
console.log("Initial Array: ", testArray5);
newArray1 = testArray5.myMap(timesTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray5.map(timesTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));