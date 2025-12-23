# Capability: Repository Standards

## ADDED Requirements

### Requirement: Default Branch
The repository MUST use `master` as the default branch.

#### Scenario: Verify Branch Name
Given the git configuration
Then the default branch is named `master`

### Requirement: Clean Build Output
The `dist/` directory MUST contain only the library build artifacts (ESM, UMD, Types) and NO dev-server artifacts, CommonJS bundles, or demo code.

#### Scenario: Verify Formats
Given the `dist/` directory
Then `quyuan.cjs` does NOT exist
And `quyuan.js` (ESM) exists
And `quyuan.umd.js` (UMD) exists
And `index.d.ts` exists

#### Scenario: Verify No Dev Artifacts
Given the `dist/` directory
Then `index.html` does NOT exist
And `assets/` directory (if present) does NOT contain dev-server content

### Requirement: Source Organization
The `src/` directory MUST contain only library source code. Demo/Example code MUST be located in a `demo/` directory at the project root.

#### Scenario: Verify Src Contents
Given the `src/` directory
Then `demo/` directory does NOT exist

#### Scenario: Verify Demo Location
Given the project root
Then `demo/` directory exists
