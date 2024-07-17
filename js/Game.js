/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
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
      console.log(this.activePhrase);
    };




  }

  // const game = new Game();
  // game.startGame();
  // console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);