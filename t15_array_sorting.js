/********************************
Name of task: Array Sorting
Author: Finley
Date: 16/05/35
********************************/
console.log("Running t15_array_sorting.js");

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
let chocolate = ["Mars bar", "Moro bar", "King Size Crunchy", "Dairy Milk Block", "Lindt Block"];
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
        messege = messege + "\nBar " + (i + 1) + " is " + chocolate[i] + " it costs $" + chocolatePRICE[i];
    }
    alert(messege);
    alert("The most expensive chocolate bar you can buy is a " + chocolate[pocketMONEY - 1])

}
function askUSERname() {
    alert("Welcome to this Program.");
    while (userNAMEinvalid == true) {
        userNAME = prompt("What is your name?");
        if (!isNaN(userNAME)) {
            userNAME = prompt("What is your name?");
        } else {
            userNAMEinvalid = false;
        }
    }
}
function askUSERage() {            
    while (userAGEinvalid == true) {
        userAGE = prompt("Welcome " + userNAME + " what is your age");
        if (isNaN(userAGE)) {
            userAGE = prompt("Welcome " + userNAME + " what is your age");
        } else {
            userAGEinvalid = false;
        }
    } 
}
function askUSERmoney() {
    while (pocketMONEYinvalid == true) {
        pocketMONEY = prompt("How much pocket money do you have?");
        if (isNaN(pocketMONEY) || pocketMONEY > 6 || pocketMONEY < -1) {
            pocketMONEY = prompt("How much pocket money do you have?");
        } else {
            pocketMONEYinvalid = false;
        }
    }
}
