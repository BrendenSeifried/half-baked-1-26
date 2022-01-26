// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');


// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

// set state for all of the character's catchphrases
let catchPhrases = [];

headDropdown.addEventListener('change', (e) => {
    // get the value of the head dropdown
    const top = e.target.value;
    //headEL.src = `./assets/${value}-head.png`;
    headEl.style.backgroundImage = `url('../assets/${top}-head.png')`;
    //headEL.src = `./assets/bird-head.png`;


    // increment the head change count state
    headCount ++;
    
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', (e) => {
        // get the value of the head dropdown
    const mid = e.target.value;
        //headEL.src = `./assets/${value}-head.png`;
    middleEl.style.backgroundImage = `url('../assets/${mid}-middle.png')`;
        //headEL.src = `./assets/bird-head.png`;
    
    
        // increment the head change count state
    middleCount ++;
        
        // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    
        // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', (e) => {
       // get the value of the head dropdown
    const btm = e.target.value;
       //headEL.src = `./assets/${value}-head.png`;
    bottomEl.style.backgroundImage = `url('../assets/${btm}-pants.png')`;
       //headEL.src = `./assets/bird-head.png`;
   
   
       // increment the head change count state
    bottomCount ++;
       
       // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
   
       // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const userValue = catchphraseInput.value;
    catchPhrases.push(userValue);
    catchphraseInput.value = '';
    console.log(catchPhrases);
    // push the new catchphrase to the catchphrase array in state

    // clear out the form input's value so it's empty to the user
   
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const string = makeStatsString(headCount, middleCount, bottomCount); // call this function with the correct arguments
    reportEl.textContent = string;
    console.log(string);
   
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    const display = 
    catchphrasesEl.textContent = display;

    // loop through each catchphrase in state
   
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}

headEl.classList.add('head');
