// function play (){
// let homeSection= document.getElementById('home_screen')
// console.log(homeSection)
// console.log('roks is here')
// let sectionHome= document.getElementById('home')
// console.log(sectionHome)

// let homeSection= document.getElementById('home')
// let vanishe= homeSection.classList.add('hidden')

// let playGround= document.getElementById('play_ground')
// let showing= playGround.classList.remove('hidden')

// hideElementById('home')
// }

//  function continueGame (){
//     let alphabet= getARandomAlphabet()
//     console.log('your random alphabet', alphabet)
//  }

function continueGame (){
    let alphabet= getARandomAlphabet()
    console.log(alphabet)

    let currentAlpahbet= document.getElementById('current_alphabet');
    currentAlpahbet.innerText= alphabet;
    addBackgroundColorById (alphabet)
}

function play (){
    hideElementById('home')
    showElementById('play_ground')
    continueGame()
}