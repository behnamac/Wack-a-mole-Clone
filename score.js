class score {
  #currentScore = 0; // Private field to hold the score

  /**
   * Updates the current score. If the input is a number, it's added to the current score.
   * Otherwise, the score is set to the input value.
   * @param {number|string} value - The value to add to or set as the current score.
   */
  setScore(value) {
    if (typeof value === "number") {
      this.#currentScore += value;
    } else if (typeof value === "string") {
      this.#currentScore = value; // Assumes string is a valid representation like "GameOver"
    } else {
      throw new Error("Invalid type for score value");
    }

    this.#updateScoreDisplay();
  }

  /**
   * Returns the current score as a string.
   * @return {string} The current score.
   */
  getScore() {
    return this.#currentScore.toString();
  }

  /**
   * Updates the score display on the web page.
   */
  #updateScoreDisplay() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
      scoreElement.innerText = this.#currentScore.toString();
    } else {
      console.error("Score display element not found");
    }
  }
}

export { score };
