# CHANGELOG

## [4.1.0] - 2026-04-06
### Added
- Custom Title Feature: Users can now assign a specific title to their notes via a dedicated input field, allowing the title to remain independent of the note's content.
- Serialization Logic Extraction: `window.utils.serializeNotes` and `window.utils.deserializeNotes` added for robust handling of backup titles.
- Backward compatibility: The extension falls back seamlessly to parsing legacy `<span class="empty-string">...</span>` or snippet-based titles when custom titles are absent.

### Changed
- Refactored `newtab.js`, `import.js`, `export.js`, and `settings.js` to utilize standard serialization patterns.
- CSS Layouts adjusted dynamically to support custom titles alongside main note content without expanding past 100vh window height.
