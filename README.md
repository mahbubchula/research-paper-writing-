# Q1 Research Manuscript Studio

Interactive studio that teaches how to craft Q1-grade journal articles across STEM, computational, design, and social science disciplines. Built for **Mahbub Hassan** — Graduate Student & Non-ASEAN Scholar, Department of Civil Engineering, Faculty of Engineering, Chulalongkorn University, Bangkok, Thailand.

## Highlights
- Field-agnostic blueprint with deep guidance for every manuscript component plus reviewer-style prompts.
- Submission dossier, peer-review navigation tips, and quality gates that mirror elite journal workflows.
- Domain mode toggles for experimental sciences, computational work, design research, and social sciences to adjust tone and evidence.
- Simple HTML/CSS/JS stack so the tutorial loads offline and deploys instantly to GitHub Pages.

## Structure
```
research-writing-tutorial/
+-- index.html
+-- assets/
¦   +-- css/style.css
¦   +-- js/app.js
+-- README.md
```

## Run locally
1. Open `index.html` in any modern browser (double-click or use VS Code's Live Preview).
2. Optional: start a lightweight server (`python -m http.server` or `npx serve`) from the project root so you can share the URL on the local network.

## Customize
- **Branding**: Update hero copy, footer, or navigation labels in `index.html` for new cohorts or institutions.
- **Palette & typography**: Edit CSS variables at the top of `assets/css/style.css`.
- **Content intelligence**: Modify the data arrays in `assets/js/app.js` (`timelineSteps`, `blueprintSections`, `dossierBlocks`, `domainData`, `methodBlocks`, `reviewStrategies`, `qualityGates`, `promptBlocks`). The UI renders directly from these structures.

## Deploy to GitHub Pages
1. Push this folder to your GitHub repository (`research-paper-writing-`).
2. In GitHub ? *Settings* ? *Pages*, choose the `main` branch and `/ (root)` folder.
3. Save; GitHub publishes to `https://<username>.github.io/research-paper-writing-/` within ~1 minute.
4. Share the URL with students and integrate it into your workshop slides.

## Next ideas
- Embed Loom/YouTube walkthroughs beside each section by adding `<iframe>` blocks in `index.html`.
- Connect a feedback form (Google Form, Typeform) so students can request critiques after completing the checklist.
- Internationalize text later by moving the arrays in `app.js` to JSON files (one per language) and loading them dynamically.
