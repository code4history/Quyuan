# Proposal: Standardize Quyuan & Chuci Dev Environment

This proposal formalizes and finalizes the development environment initialization for Quyuan, aligning it with Maplat Harmony standards as requested in Issue #7.

## Goal
To establish a robust, modern development environment using Vite 6, Vitest 3, and ESLint 9 (Flat Config), and standardize repository structure, build output, and CI/CD workflows.

## Why
- **Vite 6 & Vitest 3**: Leverage the latest LTS features and performance improvements.
- **ESLint 9**: Adopt the new Flat Config system for better maintainability (already partially present).
- **Standardization**: Ensure all contributors have a consistent experience.

## What Changes
1.  **Dependencies**:
    -   Update `vite` to `^6.0.0` (currently `^5.4.0`).
    -   Update `vitest` to `^3.0.0` (currently `^2.0.0`).
    -   Move `maplibre-gl` and `ol` to `devDependencies` (used only for demo/dev).
    -   Ensure `pnpm` is strictly enforced (already in use).
2.  **Configuration**:
    -   Review and refine `eslint.config.mjs` if necessary to match the "standard".
    -   Ensure `pnpm` is strictly enforced (already in use).

3.  **Repository & Branching**:
    -   Rename default branch to `master`.
    -   Update CI/CD triggers to use `master`.

4.  **Build & Output**:
    -   Remove `cjs` from build formats (ESM & UMD only).
    -   Ensure `d.ts` generation.
    -   Clean `dist/` logic.
    -   Move `src/demo/` to `demo/` (exclude from library source).

5.  **Dev Server**:
    -   Move `index.html` and demo HTMLs from `public/` to root.
    -   Ensure `http://localhost:5173/` works.
    -   Update script references to point to `demo/`.

6.  **CI/CD**:
    -   Update `ci.yml` to test on Node 20 and 22.
    -   Enforce linting in CI.

7.  **Specs**:
    -   Define `dev-env`, `repo-standards`, `ci-cd` capabilities.

## Risk
- **Breaking Changes**: Vite 6 and Vitest 3 might introduce breaking changes. We will verify with `pnpm build` and `pnpm test`.
