# Tab Notes
Open a new tab and write anything.

## Features:

* **Easy-to-use**: Just open new tab, and write down thoughts.
* **Auto-save**: No worries about saving things when writing.
* **Cloud sync**: Automatically save your notes across devices using GitHub gists.
* **Theme**: Support light and dark theme.
* **Lightweight and fast**
* **Multiple notes**: Create as many notes as you like.
* **Browser-action with shortcut**: You could use it without changing your current new tab page.
* **Customization**: Edit font, font size and more.
* **Images**: Paste images in your notes.
* **Styled text**: Make your text bold, italic or underlined.
* **Links**: Paste links to websites
* Open-source

## Shortcuts

- `Ctrl/Cmd + Y`: To open the browser-action tab notes.

## Download

*These downloads don't include any changes from this fork*
Tab Notes is available to the following browsers:
* [Firefox](https://addons.mozilla.org/firefox/addon/tab-notes/)
* [Chrome](https://chrome.google.com/webstore/detail/tab-notes/obnnegakmgonaiplaobihpmcjhlceeic)

## Installation Guide (開發版安裝說明)

1. 下載 `tab-notes-build.zip` 並將其解壓縮。
2. 開啟 Chrome 或 Edge 瀏覽器，前往擴充功能管理頁面：`chrome://extensions/`或`edge://extensions/`。
3. 在頁面中開啟右上角或左下角的**「開發人員模式 (Developer mode)」**。
4. 點擊**「載入未封裝項目 (Load unpacked)」**。
5. 選擇已解壓縮的 `tab-notes` 根目錄資料夾，即可完成安裝。

## Testing Guide (測試說明)

完成安裝後，您可以進行以下步驟測試新功能：

1. **新分頁自訂標題功能**：
   - 開啟一個新的空白分頁。您應該能看到原本主要內容的上方新增了一個標題輸入框 (預設為「無標題筆記」)。
   - 點擊輸入框輸入自訂標題，此時該筆記在左側清單中的名稱將不受內容影響，完全由您自訂。
   
2. **切換筆記與自動儲存**：
   - 在左側新增多個筆記，切換不同筆記時，確保各別獨立的自訂標題能正常顯示與切換。系統將會即時自動儲存。

3. **深色模式顯示**：
   - 點擊左下角齒輪圖示進入「設定 (Settings)」，開啟「Dark mode」。
   - 回到新分頁，檢查上方標題輸入框的背景色與字體是否也已正確套用深色模式，沒有出現突兀的白色塊。

4. **匯出與匯入功能 (向下相容)**：
   - 回到設定頁面，點擊「Export」按鈕，檢查匯出文字中的標題是否正確包含於 `<<TITLE>>標題名稱<</TITLE>>` 格式中。
   - 刪除您的筆記後，點選「Import」並將字串貼回，檢查自訂標題是否能被正常還原。舊版沒有帶有 `<TITLE>` 標記的筆記，匯入時也會回退至透過內容自動生成標題的行為。

## Screenshot

![screenshot](./screenshot.png)
