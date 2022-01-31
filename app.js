const keyBoard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByTagName('a')[0];

let missed = 0;

//Start Game Button 
btnReset.addEventListener('click', (e) => {
    const overlay = document.getElementsByClassName('start')[0];
    overlay.style.display = "none";
});

//Array of quotes
const phraseArray = [
    "Can't make a tomlett without breaking a couple greggs",
    "You're my boy you're my number one boy",
    'Then how about tom with some fucking greg sprinkles',
    'Connor roy was intrested in politics from a very young age',
    'We just walked in on mom and dad fucking us'
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
                    text.className = 'space';
                } else {
                    text.className = 'letter';
                }
            }
};

addPhraseToDisplay(randomPhrase);

//check if the user clicks a letter matching a letter in the phrase
function checkLetter(button){
    const li = document.querySelectorAll('li');
    let match = null;
        for (i = 0; i < button.length; i++){
            li = button[i];
                if (li[i] === 'letter'){
                    li.className = 'show';
                    match = button.value;
                }
        }
    return match;
}

 //Click event to give the clicked letter the class of chosen
 keyBoard.addEventListener('click', (e) => {
    const btn = e.target;
        if(btn.tagName !== 'BUTTON' || btn.className === 'chosen') {
            return;
        }
    btn.className = "chosen"
    let letterFound = checkLetter(btn);
 })