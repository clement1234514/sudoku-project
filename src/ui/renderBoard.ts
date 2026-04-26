import type { SudokuGame } from "../core/SudokuGame";
import { applyHighlight } from "./highlight";

export function renderBoard(game: SudokuGame) {
  const board = document.getElementById("board")!;
  board.innerHTML = "";

  const grid = game.getGrid();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cellData = grid[r][c];
      const cell = document.createElement("div");
      cell.className = "cell";

      // Notizen-Container
const notesEl = document.createElement("div");
notesEl.className = "notes";

// 9 kleine Felder für Notizen
const notes = game.getNotes({ row: r, col: c });
for (let n = 1; n <= 9; n++) {
  const span = document.createElement("span");
  span.textContent = notes.includes(n) ? String(n) : "";
  notesEl.appendChild(span);
}

cell.appendChild(notesEl);

      cell.dataset.row = String(r);
      cell.dataset.col = String(c);

      if (cellData.fixed) cell.classList.add("fixed");

      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.value = cellData.value?.toString() ?? "";
      input.disabled = cellData.fixed;

      cell.appendChild(input);
      board.appendChild(cell);

      cell.addEventListener("click", () => {
        game.selectCell({ row: r, col: c });
        updateUI(game);
      });

      input.addEventListener("input", () => {
  const v = parseInt(input.value, 10);

  if (game.noteMode) {
    // Notizmodus
    if (!Number.isNaN(v)) {
      game.toggleNote({ row: r, col: c }, v);
    }
    input.value = ""; // Notizen erscheinen klein im Feld
  } else {
    // Normaler Modus
    game.setValue({ row: r, col: c }, Number.isNaN(v) ? null : v);
  }

  updateUI(game);
});

cell.appendChild(notesEl);

    }
  }

  updateUI(game);
}

function updateUI(game: SudokuGame) {
  const board = document.getElementById("board")!;
  const message = document.getElementById("message")!;

  const conflicts = game.getConflicts();
  const conflictSet = new Set(conflicts.map(p => `${p.row},${p.col}`));

  // Konflikte markieren
  board.querySelectorAll(".cell").forEach(el => {
    const cell = el as HTMLElement;
    const r = Number(cell.dataset.row);
    const c = Number(cell.dataset.col);
    const key = `${r},${c}`;

    cell.classList.remove("conflict");
    if (conflictSet.has(key)) {
      cell.classList.add("conflict");
    }
  });

  // Notizen aktualisieren
  board.querySelectorAll(".cell").forEach(el => {
    const cell = el as HTMLElement;
    const r = Number(cell.dataset.row);
    const c = Number(cell.dataset.col);

    const notes = game.getNotes({ row: r, col: c });
    const spans = cell.querySelectorAll(".notes span");

    spans.forEach((s, i) => {
      s.textContent = notes.includes(i + 1) ? String(i + 1) : "";
    });
  });

  // Highlighting
  applyHighlight(board, game.selected);

  // Status
  if (game.isSolved()) {
    message.textContent = "Glückwunsch! Puzzle gelöst.";
    disableInputs();
  } else if (conflicts.length > 0) {
    message.textContent = "Es gibt Fehler im Puzzle.";
  } else {
    message.textContent = "";
  }
}

function disableInputs() {
  document
    .querySelectorAll<HTMLInputElement>("#board input")
    .forEach(i => (i.disabled = true));
}