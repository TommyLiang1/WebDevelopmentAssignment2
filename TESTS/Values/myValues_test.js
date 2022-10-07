// VALUES //
Object.myValues = function(object) {
  //the values function is the opposite of the keys function and 
  //will iterate over the 'object' and return the values of the variables/enumerables
  let testArray = [];

  //using a for in loop to iterate through each value in the variables/enumerables in the 'object' and pushing it to the testArray
    for(i in object){
      testArray.push(object[i]);
    }
    
  return testArray;
};

////////////////// myValues TESTS //////////////////
console.log("----->TESTS FOR myValues FUNCTION<-----");

///// myValues TEST 1 /////
let testArray1 = [];
let newArray1 = [], newArray2 = [];

console.log("//Test 1\\\\");
console.log("Initial Array: ", testArray1);
newArray1 = Object.myValues(testArray1);
console.log("My Test Function: ", newArray1);
newArray2 = Object.values(testArray1);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myValues TEST 2 /////
let testArray2 = {a: 1,b: 2,c: 3,d: 4,e: 5};

console.log("\n//Test 2\\\\");
console.log("Initial Array: ", testArray2);
newArray1 = Object.myValues(testArray2);
console.log("My Test Function: ", newArray1);
newArray2 = Object.values(testArray2);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myValues TEST 3 /////
let testArray3 = {a: "",b: 2,c: 3,d: 4,e: 5};

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray3);
newArray1 = Object.myValues(testArray3);
console.log("My Test Function: ", newArray1);
newArray2 = Object.values(testArray3);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myValues TEST 4 /////
let testArray4 = {a: 1,b: 2,c: 3,d: 4,e: ""};

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray4);
newArray1 = Object.myValues(testArray4);
console.log("My Test Function: ", newArray1);
newArray2 = Object.values(testArray4);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));

///// myValues TEST 5 /////
let testArray5 = {a: 1,b: 2,7: 3,d: 4,e: 5};

console.log("\n//Test 3\\\\");
console.log("Initial Array: ", testArray5);
newArray1 = Object.myValues(testArray5);
console.log("My Test Function: ", newArray1);
newArray2 = Object.values(testArray5);
console.log("Built in Function: ", newArray2);
console.log("Own Test Function == Built in Function?", JSON.stringify(newArray1) == JSON.stringify(newArray2));
