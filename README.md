# Q1 Research Writing Studio

Interactive, section-by-section tutorial that coaches engineering researchers (Transportation, Sustainability, AI for mobility) to craft Q1-grade journal papers. Built for **Mahbub Hassan** — Graduate Student & Non-ASEAN Scholar, Department of Civil Engineering, Faculty of Engineering, Chulalongkorn University, Bangkok, Thailand.

## Features
- Dynamic blueprint cards that explain objectives, deliverables, reviewer notes, and power phrases for each manuscript section.
- Domain lenses (Transportation, Sustainability, AI, Mobility) with datasets, narrative angles, and impact hooks tailored to each sub-field.
- Method Lab, interactive quality checklist, and writing prompt canvas to avoid blank-page anxiety.
- Lightweight stack (HTML/CSS/JS) so it deploys instantly to GitHub Pages and works offline.

## Structure
```
research-writing-tutorial/
+-- index.html
+-- assets/
¦   +-- css/style.css
¦   +-- js/app.js
+-- README.md
```

## Local preview
1. Double-click `index.html` (or open via `code index.html` + built-in preview) to view in your browser.
2. If you prefer a local server (optional), run `npx serve` or `python -m http.server` in the project directory and open the shown URL.

## Customize
- **Branding**: Update the hero text or footer in `index.html` to reflect new cohorts or collaborators.
- **Color palette**: Tweak CSS variables at the top of `assets/css/style.css`.
- **Content**: All text/data lives in `assets/js/app.js`. Edit arrays such as `blueprintSections`, `domainData`, `qualityGates`, and `promptBlocks` to extend or localize guidance.

## Deploy to GitHub Pages
1. Create a new GitHub repository (e.g., `research-writing-tutorial`).
2. Copy the folder contents into the repo and commit (`git add . && git commit -m "Add research writing studio"`).
3. Push to GitHub (`git push origin main`).
4. In repo settings ? **Pages**, choose the `main` branch with `/ (root)` folder and save.
5. GitHub will publish at `https://<username>.github.io/research-writing-tutorial/` within a minute.

## Next steps
- Embed workshop videos or Loom walkthroughs by dropping `<iframe>` blocks into new sections.
- Add a feedback form (e.g., Google Form) by linking from the CTA card so students can request reviews.
- When ready, internationalize strings by storing them as JSON and loading based on the visitor''s locale.
