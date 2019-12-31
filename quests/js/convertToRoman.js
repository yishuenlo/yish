

function romanize(num){
    let romanPairs = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CDL',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }

    let digitString = Object.keys(romanPairs); //keys of romanPairs object
    let digits = [];
    for (i = 0; i < digitString.length; i++) {
        digits.push(Number(digitString[i]));
    }

    let romanLetters = Object.values(romanPairs); //values of romanPairs object

    // console.log(digits);
    // console.log(romanLetters);

    // let num = 27;
    let romanNumeral = "";

//if digits is smaller than num, substract digits from num
    for (i = 12; i >= 0; i--) {
        while (num >= digits[i]) {
            // console.log(num);
            num -= digits[i];
            // console.log(romanLetters[i]);
            romanNumeral += romanLetters[i];
        }
    }
    return romanNumeral;
}