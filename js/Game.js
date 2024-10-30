// *** Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * Aiming for Exceeds Expectations 
//  * game.js ***/


  class Game {
      constructor() {
        const overlay = document.querySelector('#overlay');

        this.missed = 0;                                                                // Tracks the number of missed guesses
        this.phrases = [                                                                // An array to hold Phrase objects
          new Phrase('May the Force be with you'),
          new Phrase('Do Or Do Not There is no try'),
          new Phrase('You shall not pass'),
          new Phrase('Not all those who wander are lost'),
          new Phrase('Courage is found in unlikely places'),
          new Phrase('To boldly go where no man has gone before'),
          new Phrase('Resistance Is Futile'),
          new Phrase('I have been and always shall be your friend'),
          new Phrase('Live long and prosper'),
          new Phrase('Beam me up Scotty'),
        ];                                                                              
        this.activePhrase = null;                                                      // Will be the active Phrase object                                           
      }
    
      getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);          // Selects random phrase from phrases property and returns the phrase
        return this.phrases[randomIndex];
      };

      startGame() {                                                                    // Function to start the game, get an active [hrase and display it on screen
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();                                   
        this.activePhrase.addPhraseToDisplay();
      };

    /**
    * Checks for all letters in the phrase to have been revealed
    * @return {boolean} True if game has been won, false if game wasn't won
    **/
      checkForWin() {
        const lettersInPhrase = document.getElementsByClassName('letter');
        const shownLetters = document.getElementsByClassName('show');
        return lettersInPhrase.length === shownLetters.length;
      };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard and replaces with a lost heart
    * Checks if player has remaining lives and ends game if player if all lives are lost
    */
      removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';                     
        this.missed += 1;

        if (this.missed === 5) {
          this.gameOver(false); 
          }
      };

    /**
    * Ends the game and displays a win or loss message depending on whether the user won or lost the game
    * @param {boolean} gameWon 
    */
      gameOver(gameWon) {
        const message = document.getElementById('game-over-message');
        overlay.style.display = 'flex';                                                 // Show the overlay again

        if (gameWon) {
          overlay.className = 'win';                                                    // Set class to 'win'
          message.textContent = 'Congratulations, you won!';
          } else {
            overlay.className = 'lose';                                                 // Set class to 'lose'
            message.textContent = 'Sorry, better luck next time!';
          }

    // Resets missed guesses to zero
      this.missed = 0;

    // Reset hearts and puts up five live hears on the screen
      const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');
      };

// This section contains the logic and branching to disable the chosen button, add the chosen class if correct letter or wrong class if incorrect letter is chosen and check for a win
    handleInteraction(button) {
      let letter = button.textContent;
      button.disabled = true;                                                           // Disables the selected button   
      
      if (this.activePhrase.checkLetter(letter)) {
        button.classList.add('chosen');                                                 // Add 'chosen' class if correct
        this.activePhrase.showMatchedLetter(letter);                                    // Show the matched letter
        
        if (this.checkForWin()) {                                                       // Checks for a win
            this.gameOver(true);                                                      
        }

      } else {
          button.classList.add('wrong');                                                // Add 'wrong' class if incorrect
          this.removeLife();                                                            // Remove a life
        }
      };
};
  

