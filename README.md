# Marble Piece Simulator

This repository contains a React + TypeScript + Three.js web application for simulating marble pieces.

## Features

- **Data-driven architecture**: pieces defined by dimensions, edges, and openings.
- **Edge selection**: each edge can be selected via invisible pick meshes and configured with treatments (none, chamfer, rounding, gluing).
- **Openings and cutouts**: add undertop, top-2cm, top-3cm, basin, and recessed openings with dimensions and offsets.
- **Live pricing**: calculates cost based on edge treatments and openings (rates: chamfer 20 AED/m, rounding 20 AED/m, gluing 60 AED/m; openings: undertype 150 AED fixed, top 2cm 40 AED, top 3cm 60 AED, basin 60 AED, recessed 75 AED).
- **Export**: download JSON save file and PDF snapshot/cut list with pricing breakdown.
- **Tests**: includes acceptance tests for edge selection and pricing correctness using Jest and React Testing Library.

See `src` directory for the application code.
