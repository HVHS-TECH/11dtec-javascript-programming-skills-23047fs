/********************************
Name of task: If
Author: Finley
Date: 29/04/35
********************************/
console.log("Running t07_if.js");

//Variables
let userNAME = 0
let userAGE = 0
let pocketMONEY = 0
let currentDATE = 2025;
let userCHOCOLATE = 0

//Arrays
let chocolate = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!"]

/********************************
Main code
********************************/
alert("Welcome to this Program.");
userNAME = prompt("What is your name?");
userAGE = prompt("Welcome " + userNAME + " what is your age");
pocketMONEY = prompt("How much pocket money do you have?");
userCHOCOLATE = prompt("How much do you love chocolate from 0-3")
userAGE = Number(userAGE);
pocketMONEY = Number(pocketMONEY);
alert("You were born in " + (currentDATE - userAGE));
alert("In ten years you will be " + (10 + userAGE));
alert("You have $" + pocketMONEY);
alert("Half your pocket money would be $" + (pocketMONEY / 2));
alert(chocolate[userCHOCOLATE]);
if pocketMONEY{

}


/********************************
Functions
********************************/