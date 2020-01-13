//display today's date
//problem: how do you 'record' previous dates?
//saving date script in here until I figured out how to record the dates

//DOM dates
// const OLD_RECORD_DATES = document.querySelectorAll('.date'); 
const RECORD_DATES = document.querySelectorAll('.dates');
let date = 11; //11 as this is when i wrote the script
let todayDate;
let printDate;

// //populate previous date records into dates array
// let previousDates = []
// for (let i = 0; i < OLD_RECORD_DATES.length; i++){
//     previousDates.push(OLD_RECORD_DATES[i].innerHTML);
// }   

//push today's dates into dates
let dates = [];

window.onload = recordDate;

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
    printDate = date.toString();
    return dates.unshift(printDate);
}

function recordDate() {
    getTodayDate();
    //if date doesn't match today's date && content is not the same
    if (date !== todayDate && POSTS[0].innerHTML !== POSTS[1].innerHTML) {
        //insert today's date into dates array
        printToday();

        //reset date to today's date
        date = todayDate
    }

    //loop through dates array and display to DOM
    for (let i = 0; i < dates.length; i++) {
        return RECORD_DATES[i].innerHTML = dates[i];
    }
}