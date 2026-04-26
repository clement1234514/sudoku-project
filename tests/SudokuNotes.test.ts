import { describe, it, expect } from "vitest";
import { SudokuNotes } from "../src/core/SudokuNotes";

describe("SudokuNotes", () => {
  it("kann Notizen togglen", () => {
    const notes = new SudokuNotes();
    const pos = { row: 0, col: 0 };
    notes.toggleNote(pos, 3);
    expect(notes.getNotes(pos)).toContain(3);
    notes.toggleNote(pos, 3);
    expect(notes.getNotes(pos)).not.toContain(3);
  });
});