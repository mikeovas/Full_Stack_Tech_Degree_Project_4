// *** Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * Aiming for Exceeds Expectations 
//  * app.js ***/

    const buttonReset = document.querySelector('#btn__reset');
    const keys = document.querySelectorAll('#qwerty button');
    const phraseUl = document.querySelector('#phrase ul');  
    const hearts = document.querySelectorAll('.tries img');
    let game;

    function resetGameBoard() {                       
        phraseUl.innerHTML = '';                                                           // Removes all the li elements from the phrase ul element to remove the current phrase
        keys.forEach((key) => {                                                            // Reset all onscreen keyboard buttons
            key.className = 'key';                                                         // Set each button back to the 'key' class
            key.disabled = false;                                                          // Enable all buttons
        });
    
        hearts.forEach(heart => {                                                                      
            heart.src = 'images/liveHeart.png';                                           // Resets each heart to the live heart image
        });
    }

    buttonReset.addEventListener('click', () => {                                        // selects the reset button to start the game
        resetGameBoard();                                                                // resets the gameBoard before starting a new game
        game = new Game();
        game.startGame();
    });

/***
   * This eventlistener allows a player to use the onscreen keyboard buttons
***/
    keys.forEach((element) => {
        element.addEventListener('click', (e) => {
            game.handleInteraction(e.target); 
        });
    });

/***
   * This eventlistener allows a player to use their physical keyboard
***/
  document.addEventListener('keyup', (e) => {
    const pressedKey = e.key.toLowerCase();                                             // Converts the pressed key to lower case to be used for comparison
    keys.forEach(key => {                                                               // Loops through the keys to find the pressed key and ensure it hasn't been disabled by already being chosen
        if (key.textContent === pressedKey && !key.disabled) {
          game.handleInteraction(key);                                                  // If the pressed key was not diabled the handleInteraction function is called
      }
  });
});
