/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const buttonReset = document.querySelector('#btn__reset');
let game;

const querty= document.querySelectorAll('#querty');
const phraseDiv = document.querySelector('#phrase');
const phraseUl = phraseDiv.children[0];


buttonReset.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    game.handleInteraction();

});



