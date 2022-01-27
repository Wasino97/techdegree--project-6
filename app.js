const keyBoard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByTagName('a')[0];

let missed = 0;

//Start Game Button 
btnReset.addEventListener('click', (e) => {
    const overlay = document.getElementsByClassName('start')[0];
    overlay.style.display = "none";
});

const phraseArray = [
    "Can't make a tomlett without breaking a couple greggs",
    "You're my boy you're my number one boy",
    'Then how about tom with some fucking greg sprinkles',
    'Connor roy was intrested in politics from a very young age',
    'We just walked in on mom and dad fucking us'
];


function getRandomPhraseAsArray(arr){
   let phrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
   console.log(phrase);
};

