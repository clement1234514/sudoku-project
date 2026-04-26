import { describe, it, expect } from "vitest";
import { findConflicts, isSolved } from "../src/core/SudokuChecker";
import type { Grid } from "../src/core/SudokuTypes";

function makeGrid(values: (number | null)[][]): Grid {
  return values.map(row =>
    row.map(v => ({ value: v, fixed: false }))
  );
}

function toGrid(numbers: number[][]) {
  return numbers.map(row =>
    row.map(value => ({
      value,
      fixed: true,
      notes: []
    }))
  );
}

describe("SudokuChecker", () => {
  it("findet Konflikte in Zeilen", () => {
    const grid = makeGrid([
      [1, 1, null, null, null, null, null, null, null],
      ...Array(8).fill(Array(9).fill(null))
    ]);
    const conflicts = findConflicts(grid);
    expect(conflicts.length).toBeGreaterThan(0);
  });

  it("erkennt gelöstes Puzzle", () => {
  const solvedGrid = toGrid([
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
]);

expect(isSolved(solvedGrid)).toBe(true);
  });
});