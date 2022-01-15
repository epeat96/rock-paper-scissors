const rockSound = new Audio("./sounds/rock.mp3");
const paperSound = new Audio("./sounds/paper.mp3");
const scissorsSound = new Audio("./sounds/scissors.mp3");
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const pickStatus = document.getElementById('pickStatus');
const opponentPick = document.getElementById('opponentPick');
let pickOptions = [rock, paper, scissors];
let gameStatus = 'prePick';

const playSound = (picked) => {

    if(picked == 'rock'){
        rockSound.play();
    } else if(picked == 'paper'){
        paperSound.play();
    }else{
        scissorsSound.play();
    }

}

const opponentPicker = () => {
    let opponentPick = pickOptions[Math.floor(Math.random() * 3)].id;
    return opponentPick; 
}

const showOpponentPick = (picked) => {

    let img = document.createElement('img');
    img.src='./images/'+picked+'.png';
    opponentPick.appendChild(img);
    playSound(picked);
    gameStatus = 'end';

}

const takePick = (e) => {

    if ( gameStatus == 'opponentPicking' ){
        return;
    }

    if ( gameStatus == 'end' ){
        pickOptions.map( (item) => item.style.visibility = 'visible' );
        gameStatus = 'prePick';
        pickStatus.innerHTML = 'Take your pick';
        opponentPick.removeChild(opponentPick.firstElementChild);
        return;
    }

    gameStatus = 'postPick';

    let picked = e.target.id;
    let notPicked = pickOptions.filter( (item) => item.id != picked );
    notPicked.map( (item) => item.style.visibility = 'hidden' );
    pickStatus.innerHTML = 'You picked '+picked+'!';

    playSound(picked);

    if ( gameStatus == 'postPick' ){
        gameStatus = 'opponentPicking';
        setTimeout(showOpponentPick,4000,opponentPicker());
        return;
    }

};

rock.addEventListener('click',takePick);
paper.addEventListener('click',takePick);
scissors.addEventListener('click',takePick);
