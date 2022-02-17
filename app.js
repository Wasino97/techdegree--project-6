const keyBoard = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
const btnReset = document.getElementsByTagName('a')[0];

let missed = 0;

//Start Game Button 
btnReset.addEventListener('click', (e) => {
    const overlay = document.getElementsByClassName('start')[0];
    overlay.style.display = "none";
});

//Array of quotes
const phraseArray = [
    "cant make a tomlett without breaking a couple greggs",
    "youre my boy youre my number one boy",
    'then how about tom with some fucking greg sprinkles',
    'connor roy was intrested in politics from a very young age',
    'we just walked in on mom and dad fucking us'
];

//Function to pick a random quote from the array and split into individual characters
function getRandomPhraseAsArray(arr){
   const randomPhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
   const phraseSplit = randomPhrase.split('');
   return phraseSplit;
}; 

let randomPhrase = getRandomPhraseAsArray();

//Function to display the characters on the screen
function addPhraseToDisplay(arr){
    const splitPhrase = getRandomPhraseAsArray();
        for (i = 0; i < splitPhrase.length; i++){
            const text = document.createElement('li');
            text.textContent = splitPhrase[i];
            phrase.appendChild(text);
                if (splitPhrase[i] === " "){
                    text.classList.add('space');
                } else {
                    text.classList.add('letter');
                }
            }
};

addPhraseToDisplay(randomPhrase);

//check if the user clicks a letter matching a letter in the phrase
function checkLetter(button){
    const li = document.querySelectorAll('li');
    let match = null;
        for (i = 0; i < li.length; i++){
                if (li[i].textContent === button.textContent){
                    match = (li[i] = button.textContent);
                    li[i].classList.add('show');
                }
        }
    return match;
}

 //Click event to give the clicked letter the class of chosen
 keyBoard.addEventListener('click', (e) => {
    const btn = e.target;
        if(btn.tagName === 'BUTTON' || btn.className === 'chosen') {
            btn.classList.add("chosen");
            btn.disabled = true;
            let letterFound = checkLetter(btn);
            if(letterFound === "null" || letterFound !== btn.textContent) {
               const heartLoss = document.querySelectorAll('.tries img')[missed]
               heartLoss.src='images/lostHeart.png';
               heartLoss.className = 'lost';
               missed++;
            }
            checkWin();
        }
 })

 function checkWin(){
    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    const overlay = document.getElementById('overlay');
    const title =  document.querySelector('.title');
    if(letter.length === show.length) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
        title.textContent = 'You Won!'
    } else if (missed > 4) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        title.textContent = 'Try Again';
    }
 }

