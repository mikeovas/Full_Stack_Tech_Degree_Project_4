/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
      this.missed = 0;          // Tracks the number of missed guesses
      this.phrases = [];        // An array to hold Phrase objects
      this.activePhrase = null; // The currently active Phrase object
    }
  }