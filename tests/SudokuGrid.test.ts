import { describe, it, expect } from "vitest";
import { SudokuGrid } from "../src/core/SudokuGrid";

describe("SudokuGrid", () => {
  const initial = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  it("verhindert Änderung von fixen Feldern", () => {
    const grid = new SudokuGrid(initial);
    const ok = grid.setValue(0, 0, 5);
    expect(ok).toBe(false);
  });

  it("erlaubt Änderung von nicht fixen Feldern", () => {
    const grid = new SudokuGrid(initial);
    const ok = grid.setValue(1, 1, 5);
    expect(ok).toBe(true);
  });
});