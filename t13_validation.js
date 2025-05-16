/********************************
Name of task: Validation
Author: Finley
Date: 14/05/35
********************************/
console.log("Running t13_validation.js");

//Variables
let userNAME = 0;
let userNAMEinvalid = true;
let userAGE = 0;
let userAGEinvalid = true;
let pocketMONEY = 0;
let pocketMONEYinvalid = true;
let currentDATE = 2025;
let userCHOCOLATE = 0;
let userCHOCOLATEinvalid = true;


//Arrays
let chocolate = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!"];


/********************************
Main code
********************************/


/********************************
Functions
********************************/
function start() {
    askUSERname();
    askUSERage();
    askUSERmoney();
    tellUSERinfo();
}
function askUSERname() {
    alert("Welcome to this Program.");
    userNAME = prompt("What is your name?");
    while (userNAMEinvalid == true) {
        if (!isNaN(userNAME)) {
            userNAME = prompt("What is your name?");
        } else {
            userNAMEinvalid = false;
        }
    }
}
function askUSERage() {
    userAGE = prompt("Welcome " + userNAME + " what is your age");
    while (userAGEinvalid == true) {
        if (isNaN(userAGE)) {
            userNAME = prompt("What is your age?");
        } else {
            userAGEinvalid = false;
        }
    }
}
function askUSERmoney() {
    while (pocketMONEYinvalid == true) {
        if (isNaN(pocketMONEY)) {
            pocketMONEY = prompt("How much pocket money do you have?");
        } else {
            pocketMONEYinvalid = false;
        }
    }
    while (userCHOCOLATEinvalid == true) {
        if (isNaN(userCHOCOLATE)) {
            userCHOCOLATE = prompt("How much do you love chocolate from 0-3")
        } else {
            userCHOCOLATEinvalid = false;
        }
    }
}
function tellUSERinfo() {
    userAGE = Number(userAGE);
    pocketMONEY = Number(pocketMONEY);
    alert("You are " + userAGE + ". You were born in " + (currentDATE - userAGE));
    alert("In ten years you will be " + (10 + userAGE));
    alert("You have $" + pocketMONEY);
    alert("Half your pocket money would be $" + (pocketMONEY / 2));
    if (pocketMONEY >= 4){
        alert("You think " + chocolate[userCHOCOLATE] + " and you can afford a bar of chocolate :)")
    } else {
        alert("You think " + chocolate[userCHOCOLATE] + " and you can't afford a bar of chocolate :(")
    }
}