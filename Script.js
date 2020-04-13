const hexNumber = [0,1,2,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
//using getElementById for practice to pick the button to respond to the event listener.
const hexBtn = document.getElementById('hex-btn');
//making a variable for the page's object of body
const bodyBcg = document.querySelector('body');
//Make a variable for the span left blank where the hex combination would go.
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex () {
    let hexCol = '#';

    for ( let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random()*hexNumber.length);
    //console.log(random);
    hexCol += hexNumber[random];
//console.log(hexCol);

    }
    //use the css property now to change the boackground of the body to hexCol defined above
bodyBcg.style.backgroundColor = hexCol;
hex.innerHTML = hexCol
}