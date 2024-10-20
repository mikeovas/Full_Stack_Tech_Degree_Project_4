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

      showMatchedLetter(letter) {
        // Select all elements with the matching letter and hide class
        const matchingLetters = document.querySelectorAll(`.hide.letter.${letter}`);

        // Loop through the matching letters and replace the 'hide' class with 'show'
        matchingLetters.forEach(li => {
            li.classList.replace('hide', 'show');
        });



   }}




    //checks if chosen letter is correct and if so adds 'show' class in order to show the chosen letter in the phrase
// stores all li elements in a variable and compares the letter in the li element with the letter chosen in the click event below

// for (i = 0; i < liWithLetters.length; i++) {
//   const li = liWithLetters[i];
//   const letterInPhrase = li.textContent;
//   if (choice === letterInPhrase) {
//     li.classList.add('show');
//     match = true;
//   }
// }