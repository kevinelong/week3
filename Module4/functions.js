// Code Organization and Re-Use, names help document our intent.
// DRY - Don't repeat yourself
function copyright(){
    console.log("COPYRIGHT 2024");
}
copyright();
function greeting(username="World", age=0){
    return `Hello ${username}!!! You are ${age} years old.`;
}
function printGreeting(username="world", age=0){
    let result = greeting(username, age);
    console.log(result);
}

let testResult = greeting("Class", 21);
console.log(testResult === "Hello Class!!! You are 21 years old.")

printGreeting("Class", 21);
printGreeting("Kevin", 55);
printGreeting();


//DEFINING A NEW FUNCTION with name and block of code
function addTwo(a, b){ // Receiving two incoming Parameters
    let inner_result = a + b; // The body of the function
    return inner_result; // The return value. zero or one value
}
// Calling or Invoking a function
let outer_result = addTwo(6, 7); //passing in two Arguments 6 and 7.
console.log(outer_result);


console.log(addTwo(6, 7));
console.log(addTwo("6", "7")); //ONE OR MORE STRINGS CONCATENATE
console.log(addTwo(6, "7"));
console.log(addTwo("6", 7));
copyright();

// Order of operations affects outcome using + and strings
console.log( 6 + "ABC" + (7 + 10)); // outputs 6ABC17
console.log( 6 + "ABC" + 7 + 10); // outputs 6ABC710
console.log( 6 + 7 + "ABC"); // outputs 13ABC
console.log( 6 + (7 + "ABC")); // outputs 67ABC
console.log( `${6+7} ABC`); // outputs "13 ABC" - MODERN is to user JS Template Strings
