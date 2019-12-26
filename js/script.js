// DOM - level table
const PRINT_LEVEL = document.querySelectorAll('.level-table');
const PRINT_EXP = document.querySelectorAll('.exp-table');
const PRINT_EXP_TNL = document.querySelectorAll('.exp-tnl');

//DOM - log components
const LEVEL_DISPLAY = document.querySelectorAll('.level-display');
const CURRENT_EXP = document.querySelectorAll('.current-exp');
const TODAY_DATE = document.querySelectorAll('.date'); //most recent date tag

//display today's date
//problem: how do you 'record' previous dates?
let showUp = true;
let printDate;
function printToday(){
    let today = new Date();
    let monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    let date = `${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    return printDate = date.toString();
}

function recordDate(){
    if(showUp){
        printToday();
    }
    return TODAY_DATE[0].innerHTML = printDate;
}

window.onload = recordDate;


// experience points 
const TRAIN_CONSUME_EXP = 0.25;
const TRAIN_CREATE_EXP = 0.50;
const QUEST_TUTORIAL_EXP = 5;
const QUEST_MINIPROJ_EXP = 2; 

//exp calculator 
function level(level){
    return Math.floor((15 * Math.pow(level,3)) / 5);
}

//current level display based on experience points_EXP
function currentLevel(exp){
    if (exp <= level(1)) {
        console.log('level 1');
    } else if (exp <= level(2)) {
        console.log('level 2');
    } else if(exp <= level(3)) {
        console.log('level 3');
    } else if(exp <= level(4)){
        console.log('level 4');
    } else if (exp <= level(5)) {
        console.log('level 5');
    } else if (exp <= level(6)) {
        console.log('level 6');
    } else if (exp <= level(7)) {
        console.log('level 7');
    } else if (exp <= level(8)) {
        console.log('level 8');
    } else if (exp <= level(9)) {
        console.log('level 9');
    } else {
        console.log('level 10');
    }
};

//populate level & experience table
for (i = 0; i < PRINT_LEVEL.length; i++) {
    PRINT_LEVEL[i].innerHTML = `level ${i + 1}`;
}

for (i = 0; i < PRINT_EXP.length; i++) {
    PRINT_EXP[i].innerHTML = `$${level(i + 1)} EXP`;
}

for (i = 0; i < PRINT_EXP_TNL.length; i++) {
    PRINT_EXP_TNL[i].innerHTML = `$${level(i + 2) - level(i + 1)} EXP`;
}

