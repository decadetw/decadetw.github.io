# Json God — Function Reference

Source: `json_manager.html`  
App: **JSON/JSONL Training Data Manager** (Json God)

Browser-side single-file app for viewing, editing, filtering, slicing, concatenating, and exporting JSON / JSONL training data.

---

## Global State

| Variable | Type | Purpose |
|----------|------|---------|
| `entries` | `Array` | In-memory list of parsed JSON objects (the dataset) |
| `activeIdx` | `number` | Index of the currently selected entry (`-1` if none) |
| `fileName` | `string` | Loaded / mock file name |
| `dirty` | `boolean` | Unsaved edits flag |
| `filterTerm` | `string` | Free-text search query |
| `filterMode` | `'field' \| 'index' \| 'line' \| null` | Active structured filter mode |
| `filterField` | `{ field, gte, lte }` | Field-value range filter |
| `filterIndex` | `{ gte, lte }` | 0-based index range filter |
| `filterLine` | `{ gte, lte }` | 1-based line-number range filter |
| `_filterTab` | `string` | UI tab for filter panel (`field` / `index` / `line`) |
| `sliceTab` | `string` | UI tab for slice panel |
| `_concatFiles` | `File[]` | Files selected for concat |
| `_concatCount` | `number` | Preview entry count for concat |
| `dragCounter` | `number` | Drag-enter/leave depth for drop overlay |

---

## UI / Status

### `setStatus(msg, ok = true)`
Writes a status message into `#statusLeft`.  
- `ok === true` → green (`.ok`)  
- `ok === false` → red (`.err`)

### `updateStats()`
Refreshes header stats, entry count badge, and `document.title` from `fileName`, `entries.length`, and `dirty`.

### `escHtml(s)`
Escapes `& < > "` for safe HTML insertion into the entry list / field labels.

### `togglePanel(name)`
Toggles the inline panel `#${name}Panel` (filter / slice / concat) and highlights the matching toolbar button.

### `closeModal(id)`
Removes `.active` from a modal backdrop element by id.

---

## List & Selection

### `renderList()`
Renders `#entryList` from `getFilteredIndices()`:
- Empty dataset → drop-file empty state  
- No matches → “No matching entries”  
- Otherwise → clickable items with label, preview, index, delete button  

### `getEntryLabel(e, i)`
Picks a short list label for an entry, preferring common keys:  
`instruction`, `prompt`, `question`, `input`, `text`, `role`, `name`, `id`, `title`  
Falls back to first key or `{ }`.

### `getEntryPreview(e)`
Builds a short secondary preview: up to 4 top-level keys with truncated values.

### `selectEntry(i)`
Sets `activeIdx`, re-renders list + editor.

### `filterEntries()`
Syncs `filterTerm` from `#search` and re-renders the list (text search).

### `getFilteredIndices()`
Returns indices of entries that pass:
1. Free-text search (`filterTerm` against `JSON.stringify`)
2. Structured filter (`filterMode`: field range, index range, or line range)

Used by list rendering, save, and export.

---

## Editor

### `renderEditor()`
Shows editor UI for `entries[activeIdx]`:
- **Object (plain):** field editor — one textarea per key, “Add Field”, per-field remove  
- **Other (array/primitive):** raw JSON textarea  
- **No selection:** empty state  

### `onFieldEdit(el)`
On field textarea input: parses value as JSON when possible, writes to `entries[activeIdx][key]`, marks dirty, updates stats + list.

### `onRawEdit()`
Parses `#rawEditor` JSON into `entries[activeIdx]`. On success marks dirty; on failure shows error status.

### `removeField(key)`
Deletes a top-level key from the active entry; marks dirty; re-renders.  
Decodes HTML entities from attribute-sourced key names.

### `deleteKeyDeep(node, key)`
Recursively deletes property `key` from objects (and walks arrays).  
Works when the value is a nested object/array — not only top-level scalars.  
Returns number of occurrences removed.

### `showDeleteFieldByKey()`
Opens the “Delete Field by Key” modal and focuses the key input.

### `confirmDeleteFieldByKey()`
Reads key from `#deleteFieldKey`. Uses `deleteKeyDeep` on **every** entry so nested keys (inside object values) are removed too.  
Reports occurrence + entry counts; errors if key is empty or not found.

### `showAddField()`
Opens the “Add New Field” modal and focuses the key input.

### `confirmAddField()`
Adds key/value (JSON-parsed if possible) to **every** plain-object entry; marks dirty; closes modal; re-renders.

---

## Entry CRUD

### `addEntry()`
Appends a new object (keys cloned from first entry if available, empty values). Selects it and marks dirty.

### `removeEntry(i)`
Splices entry `i`; clamps `activeIdx`; marks dirty; re-renders.

### `deleteCurrent()`
Deletes the active entry via `removeEntry(activeIdx)`.

### `duplicateEntry()`
Deep-clones active entry and inserts it after the current index; selects the clone.

---

## File I/O

### `openFile()`
Triggers hidden `#fileInput` click.

### `handleFileSelect(e)`
Reads selected file as text → `parseAndLoad`. Clears the input so the same file can be re-opened.

### `parseAndLoad(text, name)`
Parses file content:
1. Try `JSON.parse` → array keeps as-is; object wraps as single-entry array  
2. Else treat as JSONL (line-by-line parse; counts invalid lines)  

Resets search/filter state, selects first entry, re-renders.

### `newFile()`
Confirms if dirty, then clears dataset and UI state.

### `saveFile()`
Exports **filtered** subset as pretty JSON via `download`. Clears dirty.

### `exportAs()`
Opens the export format modal.

### `doExport()`
Exports filtered subset as JSON or JSONL based on `#exportFormat`.

### `download(text, name, mime)`
Creates a Blob, triggers browser download, revokes object URL.

---

## Filter (real-time view)

### `switchFilterTab(tab)`
Switches filter UI tabs (`field` / `index` / `line`) and calls `applyFilter()`.

### `clearFilter()`
Resets all filter state and inputs; re-renders list.

### `applyFilter()`
Reads filter form fields into `filterMode` + the matching `filterField` / `filterIndex` / `filterLine` struct; re-renders list + stats.

**Modes:**
| Mode | Criteria |
|------|----------|
| `field` | Numeric field `>= gte` and `<= lte` (string numbers coerced) |
| `index` | 0-based array index range |
| `line` | 1-based line numbers (`index + 1`) |

---

## Slice Export

### `switchSliceTab(tab)`
Switches slice UI tabs and updates preview.

### `getSliceIndices()`
Computes indices matching slice criteria (same three modes as filter, but independent form fields). Returns `[]` if no field name (field mode) or empty dataset.

### `updateSlicePreview()`
Shows match count in `#slicePreview`.

### `doSlice()`
Builds subset from `getSliceIndices()`, downloads as JSON or JSONL (`#sliceFormat`) named `{base}_slice_{count}.{ext}`.

---

## Concat

### `extractEntries(text, fname)`
Parses a string into an entry array:
- JSON array → that array  
- JSON object → `[object]`  
- Else JSONL lines (invalid lines skipped)  

### `updateConcatPreview()`
Updates `#concatPreview` from selected `#concatFiles` (note: sync preview path is limited without full FileReader; actual merge uses async read).

### `doConcat()` *(async)*
Reads all selected files with FileReader, merges entries via `extractEntries`, downloads as `concat_{count}.json` or `.jsonl`.

---

## Event Handlers (non-named / listeners)

### Drag & drop
- `dragenter` / `dragleave` / `dragover` / `drop` manage `#dropOverlay` and load dropped file via `parseAndLoad`.

### Keyboard shortcuts
| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd+N` | `addEntry()` |
| `Ctrl/Cmd+S` | `saveFile()` |
| `Ctrl/Cmd+D` | `duplicateEntry()` |
| `Ctrl/Cmd+F` | Focus search |
| `ArrowDown` / `ArrowUp` | Next / previous entry |
| `Delete` | `deleteCurrent()` |
| `Escape` | Blur focused input/textarea |

(Shortcuts ignored while typing in INPUT/TEXTAREA, except Escape.)

---

## Bootstrap

On load, seeds `entries` with `mockEntries` (robot joint / `FRAME_NOW` / `TS` sample frames), sets `fileName = 'mock_data.json'`, `activeIdx = 0`, then calls `renderList()`, `renderEditor()`, `updateStats()`.

---

## Function Index (alphabetical)

| Function | Category |
|----------|----------|
| `addEntry` | CRUD |
| `applyFilter` | Filter |
| `clearFilter` | Filter |
| `closeModal` | UI |
| `confirmAddField` | Editor |
| `confirmDeleteFieldByKey` | Editor |
| `deleteCurrent` | CRUD |
| `deleteKeyDeep` | Editor |
| `showDeleteFieldByKey` | Editor |
| `doConcat` | Concat |
| `doExport` | File I/O |
| `doSlice` | Slice |
| `download` | File I/O |
| `duplicateEntry` | CRUD |
| `escHtml` | UI |
| `exportAs` | File I/O |
| `extractEntries` | Concat |
| `filterEntries` | List |
| `getEntryLabel` | List |
| `getEntryPreview` | List |
| `getFilteredIndices` | List / Filter |
| `getSliceIndices` | Slice |
| `handleFileSelect` | File I/O |
| `newFile` | File I/O |
| `onFieldEdit` | Editor |
| `onRawEdit` | Editor |
| `openFile` | File I/O |
| `parseAndLoad` | File I/O |
| `removeEntry` | CRUD |
| `removeField` | Editor |
| `renderEditor` | Editor |
| `renderList` | List |
| `saveFile` | File I/O |
| `selectEntry` | List |
| `setStatus` | UI |
| `showAddField` | Editor |
| `switchFilterTab` | Filter |
| `switchSliceTab` | Slice |
| `togglePanel` | UI |
| `updateConcatPreview` | Concat |
| `updateSlicePreview` | Slice |
| `updateStats` | UI |
