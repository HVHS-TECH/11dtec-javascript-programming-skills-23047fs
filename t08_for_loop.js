/********************************
Name of task: If
Author: Finley
Date: 29/04/35
********************************/
console.log("Running t07_if.js");

//Variables
let userNAME = 0;


//Arrays
let userNUMBER = [0, 0, 0, 0, 0];
let userNUMBERcount = 0

/********************************
Main code
********************************/
alert("Welcome to this Program.");
userNAME = prompt("What is your name?");
for (count = 0; count < 5; count++){
    userNUMBER[userNUMBERcount] = prompt("Welcome " + userNAME + " choose any number");
    userNUMBERcount += 1
}
userNUMBER[0]

alert(userNUMBER[0] + userNUMBER[1] + userNUMBER[2] + userNUMBER[3] + userNUMBER[4])

/********************************
Functions
********************************/