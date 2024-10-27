/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase(); // Stores the phrase in lowercase
    }

    addPhraseToDisplay() {                                                                    //Method to display phrase on game board
      
      const letterPlaceholder = document.querySelector('#phrase ul');
      const trimmedPhrase = this.phrase.split('');
      let HTMLForTrimmedPhrase;

      trimmedPhrase.forEach( currentCharacter => {
        HTMLForTrimmedPhrase = document.createElement('li');
        if(currentCharacter !== " ") {
          HTMLForTrimmedPhrase.classList.add('hide', 'letter')
        } else {
          HTMLForTrimmedPhrase.classList.add('space')
        }
        HTMLForTrimmedPhrase.innerHTML = currentCharacter;
        letterPlaceholder.appendChild(HTMLForTrimmedPhrase);
      });
      
    };

      /*** Checks if the provided letter is in the phrase.
        * @param {string} letter - Letter to check
        * @returns {boolean} - True if the letter is in the phrase, false otherwise
      ***/
        checkLetter(letter) {
          return this.phrase.includes(letter); 
        };

        
      /**
        * Displays passed letter on screen after a match is found
        * @param (string) letter - Letter to display
      */ 
        showMatchedLetter(letter) {
          const matchingLetters = document.querySelectorAll(`.letter`);                     // Select all elements with the matching letter and hide class        
          matchingLetters.forEach(li => {                                                  // Loop through the matching letters and replace the 'hide' class with 'show'
            if(li.textContent === letter) {
                li.classList.replace('hide', 'show');
              }
          });



   }}

