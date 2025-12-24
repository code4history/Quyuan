# Capability: Dependency Free

## ADDED Requirements

### Requirement: QyElement Base Class
The system SHALL provide a lightweight base class `QyElement` that provides essential Web Component functionality without external dependencies.

#### Scenario: Base Class Implementation
-   **Given** a new file `src/base/qy-element.ts`
-   **When** `QyElement` is defined
-   **Then** it should extend `HTMLElement`
-   **And** it should provide a `shadowRoot` property (attached in constructor)
-   **And** it should provide a `render()` method that updates `innerHTML`
-   **And** it should provide a `dispatch()` helper for custom events

### Requirement: Refactored Components
All existing components SHALL be refactored to extend `QyElement` instead of `LitElement`.

#### Scenario: QyQuyuan Migration
-   **Given** `src/qy-quyuan.ts`
-   **When** dependencies are removed
-   **Then** it should import `QyElement` instead of `LitElement`
-   **And** it should use `static get observedAttributes()` for reactive properties
-   **And** it should define the custom element using `customElements.define`

#### Scenario: QyViewer Migration
-   **Given** `src/components/viewer/qy-viewer.ts`
-   **When** dependencies are removed
-   **Then** it should inherit from `QyElement`
-   **And** it should manually handle property updates in `attributeChangedCallback`
