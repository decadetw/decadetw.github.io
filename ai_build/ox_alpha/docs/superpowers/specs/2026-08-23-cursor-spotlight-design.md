# 游標跟隨聚光燈背景 — 設計文件

日期：2026-08-23
狀態：已核准

## 目標

將 `index.html` 背景中現有的 4 道自動移動圓錐光束，替換為一團跟隨游標（滑鼠／觸控）移動的柔和光暈。使用者反映原本的光束不明顯，且期望「聚光燈跟著滑鼠走」的效果。

## 現況

- `index.html` 內含單一 `.bg-fur` canvas（`initFur()`），繪製流動毛髮 + 4 道自動聚光燈。
- 既有基礎建設：rAF 迴圈、resize/DPR 處理、分頁隱藏暫停、主題強調色追蹤（MutationObserver）、`prefers-reduced-motion` 直接不啟動、`mix-blend-mode: screen`。

## 決策

採方案 A：在同一個 canvas 上實作，刪除舊光束程式碼。

否決方案 B（CSS div）與方案 C（第二個 canvas）：主題色同步與平滑移動無論如何都需要 JS，且額外元素／迴圈沒有好處。

## 實作細節

1. **刪除**：`makeSpot()`、`spots`、`populateSpots()`、`drawSpots()` 及其所有呼叫點（約 60 行）。
2. **新增 spotlight 狀態**：`{ x, y, alpha }`。
   - 每帧以 lerp（係數約 0.09）趨近 `mouse.x / mouse.y`。
   - 指標在視窗內 → alpha 趨近 1；`mouseleave` → alpha 趨近 0（淡出）。
3. **繪製**：
   - 徑向漸層，半徑 ≈ `min(W, H) × 0.38`。
   - 顏色使用當前主題強調色 `rgb[]`，中心 alpha ≈ 0.13 淡出到 0。
   - 以 `globalCompositeOperation: "lighter"` 疊加，毛髮經過時被照亮。
   - 光暈中心另疊一層白色小核心增加層次（可選，強度低）。
4. **輸入來源**：既有 `mousemove`；新增 `touchmove`（passive）更新目標位置，手機可拖曳光點。
5. **行為保留**：
   - reduced-motion 使用者完全看不到（canvas 不啟動、CSS display:none）。
   - 分頁隱藏時暫停、主題切換即時換色、resize 重設。

## 驗收標準

- [ ] 舊的 4 道自動光束完全移除，無殘留程式碼。
- [ ] 滑鼠移動時，光暈平滑（有延遲感）地跟隨。
- [ ] 切換主題時光暈顏色即時更新。
- [ ] 滑鼠離開視窗後光暈淡出。
- [ ] 手機上 touchmove 可帶動光暈。
- [ ] reduced-motion 下無任何背景動畫。
