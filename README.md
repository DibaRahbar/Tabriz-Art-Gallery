# Tabriz Art Gallery

Website for Tabriz Art Gallery (Malek Foundation, Doran Free Space, Kabood Atelier), designed in Figma and implemented in React.

- Figma file: https://www.figma.com/design/9lsfNnB5n09UIxNggaX0Iq/art (file key `9lsfNnB5n09UIxNggaX0Iq`, page "Page 1")
- Style: warm paper background `#F3F0EA`, ink `#151412`, Instrument Serif for headlines, Geist for text, Geist Mono for labels.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

The site uses hash routing and a relative base, so `dist/` works on GitHub Pages without extra config.

## What is built in code

Routes follow the prototype links read from the Figma file (hash routing).

| Route | Figma frames |
|---|---|
| `#/` | Home — Minimal 2026. Nav "Exhibitions" and the footer links scroll to the sections on this page |
| `#/venue/malek` | Gallery detail (Malek exhibitions) |
| `#/venue/doran` | Exhibitions - doran |
| `#/venue/kabood` | Exhibitions - kabood — by year |
| `#/exhibition/:slug` | all 44 exhibition detail frames (18 Malek/Doran pages and Kabood 01–26), filled from `src/data.ts` |
| `#/contact` | Contact — Minimal 2026 |

Content lives in `src/data.ts`. Images exported from Figma are in `public/images` and `public/icons`.

## Design export

Every frame at 1x (1440 px wide) is exported to `design/` for reference. The index below lists each frame with its node id.

| # | Frame | Node id | Image |
|---|---|---|---|
| 01 | Home — Minimal 2026 | `7:3929` | [01-home.png](design/01-home.png) |
| 02 | Gallery detail — Minimal 2026 | `13:3928` | [02-gallery-detail.png](design/02-gallery-detail.png) |
| 03 | Contact — Minimal 2026 | `19:3940` | [03-contact.png](design/03-contact.png) |
| 04 | Exhibition detail — Bitter Almond (with captions) — Minimal 2026 | `24:3876` | [04-exhibition-bitter-almond.png](design/04-exhibition-bitter-almond.png) |
| 05 | Exhibitions - doran (minimal 2026) | `56:308` | [05-exhibitions-doran.png](design/05-exhibitions-doran.png) |
| 06 | Exhibition detail — La’l — Minimal 2026 | `63:416` | [06-exhibition-lal.png](design/06-exhibition-lal.png) |
| 07 | Exhibition detail — Talween — Minimal 2026 | `63:482` | [07-exhibition-detail-talween.png](design/07-exhibition-detail-talween.png) |
| 08 | Exhibition detail — Reflection — Minimal 2026 | `63:548` | [08-exhibition-detail-reflection.png](design/08-exhibition-detail-reflection.png) |
| 09 | Exhibition detail — Chasm — Minimal 2026 | `63:614` | [09-exhibition-detail-chasm.png](design/09-exhibition-detail-chasm.png) |
| 10 | Exhibition detail — 19Hz project (7 – 12 Mar, 2025) — Minimal 2026 | `69:900` | [10-exhibition-detail-19hz-project-7-12-mar-2025.png](design/10-exhibition-detail-19hz-project-7-12-mar-2025.png) |
| 11 | Exhibition detail — Contemporary project (28 Feb – 5 Mar, 2025) — Minimal 2026 | `69:966` | [11-exhibition-detail-contemporary-project-28-feb-5-mar-2025.png](design/11-exhibition-detail-contemporary-project-28-feb-5-mar-2025.png) |
| 12 | Exhibition detail — Contemporary project (22 – 27 Feb, 2025) — Minimal 2026 | `69:1032` | [12-exhibition-detail-contemporary-project-22-27-feb-2025.png](design/12-exhibition-detail-contemporary-project-22-27-feb-2025.png) |
| 13 | Exhibition detail — Contemporary project (28 Dec – 2 Jan, 2024) — Minimal 2026 | `69:1098` | [13-exhibition-detail-contemporary-project-28-dec-2-jan-2024.png](design/13-exhibition-detail-contemporary-project-28-dec-2-jan-2024.png) |
| 14 | Exhibition detail — Contemporary project (21 – 26 Dec, 2024) — Minimal 2026 | `69:1164` | [14-exhibition-detail-contemporary-project-21-26-dec-2024.png](design/14-exhibition-detail-contemporary-project-21-26-dec-2024.png) |
| 15 | Exhibition detail — Contemporary art project (5 – 13 Sep, 2024) — Minimal 2026 | `69:1230` | [15-exhibition-detail-contemporary-art-project-5-13-sep-2024.png](design/15-exhibition-detail-contemporary-art-project-5-13-sep-2024.png) |
| 16 | Exhibition detail — Project noir archive (26 Apr – 6 May, 2020) — Minimal 2026 | `69:1296` | [16-exhibition-detail-project-noir-archive-26-apr-6-may-2020.png](design/16-exhibition-detail-project-noir-archive-26-apr-6-may-2020.png) |
| 17 | Exhibition detail — Chasm (20 – 24 Feb, 2023) — Minimal 2026 | `69:1362` | [17-exhibition-detail-chasm-20-24-feb-2023.png](design/17-exhibition-detail-chasm-20-24-feb-2023.png) |
| 18 | Exhibition detail — Absense (22 – 28 Jul, 2022) — Minimal 2026 | `69:1428` | [18-exhibition-detail-absense-22-28-jul-2022.png](design/18-exhibition-detail-absense-22-28-jul-2022.png) |
| 19 | Exhibition detail — A Tragedy Narrated (16 – 27 Jun, 2022) — Minimal 2026 | `69:1494` | [19-exhibition-detail-a-tragedy-narrated-16-27-jun-2022.png](design/19-exhibition-detail-a-tragedy-narrated-16-27-jun-2022.png) |
| 20 | Kabood 03 — Bitter Almond — Minimal 2026 | `110:2237` | [20-kabood-03-bitter-almond.png](design/20-kabood-03-bitter-almond.png) |
| 21 | Kabood 01 — Mehrdad Khataei — Minimal 2026 | `112:2183` | [21-kabood-01-mehrdad-khataei.png](design/21-kabood-01-mehrdad-khataei.png) |
| 22 | Kabood 02 — Rabia Arzhang Projects 01 — Minimal 2026 | `112:2249` | [22-kabood-02-rabia-arzhang-projects-01.png](design/22-kabood-02-rabia-arzhang-projects-01.png) |
| 23 | Kabood 04 — Outside — Minimal 2026 | `112:2417` | [23-kabood-04-outside.png](design/23-kabood-04-outside.png) |
| 24 | Kabood 05 — Outside — Minimal 2026 | `112:2610` | [24-kabood-05-outside.png](design/24-kabood-05-outside.png) |
| 25 | Kabood 06 — Yoldash — Minimal 2026 | `112:2676` | [25-kabood-06-yoldash.png](design/25-kabood-06-yoldash.png) |
| 26 | Kabood 07 — Fortune telling by Hafez — Minimal 2026 | `112:2742` | [26-kabood-07-fortune-telling-by-hafez.png](design/26-kabood-07-fortune-telling-by-hafez.png) |
| 27 | Kabood 08 — Death Row3 — Minimal 2026 | `112:2935` | [27-kabood-08-death-row3.png](design/27-kabood-08-death-row3.png) |
| 28 | Kabood 09 — Healing — Minimal 2026 | `112:3001` | [28-kabood-09-healing.png](design/28-kabood-09-healing.png) |
| 29 | Kabood 10 — ANA — Minimal 2026 | `112:3194` | [29-kabood-10-ana.png](design/29-kabood-10-ana.png) |
| 30 | Kabood 11 — Mohammad Fassounaki — Minimal 2026 | `112:3260` | [30-kabood-11-mohammad-fassounaki.png](design/30-kabood-11-mohammad-fassounaki.png) |
| 31 | Kabood 12 — Sublimation — Minimal 2026 | `112:3461` | [31-kabood-12-sublimation.png](design/31-kabood-12-sublimation.png) |
| 32 | Kabood 13 — Death Row3 — Minimal 2026 | `112:3527` | [32-kabood-13-death-row3.png](design/32-kabood-13-death-row3.png) |
| 33 | Kabood 14 — Vow For Pass — Minimal 2026 | `112:3593` | [33-kabood-14-vow-for-pass.png](design/33-kabood-14-vow-for-pass.png) |
| 34 | Kabood 15 — Line — Minimal 2026 | `112:3659` | [34-kabood-15-line.png](design/34-kabood-15-line.png) |
| 35 | Kabood 16 — Drawing — Minimal 2026 | `112:3725` | [35-kabood-16-drawing.png](design/35-kabood-16-drawing.png) |
| 36 | Kabood 17 — Vali JavadiAzar — Minimal 2026 | `112:3791` | [36-kabood-17-vali-javadiazar.png](design/36-kabood-17-vali-javadiazar.png) |
| 37 | Kabood 18 — Death Row2 — Minimal 2026 | `112:3857` | [37-kabood-18-death-row2.png](design/37-kabood-18-death-row2.png) |
| 38 | Kabood 19 — ATA — Minimal 2026 | `112:3923` | [38-kabood-19-ata.png](design/38-kabood-19-ata.png) |
| 39 | Kabood 20 — Inside 2 — Minimal 2026 | `112:3989` | [39-kabood-20-inside-2.png](design/39-kabood-20-inside-2.png) |
| 40 | Kabood 21 — Inside — Minimal 2026 | `112:4055` | [40-kabood-21-inside.png](design/40-kabood-21-inside.png) |
| 41 | Kabood 22 — Quarantine Exhibition — Minimal 2026 | `112:4121` | [41-kabood-22-quarantine-exhibition.png](design/41-kabood-22-quarantine-exhibition.png) |
| 42 | Kabood 23 — Five Kilometers To Sharafkhaneh — Minimal 2026 | `112:4187` | [42-kabood-23-five-kilometers-to-sharafkhaneh.png](design/42-kabood-23-five-kilometers-to-sharafkhaneh.png) |
| 43 | Kabood 24 — Me — Minimal 2026 | `112:4253` | [43-kabood-24-me.png](design/43-kabood-24-me.png) |
| 44 | Kabood 25 — Pooya Khaki — Minimal 2026 | `112:4413` | [44-kabood-25-pooya-khaki.png](design/44-kabood-25-pooya-khaki.png) |
| 45 | Kabood 26 — Human Being Grows In The Soil, Like Plant — Minimal 2026 | `112:4479` | [45-kabood-26-human-being-grows-in-the-soil-like-plant.png](design/45-kabood-26-human-being-grows-in-the-soil-like-plant.png) |
| 46 | Exhibitions - kabood (minimal 2026) — by year | `135:721` | [46-exhibitions-kabood-by-year.png](design/46-exhibitions-kabood-by-year.png) |
