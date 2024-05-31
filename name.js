//1. Create a variable called `carName`, assign the value `Volvo` to it.

//Answer
//let carName = "Volvo";






// 2. On one single line, declare three variables with the following names and values:

// firstName = "John"
// lastName = "Doe"
// age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values &
// 3rd Variable Name And Values Both!

//Answer
// let firstName = "John", //1st Variable Name is firstName, value is "John"
//   lastName = "Doe", //2nd Variable Name is lastName, value is "Doe"
//   age = 35; //3rd Variable Name is age, value is 35






// 3. Use the correct assignment operator that will
// result in x being 50 (same as x = x * y).

//Answer
// let x = 10; // Initial value of x
// let y = 5;  // Value of y

// x *= y;     // Multiply x by y and assign the result back to x

// console.log(x); // Output: 50






// 4.Use comments to describe the correct data type of the following variables:

// let length = 16; // data type ?
// let lastName = "Johnson"; // data type ?

// const x = {
//   firstName: "John",
//   lastName: "Doe"
// };    // data type ?

//Answer
// let length = 16; // Data type: number
// let lastName = "Johnson"; // Data type: string

// const x = {
//   firstName: "John",
//   lastName: "Doe"
// }; // Data type: object






// 5. Execute the function named myFunction.

//  function myFunction() {
//   alert("Hello World!");
// }

// call the function and see the output

//Answer
// function myFunction() {
//   alert("Hello World!");
// }

// myFunction();






//6.1. Create an object called person with name = John, age = 50, Then,
//access the object to alert("John is 50").

//Answer
//  let person = {
//    name: "John",
//    age: 50,
//  };
//  alert(person.name + " is " + person.age);






//7.1. The <button> element should do something when someone clicks on it. Try to fix it!

//Answer
// const button = document.getElementById("myButton");

// //event listener for button
// button.addEventListener("click", function () {
//   alert("Button clicked!");
// });






// 8.1. Alert the number of items in an array, using the correct Array property:

// const cars = ["Volvo", "Jeep", "Mercedes"];

// //Answer
// const cars = ["Volvo", "Jeep", "Mercedes"];
// alert("Number of cars: " + cars.length);

// 8.2. Change the first item of Brand to "Ford".

//Answer
// const Brand = ["Volvo", "Jeep", "Mercedes"];

//  const Brand = ["Volvo", "Jeep", "Mercedes"];
//  Brand[0] = "Ford";
//  console.log(Brand);







//9.1. Use the correct Math method to create a random number.
// Answer
//  const randomNumber = Math.random();
//  console.log(randomNumber);

//9.2. Use the correct Math method to return the largest number of 10 and 20.

//Answer
//  const largestNumber = Math.max(10, 20);
//  console.log(largestNumber);

//9.3. Use the correct Math method to get the square root of 9.

//Answer
//  const squareRoot = Math.sqrt(9);
//  console.log(squareRoot);







// 10.1. Choose the correct comparison operator to alert true, when x is greater than y.
// x = 10;
// y = 5;

// alert() // ?

// Answer
// const x = 10;
// const y = 5;

// if (x > y) {
//   alert(true);
// }

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

// const age = 17;

// alert(age < 18 ? "Too young" : "Old enough");
