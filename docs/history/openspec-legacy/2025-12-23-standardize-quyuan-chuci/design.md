# Design: Dev Environment Standardization

## Architecture
- **Build Tool**: Vite 6. Chosen for speed and ecosystem support.
- **Test Runner**: Vitest 3. Native integration with Vite.
- **Linter**: ESLint 9 with Flat Config (`eslint.config.mjs`).

## Constraints
- Must function on Windows/Linux/macOS.
- Must use `pnpm` as the package manager.
