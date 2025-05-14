/********************************
Name of task: While loops
Author: Finley
Date: 14/05/35
********************************/
console.log("Running while_loop.js");

//Variables
let isTRUE = true;
let is = true;
let loopCONTINUE;
//Arrays


/********************************
Main code
********************************/
loopCONTINUE = prompt("Do you want this loop to continue, y or n");
while (loopCONTINUE != "n") {
    loopCONTINUE = prompt("Do you want this loop to continue, y or n");
}
alert("Sad :(");
while (isTRUE == true){
    if (is == true){
        is = prompt("true or false");
        if (is == "false") {
            is = Boolean(false);
        } else {
            is = Boolean(true);
        }
    } else {
        isTRUE = false;
    }
}


/********************************
Functions
********************************/