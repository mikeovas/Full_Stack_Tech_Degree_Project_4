// *** Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * Aiming for Exceeds Expectations 
//  * phrase.js ***/


  class Phrase {
      constructor(phrase) {
        this.phrase = phrase.toLowerCase();                                                     // Stores the phrase in lowercase
      }

      addPhraseToDisplay() {                                                                    // Method to display phrase on the game board
        const letterPlaceholder = document.querySelector('#phrase ul');
        const trimmedPhrase = this.phrase.split('');                                            // separates every charcater individually
        let HTMLForTrimmedPhrase;

        trimmedPhrase.forEach( currentCharacter => {                                            // will add the letter class to any letter and the space class to any space
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
    
  /***
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
  ***/ 
        showMatchedLetter(letter) {
          const matchingLetters = document.querySelectorAll(`.letter`);                       // Select all letters in the active phrase    
          matchingLetters.forEach(li => {                                                     // Loop through the matching letters and replace the 'hide' class with 'show'
            if (li.textContent === letter) {               
                li.classList.replace('hide', 'show');
              } 
          });
    }}

