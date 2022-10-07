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

const modTwo = (x) => {
  return x % 2 == 0;
}

////////////////// myEvery TESTS //////////////////
console.log("----->TESTS FOR myEvery FUNCTION<-----");
  
///// myEvery TEST 1 /////
let testArray1 = [];
let newArray1 = [], newArray2 = [];

console.log("//Test 1\\\\");
console.log("Initial Array: ", testArray1);
newArray1 = testArray1.myEvery(modTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray1.every(modTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myEvery TEST 2 /////
let testArray2 = [3, 5, 7, 10, 25];

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = testArray2.myEvery(modTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray2.every(modTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myEvery TEST 3 /////
let testArray3 = [2, , 10, 20, 6, 8];

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray3);
newArray1 = testArray3.myEvery(modTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray3.every(modTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myEvery TEST 4 /////
let testArray4 = [3, 11, 5, 10, 12, ,];

console.log("\n//Test 4\\\\");
console.log("Initial Array: ", testArray4);
newArray1 = testArray4.myEvery(modTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray4.every(modTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myEvery TEST 5 /////
let testArray5 = [, 3, 6, 5, 9, 11];

console.log("\n//Test 5\\\\");
console.log("Initial Array: ", testArray5);
newArray1 = testArray5.myEvery(modTwo);
console.log("My Test Function: ", newArray1);
newArray2 = testArray5.every(modTwo);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));