//display today's date
//problem: how do you 'record' previous dates?
//saving date script in here until I figured out how to record the dates


// const OLD_RECORD_DATES = document.querySelectorAll('.date'); 
const RECORD_DATES = document.querySelectorAll('.dates'); //DOM dates
const POSTS = document.querySelectorAll('.post');
let date = 12; //12 as this is when i wrote the script
let todayDate; //a variety to compare to date
let content = "Learned using Set() constructor's property .size to return number of unique elements in a Set object. This is espeically helpful for the isogram challenge."; //content from 1/12, when I implemented the script

// //populate previous date records into dates array
// let previousDates = []
// for (let i = 0; i < OLD_RECORD_DATES.length; i++){
//     previousDates.push(OLD_RECORD_DATES[i].innerHTML);
// }   

//push today's dates into dates
let dates = [];

window.onload = recordDate;


function recordDate() {
    getTodayDate();
    //if date doesn't match today's date && content is not the same
    if (date !== todayDate && POSTS[0].lastElementChild.textContent !== content) {
        //insert today's date into dates array
        printToday();

        //reset date to today's date
        date = todayDate
        content = POSTS[0].lastElementChild.textContent;
    }

    //loop through dates array and display to DOM
    for (let i = 0; i < dates.length; i++) {
        return RECORD_DATES[i].innerHTML = dates[i];
    }
}

//get today's date to compare to previous today
function getTodayDate() {
    let today = new Date();
    todayDate = today.getDate();
}

function printToday() {
    let today = new Date();
    let monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    let date = `${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    console.log(`today is ${date}`);
    let printDate = date.toString();
    return dates.unshift(printDate);
}