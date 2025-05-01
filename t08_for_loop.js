/********************************
Name of task: For loops
Author: Finley
Date: 29/04/35
********************************/
console.log("Running t08_for_loop.js");

//Variables
let userNAME = 0;
let userNUMBER = 0;
let userTOTAL = 0;

//Arrays


/********************************
Main code
********************************/
alert("Welcome to this Program.");
userNAME = prompt("What is your name?");
for (count = 0; count < 5; count++){
    userNUMBER = prompt("Welcome " + userNAME + " choose any number");
    userNUMBER = Number(userNUMBER);
    userTOTAL = userNUMBER + userTOTAL;
}


alert("The total is equal to " + userTOTAL);

/********************************
Functions
********************************/