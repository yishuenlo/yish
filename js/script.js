//lazy laoding
// const POSTS = document.querySelectorAll('.post');

//load first 5 posts, use lazy loading for the rest
// POST[5] TO POST[POST.LENGTH-1]


//automatically set all anchor tags with http link to opening a new tab
const ANCHOR_TAGS = document.querySelectorAll('a');

// if <a> has href attribute that starts with http...
for (i = 0; i < ANCHOR_TAGS.length; i++) {
    let anchorHref = ANCHOR_TAGS[i].getAttribute('href'); //href link
    anchorHref = anchorHref.slice(0, 4); //grab http

    //if <a href> starts with http
    if (anchorHref == 'http') {
        //set target attribute to _blank
        ANCHOR_TAGS[i].setAttribute('target', '_blank');
    }
}

//nav bar
const NAV_BAR = document.querySelector('.nav-ul');

NAV_BAR.innerHTML = `
    <li><a href="index.html">log</a></li>
    <li><a href="process.html">process</a></li>
    <li><a href="about.html">about</a></li>
`;

//exp calculator 
function levelExp(level) {
    return Math.floor((15 * Math.pow(level, 3)) / 5);
}

// DOM - level table
const PRINT_LEVEL = document.querySelectorAll('.level-table');
const PRINT_EXP = document.querySelectorAll('.exp-table');
const PRINT_EXP_TNL = document.querySelectorAll('.exp-tnl');

//populate level & experience table
for (i = 0; i < PRINT_LEVEL.length; i++) {
    PRINT_LEVEL[i].innerHTML = `level ${i + 1}`;
    PRINT_EXP[i].innerHTML = `$${levelExp(i + 1)} EXP`;
    PRINT_EXP_TNL[i].innerHTML = `$${levelExp(i + 2) - levelExp(i + 1)} EXP`;
}

//DOM - log components
const CURRENT_EXP_DISPLAY = document.querySelector('.currentEXP');
const CURRENT_LEVEL_EXP_DISPLAY = document.querySelector('.currentLevelEXP');
let CURRENT_LEVEL_BADGE = document.querySelector('.current-level');
let currentLevel = 0;

//get current exp from article entry
let currentExp = document.querySelector('.current-exp').innerHTML;
//convert to number
currentExp = parseInt(currentExp.slice(1, currentExp.length));

let currentProgress = document.querySelector('.current-progress');


//current level display based on experience points_EXP
function calcCurrentLevel(exp){
 
    if (exp <= levelExp(2)) {
        currentLevel = 1;
    } else if (exp <= levelExp(3)) {
        currentLevel = 2;
    } else if(exp <= levelExp(4)) {
        currentLevel = 3;
    } else if(exp <= levelExp(5)){
        currentLevel = 4;
    } else if (exp <= levelExp(6)) {
        currentLevel = 5;
    } else if (exp <= levelExp(7)) {
        currentLevel = 6;
    } else if (exp <= levelExp(8)) {
        currentLevel = 7;
    } else if (exp <= levelExp(9)) {
        currentLevel = 8;
    } else if (exp <= levelExp(10)) {
        currentLevel = 9;
    } else {
        currentLevel = 10;
    }

    return currentLevel;
};

//display current level based on current exp
CURRENT_LEVEL_BADGE.innerHTML = calcCurrentLevel(currentExp);

//show progress length based on current exp
currentProgress.style.width = `${currentExp / levelExp(currentLevel+1)*100}%`;

//show progress text
CURRENT_EXP_DISPLAY.innerHTML = currentExp;
CURRENT_LEVEL_EXP_DISPLAY.innerHTML = levelExp(currentLevel + 1) - 1;

// experience points 
const TRAIN_CONSUME_EXP = 0.50;
const TRAIN_CREATE_EXP = 1.00;
const QUEST_TUTORIAL_EXP = 5;
const QUEST_MINIJS_EXP = 2;
























