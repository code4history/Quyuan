# Proposal: Remove Lit Dependency & Fix Vulnerabilities

## Goal
Remove the dependency on `lit` by implementing a lightweight vanilla Web Component base class, and address the `vue-template-compiler` vulnerability.

## Why
1.  **Reduce Dependency Bloat**: Quyuan is a relatively simple library; `lit` is overkill and adds to the bundle size.
2.  **HTML Components**: Move towards "HTML Components" architecture (vanilla WC).
3.  **Solve Peer Dependency Issues**: Removing `lit` avoids peer dependency version conflicts.
4.  **Security**: Fix the `vue-template-compiler` vulnerability (CVE-2024-6783) identified in `pnpm audit`.

## What Changes

### 1. Remove Lit Dependency
-   **Remove** `lit` from `dependencies` and `peerDependencies`.
-   **Create** `QyElement` base class (extending `HTMLElement`).
    -   Handles Shadow DOM attachment.
    -   Basic lifecycle management.
    -   Simple property reflection (if needed).
-   **Refactor** `QyQuyuan` and `QyViewer` to extend `QyElement`.
    -   Replace `@customElement` decorator with `customElements.define`.
    -   Replace `@property` decorator with manual getters/setters and `observedAttributes`.
    -   Replace `html` tag function with native template strings or lightweight helper.
    -   Replace `css` tag function with native `<style>` tags or constructed stylesheets.

### 2. Fix Vulnerabilities
-   **Add** `pnpm.overrides` (or `resolutions`) to `package.json` to force `vue-template-compiler` to a safe version (or the one used by Vue 3 if applicable, or simply suppress if it's a false positive for dev-tools).
    -   Actually, `vue-template-compiler` is for Vue 2. `vite-plugin-dts` -> `@vue/language-core` might be pulling it.
    -   We will try to update `vite-plugin-dts` or override the dependency.
    -   *Correction*: User suggested using `pnpm audit` fix or manual override.

### 3. Chuci Compatibility
-   Ensure compatibility with `Chuci` (which has already removed Lit).

## Risk
-   **Breaking Change**: Internal implementation change, but potentially breaking if users relied on Lit specifics exposed on the instance.
-   **Migration Effort**: Manually implementing reactivity that Lit provided for free.

## Alternatives Considered
-   **Keep Lit**: Rejected due to desire for "HTML Components" and dependency reduction.
