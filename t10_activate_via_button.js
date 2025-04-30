/********************************
Name of task: Buttons
Author: Finley
Date: 30/04/35
********************************/
console.log("Running t10_activate_via_button.js");

//Variables
let userNAME = 0
let userAGE = 0
let pocketMONEY = 0
let currentDATE = 2025;
let userCHOCOLATE = 0
let askUSERname
let askUSERage
let askUSERmoney
let tellUSERinfo


//Arrays
let chocolate = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!"]


/********************************
Main code
********************************/
function start() {
    askUSERname = askUSERname()
    askUSERage = askUSERage()
    askUSERmoney = askUSERmoney()
    tellUSERinfo = tellUSERinfo()
}


/********************************
Functions
********************************/
function askUSERname() {
    alert("Welcome to this Program.");
    userNAME = prompt("What is your name?");
}
function askUSERage() {
    userAGE = prompt("Welcome " + userNAME + " what is your age");
}
function askUSERmoney() {
    pocketMONEY = prompt("How much pocket money do you have?");
    userCHOCOLATE = prompt("How much do you love chocolate from 0-3")
}
function tellUSERinfo() {
    userAGE = Number(userAGE);
    pocketMONEY = Number(pocketMONEY);
    alert("You were born in " + (currentDATE - userAGE));
    alert("In ten years you will be " + (10 + userAGE));
    alert("You have $" + pocketMONEY);
    alert("Half your pocket money would be $" + (pocketMONEY / 2));
    if (pocketMONEY >= 4){
        alert("You think " + chocolate[userCHOCOLATE] + " and you can afford a bar of chocolate :)")
    } else {
        alert("You think " + chocolate[userCHOCOLATE] + " and you can't afford a bar of chocolate :(")
    }
}