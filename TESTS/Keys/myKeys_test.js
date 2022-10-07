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

////////////////// myKeys TESTS //////////////////
console.log("----->TESTS FOR myKeys FUNCTION<-----");

///// myKeys TEST 1 /////
let testArray1 = [];
let newArray1 = [], newArray2 = [];

console.log("//Test 1\\\\");
console.log("Initial Array: ", testArray1);
newArray1 = Object.myKeys(testArray1);
console.log("My Test Function: ", newArray1);
newArray2 = Object.keys(testArray1);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myKeys TEST 2 /////
let testArray2 = {a: 1,b: 2,c: 3,d: 4,e: 5};

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = Object.myKeys(testArray2);
console.log("My Test Function: ", newArray1);
newArray2 = Object.keys(testArray2);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myKeys TEST 3 /////
let testArray3 = {a: "",b: 2,c: 3,d: 4,e: 5};

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray3);
newArray1 = Object.myKeys(testArray3);
console.log("My Test Function: ", newArray1);
newArray2 = Object.keys(testArray3);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myKeys TEST 4 /////
let testArray4 = {a: 1,b: 2,c: 3,d: 4,e: ""};

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray4);
newArray1 = Object.myKeys(testArray4);
console.log("My Test Function: ", newArray1);
newArray2 = Object.keys(testArray4);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myKeys TEST 5 /////
let testArray5 = {a: 1,b: 2,7: 3,d: 4,e: 5};

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray5);
newArray1 = Object.myKeys(testArray5);
console.log("My Test Function: ", newArray1);
newArray2 = Object.keys(testArray5);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));
