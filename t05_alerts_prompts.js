/********************************
Name of task: Alerts
Author: Finley
Date: 29/04/35
********************************/
console.log("Running t05_alerts_prompts.js");

//Variables
let userNAME = 0
let userAGE = 0
let pocketMONEY = 0
let currentDATE = 2025;

//Arrays


/********************************
Main code
********************************/
alert("Welcome to this Program.");
userNAME = prompt("What is your name?");
userAGE = prompt("Welcome " + userNAME + " what is your age");
pocketMONEY = prompt("How much pocket money do you have?");
userAge = Number(userAGE);
pocketMONEY = Number(pocketMONEY);
alert("You were born in " + (currentDATE - userAGE));
alert("In ten years you will be " + (10 + userAGE));
alert("You have $" + pocketMONEY);
alert("Half your pocket money would be $" + (pocketMONEY / 2));


/********************************
Functions
********************************/