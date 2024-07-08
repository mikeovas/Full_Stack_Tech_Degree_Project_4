/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase(); // Stores the phrase in lowercase
    }

    addPhraseToDisplay() {                                                                    //Display phrase on game board
      const trimmedPhrase = this.phrase.split('');
      let HTMLForTrimmedPhrase;

      trimmedPhrase.forEach( currentCharacter => {
        const HTMLForTrimmedPhrase = document.createElement('li');
        if(currentCharacter !== " ") {
          HTMLForTrimmedPhrase.classList.add('hide', 'letter')
        } else {
          HTMLForTrimmedPhrase.classList.add('space')
        }
        HTMLForTrimmedPhrase.innerHTML = currentCharacter;
        letterPlaceholder.appendChild(HTMLForTrimmedPhrase);
      });
      
    };

  }
