// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === searchElement)
      return true;
  }
  return false;
};

////////////////// myIncludes TESTS //////////////////
console.log("----->TESTS FOR myIncludes FUNCTION<-----");

///// myIncludes TEST 1 /////
let newArray1 = [], newArray2 = [];
let testArray1 = [];

console.log("//Test 1\\\\");
console.log("Initial Array: ", testArray1);
newArray1 = testArray1.myIncludes(5);
console.log("My Test Function: ", newArray1);
newArray2 = testArray1.includes(5);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myIncludes TEST 2 /////
let testArray2 = [3, 5, 7, 10, 25];

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = testArray2.myIncludes(undefined);
console.log("My Test Function: ", newArray1);
newArray2 = testArray2.includes(undefined);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myIncludes TEST 3 /////
let testArray3 = [2, , 10, 20, 6, 8];

console.log("\n//Test 3\\\\");
console.log("Initial Array: ");
console.log(testArray3);
newArray1 = testArray3.myIncludes(20);
console.log("My Test Function: ");
console.log(newArray1);
newArray2 = testArray3.includes(20);
console.log("Built in Function: ");
console.log(newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myIncludes TEST 4 /////
let testArray4 = [3, 11, 5, 10, 12, ,];

console.log("\n//Test 4\\\\");
console.log("Initial Array: ");
console.log(testArray4);
newArray1 = testArray4.myIncludes(10);
console.log("My Test Function: ");
console.log(newArray1);
newArray2 = testArray4.includes(10);
console.log("Built in Function: ");
console.log(newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);
///// myIncludes TEST 5 /////
let testArray5 = [, 3, 6, 5, 9, 11];

console.log("\n//Test 5\\\\");
console.log("Initial Array: ");
console.log(testArray5);
newArray1 = testArray5.myIncludes(3);
console.log("My Test Function: ");
console.log(newArray1);
newArray2 = testArray5.includes(3);
console.log("Built in Function: ");
console.log(newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);