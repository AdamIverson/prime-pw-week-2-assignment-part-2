// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//We create a variable called name and assign it the string value of 'Dane'.
//If the variable name has a value of 'Mary', we will log 'Hi, Mary!'.
//If the variable name has a value that is not 'Mary', we will log 'How do you do?'
//Since name has a value of 'Dane' we console.log 'How do you do?'
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We create a variable named secret, then we create a variable named code and we set its value to 123
//We write an if statement that will run if the value of code is equal to 123. If code is equal to 123, the variable secret
//will have a value of 'super' and the value of code will be code times two. If the value of code is greater than 250, the value of secret will be
//'duper'. Code has a value of 123, so we console.log 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We declare the variable isStudent and assign it the boolean value of true. We declare the variable age and assign it the number value of 34.
//We declare the variable zip and assign it the number value of 55407. We write and if statement with two parameters, both of which must be true in
//to run the code. The first parameter is that the value of isStudent must be true and the second parameter is that the zip has a value greater than 8000.
//If both of these are met, we will log 'You're a student on the West Coast!'. If one of these parameters is not met, the code moves on to the next
//option, which is that if the value of isStudent is false OR the value of age is less than 30, we will console.log 'What are your hobbies?'
//If isStudent is true, we will log 'Welcome to Prime!' If none of the paramaters are met, we will log 'How about the weather?'
//In this case, we would console.log 'Welcome to Prime!'
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/

//TEST AS HECK

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX - the values of colorOne and colorTwo are transposed and must be corrected.
//In order to also set colorTwo to 'purple' if mix is true, we add one line of code that would read:
//"colorTwo = 'purple';" in this case on line 143

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - the operator || will run the code if either of the parameters is true
// We change the pipes to &&, requiring both to be met in order to run the code.

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - the console.logs are reversed. Change 'no entry' to 'entry' and 'no entry' to 'entry' and we're good to go.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
