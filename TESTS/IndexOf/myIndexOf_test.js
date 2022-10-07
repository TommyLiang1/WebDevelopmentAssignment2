// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for(let i = 0; i < this.length ; i++){
    if(this[i] == searchElement) return i ;
  }
  return -1;
};

////////////////// myIndexOf TESTS //////////////////
console.log("----->TESTS FOR myIncludes FUNCTION<-----");

///// myIndexOf TEST 1 /////
let testArray1 = [];
let newArray1 = [], newArray2 = [];

console.log("//Test 1\\\\");
console.log("Initial Array: ", testArray1);
newArray1 = testArray1.myIndexOf('');
console.log("My Test Function: ", newArray1);
newArray2 = testArray1.indexOf('');
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myIndexOf TEST 2 /////
let testArray2 = [3, 5, 7, 10, 25];

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = testArray2.myIndexOf(7);
console.log("My Test Function: ", newArray1);
newArray2 = testArray2.indexOf(7);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myIndexOf TEST 3 /////
let testArray3 = [2, , 10, 20, 6, 8];

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray3);
newArray1 = testArray3.myIndexOf('          ');
console.log("My Test Function: ", newArray1);
newArray2 = testArray3.indexOf('          ');
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myIndexOf TEST 4 /////
let testArray4 = [3, 11, 5, 10, 12, ,];

console.log("\n//Test 4\\\\");
console.log("Initial Array: ", testArray4);
newArray1 = testArray4.myIndexOf(3);
console.log("My Test Function: ", newArray1);
newArray2 = testArray4.indexOf(3);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myIndexOf TEST 5 /////
let testArray5 = [, 3, 6, 5, 9, 11];

console.log("\n//Test 5\\\\");
console.log("Initial Array: ", testArray5);
newArray1 = testArray5.myIndexOf(11);
console.log("My Test Function: ", newArray1);
newArray2 = testArray5.indexOf(11);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);