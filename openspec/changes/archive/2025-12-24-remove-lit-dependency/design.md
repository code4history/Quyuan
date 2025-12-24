# Design: Remove Lit Dependency

## Architectural Changes

### 1. `QyElement` Base Class
We will introduce a lightweight base class `QyElement` to replace `LitElement`.

**Responsibilities:**
-   **Shadow DOM**: Automatically attaches Shadow DOM in `open` mode.
-   **Lifecycle**: Wraps `connectedCallback`, `disconnectedCallback`.
-   **Rendering**: Provides a simple `render()` method that updates `innerHTML`.
    -   *Constraint*: Without `lit-html`, we lose efficient DOM diffing. Since our components are simple (wrapper around Swiper/Viewer), full re-rendering on property change might be acceptable, or we can implement targeted updates.
-   **Attributes/Properties**:
    -   We must manually implement `attributeChangedCallback` and property getters/setters that trigger updates.

### 2. Component Refactoring

#### `QySwiper` & `QyViewer`
-   **Styles**: Move from `static styles` to a `<style>` tag inside the render string, or construct a `CSSStyleSheet` and adopt it.
-   **Template**: Convert `html` tagged templates to standard template literals.
-   **Events**: Use standard `addEventListener` and `dispatchEvent`.

### 3. Vulnerability Mitigation
-   The `vue-template-compiler` vulnerability is transitively pulled by `vite-plugin-dts`.
-   Since `vite-plugin-dts` is essential, we will use `pnpm.overrides` to pin a non-vulnerable version or effectively suppress it if it's a false positive for our usage.
-   *Update*: Actually, we might just be able to update `vite-plugin-dts` or its dependencies if a fix is released. If not, `pnpm audit --fix` might suggest an override.

## Trade-offs
-   **Pros**: Smaller bundle size, zero runtime dependencies, standard compliance.
-   **Cons**: More boilerplate code (manual property syncing), loss of declarative bindings.

## Dependency Graph
-   **Removed**: `lit`
-   **Added**: None (Vanilla JS/TS)
