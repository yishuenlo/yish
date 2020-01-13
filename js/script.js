//lazy laoding
const POSTS = document.querySelectorAll('.post');

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


//DOM - log components
const LEVEL_DISPLAY = document.querySelectorAll('.level-display');
const CURRENT_EXP = document.querySelectorAll('.current-exp');
const NAV_BAR = document.querySelector('.nav-ul');

NAV_BAR.innerHTML = `
    <li><a href="index.html">code</a></li>
    <li><a href="process.html">process</a></li>
    <li><a href="about.html">about</a></li>
`;





// experience points 
const TRAIN_CONSUME_EXP = 0.50;
const TRAIN_CREATE_EXP = 1.00;
const QUEST_TUTORIAL_EXP = 5;
const QUEST_MINIJS_EXP = 2; 

//exp calculator 
function level(level){
    return Math.floor((15 * Math.pow(level,3)) / 5);
}

// DOM - level table
const PRINT_LEVEL = document.querySelectorAll('.level-table');
const PRINT_EXP = document.querySelectorAll('.exp-table');
const PRINT_EXP_TNL = document.querySelectorAll('.exp-tnl');

//current level display based on experience points_EXP
function currentLevel(exp){
    if (exp <= level(1)) {
        console.log('level 1');
    } else if (exp <= level(2)) {
        LEVEL_DISPLAY.innerHTML = 'level 2';
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
    PRINT_EXP[i].innerHTML = `$${level(i + 1)} EXP`;
    PRINT_EXP_TNL[i].innerHTML = `$${level(i + 2) - level(i + 1)} EXP`;
}
























