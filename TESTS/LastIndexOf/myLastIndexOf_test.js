// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for(let i = this.length -1; i > -1  ; i--){
    if(this[i] == searchElement) return i 
  }
  return -1;
};

////////////////// myLastIndexOf TESTS //////////////////
console.log("----->TESTS FOR myLastIndexOf FUNCTION<-----");

///// myLastIndexOf TEST 1 /////
let testArray1 = [];
let newArray1 = [], newArray2 = [];

console.log("//Test 1\\\\");
console.log("Initial Array: ", testArray1);
newArray1 = testArray1.myLastIndexOf("");
console.log("My Test Function: ", newArray1);
newArray2 = testArray1.lastIndexOf("");
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myLastIndexOf TEST 2 /////
let testArray2 = [7,7,7,7,7];

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = testArray2.myLastIndexOf(7);
console.log("My Test Function: ", newArray1);
newArray2 = testArray2.lastIndexOf(7);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myLastIndexOf TEST 3 /////
let testArray3 = [2, , 10, 20, 6, 8];

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray3);
newArray1 = testArray3.myLastIndexOf(2);
console.log("My Test Function: ", newArray1);
newArray2 = testArray3.lastIndexOf(2);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myLastIndexOf TEST 4 /////
let testArray4 = [3, 11, 5, 10, 12, ,];

console.log("\n//Test 4\\\\");
console.log("Initial Array: ", testArray4);
newArray1 = testArray4.myLastIndexOf(12);
console.log("My Test Function: ", newArray1);
newArray2 = testArray4.lastIndexOf(12);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myLastIndexOf TEST 5 /////
let testArray5 = [, 3, 6, 5, 9, 11];

console.log("\n//Test 5\\\\");
console.log("Initial Array: ", testArray5);
newArray1 = testArray5.myLastIndexOf(3);
console.log("My Test Function: ", newArray1);
newArray2 = testArray5.lastIndexOf(3);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);