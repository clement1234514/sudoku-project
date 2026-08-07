import { SudokuGrid } from "./SudokuGrid";
import { SudokuNotes } from "./SudokuNotes";
import { findConflicts, isSolved } from "./SudokuChecker";
import type { Grid, Position } from "./SudokuTypes";

export class SudokuGame {
  grid: SudokuGrid;
  notes: SudokuNotes;
  selected: Position | null = null;
  noteMode = false;

  constructor(initial: number[][]) {
    this.grid = new SudokuGrid(initial);
    this.notes = new SudokuNotes();
  }

  getGrid(): Grid {
    return this.grid.getGrid();
  }

  selectCell(pos: Position) {
    this.selected = pos;
  }

  setValue(pos: Position, value: number | null) {
    this.grid.setValue(pos.row, pos.col, value);
    if (value !== null) this.notes.clear(pos);
  }

  toggleNote(pos: Position, value: number) {
    this.notes.toggleNote(pos, value);
  }

  toggleNoteMode() {
    this.noteMode = !this.noteMode;
  }

  getNotes(pos: Position): number[] {
    return this.notes.getNotes(pos);
  }

  getConflicts(): Position[] {
    return findConflicts(this.getGrid());
  }

  isComplete(): boolean {
    return this.grid.isComplete();
  }

  isSolved(): boolean {
    return isSolved(this.getGrid());
  }
}