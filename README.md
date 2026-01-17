# Q1 Research Manuscript Studio

Plain-language tutorial that walks any student through the exact steps, sections, and files needed for a Q1-grade research article. Built for **Mahbub Hassan** — Graduate Student & Non-ASEAN Scholar, Department of Civil Engineering, Faculty of Engineering, Chulalongkorn University, Bangkok, Thailand.

## Highlights
- **Step-by-step journey**: Roadmap, blueprint cards, and quality gates show what to finish before moving to the next stage.
- **Jargon-free explanations**: Every section lists the sentences to write, evidence to show, and phrases reviewers like.
- **Field modes**: Toggle guidance for experimental science, computational work, design/architecture, or social research.
- **Submission dossier**: Checklist of highlights, cover letter, data note, and ethics files so the upload stage is painless.

## Structure
```
research-writing-tutorial/
+-- index.html        # layout + section containers
+-- assets/
¦   +-- css/style.css # theme + layout styles
¦   +-- js/app.js     # data-driven content + interactions
+-- README.md
```

## Preview locally
1. Open `index.html` in any browser (double-click or drag into Chrome/Edge/Safari).
2. Optional server: `python -m http.server` or `npx serve` from this folder, then open the shown URL.

## Customize
- **Branding text**: Edit hero lines, footer, or navigation labels in `index.html`.
- **Colors & type**: Change CSS variables at the top of `assets/css/style.css`.
- **Content**: Update the arrays inside `assets/js/app.js` to add more tips, prompts, or field modes. Everything you see is pulled from those data objects.

## Deploy to GitHub Pages
1. Commit and push to `https://github.com/mahbubchula/research-paper-writing-` (already configured).
2. In GitHub ? *Settings* ? *Pages*, publish the `main` branch (root folder).
3. GitHub serves the site at `https://mahbubchula.github.io/research-paper-writing-/` within a minute.

## Ideas to extend
- Embed short explainer videos beside each section by dropping `<iframe>` blocks into `index.html`.
- Connect a Google Form or Typeform link so students can request reviews after finishing the checklist.
- Translate the data arrays in `app.js` into JSON files if you want multilingual support later.
