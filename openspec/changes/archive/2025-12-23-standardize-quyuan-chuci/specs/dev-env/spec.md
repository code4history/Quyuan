# Capability: Development Environment

## ADDED Requirements

### Requirement: Modern Build Tooling
The project MUST utilize the latest standard versions of build and testing tools to maintain compatibility with the Code for History ecosystem.

#### Scenario: Verify Vite Version
Given the project `package.json`
Then the `devDependencies` entry for `vite` satisfies `^6.0.0`

#### Scenario: Verify Vitest Version
Given the project `package.json`
Then the `devDependencies` entry for `vitest` satisfies `^3.0.0`

### Requirement: Standardized Linting
The project MUST use ESLint with the Flat Config system to ensure consistent code quality checks.

#### Scenario: Verify ESLint Version
Given the project `package.json`
Then the `devDependencies` entry for `eslint` satisfies `^9.0.0`

#### Scenario: Verify Flat Config Existence
Given the project root
Then a file named `eslint.config.mjs` or `eslint.config.js` exists
And no file named `.eslintrc`, `.eslintrc.json`, or `.eslintrc.js` exists
