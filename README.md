# Matrix Calculator

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=black)
![Create React App](https://img.shields.io/badge/Create%20React%20App-4.0.3-09D3AC?logo=createreactapp&logoColor=white)

A React-based graphic matrix calculator focused on 3D transformation matrices, built with Create React App.

## Overview

This project (internal package name `matrix-graphic-calculator`) is a React single-page application scaffolded with Create React App. Its core logic lives in a matrix-solver utility that works with **4x4 homogeneous transformation matrices** — the standard representation used in 3D computer graphics to combine rotation and translation in a single matrix.

> **Project status:** Early stage / work in progress. The React front end is currently the default Create React App starter page, while the matrix math is being developed in `src/utils/3d-matrix-solver.js`. The transformation-matrix templates below are implemented today; the interactive UI has not yet been wired up to them.

## What the code actually does

The matrix solver utility (`src/utils/3d-matrix-solver.js`) currently defines and prints 3D transformation matrix templates:

- **Rotation about the X axis** (`Rx`) — a 4x4 rotation matrix parameterized by an angle in degrees.
- **Rotation about the Y axis** (`Ry`) — a 4x4 rotation matrix parameterized by an angle in degrees.
- **Rotation about the Z axis** (`Rz`) — a 4x4 rotation matrix parameterized by an angle in degrees.
- **Translation** (`T`) — a 4x4 homogeneous translation matrix template.
- **Matrix printing** (`printMatrix`) — a helper that logs each row of a 4x4 matrix to the console.

Angles are supplied in degrees and converted to radians internally (`angle * Math.PI / 180`) before being passed to `Math.sin` / `Math.cos`.

### Example: rotation about the Z axis

```javascript
const angleC = 77;

const Rz = [
    [Math.cos(angleC * Math.PI / 180), -Math.sin(angleC * Math.PI / 180), 0, 0],
    [Math.sin(angleC * Math.PI / 180),  Math.cos(angleC * Math.PI / 180), 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
];

printMatrix(Rz);
```

## Tech Stack

- **React 17** (`react`, `react-dom`)
- **Create React App** / `react-scripts` 4.0.3 (build tooling and dev server)
- **JavaScript (ES6+)**
- **web-vitals** for performance metrics
- **Testing Library** (`@testing-library/react`, `/jest-dom`, `/user-event`) for tests
- **nodemon** (dev dependency)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and a package manager. This repository ships a `yarn.lock`, so Yarn is recommended, but npm works as well.

### Installation

```bash
git clone https://github.com/AckerCoder/matrix-calculator.git
cd matrix-calculator
yarn install     # or: npm install
```

## Usage

The following scripts are defined in `package.json`:

| Command | Description |
| --- | --- |
| `yarn start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000). |
| `yarn build` | Builds the app for production into the `build` folder. |
| `yarn test` | Launches the test runner in interactive watch mode. |
| `yarn eject` | Ejects the Create React App configuration (one-way operation). |

(Replace `yarn` with `npm run` if you prefer npm, e.g. `npm start`, `npm run build`.)

## Project Structure

```
matrix-calculator/
├── public/                     # Static assets and HTML entry point
├── src/
│   ├── utils/
│   │   └── 3d-matrix-solver.js # 3D transformation matrix templates & helpers
│   ├── App.js                  # Root React component
│   ├── index.js                # React entry point
│   └── ...                     # CRA boilerplate (tests, styles, web-vitals)
├── package.json
└── yarn.lock
```

## License

No license file is currently included in this repository.
