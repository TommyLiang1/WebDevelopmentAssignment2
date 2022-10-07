// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // If the array is empty, an TypeError is thrown.
  if(this.length === 0)
    throw new TypeError("Reduce of empty array with no initial value");
    // throw {name : "NotImplementedError", message : "too lazy to implement"}; 
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

const maxNum = (a, b) => { 
  if(a > b)
    return a;
  return b;
}

////////////////// myReduce TESTS //////////////////
console.log("----->TESTS FOR myReduce FUNCTION<-----");

// TEST 1 THROWS AN ERROR MSG //
///// myReduce TEST 1 /////
// let newArray1 = [], newArray2 = [];
// let testArray1 = [];

// console.log("//Test 1\\\\");
// console.log("Initial Array: ", testArray1);
// newArray1 = testArray1.myReduce(maxNum);
// console.log("My Test Function: ", newArray1);
// newArray2 = testArray1.reduce(maxNum);
// console.log("Built in Function: ", newArray2);
// console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myReduce TEST 2 /////
let testArray2 = [3, 5, 7, 10, 25];

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = testArray2.myReduce(maxNum);
console.log("My Test Function: ", newArray1);
newArray2 = testArray2.reduce(maxNum);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myReduce TEST 3 /////
let testArray3 = [2, , 10, 20, 6, 8];

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray3);
newArray1 = testArray3.myReduce(maxNum);
console.log("My Test Function: ", newArray1);
newArray2 = testArray3.reduce(maxNum);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myReduce TEST 4 /////
let testArray4 = [3, 11, 5, 10, 12, ,];

console.log("\n//Test 4\\\\");
console.log("Initial Array: ", testArray4);
newArray1 = testArray4.myReduce(maxNum);
console.log("My Test Function: ", newArray1);
newArray2 = testArray4.reduce(maxNum);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);

///// myReduce TEST 5 /////
let testArray5 = [, 3, 6, 5, 9, 11];

console.log("\n//Test 5\\\\");
console.log("Initial Array: ", testArray5);
newArray1 = testArray5.myReduce(maxNum);
console.log("My Test Function: ", newArray1);
newArray2 = testArray5.reduce(maxNum);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", newArray1 === newArray2);