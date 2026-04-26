# Sudoku Project

Ein vollständig in TypeScript entwickeltes Sudoku-Spiel mit auswählbaren Schwierigkeitsgraden, Notizfunktion und modularer Architektur.  
Das Projekt wurde für Lernzwecke, Webentwicklung und Portfolio-Erstellung entwickelt.

---

##  Features

- Drei Schwierigkeitsgrade: **Easy**, **Medium**, **Hard**
- Automatische Validierung des Sudoku-Grids
- Notizmodus zum Eintragen möglicher Zahlen
- Saubere Modulstruktur in TypeScript
- Unit-Tests mit **Vitest**
- Lokale Entwicklung mit **Vite**

---

## 📦 Installation

```bash
npm install
npm test(Tests ausführen)
npm run dev(Lokale Entwicklung starten)


## Tests

- npm test

Getestet werden:
- SudokuGrid (Eingabe-Logik)
- SudokuChecker (Konflikte, gelöstes Puzzle)
- SudokuNotes (Notizen)

GitHub Pages kann keine TypeScript-Dateien ausführen.
Wenn eine .ts‑Datei direkt im Browser geladen wird, liefert GitHub Pages sie mit einem falschen MIME-Type aus, z. B.:
video/mp2t
Dadurch blockiert der Browser das Skript:
Script was blocked because of a disallowed MIME type.
Loading failed for module "index.ts".
Deshalb erscheint online nur die Oberfläche (Buttons), aber kein Sudoku‑Grid

✅ Lösung: TypeScript zuerst zu JavaScript bauen
Damit das Projekt im Browser läuft, muss es vorher kompiliert werden:
npm run build

Der Build erzeugt JavaScript-Dateien im Ordner:
dist/

Nur diese Dateien funktionieren im Browser.



Projektstruktur

sudoku-project/
├── .github/
│   └── workflows/
│       └── tests.yml          # GitHub Actions (Unit-Tests)
│
├── dist/                      # Build-Ordner (JavaScript für GitHub Pages)
│   ├── index.html             # Kopierte HTML-Datei
│   ├── index.js               # Kompiliertes JavaScript (aus index.ts)
│   ├── core/                  # Kompilierte Logik
│   ├── ui/                    # Kompilierte UI-Module
│   └── styles.css             # Kopierte Styles
│
├── src/                       # TypeScript-Quellcode (wird NICHT im Browser ausgeführt)
│   ├── core/
│   │   ├── SudokuGrid.ts
│   │   ├── SudokuChecker.ts
│   │   ├── SudokuNotes.ts
│   │   └── SudokuGenerator.ts
│   │
│   ├── ui/
│   │   ├── renderGrid.ts
│   │   ├── renderButtons.ts
│   │   └── eventHandlers.ts
│   │
│   └── index.ts               # Einstiegspunkt (wird zu index.js kompiliert)
│
├── tests/                     # Unit-Tests (Vitest)
│   ├── SudokuGrid.test.ts
│   ├── SudokuChecker.test.ts
│   └── SudokuNotes.test.ts
│
├── index.html                 # Haupt-HTML (muss manuell in dist/ kopiert werden)
├── styles.css                 # CSS (muss manuell in dist/ kopiert werden)
│
├── package.json               # Scripts: build, dev, test
├── tsconfig.json              # TypeScript-Konfiguration
└── vite.config.js (optional)  

