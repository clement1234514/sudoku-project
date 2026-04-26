import type { Grid, Position } from "./SudokuTypes";

export function findConflicts(grid: Grid): Position[] {
  const conflicts: Position[] = [];

  const checkSet = (cells: Position[]) => {
    const seen = new Map<number, Position>();
    for (const pos of cells) {
      const v = grid[pos.row][pos.col].value;
      if (!v) continue;
      if (seen.has(v)) {
        conflicts.push(seen.get(v)!, pos);
      } else {
        seen.set(v, pos);
      }
    }
  };

  // Zeilen
  for (let r = 0; r < 9; r++) {
    checkSet(Array.from({ length: 9 }, (_, c) => ({ row: r, col: c })));
  }

  // Spalten
  for (let c = 0; c < 9; c++) {
    checkSet(Array.from({ length: 9 }, (_, r) => ({ row: r, col: c })));
  }

  // Quadranten
  for (let br = 0; br < 3; br++) {
    for (let bc = 0; bc < 3; bc++) {
      const cells: Position[] = [];
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          cells.push({ row: br * 3 + r, col: bc * 3 + c });
        }
      }
      checkSet(cells);
    }
  }

  return conflicts;
}

export function isSolved(grid: Grid): boolean {
  const anyEmpty = grid.some(row => row.some(c => c.value === null));
  if (anyEmpty) return false;
  return findConflicts(grid).length === 0;
}