let randomnum = Math.random();
document.getElementById('randomchance').innerHTML = randomnum;

const squareIdList = ['square1','square2','square3','square4','square5','square6','square7','square8','square9'];
const squareList = [];

//add all square elements to squareList
squareIdList.forEach(square => squareList.push(document.getElementById(square)));

//function to change colour of square when clicked
const squareClick = event => event.target.innerHTML =  'X';

//add eventListener to each square element
squareList.forEach(square => square.addEventListener('click', squareClick));

