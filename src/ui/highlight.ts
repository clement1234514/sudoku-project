import type { Position } from "../core/SudokuTypes";

export function applyHighlight(
  boardEl: HTMLElement,
  selected: Position | null
) {
  const cells = boardEl.querySelectorAll<HTMLElement>(".cell");
  cells.forEach(cell => {
    cell.classList.remove("selected", "highlight-row", "highlight-col");
  });

  if (!selected) return;

  cells.forEach(cell => {
    const r = Number(cell.dataset.row);
    const c = Number(cell.dataset.col);
    if (r === selected.row && c === selected.col) {
      cell.classList.add("selected");
    } else if (r === selected.row) {
      cell.classList.add("highlight-row");
    } else if (c === selected.col) {
      cell.classList.add("highlight-col");
    }
  });
}