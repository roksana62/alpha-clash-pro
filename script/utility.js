function hideElementById (elementId){
    let element= document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById (elementId){
    let element = document.getElementById(elementId)
    element.classList.remove('hidden')
}


function addBackgroundColorById (elementId){
    let element= document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function removeBackgroundColorById (elementId){
let element= document.getElementById(elementId)
element.classList.remove('bg-orange-400')
}


function getElementValuById (elementId){
    let currentElementValue= document.getElementById(elementId)
    let currentValue= currentElementValue.innerText;
    let parseValue= parseInt(currentValue);
    return parseValue;
}

function setElementValueById (elementId, value){
    let currentElementValue= document.getElementById(elementId)
    currentElementValue.innerText= value;
}

function getARandomAlphabet (){
    // get or crate alphabetarray
    let alphabetString= 'abcdefghijklmnopqrstuvwxyz';
    let alphabets= alphabetString.split('');
    // console.log(alphabets)
// get random index of alphabet
    let randomNumber= Math.random()*25;
    let index= Math.round(randomNumber)
    // console.log(index)
// get alphabet by index
    let alphabet= alphabets[index]
    // console.log(alphabet)
    return alphabet;
}

