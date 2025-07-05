/* Instructions
Suppose you are building a simple password validator for a website. Let’s use what
we have learned about loops to verify the password.
Task
    Write a program to prompt the user for a password. The password should meet all
    these requirements:
        ● The password must be at least 8 characters long.
        ● The password must contain at least one uppercase letter.
        ● The password must contain at least one number.
        ● If the password does not meet all the requirements, the program should
            keep asking the user for a new password until they provide a valid one.
    Your application should:
        ● Use readlineSync.question() to prompt a user for input.
        ● Prompt a user to enter a password.
        ● Loop through the password to ensure that it meets the password
            requirements, using the appropriate iteration statement(s) to do so. Make
            sure you consider how iteration affects top-to-bottom execution of your code
            and when a while or do-while loop would be more appropriate.
        ● Return one of the following statements:
            ○ If the password meets the requirements, a statement to let the user
                know they have been successful
            ○ If the password does NOT meet the requirements, a statement to let
                the user know their password does not meet the requirements */

/* const readline = require("readline-sync");

console.log(`Please choose a pass word to include:
   -- 8+ Characters
   -- Uppercase letter
   -- Number.
    `);

let password = readline.question("Please enter a password: ");
//task one
let check1 = password.length;
while (check1 <= 7) {
  console.log("Password must be 8 characters or longer.");
  password = readline.question("Please enter a password: ");
  check1 = password.length;
}
//task two//
let check2 = password === password.toLowerCase();
while (check2 !== false) {
  console.log("Password must contain an UPPERCASE letter.");
  password = readline.question("Please enter a password: ");
  check2 = password === password.toLowerCase();
}
//task three//
let check3;
do {
  check3 = false; // reset check

  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      check3 = true; // number
      break; // exit and proceed
    }
  }

  if (!check3) {
    console.log("Please include a number.");
    password = readline.question("Please enter a password: ");
  }
} while (!check3);

/* comleted password. 
console.log("Your password is acceptable.");
 */

/* ABOVE THIS WAS MY INITAL CODE -- it worked okay except it did not double check the passoword at the end. 
It also had the flaw of allowing bad code to pass as long as it worked the first time... example being if you had it be 8+ characters so it passed the first test
then you added an uppercase in the second test but it was only 7 characters it would still pass because the loop checking charaters was already complete.

So, after some time with external resources, Found that this is a better way to accomplish it.*/

const readline = require("readline-sync");

console.log(`Please choose a password that includes:
   -- At least 8 characters
   -- At least one uppercase letter
   -- At least one number
`);

let password;
let isValid;

do {
  password = readline.question("Please enter a password: ");
  isValid = true;

  // Task 1
  if (password.length < 8) {
    console.log("Password must be at least 8 characters long.");
    isValid = false;
  }

  // Task 2
  if (password === password.toLowerCase()) {
    console.log("Password must contain at least one uppercase letter.");
    isValid = false;
  }

  // Task 3
  let hasNumber = false; //reset check for number
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      hasNumber = true; // number is in password
      break;
    }
  }

  if (!hasNumber) {
    console.log("Password must contain at least one number.");
    isValid = false; // Mark as invalid
  }
} while (!isValid); // Continue looping until the password is valid

console.log("Your password is acceptable.");
