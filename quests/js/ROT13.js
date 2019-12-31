let encoded = "SERR PBQR PNZC";

let alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

let nonCharacter = /[\W]/gi;
let encodedArray = encoded.split('');

function isItLetter(str){
    let arr = str.split('');

    for (let i = 0; i < str.length; i++) {
        if(!nonCharacter.test(arr[i])) {
            console.log("it's a letter!");
        } else {
            console.log("it's a NOT letter");
        }
    }
}

function decoding(code){
    //break code into letters in an array
    let encodedArray = code.split('');
    let decodedMessage = "";
    
    for(let i=0; i<code.length; i++){
        //if it's a letter, or not a non character
        if (!nonCharacter.test(encodedArray[i])){
            //find the index of encoded letter
            let encodedLetterIndex = alphabets.indexOf(encodedArray[i]);

            //shift index 13 units
            let decodedLetterIndex = encodedLetterIndex + 13;

            //if index is more than 26, go back to the front
            if (decodedLetterIndex > 25) { //greater than 25, because array starts from 0 to 25
                decodedLetterIndex -= 26; //26 letters
            }
            let decodedLetter = alphabets[decodedLetterIndex];

            decodedMessage += decodedLetter;
        } else {
            decodedMessage += encodedArray[i];
        }

    }

    return decodedMessage;
}
