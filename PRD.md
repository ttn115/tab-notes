# PRD (Product Requirements Document)

## Product: Tab Notes
**Version**: 4.1.0

### Objective
A lightweight, fast, and customizable notes app running directly in the browser's new tab view.

### Key Features
1. **Plain Text and HTML Capture**: Write directly inside the tab.
2. **Offline Support**: Store entries using browser's Local Storage.
3. **Remote Syncing**: Automatically backup/restore from an authenticated GitHub Gist (`tab-notes.html`).
4. **Themes**: Toggle visually between standard light variations and dark mode styling.
5. **Note Management**: Left drawer reveals historical notes for browsing, importing, or backup exports.
6. **Customizable Titles**: Each note features a dedicated, customizable title distinct from the underlying text metadata content.

### Architectural Constraints
- MUST NOT break legacy notes previously synced to GitHub Gists without precise decoding fallback logic.
- Maintains purely vanilla HTML/JS/CSS without massive frameworks.
