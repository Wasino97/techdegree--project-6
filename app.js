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

//Function to pick a random quote from the array
function getRandomPhraseAsArray(arr){
   let randomPhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
   return randomPhrase;
}; 

//Function to split the random quote into characters and display them on the screen
function addPhraseToDisplay(arr){
    const text = document.createElement('li');
    phrase.appendChild(text);
    let splitPhrase = getRandomPhraseAsArray().split('');
    text.textContent = splitPhrase;
    text.className = 'letter';

        for (i = 0; i < splitPhrase.length; i++){
            let letter = splitPhrase[i];
            };
 };

 addPhraseToDisplay();

 //const array = getRandomPhraseAsArray(arr);
 keyBoard.addEventListener('click', (e) => {

    
 })