
const squareIdList = ['square1','square2','square3','square4','square5','square6','square7','square8','square9'];
const squareList = [];
//let turn = true be for O
let turn = true;
turnShower = document.getElementById('turn')
turnShower.innerHTML = turn ? 'O' : 'X';

//add all square elements to squareList
squareIdList.forEach(square => squareList.push(document.getElementById(square)));

//functions to change colour of square when clicked 
const squareClick = e => {
    if (turn) {
        e.target.innerHTML =  'O';
        turn = !turn;
        turnShower.innerHTML = 'X';
    }
    else {
        e.target.innerHTML = 'X';
        turn = !turn;
        turnShower.innerHTML = 'O';
    }
}

//add eventListener to each square element
squareList.forEach(square => square.addEventListener('click', squareClick));


//reset all squares function
function reset(e) {
    squareList.forEach(square => square.innerHTML = '');
}

const button = document.querySelector('button');
button.addEventListener('click', reset);