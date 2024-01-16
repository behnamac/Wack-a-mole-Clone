class gameManager {
  #gameOver = false; // Private field to hold the game state

  /**
   * Marks the game as over.
   */
  endGame() {
    this.#gameOver = true;
  }

  /**
   * Checks if the game is over.
   * @return {boolean} True if the game is over, false otherwise.
   */
  isGameOver() {
    return this.#gameOver;
  }
}

export { gameManager };
