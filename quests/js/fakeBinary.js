// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

// fakeBin('45385593107843568')
//'01011110001100111'


let str = '45385593107843568';
let strArr = str.split('');
let binary = '';

for(let i =0; i < strArr.length; i++){
    if(Number(strArr[i]) < 5){
        binary += 0;
    } else {
        binary += 1;
    };
};



function fakeBin(x){
    let binary = '';

    for (let i = 0; i < x.length; i++) {
        Number(x[i]) < 5 ? binary += 0 : binary += 1;
    };

    return binary;
}


function fakeBinary(str){
    return str.split('').map(n => n < 5 ? 0 : 1).join('');
}
