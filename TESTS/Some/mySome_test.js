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

const modX = (x) => {
  return x % 15 == 0;
}

////////////////// mySome TESTS //////////////////
console.log("----->TESTS FOR mySome FUNCTION<-----");

///// mySome TEST 1 /////
let testArray1 = [];
let newArray1 = [], newArray2 = [];

console.log("//Test 1\\\\");
console.log("Initial Array: ", testArray1);
newArray1 = testArray1.mySome(modX);
console.log("My Test Function: ", newArray1);
newArray2 = testArray1.some(modX);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// mySome TEST 2 /////
let testArray2 = [3, 5, 7, 10, 25];

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = testArray2.mySome(modX);
console.log("My Test Function: ", newArray1);
newArray2 = testArray2.some(modX);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// mySome TEST 3 /////
let testArray3 = [2, , 10, 20, 6, 8];

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray3);
newArray1 = testArray3.mySome(modX);
console.log("My Test Function: ", newArray1);
newArray2 = testArray3.some(modX);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// mySome TEST 4 /////
let testArray4 = [3, 11, 5, 10, 12, ,];

console.log("\n//Test 4\\\\");
console.log("Initial Array: ", testArray4);
newArray1 = testArray4.mySome(modX);
console.log("My Test Function: ", newArray1);
newArray2 = testArray4.some(modX);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// mySome TEST 5 /////
let testArray5 = [, 3, 6, 5, 9, 11];

console.log("\n//Test 5\\\\");
console.log("Initial Array: ", testArray5);
newArray1 = testArray5.mySome(modX);
console.log("My Test Function: ", newArray1);
newArray2 = testArray5.some(modX);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));