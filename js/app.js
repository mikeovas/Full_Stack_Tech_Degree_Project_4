// *** Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * Aiming for Exceeds Expectations 
//  * app.js ***/

    const buttonReset = document.querySelector('#btn__reset');
    let game;

    buttonReset.addEventListener('click', () => {                               // selects the reset button to start the game
        game = new Game();
        game.startGame();
    });


/***
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
***/
    document.querySelectorAll('#qwerty button').forEach((element) => {
        element.addEventListener('click', (e) => {
            game.handleInteraction(e.target); 
        });
    });
