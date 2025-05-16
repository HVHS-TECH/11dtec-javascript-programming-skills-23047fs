/********************************
Name of task: Constants
Author: Finley
Date: 16/05/35
********************************/
console.log("Running t13_validation.js");

//Variables
let userNAME = 0;
let userNAMEinvalid = true;
let userAGE = 0;
let userAGEinvalid = true;
let pocketMONEY = 0;
let pocketMONEYinvalid = true;
const CURRENTDATE = 2025;
let userCHOCOLATE = 0;
let userCHOCOLATEinvalid = true;
let messege = "The chocolate bars avalible are:";

//Arrays
let chocolate = ["Mars bar", "Moro bar", "King  Size Crunchy", "Dairy Milk Block", "Lindt Block"];
let chocolatePRICE = ["1", "2", "3", "4", "5"];


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

    for (i = 0; i < chocolate.length; i++){
        messege = messege + "\nBar " + i + " is " + chocolate
    }

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
}
