const rockSound = new Audio("./sounds/rock.mp3");
const paperSound = new Audio("./sounds/paper.mp3");
const scissorsSound = new Audio("./sounds/scissors.mp3");
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const pickStatus = document.getElementById('pickStatus');
let pickOptions = [rock, paper, scissors];

const takePick = (e) => {
    
    let picked = e.target.id;
    let notPicked = pickOptions.filter( (item) => item.id != picked );
    notPicked.map( (item) => item.style.visibility = 'hidden' );
    pickStatus.innerHTML = 'You picked '+picked+'!';

    if(picked == 'rock'){
        rockSound.play();
    } else if(picked == 'paper'){
        paperSound.play();
    }else{
        scissorsSound.play();
    }

};

rock.addEventListener('click',takePick);
paper.addEventListener('click',takePick);
scissors.addEventListener('click',takePick);
