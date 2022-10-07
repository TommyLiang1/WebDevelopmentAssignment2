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

const greaterFive = (x) => { 
  return x > 5;
}

////////////////// myFilter TESTS //////////////////
console.log("----->TESTS FOR myFilter FUNCTION<-----");

///// myFilter TEST 1 /////
let testArray1 = [];
let newArray1 = [], newArray2 = [];

console.log("//Test 1\\\\");
console.log("Initial Array: ", testArray1);
newArray1 = testArray1.myFilter(greaterFive);
console.log("My Test Function: ", newArray1);
newArray2 = testArray1.filter(greaterFive);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myFilter TEST 2 /////
let testArray2 = [3, 5, 7, 10, 25];

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = testArray2.myFilter(greaterFive);
console.log("My Test Function: ", newArray1);
newArray2 = testArray2.filter(greaterFive);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));


///// myFilter TEST 3 /////
let testArray3 = [2, , 10, 20, 6, 8];

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray3);
newArray1 = testArray3.myFilter(greaterFive);
console.log("My Test Function: ", newArray1);
newArray2 = testArray3.filter(greaterFive);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));


///// myFilter TEST 4 /////
let testArray4 = [3, 11, 5, 10, 12, ,];

console.log("Initial Array: ", testArray4);
newArray1 = testArray4.myFilter(greaterFive);
console.log("My Test Function: ", newArray1);
newArray2 = testArray4.filter(greaterFive);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));


///// myFilter TEST 5 /////
let testArray5 = [, 3, 6, 5, 9, 11];

console.log("\n//Test 5\\\\");
console.log("Initial Array: ", testArray5);
newArray1 = testArray5.myFilter(greaterFive);
console.log("My Test Function: ", newArray1);
newArray2 = testArray5.filter(greaterFive);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));
