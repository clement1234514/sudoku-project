import type { Cell, Grid } from "./SudokuTypes";

export class SudokuGrid {
  private grid: Grid;

  constructor(initial: number[][]) {
    this.grid = initial.map(row =>
      row.map(v => ({
        value: v === 0 ? null : v,
        fixed: v !== 0
      }))
    );
  }

  getGrid(): Grid {
    return this.grid;
  }

  setValue(row: number, col: number, value: number | null): boolean {
    const cell = this.grid[row][col];
    if (cell.fixed) return false;
    if (value !== null && (value < 1 || value > 9)) return false;
    cell.value = value;
    return true;
  }

  isComplete(): boolean {
    return this.grid.every(row => row.every(c => c.value !== null));
  }
}