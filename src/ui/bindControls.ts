import { SudokuGame } from "../core/SudokuGame";
import { easyPuzzle } from "../puzzles/easy";
import { mediumPuzzle } from "../puzzles/medium";
import { hardPuzzle } from "../puzzles/hard";
import { renderBoard } from "./renderBoard";

let game: SudokuGame;

export function bindControls() {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".controls button");

  const startGame = (difficulty: string) => {
    let puzzle;

    if (difficulty === "easy") puzzle = easyPuzzle;
    else if (difficulty === "medium") puzzle = mediumPuzzle;
    else puzzle = hardPuzzle;

    game = new SudokuGame(puzzle);
    renderBoard(game);
  };

  const noteBtn = document.getElementById("noteModeBtn")!;

noteBtn.addEventListener("click", () => {
  game.toggleNoteMode();
  noteBtn.textContent = game.noteMode ? "Notizen: AN" : "Notizen: AUS";
});

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const diff = btn.dataset.difficulty!;
      startGame(diff);
    });
  });

  // Start default
  startGame("easy");
}