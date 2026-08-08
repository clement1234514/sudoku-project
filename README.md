# Sudoku Project

Ein vollständig in TypeScript entwickeltes Sudoku-Spiel mit auswählbaren Schwierigkeitsgraden, Notizfunktion und modularer Architektur.
Das Projekt wurde für Lernzwecke, Webentwicklung und Portfolio-Erstellung entwickelt.

---

## Features

- Drei Schwierigkeitsgrade: **Easy**, **Medium**, **Hard** (eindeutig lösbare Puzzles)
- Eingabe von Ziffern (1–9), Löschen nur in freien Feldern
- Doppelte Ziffern in Zeile, Spalte oder Quadrant werden **rot** markiert
- Gewinnprüfung nach jedem Zug: Lösungserkennung und Fehlermeldungen
- Notizmodus zum Eintragen möglicher Zahlen
- Hervorhebung des ausgewählten Feldes sowie der zugehörigen Zeile und Spalte
- Spiele starten ohne Page-Refresh, mit Schwierigkeitsauswahl
- Saubere Modulstruktur in TypeScript
- Unit-Tests mit **Vitest**
- Lokale Entwicklung und statischer Build mit **Vite**

---

## Installation

```bash
npm install
```

## Befehle

```bash
npm run dev    # Lokale Entwicklung starten (Vite Dev Server)
npm test       # Unit-Tests ausführen (Vitest, non-watch)
npm run build  # TypeScript prüfen und statischen Build erzeugen (Vite)
```

Der Build erzeugt die statischen Dateien im Ordner `dist/` (HTML, JavaScript, CSS) – nur diese laufen im Browser.

---

## Tests

```bash
npm test
```

Getestet werden:
- `SudokuGrid` (Eingabe-Logik)
- `SudokuChecker` (Konflikte, gelöstes Puzzle)
- `SudokuNotes` (Notizen)

---

## Deployment (Vercel)

**Live-Demo:** https://sudoku-project-black.vercel.app

Das Repository ist für einen Static-Site-Deploy auf **Vercel** konfiguriert:

1. Vercel öffnen → **New Project** → dieses Repository importieren
2. Framework wird automatisch als **Vite** erkannt
3. Build Commands (Standard):
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy** klicken

GitHub Actions (`npm test`) läuft automatisch bei jedem Push und Pull Request.

---

## Projektstruktur

```
sudoku-project/
├── .github/
│   └── workflows/
│       └── tests.yml            # GitHub Actions (Unit-Tests)
│
├── public/
│   └── styles.css               # Styles (wird von Vite in dist/ kopiert)
│
├── src/
│   ├── core/                    # Spiellogik
│   │   ├── SudokuGrid.ts        # Grid-Verwaltung & Eingabe
│   │   ├── SudokuChecker.ts     # Konflikte & Lösungsprüfung
│   │   ├── SudokuNotes.ts       # Notizen
│   │   ├── SudokuGame.ts        # Spielfassade (Grid + Notizen)
│   │   └── SudokuTypes.ts       # Typdefinitionen
│   ├── puzzles/
│   │   ├── easy.ts              # Easy-Puzzle
│   │   ├── medium.ts            # Medium-Puzzle
│   │   └── hard.ts              # Hard-Puzzle
│   ├── ui/
│   │   ├── bindControls.ts      # Buttons & Schwierigkeitsauswahl
│   │   ├── renderBoard.ts       # Spielfeld-Darstellung
│   │   └── highlight.ts         # Feld-/Zeilen-/Spalten-Hervorhebung
│   └── index.ts                 # Einstiegspunkt
│
├── tests/
│   ├── SudokuGrid.test.ts
│   ├── SudokuChecker.test.ts
│   └── SudokuNotes.test.ts
│
├── index.html                   # Haupt-HTML
├── package.json                 # Scripts: build, dev, test
├── tsconfig.json                # TypeScript-Konfiguration
└── vite.config.ts               # Vite-Build-Konfiguration
```