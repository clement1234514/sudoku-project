export type Cell = {
  value: number | null;
  fixed: boolean;
};

export type Grid = Cell[][];

export type Position = { row: number; col: number };