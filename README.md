# Sudoku-Projekt (TypeScript)

## Ausführen

- npm install
- npm run dev
- im Browser: http://localhost:5173 (oder Port von Vite)

## Build

- npm run build

## Features

### Pflichtfeatures

1. Anzeige des Sudoku-Spielfelds mit Beispiel-Puzzle
2. Eingabe von Ziffern (1–9) in nicht-fixen Feldern, Löschen möglich
3. Doppelte Ziffern in Zeile/Spalte/Quadrant werden rot markiert
4. Nach jedem Zug wird geprüft, ob das Puzzle gelöst ist (Gewinn-/Fehlermeldung)

### Optionale Features

1. Notizen in Feldern (kleine Hilfszahlen)
2. Hervorhebung des ausgewählten Feldes
3. Hervorhebung der zugehörigen Zeile und Spalte
4. Start neuer Spiele über UI mit Schwierigkeitsauswahl

## Tests

- npm test

Getestet werden:
- SudokuGrid (Eingabe-Logik)
- SudokuChecker (Konflikte, gelöstes Puzzle)
- SudokuNotes (Notizen)