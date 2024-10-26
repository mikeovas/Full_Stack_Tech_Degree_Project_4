/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
      const overlay = document.querySelector('#overlay');

      this.missed = 0;                                                                // Tracks the number of missed guesses
      this.phrases = [
        new Phrase('May the Force be with you'),
        new Phrase('Do Or Do Not There is no try.'),
        new Phrase('You shall not pass'),
        new Phrase('Not all those who wander are lost'),
        new Phrase('Courage is found in unlikely places'),
        new Phrase('To boldly go where no man has gone before'),
        new Phrase('Resistance Is Futile'),
        new Phrase('I have been and always shall be your friend'),
        new Phrase('Live long and prosper'),
        new Phrase('Beam me up Scotty'),
      ];                                                                              // An array to hold Phrase objects
      this.activePhrase = null;                                                       // The currently active Phrase object
    }
    
    getRandomPhrase() {
      const randomIndex = Math.floor(Math.random() * this.phrases.length);          // Selects random phrase from phrases property and returns the phrase
      return this.phrases[randomIndex];
    };

    startGame() {
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
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
      removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';                      // replace live heart with a lost heart
        this.missed += 1;
        console.log(hearts);

        if (this.missed === 5) {
          this.gameOver(false);                                             // End the game if all lives are lost
      }

      };

    /**
    * Ends the game and displays a win or loss message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
      gameOver(gameWon) {
        const message = document.getElementById('game-over-message');

        overlay.style.display = 'flex';                                    // Show the overlay again

        if (gameWon) {
            overlay.className = 'win';                                     // Set class to 'win'
            message.textContent = 'Congratulations, you won!';
        } else {
            overlay.className = 'lose';                                    // Set class to 'lose'
            message.textContent = 'Sorry, better luck next time!';
        }

        // Reset missed guesses
          this.missed = 0;

        // Reset hearts
          const hearts = document.querySelectorAll('.tries img');
          hearts.forEach(heart => heart.src = 'images/liveHeart.png');
    };





// The logic and branching to handle several steps to run this application are included in this method
handleInteraction() {
  // phrase.checkLetter(); 
  // phrase.showMatchedLetter();
};



  };

