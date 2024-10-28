/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const buttonReset = document.querySelector('#btn__reset');
let game;

const querty = document.querySelectorAll('#querty');
// const phraseDiv = document.querySelector('#phrase');
// const phraseUl = phraseDiv.children[0];


buttonReset.addEventListener('click', () => {
    game = new Game();
    game.startGame();
 

});


/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

qwerty.querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', (e) => {
        game.handleInteraction(e.target); 
    });})

    // e.target.classList.add('chosen');
    // e.target.disabled = true;