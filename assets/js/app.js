const timelineSteps = [
  {
    phase: "01",
    title: "Strategic positioning",
    focus: "Diagnose the gap, decision context, and contribution map before typing a single paragraph.",
    highlights: [
      "Define audience personas (editor, reviewer, practitioner) and their success metrics.",
      "Audit top journals for scope fit, median review time, and formatting quirks.",
      "Draft research questions or hypotheses and link them to national or disciplinary agendas."
    ]
  },
  {
    phase: "02",
    title: "Evidence stack",
    focus: "Engineer the data, sources, and theoretical scaffolding that make findings trustworthy.",
    highlights: [
      "Log instruments, archival sources, human subjects approvals, or computational resources.",
      "Plan ethics, consent, and reproducibility statements in parallel with experiments.",
      "Map each research question to the datasets, participant groups, or textual corpora that will answer it."
    ]
  },
  {
    phase: "03",
    title: "Method architecture",
    focus: "Design analytical pipelines, validation loops, and robustness narratives.",
    highlights: [
      "Specify baselines, controls, comparison groups, or counterfactuals.",
      "Decide on statistical tests, effect sizes, ablations, and visualization formats.",
      "Capture software stacks, lab conditions, or qualitative coding protocols for transparency."
    ]
  },
  {
    phase: "04",
    title: "Narrative build",
    focus: "Draft IMRaD sections, figures, and tables with reviewer prompts in mind.",
    highlights: [
      "Storyboard figures to ensure every claim is backed by a visual, table, or quotation.",
      "Edit for voice consistency, tense, and transitions between evidence and interpretation.",
      "Insert callouts for policy, design, or theoretical implications as you write."
    ]
  },
  {
    phase: "05",
    title: "Submission intelligence",
    focus: "Assemble the kit: cover letter, highlights, data availability, response shell, and compliance documents.",
    highlights: [
      "Cross-check journal formatting templates and metadata requirements (ORCID, funding, conflicts).",
      "Prepare a reviewer suggestion & conflict list grounded in recent citations.",
      "Dry-run the response matrix so future revisions are faster."
    ]
  }
];

const foundationSignals = [
  {
    title: "Scholarly positioning",
    detail:
      "In the first 700 words show mastery of the conversation: cite recent issues, contrast theories, and make the research gap explicit. Reviewers in every field check whether you know the canon."
  },
  {
    title: "Method transparency",
    detail:
      "Document sampling, instrumentation, model architectures, and qualitative protocols in reproducible terms. Include uncertainty bounds, assumptions, and validation partners."
  },
  {
    title: "Impact orientation",
    detail:
      "Translate technical gains into outcomes stakeholders care about: lives improved, energy saved, design principles updated, cultural insights surfaced."
  },
  {
    title: "Reproducibility & ethics",
    detail:
      "Declare data/code availability, preregistration numbers, ethics approvals, and limitations. Even humanities editors expect clarity on archival permissions or interview agreements."
  }
];

const blueprintSections = [
  {
    id: "title",
    title: "Title, keywords, and abstract",
    promise: "Announce novelty, context, and measurable outcomes in under 250 words.",
    deliverables: [
      "Title formula: Context | lever | measurable effect (e.g., \"Adaptive water-harvesting membranes increase yield by 32 percent\").",
      "12-16 word keywords mixing methods (SEM, ethnography) and domain tags (hydrology, urban history).",
      "Structured abstract: backdrop, gap, method, key numbers or insights, implication sentence."
    ],
    metrics: "Problem magnitude, effect size, reference dataset, policy or design hook",
    reviewerNotes: "Avoid marketing terms (breakthrough, revolutionary). Editors flag claims without validated data.",
    phrases: ["This study isolates...", "Using a multi-site sample we show...", "Findings inform..."]
  },
  {
    id: "intro",
    title: "Introduction & gap case",
    promise: "Establish why the question matters now and why existing work cannot answer it.",
    deliverables: [
      "Para 1: urgency or curiosity gap supported by statistics, citations, or authoritative statements.",
      "Para 2: synthesis of recent attempts organized by lens (methods, geography, theory, archive).",
      "Para 3: explicit gap paragraph, then numbered contributions or hypotheses.",
      "Para 4: outline of paper structure with reader promises."
    ],
    metrics: "Citation freshness, alignment with journal aims, clarity of contribution statements",
    reviewerNotes: "Q1 reviewers expect verbs like \"This paper contributes...\" not implied contributions.",
    phrases: ["Yet existing studies remain silent about...", "We demonstrate three advances...", "Accordingly, we ask..."]
  },
  {
    id: "lit",
    title: "Literature, theory, or conceptual frame",
    promise: "Show how your argument extends, contests, or integrates prior scholarship.",
    deliverables: [
      "Cluster literature visually (table, concept map) to highlight methodological or epistemic gaps.",
      "Explain theoretical lens selection and competing explanations you reject.",
      "Tie constructs to measurable indicators or qualitative codes you will later operationalize."
    ],
    metrics: "Breadth across disciplines, depth on seminal works, conceptual clarity",
    reviewerNotes: "Interdisciplinary work must still anchor to a primary disciplinary conversation for reviewers to evaluate.",
    phrases: ["Building on the framework of...", "Contrary to canonical interpretations...", "We synthesize..."]
  },
  {
    id: "method",
    title: "Methods, data, and materials",
    promise: "Expose how evidence was generated, curated, and analyzed so peers can reproduce it.",
    deliverables: [
      "Participants, corpus, dataset, or artifact description including inclusion/exclusion rules.",
      "Instrumentation, lab workflow, or computational pipelines with references to protocols or repositories.",
      "Validation: controls, baselines, intercoder reliability, statistical power, or simulation burn-in.",
      "Ethics: consent, anonymization, bias mitigation, archival licensing."
    ],
    metrics: "Sample size, statistical power, reliability coefficients, computational budget",
    reviewerNotes: "Use subheadings (Data, Procedure, Analysis) for readability, even in humanities submissions.",
    phrases: ["We operationalized...", "The protocol followed...", "Robustness checks include..."]
  },
  {
    id: "results",
    title: "Results & analysis",
    promise: "Report findings in logical order and quantify uncertainty.",
    deliverables: [
      "Present figures/tables immediately after referencing them with numeric narration.",
      "Note statistical significance, confidence intervals, or thematic saturation thresholds.",
      "Contrast findings with expectations, theoretical priors, or stakeholder benchmarks.",
      "For qualitative work, include representative quotes with metadata (site, participant)."
    ],
    metrics: "Effect sizes, p-values or Bayes factors, thematic coverage, interpretability cues",
    reviewerNotes: "Avoid combining interpretation with results; keep speculation for Discussion.",
    phrases: ["We observe that...", "Quantitatively, this means...", "The motif recurs when..."]
  },
  {
    id: "discussion",
    title: "Discussion & implications",
    promise: "Translate analysis into theory, practice, and societal meaning.",
    deliverables: [
      "Connect results back to research questions and frameworks, explaining surprises.",
      "Deliver implications for three layers: discipline, cross-sector practitioners, and future research.",
      "Surface limitations (data drift, contextual bounds) and mitigation strategies.",
      "Offer conceptual, methodological, or design extensions readers can test."
    ],
    metrics: "Generality of claims, transferability scenarios, limitation transparency",
    reviewerNotes: "One paragraph on limitations is insufficient; integrate throughout Discussion for credibility.",
    phrases: ["For theorists, this shifts...", "Practitioners can adapt...", "A limitation of this study..."]
  },
  {
    id: "conclusion",
    title: "Conclusion & future track",
    promise: "Close the loop with a concise recap and forward-looking agenda.",
    deliverables: [
      "Remind readers of objectives, method, and highest-impact finding in 3 sentences.",
      "State readiness level: deployable, prototype, conceptual.",
      "Outline tangible next steps (e.g., multi-country cohort, longitudinal follow-up, design iteration).",
      "Reiterate commitments to data/code availability and collaboration invites."
    ],
    metrics: "Clarity, brevity, call-to-action strength",
    reviewerNotes: "Do not introduce new references or data in the conclusion.",
    phrases: ["This work positions...", "Future studies should...", "We invite collaborators to..."]
  },
  {
    id: "supplement",
    title: "Supplementary, compliance, and artifacts",
    promise: "Deliver transparency artifacts that accelerate acceptance.",
    deliverables: [
      "Graphical abstract or TOC figure summarizing pipeline and outcomes.",
      "Data, code, interview guides, or CAD files deposited with DOIs.",
      "Author contribution table (CRediT) plus funding, conflict, and ethics statements.",
      "Optional video/audio abstract for journals that require it."
    ],
    metrics: "FAIR compliance, documentation depth, metadata completeness",
    reviewerNotes: "Attach repository links in both the manuscript and cover letter.",
    phrases: ["Data are stored at...", "Code executes via...", "CRediT contributions follow..."]
  }
];

const dossierBlocks = [
  {
    title: "Graphical abstract & highlights",
    items: [
      "3-4 highlight bullets using verbs + numbers (e.g., \"Cuts training time by 41 percent\").",
      "Vector-based graphical abstract that shows flow from problem to outcome.",
      "Table of contents figure resized per journal specs (often 560 x 1100 px)."
    ],
    tip: "Design visuals in dark/light variants so they work for both PDF and web layouts."
  },
  {
    title: "Data, code, and materials availability",
    items: [
      "Repository with README detailing file structure, software versions, and licenses.",
      "Anonymized or synthetic dataset plus provenance statement.",
      "Materials appendix covering lab reagents, survey instruments, or archival catalogs."
    ],
    tip: "Link persistent identifiers (DOI, Handle) in manuscript and cover letter to avoid desk rejections."
  },
  {
    title: "Cover letter & editor briefing",
    items: [
      "Paragraph 1: novelty, urgency, and alignment with journal scope.",
      "Paragraph 2: author highlights (prior work, collaborations, data availability).",
      "Paragraph 3: reviewer suggestions (names, expertise, emails) plus conflict list."
    ],
    tip: "Mirror the journal's language and mention any special issues or calls you are targeting."
  },
  {
    title: "Compliance checklist",
    items: [
      "Ethics approvals, IRB numbers, preregistration ID, or archival permissions.",
      "CRediT contribution matrix and funding acknowledgments with grant numbers.",
      "Conflict-of-interest, originality, and data-sharing declarations per journal portal."
    ],
    tip: "Convert checklists into a single PDF so editors are not chasing multiple uploads."
  }
];

const domainData = {
  experimental: {
    title: "Experimental & natural sciences",
    tagline: "Emphasize reproducibility, calibration, and uncertainty budgets.",
    dataset: [
      "Instrument logs, lab notebooks, omics repositories",
      "Calibration curves, environmental controls, reference samples",
      "Preregistrations, standard operating procedures"
    ],
    angle: [
      "Quantify measurement error and detection limits.",
      "Report replication attempts or cross-lab validation.",
      "Link findings to standards (ISO, ASTM, WHO) or global targets."
    ],
    impact: [
      "Technique increases sensitivity by 2.3x vs leading assay.",
      "Protocol reduces reagent cost by 18 percent.",
      "Findings update safety thresholds adopted by regulators."
    ],
    policy: "Anchor claims in recognized bodies (Nature Portfolio, ACS, IEEE) and detail biosafety compliance."
  },
  computational: {
    title: "Computational & data sciences",
    tagline: "Balance accuracy with interpretability and governance.",
    dataset: [
      "Benchmark datasets, synthetic corpora, federated nodes",
      "Compute budget disclosures (GPU hours, carbon reporting)",
      "Model cards, dataset statements, reproducible scripts"
    ],
    angle: [
      "Contrast with strong baselines, ablations, and zero-shot tests.",
      "Address fairness, privacy, and hardware portability.",
      "Discuss human-in-the-loop evaluation or domain expert review."
    ],
    impact: [
      "Reduces inference latency to 42 ms on commodity hardware.",
      "Improves macro F1 by 8 points on imbalanced classes.",
      "Toolkit open-sourced under a permissive license."
    ],
    policy: "Reference AI governance frameworks (NIST, ISO/IEC, open science mandates)."
  },
  design: {
    title: "Design, architecture, and engineering",
    tagline: "Stress prototyping cycles, user feedback, and performance metrics.",
    dataset: [
      "CAD/BIM models with parameters",
      "User studies, ergonomic assessments, participatory workshops",
      "Lifecycle inventories, cost models, structural analyses"
    ],
    angle: [
      "Showcase iteration count, failure modes, and redesign triggers.",
      "Tie aesthetics or usability choices to theory and standards.",
      "Quantify sustainability and resilience outcomes."
    ],
    impact: [
      "Prototype halves fabrication time without sacrificing safety.",
      "User satisfaction scores climb from 3.1 to 4.5/5.",
      "Lifecycle emissions drop 27 percent compared with baseline."
    ],
    policy: "Map implications to building codes, engineering guidelines, or procurement frameworks."
  },
  social: {
    title: "Social sciences, humanities, and policy",
    tagline: "Highlight methodological reflexivity, thick description, and societal stakes.",
    dataset: [
      "Interview transcripts, ethnographic fieldnotes, archives",
      "Surveys, administrative records, textual corpora",
      "Participatory action research artifacts"
    ],
    angle: [
      "Clarify positionality and researcher reflexivity.",
      "Detail coding schemes, triangulation, and audit trails.",
      "Connect insights to policy cycles, jurisprudence, or cultural debates."
    ],
    impact: [
      "Legislative committee cites findings in hearing.",
      "Community adoption of recommendations within six months.",
      "Archives digitized for open cultural access."
    ],
    policy: "Point to SDGs, UNESCO, OECD, or national policy briefs that benefit from the work."
  }
};

const methodBlocks = [
  {
    title: "Mixed-method evidence loops",
    tactics: [
      "Pair quantitative trends with qualitative narratives to explain mechanisms.",
      "Use joint displays that align statistics with quotes or design artifacts.",
      "Document integration timing (exploratory, explanatory, convergent)."
    ]
  },
  {
    title: "Reproducible computational pipelines",
    tactics: [
      "Containerize analysis (Docker, Conda) and log versions in the manuscript.",
      "Include ablation diagrams showing where gains originate.",
      "Quantify compute cost, memory footprint, and carbon emissions."
    ]
  },
  {
    title: "Design science & build-measure-learn",
    tactics: [
      "Present design principles, instantiations, and evaluations explicitly.",
      "State acceptance criteria for prototypes and how feedback informed revisions.",
      "Blend technical validation with stakeholder co-creation evidence."
    ]
  },
  {
    title: "Evidence synthesis & meta-analysis",
    tactics: [
      "Explain search strategy, screening criteria, and effect models.",
      "Assess publication bias and heterogeneity.",
      "Translate pooled effects into practitioner-ready recommendations."
    ]
  }
];

const reviewStrategies = [
  {
    title: "Desk evaluation filter",
    summary: "Editors skim title, abstract, cover letter, compliance forms, and similarity reports within minutes.",
    steps: [
      "State journal fit explicitly and avoid scope drift.",
      "Keep similarity index under thresholds (usually 18-20 percent).",
      "Ensure figures, tables, references follow the latest template or LaTeX class."
    ],
    tip: "If targeting a special issue, mention the guest editor and theme in the cover letter opening line."
  },
  {
    title: "External peer review",
    summary: "Three to four reviewers test novelty, rigor, interpretation, and completeness.",
    steps: [
      "Anticipate major questions: novelty, methodological sufficiency, result clarity, broader impacts.",
      "Pre-build a response matrix with columns for comment, action, manuscript location, gratitude.",
      "Highlight reproducibility assets (links, appendices) whenever reviewers request more evidence."
    ],
    tip: "Never argue intent; respond with evidence, citations, or new experiments."
  },
  {
    title: "Revision cycles",
    summary: "Most Q1 acceptances occur after one or two rounds of major revision.",
    steps: [
      "Prioritize reviewer alignment before technical edits; restate each comment in your own words.",
      "Use change tracking tables that cite section, line numbers, and new references.",
      "Close letters with a meta-summary reminding reviewers of the manuscript's strengthened contributions."
    ],
    tip: "If a request is infeasible, explain constraints transparently and propose alternative evidence."
  },
  {
    title: "Post-acceptance readiness",
    summary: "Proofs, data deposits, and outreach happen fast; prepare assets early.",
    steps: [
      "Have high-resolution figures (TIFF/SVG) and video abstracts ready.",
      "Confirm ORCID links, funding statements, and author order before proofs arrive.",
      "Draft social media or press copy aligned with journal embargo rules."
    ],
    tip: "Archive final materials with version tags (submitted, revised, accepted) for future reference."
  }
];

const qualityGates = [
  {
    title: "Novelty proof",
    detail: "Explicit contrast with state of the art plus contribution bullets complete."
  },
  {
    title: "Method transparency",
    detail: "All parameters, instruments, coding rubrics, and software versions documented."
  },
  {
    title: "Impact translation",
    detail: "Implications for theory, practice, and society articulated with evidence."
  },
  {
    title: "Ethics & compliance",
    detail: "IRB, consent, archival permissions, and conflicts compiled."
  },
  {
    title: "Language & visuals",
    detail: "Plain, active sentences, figure captions with interpretation, consistent tense."
  },
  {
    title: "Submission kit locked",
    detail: "Cover letter, highlights, graphical abstract, checklist, response matrix exported."
  }
];

const promptBlocks = [
  {
    title: "High-stakes context",
    prompt:
      "Across {context or discipline}, {trusted source} reports {statistic}. Without {innovation/action}, {stakeholder} faces {risk or missed opportunity}."
  },
  {
    title: "Knowledge gap",
    prompt:
      "Prior {studies/theories} resolve {aspect} using {approach}, yet {limitation} persists because {reason}."
  },
  {
    title: "Research objective",
    prompt:
      "We investigate {phenomenon} by {method/approach} to determine {outcome metric}, expecting {hypothesis or proposition}."
  },
  {
    title: "Method clarity",
    prompt:
      "Evidence derives from {sample/dataset/archives} with {size/coverage}. We analyze it via {tool/protocol}, controlling for {confounders}."
  },
  {
    title: "Finding articulation",
    prompt:
      "Compared with {baseline/perspective}, the proposed {method/intervention} changes {metric/interpretation} by {value}, indicating {insight}."
  },
  {
    title: "Implication & future",
    prompt:
      "For {discipline/practice}, the findings imply {action}. Future work will {extension} to test {new condition}."
  }
];

const blueprintContainer = document.getElementById("blueprint-grid");
const timelineContainer = document.getElementById("timeline");
const foundationContainer = document.getElementById("foundations-grid");
const dossierGrid = document.getElementById("dossier-grid");
const domainButtons = document.getElementById("domain-buttons");
const domainDisplay = document.getElementById("domain-display");
const methodGrid = document.getElementById("method-grid");
const reviewGrid = document.getElementById("review-grid");
const qualityList = document.getElementById("quality-list");
const promptGrid = document.getElementById("prompt-grid");

const createEl = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

function renderTimeline() {
  timelineSteps.forEach((step) => {
    const item = createEl("article", "timeline__item");
    const badge = createEl("div", "timeline__badge", step.phase);
    const title = createEl("h3", null, step.title);
    const focus = createEl("p", null, step.focus);
    const list = createEl("ul");
    step.highlights.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      list.appendChild(li);
    });
    item.append(badge, title, focus, list);
    timelineContainer.appendChild(item);
  });
}

function renderFoundations() {
  foundationSignals.forEach((signal) => {
    const card = createEl("article", "card");
    card.append(createEl("h3", null, signal.title), createEl("p", null, signal.detail));
    foundationContainer.appendChild(card);
  });
}

function renderBlueprint() {
  blueprintSections.forEach((section, index) => {
    const card = createEl("article", "card section-card");
    card.dataset.section = section.id;
    const eyebrow = createEl("p", "eyebrow", `Phase ${index + 1}`);
    const title = createEl("h3", null, section.title);
    const promise = createEl("p", null, section.promise);

    const deliverList = createEl("ul");
    section.deliverables.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      deliverList.appendChild(li);
    });

    const toggle = createEl("button", null, "Deep Dive");
    toggle.setAttribute("aria-expanded", "false");

    const panel = createEl("div", "card__panel");
    panel.innerHTML = `
      <p><strong>Metrics reviewers expect:</strong> ${section.metrics}</p>
      <p><strong>Reviewer note:</strong> ${section.reviewerNotes}</p>
      <p><strong>Power phrases:</strong> ${section.phrases.join(", ")}</p>
    `;

    toggle.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Hide guidance" : "Deep Dive";
    });

    card.append(eyebrow, title, promise, deliverList, toggle, panel);
    blueprintContainer.appendChild(card);
  });
}

function renderDossier() {
  dossierBlocks.forEach((block) => {
    const card = createEl("article", "card");
    card.append(createEl("h3", null, block.title));
    const list = createEl("ul");
    block.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    card.append(list, createEl("p", "card__tip", block.tip));
    dossierGrid.appendChild(card);
  });
}

function renderDomains() {
  const keys = Object.keys(domainData);
  keys.forEach((key, index) => {
    const button = createEl("button", index === 0 ? "active" : null, domainData[key].title);
    button.type = "button";
    button.dataset.domain = key;
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".domain-controls button")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      updateDomainPanel(key);
    });
    domainButtons.appendChild(button);
  });
  updateDomainPanel(keys[0]);
}

function updateDomainPanel(key) {
  const domain = domainData[key];
  domainDisplay.innerHTML = `
    <h3>${domain.title}</h3>
    <p>${domain.tagline}</p>
    <div class="grid">
      <div>
        <p class="eyebrow">Evidence sources</p>
        <ul>${domain.dataset.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="eyebrow">Angles reviewers scan</p>
        <ul>${domain.angle.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="eyebrow">Impact statements</p>
        <ul>${domain.impact.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
    <p><strong>Policy or cultural hook:</strong> ${domain.policy}</p>
  `;
}

function renderMethodLab() {
  methodBlocks.forEach((method) => {
    const card = createEl("article", "card method-card");
    card.append(createEl("h3", null, method.title));
    const list = createEl("ul");
    method.tactics.forEach((tactic) => {
      const li = document.createElement("li");
      li.textContent = tactic;
      list.appendChild(li);
    });
    card.appendChild(list);
    methodGrid.appendChild(card);
  });
}

function renderReview() {
  reviewStrategies.forEach((strategy) => {
    const card = createEl("article", "card");
    card.append(createEl("h3", null, strategy.title), createEl("p", null, strategy.summary));
    const list = createEl("ul");
    strategy.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      list.appendChild(li);
    });
    card.append(list, createEl("p", "card__tip", strategy.tip));
    reviewGrid.appendChild(card);
  });
}

function renderQualityList() {
  qualityGates.forEach((gate) => {
    const item = createEl("li");
    item.setAttribute("tabindex", "0");
    const check = createEl("span", null, "?");
    const wrapper = createEl("div");
    wrapper.append(createEl("strong", null, gate.title), createEl("p", null, gate.detail));
    item.append(check, wrapper);
    const toggle = () => item.classList.toggle("checked");
    item.addEventListener("click", toggle);
    item.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" || evt.key === " ") {
        evt.preventDefault();
        toggle();
      }
    });
    qualityList.appendChild(item);
  });
}

function renderPrompts() {
  promptBlocks.forEach((block) => {
    const card = createEl("article", "card");
    card.append(createEl("h3", null, block.title));
    const pre = document.createElement("pre");
    pre.textContent = block.prompt;
    card.appendChild(pre);
    promptGrid.appendChild(card);
  });
}

renderTimeline();
renderFoundations();
renderBlueprint();
renderDossier();
renderDomains();
renderMethodLab();
renderReview();
renderQualityList();
renderPrompts();

