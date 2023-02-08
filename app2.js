"use strict";
let Answer1 = prompt("Are you a committed person? (Yes/No)");
let Answer2 = prompt("Would you like to update your To Do List Tasks? (Yes/No)");
let Answer3 = prompt("Would you like to update your To Do List Status? (Yes/No)");
let arrOfAnswers = [Answer1, Answer2, Answer3];
let i;
function answersPrinting(i) {
    let x = i + 1;
    switch (arrOfAnswers[i]) {
        case ("yes"):
        case ("Yes"):
        case ("no"):
        case ("No"):
            console.log("Answer" + x + "is " + (arrOfAnswers)[i]);
            break;
        case (""):
            console.log("Answer" + x + "is " + "invalid");
            break;
    }
}
function answersdemonstration() {
    for (i = 0; i < arrOfAnswers.length; i++) {
        answersPrinting(i);
    }
}
answersdemonstration();