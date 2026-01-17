const timelineSteps = [
  {
    phase: "01",
    title: "Plan the story",
    focus: "Pick the journal and write a one-paragraph promise before drafting anything.",
    highlights: [
      "Check the journal scope, word limit, template, and submission fees.",
      "List the audience: editor, three reviewers, practitioner or policy reader.",
      "Write the problem, gap, and contribution bullets in your own words."
    ]
  },
  {
    phase: "02",
    title: "Collect evidence",
    focus: "Secure data, approvals, and background reading so nothing surprises you later.",
    highlights: [
      "Record where data comes from, who owns it, and how others can access it.",
      "Log ethics approvals, consent forms, letters of support, or archival permissions.",
      "Create a literature table with author, method, finding, and weakness columns."
    ]
  },
  {
    phase: "03",
    title: "Build and test methods",
    focus: "Explain every step clearly enough that a friend could repeat it.",
    highlights: [
      "Note tools, software versions, lab conditions, interview guides, or survey links.",
      "Decide how you will double-check quality: baselines, triangulation, pilot test, or simulation.",
      "Store interim results, screenshots, figures, and tables in organized folders."
    ]
  },
  {
    phase: "04",
    title: "Write the manuscript",
    focus: "Draft each section with a purpose sentence, supporting evidence, and a link to the big idea.",
    highlights: [
      "Follow the blueprint cards so you do not miss any required paragraph.",
      "Add figures and tables while you write, not at the end.",
      "Use the prompts to keep language active and precise."
    ]
  },
  {
    phase: "05",
    title: "Submit and respond",
    focus: "Prepare the upload kit, press submit, then get ready for reviewer letters.",
    highlights: [
      "Fill in the journal checklist, cover letter, highlights, and author contribution table.",
      "Suggest reviewers and list conflicted experts honestly.",
      "Set up a response matrix template so revising becomes faster."
    ]
  }
];

const foundationSignals = [
  {
    title: "Clear reason",
    detail: "State why the topic matters now using a number, a policy target, or a real-world consequence."
  },
  {
    title: "Real gap",
    detail: "Explain what the best recent papers or projects missed and why that gap matters."
  },
  {
    title: "Trustworthy method",
    detail: "Show how data was collected, how you checked quality, and how others can repeat the steps."
  },
  {
    title: "Useful impact",
    detail: "Translate findings into one sentence for theory, one for practice, and one for society."
  }
];

const blueprintSections = [
  {
    id: "title",
    title: "Title, keywords, abstract",
    promise: "Hook the reader with the problem, action, and result in one glance.",
    deliverables: [
      "Title: {setting} + {tool or idea} + {result}. Example: \"Adaptive charging plan halves depot wait time\".",
      "Keywords: 5-6 phrases including method (e.g., \"mixed methods\") and domain (e.g., \"sustainable transport\").",
      "Abstract: 1) background, 2) gap, 3) method, 4) main number or insight, 5) why it matters."
    ],
    metrics: "Word limit, key statistic, named stakeholders",
    reviewerNotes: "Include at least one percentage or concrete output. Avoid hype words like revolutionary.",
    phrases: ["This paper examines...", "We apply...", "Results show...", "The findings help..."]
  },
  {
    id: "intro",
    title: "Introduction",
    promise: "Set the stage and tell the reader exactly what you will deliver.",
    deliverables: [
      "Paragraph 1: problem in numbers or vivid story.",
      "Paragraph 2: what others tried recently (3-4 grouped citations).",
      "Paragraph 3: gap sentence + why the gap matters.",
      "Paragraph 4: contribution bullets and paper roadmap."
    ],
    metrics: "Fresh references (last 5 years), explicit contribution verbs",
    reviewerNotes: "Spell out the gap: \"However, no study has...\"",
    phrases: ["Despite progress...", "This study adds...", "We organize the rest of the paper as..."]
  },
  {
    id: "lit",
    title: "Background or theory",
    promise: "Summarize what is known and build the logic for your approach.",
    deliverables: [
      "Group literature by theme, method, geography, or era.",
      "Explain how key theories or frameworks guide your research questions.",
      "Highlight disagreements or blind spots you are addressing."
    ],
    metrics: "Balance of classic and new sources, clear subheadings",
    reviewerNotes: "A diagram or table often communicates gaps faster than long paragraphs.",
    phrases: ["Prior work shows...", "Table 1 compares...", "Figure 2 summarizes..."]
  },
  {
    id: "method",
    title: "Methods & data",
    promise: "Give enough detail so another team could repeat the study.",
    deliverables: [
      "Describe participants, sites, datasets, instruments, or archives.",
      "List software, equipment, survey questions, interview prompts, or lab steps.",
      "Explain validation (baselines, pilot test, intercoder reliability, significance tests).",
      "State ethics approvals, consent processes, and how sensitive data is protected."
    ],
    metrics: "Sample size, parameter settings, reliability values, script links",
    reviewerNotes: "Use subheadings like Data / Procedure / Analysis for easy scanning.",
    phrases: ["Data came from...", "We processed...", "We tested quality by..."]
  },
  {
    id: "results",
    title: "Results",
    promise: "Report what happened without over-interpreting.",
    deliverables: [
      "Introduce the figure or table before showing numbers.",
      "State the result with a clear comparison (baseline vs new method, before vs after).",
      "Add uncertainty info: confidence interval, p-value, effect size, or narrative about strength.",
      "For qualitative work, include short quotes with who/where labels."
    ],
    metrics: "Effect sizes, p-values, saturation counts, visual references",
    reviewerNotes: "Use consistent units and decimal places across figures and text.",
    phrases: ["Compared to...", "We observed...", "Participants noted..."]
  },
  {
    id: "discussion",
    title: "Discussion",
    promise: "Tell readers what the results mean and why they matter.",
    deliverables: [
      "Explain how findings answer each research question or hypothesis.",
      "Compare your findings to earlier studies (agree, extend, or disagree).",
      "List practical steps people can take because of your work.",
      "Be honest about limits and what still needs testing."
    ],
    metrics: "Number of research questions answered, number of specific actions",
    reviewerNotes: "Tie each limitation to a plan (future data, different site, longer horizon).",
    phrases: ["This means that...", "Unlike previous work...", "Practitioners should..."]
  },
  {
    id: "conclusion",
    title: "Conclusion",
    promise: "Finish with a short recap and next steps.",
    deliverables: [
      "1-2 sentences restating the purpose and method.",
      "1-2 sentences highlighting the strongest number or insight again.",
      "1 sentence about how the work can grow (new city, more participants, deeper theory).",
      "1 sentence inviting collaboration or data/code reuse."
    ],
    metrics: "Brevity (150-200 words), clear invitation",
    reviewerNotes: "Do not add new references here; keep it focused on your paper.",
    phrases: ["In summary...", "We recommend...", "Future work will..."]
  },
  {
    id: "supplement",
    title: "Extras & transparency",
    promise: "Show that you can back up every claim.",
    deliverables: [
      "Graphical abstract or flow diagram that links problem ? method ? result.",
      "Data/code availability statement with links or contact info.",
      "Author contribution table (CRediT) plus funding and conflict statements.",
      "Optional: short video or audio abstract (many Q1 journals ask for this)."
    ],
    metrics: "Repository link, DOI, checklist completion",
    reviewerNotes: "If data is confidential, explain how others can request access.",
    phrases: ["Data are available at...", "Code runs via...", "Author X led..."]
  }
];

const dossierBlocks = [
  {
    title: "Highlights & visuals",
    items: [
      "3 bullet highlights using verb + number (e.g., \"Cuts waiting time by 42%\").",
      "Graphical abstract sized to journal instructions.",
      "Table-of-contents image or plain figure that tells the story in one frame."
    ],
    tip: "Finish highlights only after the results are final so numbers are consistent."
  },
  {
    title: "Data, code, and materials",
    items: [
      "README that lists folders, prerequisites, and how to run scripts.",
      "Datasets or transcripts with identifiers removed plus a note about licenses.",
      "Extra materials such as survey forms, interview guides, CAD files, or lab recipes."
    ],
    tip: "If something cannot be shared, state the reason and give a contact email."
  },
  {
    title: "Cover letter",
    items: [
      "Paragraph 1: problem + why the journal audience should care now.",
      "Paragraph 2: summary of method and top-line result.",
      "Paragraph 3: fit with journal scope plus suggested reviewers and conflict list."
    ],
    tip: "Use the editor's name and mirror the journal's tone (formal but friendly)."
  },
  {
    title: "Compliance checklist",
    items: [
      "Ethics approval IDs, consent statements, preregistration links if relevant.",
      "Funding numbers, author contribution table, competing interest statements.",
      "Similarity report, figure permissions, or media releases if required."
    ],
    tip: "Store all proofs (PDFs, screenshots) in one folder to reuse for future submissions."
  }
];

const domainData = {
  experimental: {
    title: "Experimental & natural sciences",
    tagline: "Stress reproducibility, calibration, and safety.",
    dataset: ["Lab notebooks", "Sensor or instrument logs", "Standard reference samples"],
    angle: [
      "Explain how you calibrated instruments and tracked uncertainty.",
      "Share whether another lab has repeated the steps or plans to.",
      "Connect results to known standards (ISO, WHO, ASTM)."
    ],
    impact: [
      "Method improves detection limit by 2×",
      "Protocol cuts reagent cost by 18%",
      "Guideline update adopted by safety board"
    ],
    policy: "Mention biosafety level, waste handling, or open-science mandates."
  },
  computational: {
    title: "Computational & data science",
    tagline: "Balance accuracy with clarity and responsible AI use.",
    dataset: ["Benchmark datasets", "Synthetic data generators", "Compute budget logs"],
    angle: [
      "Compare against strong baselines, ablations, and zero-shot tests.",
      "Share model cards, dataset statements, and fairness checks.",
      "State runtime, hardware needs, and carbon estimates."
    ],
    impact: [
      "Macro-F1 improves by 8 points",
      "Latency drops to 40 ms on CPU",
      "Code released under MIT license"
    ],
    policy: "Refer to NIST, ISO/IEC, or national data governance rules."
  },
  design: {
    title: "Design, architecture, engineering",
    tagline: "Show iteration, user testing, and performance numbers.",
    dataset: ["CAD/BIM files", "User feedback logs", "Lifecycle cost spreadsheets"],
    angle: [
      "Describe prototype versions and what changed after each test.",
      "Link design choices to building codes or ergonomic standards.",
      "Quantify sustainability, safety, or cost savings."
    ],
    impact: [
      "Fabrication time cut in half",
      "User satisfaction jumps from 3.1 to 4.5/5",
      "Lifecycle emissions drop 27%"
    ],
    policy: "Tie recommendations to procurement rules or resilience plans."
  },
  social: {
    title: "Social sciences & humanities",
    tagline: "Highlight context, voices, and ethical care.",
    dataset: ["Interview transcripts", "Archives", "Community surveys"],
    angle: [
      "Explain positionality and how you earned trust.",
      "Describe coding steps, triangulation, and audit trails.",
      "Link insights to policies, curricula, or cultural debates."
    ],
    impact: [
      "Policy brief cited in parliament",
      "Community uses toolkit within 6 months",
      "Heritage archive digitized for public use"
    ],
    policy: "Point to SDGs, UNESCO priorities, or national policy windows."
  }
};

const methodBlocks = [
  {
    title: "Mixed methods",
    tactics: [
      "Show how numbers and stories speak to each other (diagram or table).",
      "Explain when each part happens: quantitative first, qualitative first, or parallel.",
      "Note who interpreted the combined insights to avoid bias."
    ]
  },
  {
    title: "Transparent computing",
    tactics: [
      "Share scripts via GitHub/Zenodo and list required packages.",
      "Add flowcharts or pseudocode for new algorithms.",
      "Report runtime, memory, and energy cost."
    ]
  },
  {
    title: "Design-build cycles",
    tactics: [
      "List the design principles, prototype versions, and tests run on each.",
      "Explain how user or stakeholder feedback changed the next build.",
      "Provide acceptance criteria (strength, comfort, aesthetics, budget)."
    ]
  },
  {
    title: "Evidence synthesis",
    tactics: [
      "Describe search strings, inclusion rules, and screening counts.",
      "Show how you judged study quality or risk of bias.",
      "Translate pooled findings into simple recommendations."
    ]
  }
];

const reviewStrategies = [
  {
    title: "Desk check",
    summary: "Editors skim the abstract, cover letter, and checklists in minutes.",
    steps: [
      "Mention journal fit in the cover letter and abstract.",
      "Keep similarity index below the journal limit (usually &lt;20%).",
      "Double-check figure labels, references, and template formatting."
    ],
    tip: "If targeting a special issue, name it in sentence one of the cover letter."
  },
  {
    title: "Peer review",
    summary: "Reviewers test novelty, method strength, clarity, and impact.",
    steps: [
      "Predict the top 5 questions they will ask and answer them proactively in the text.",
      "Point to data/code links whenever you claim reproducibility.",
      "Stay polite and evidence-focused in all responses."
    ],
    tip: "Thank reviewers for useful critiques even when you disagree."
  },
  {
    title: "Revision",
    summary: "Most Q1 papers need at least one major revision.",
    steps: [
      "Copy each reviewer comment into a table and summarize your change beside it.",
      "Highlight new or updated text with page/line numbers.",
      "If you cannot do a request, explain why and offer another piece of evidence."
    ],
    tip: "Open the response letter with a short overview of the main improvements."
  },
  {
    title: "After acceptance",
    summary: "Production moves fast, so prepare assets early.",
    steps: [
      "Have high-resolution figures ready (TIFF/SVG as required).",
      "Confirm author order, ORCID, funding numbers before proofs arrive.",
      "Draft outreach copy (tweet, LinkedIn post, press note) respecting embargo rules."
    ],
    tip: "Save accepted files in a \"camera ready\" folder for future reference."
  }
];

const qualityGates = [
  { title: "Problem + gap clear", detail: "Someone outside your field can explain why the work matters." },
  { title: "Method repeatable", detail: "All parameters, scripts, or protocols documented and stored." },
  { title: "Results supported", detail: "Claims match figures/tables with numbers or quotes." },
  { title: "Impact explained", detail: "Theory, practice, and society paragraphs written." },
  { title: "Ethics complete", detail: "Approvals, consent, conflicts, and funding statements included." },
  { title: "Submission kit ready", detail: "Cover letter, highlights, graphical abstract, checklist, response matrix exported." }
];

const promptBlocks = [
  {
    title: "Problem hook",
    prompt: "In {place/field}, {trusted source} reports {statistic}. If nothing changes, {stakeholder} will face {risk/consequence}."
  },
  {
    title: "Gap statement",
    prompt: "Earlier studies focused on {approach}, but they did not answer {missing question} because {reason}."
  },
  {
    title: "Research objective",
    prompt: "We aim to {action} by using {data/method}. This will test whether {expected outcome}."
  },
  {
    title: "Method snapshot",
    prompt: "Evidence comes from {dataset/participants/sites}. We processed it with {tool/procedure} and checked quality by {validation}."
  },
  {
    title: "Result sentence",
    prompt: "Compared with {baseline}, our approach changed {metric/experience} by {value}, which means {interpretation}."
  },
  {
    title: "Practical implication",
    prompt: "For {user/policy group}, the findings suggest {action} so that {benefit}."
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
    const eyebrow = createEl("p", "eyebrow", `Step ${index + 1}`);
    const title = createEl("h3", null, section.title);
    const promise = createEl("p", null, section.promise);

    const deliverList = createEl("ul");
    section.deliverables.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      deliverList.appendChild(li);
    });

    const toggle = createEl("button", null, "Show details");
    toggle.setAttribute("aria-expanded", "false");

    const panel = createEl("div", "card__panel");
    panel.innerHTML = `
      <p><strong>What reviewers track:</strong> ${section.metrics}</p>
      <p><strong>Reminder:</strong> ${section.reviewerNotes}</p>
      <p><strong>Helpful phrases:</strong> ${section.phrases.join(", ")}</p>
    `;

    toggle.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Hide details" : "Show details";
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
        <p class="eyebrow">Evidence to highlight</p>
        <ul>${domain.dataset.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="eyebrow">Angles to stress</p>
        <ul>${domain.angle.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="eyebrow">Sample impact lines</p>
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


