import type { Position } from "./SudokuTypes";

export class SudokuNotes {
  private notes = new Map<string, Set<number>>();

  private key(pos: Position): string {
    return `${pos.row},${pos.col}`;
  }

  toggleNote(pos: Position, value: number) {
    const k = this.key(pos);
    if (!this.notes.has(k)) this.notes.set(k, new Set());
    const set = this.notes.get(k)!;
    if (set.has(value)) set.delete(value);
    else set.add(value);
  }

  getNotes(pos: Position): number[] {
    const set = this.notes.get(this.key(pos));
    return set ? Array.from(set).sort() : [];
  }

  clear(pos: Position) {
    this.notes.delete(this.key(pos));
  }

  clearAll() {
    this.notes.clear();
  }
}