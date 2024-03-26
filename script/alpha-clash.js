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

function handlekeyboardBtnPress(event){
    let playerPressd= event.key;
    // console.log('player pressed',playerPressd)

    // get the expected press

    let currentAlphabet= document.getElementById('current_alphabet')
    let currentPressdKey =currentAlphabet.innerText;
    let expectedAlphabet= currentPressdKey.toLowerCase();
    // console.log(playerPressd, expectedAlphabet )
    if(expectedAlphabet===playerPressd){
        console.log('you win')

        let score= getElementValuById ('current_score')
        let newScore= score+1;
       setElementValueById('current_score',newScore)

        // ---------------------------------
    //     // update score
    //     // 1.get the current score
    //    let currentScoreElement= document.getElementById('current_score');
    //    let currentScoreText= currentScoreElement.innerText;
    //    let currentScore= parseInt(currentScoreText);
    // //    console.log(currentScoreText)
    //     // 2.increase the score by 1
    //     let newScore= currentScore + 1;
        
    //     // 3.update the score
    //    currentScoreElement.innerText= newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('you lost')

        let life= getElementValuById('current_life')
        let remain= life-1;
        setElementValueById('current_life', remain)
      
        if(remain===0){
           
            hideElementById('play_ground')
            
            showElementById('last_score')
            
            let lastScoree = getElementValuById('current_score')
            console.log(lastScoree)
            setElementValueById('game_score', lastScoree)
           
            
           document.getElementById('restar_game').addEventListener('click', function (){
                hideElementById('last_score')
                showElementById('play_ground')
               setElementValueById('current_life', 5)
               setElementValueById('current_score',0)
            })
     

        }

        // ----------------------------------------------
        // 1.get the current life score
        // let curentLifeScoreElement= document.getElementById('current_life');
        // let currentLifeText= curentLifeScoreElement.innerText;
        // let currentLifeScore= parseInt(currentLifeText);

        // // 2.reduce the life count
        // let remainLife = currentLifeScore - 1;
        // // 3.display the updated life count
        // curentLifeScoreElement.innerText= remainLife;
    }
    
}
document.addEventListener('keyup', handlekeyboardBtnPress)

function continueGame (){
    let alphabet= getARandomAlphabet()
    // console.log('your ramdom alphabet',alphabet)

    let currentAlpahbet= document.getElementById('current_alphabet');
    currentAlpahbet.innerText= alphabet;
    addBackgroundColorById (alphabet)
}

function play (){
    hideElementById('home')
    showElementById('play_ground')
    continueGame()
}