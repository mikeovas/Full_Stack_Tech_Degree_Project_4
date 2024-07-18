/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const letterPlaceholder = document.querySelector('#phrase ul');
const screenOverlay = document.querySelector('#overlay');
const buttonReset = document.querySelector('#btn__reset');





let game;

buttonReset.addEventListener('click', () => {
    console.log('button clicked');
    game = new Game();
    game.startGame();
});
