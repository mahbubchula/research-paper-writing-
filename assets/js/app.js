const timelineSteps = [
  {
    phase: "01",
    title: "Problem framing & scoping",
    focus: "Anchor the societal need and quantify the baseline pain point.",
    highlights: [
      "Define the city, corridor, or network boundary plus study horizon.",
      "Summarize gaps from flagship journals and industry white papers.",
      "State the measurable objective: delay reduction, CO2 savings, resilience index, etc."
    ]
  },
  {
    phase: "02",
    title: "Evidence architecture",
    focus: "Design the data stack and modelling workflow reviewers can reproduce.",
    highlights: [
      "Describe sensing layers (loop detectors, probe data, satellite, crowdsourced).",
      "Explain pre-processing, uncertainty handling, and ethics approvals.",
      "Map each research question to a model or experiment."
    ]
  },
  {
    phase: "03",
    title: "Model building & verification",
    focus: "Show both performance and interpretability of your analytical engine.",
    highlights: [
      "Report baselines, ablations, and statistical significance of gains.",
      "Discuss computational cost, scalability, and deployment constraints.",
      "Triangulate with field validation or policy back-testing."
    ]
  },
  {
    phase: "04",
    title: "Insight translation",
    focus: "Turn numbers into engineering meaning and policy-ready narratives.",
    highlights: [
      "Relate findings to standards (AASHTO, PIARC, IEC) or national targets.",
      "Quantify net benefits, resilience dividends, or equity impacts.",
      "Provide a decision framework stakeholders could act on next quarter."
    ]
  },
  {
    phase: "05",
    title: "Submission readiness",
    focus: "Package the manuscript, artifacts, and confidence statements.",
    highlights: [
      "Craft cover letter + highlight statements tied to journal aims.",
      "List datasets, code repository, and reproducibility checklist.",
      "Prepare response matrix template for future revisions."
    ]
  }
];

const foundationSignals = [
  {
    title: "Systems impact first",
    detail:
      "Within the first 500 words, quantify the infrastructure, emissions, safety, or accessibility challenge. Q1 reviewers reward manuscripts that translate methods into megawatt-hours saved or hours gained."
  },
  {
    title: "Transparent methods",
    detail:
      "Outline sensing sources, feature governance, and calibration routines. Include both accuracy/error plus stability under edge cases (peak traffic, typhoon, rapid demand spikes)."
  },
  {
    title: "Responsible intelligence",
    detail:
      "For AI or automation topics, highlight equity safeguards, data privacy guardrails, and human-in-the-loop checkpoints. Mention compliance with local transport authorities."
  }
];

const blueprintSections = [
  {
    id: "title",
    title: "Title & Abstract",
    promise: "Signal novelty + engineering contribution in 25 words and summarize the delta over current practice.",
    deliverables: [
      "Title structure: Context | Lever | Outcome (e.g., \"Self-learning signal control for Bangkok arterials cuts delay by 24%\").",
      "Abstract paragraphs: motivation, method (with numbers), core result, policy relevance.",
      "Keywords: blend methodological (meta-heuristic, Bayesian) and domain (BRT, TOD)."
    ],
    metrics: "? travel time, ? GHG, reliability index, deployment-ready TRL score",
    reviewerNotes: "Include 1–2 numbers from experiments. Reviewers skip abstracts without quantified gains.",
    phrases: ["This study quantifies…", "Compared with field operations, the proposed model…", "The findings guide …"]
  },
  {
    id: "intro",
    title: "Introduction & Motivation",
    promise: "Establish urgency, research gap, and contribution roadmap in under three pages.",
    deliverables: [
      "Para 1: Macro trend + policy targets (Vision Zero, COP28, SDG 11).",
      "Para 2: Tactical evidence (city stats, failure rates, stakeholder pain).",
      "Para 3: Literature synthesis table or visual gap statement.",
      "Para 4: Contribution bullets (method, dataset, decision support)."
    ],
    metrics: "Urban demand forecasts, freight cost structure, resilience scores",
    reviewerNotes: "Transport journals expect an explicit \"Research Gap\" paragraph before contributions.",
    phrases: ["Yet existing deployments fail to…", "This paper contributes by…", "We posit that…"]
  },
  {
    id: "lit",
    title: "Literature & Theory",
    promise: "Curate the intellectual lineage and show why your approach advances it.",
    deliverables: [
      "Cluster prior work by methodology, geography, or dataset generation.",
      "Discuss trade-offs reviewers care about (scalability vs fidelity).",
      "Bridge to theory (network equilibrium, life-cycle cost minimization, socio-technical transitions)."
    ],
    metrics: "Complexity order, energy penalty, inference latency",
    reviewerNotes: "Cite both civil engineering classics and AI/CS if using neural methods—demonstrates interdisciplinary command.",
    phrases: ["Extending the principles of…", "Contrary to scenario-based studies…"]
  },
  {
    id: "method",
    title: "Methodology & Data",
    promise: "Expose the pipeline end-to-end with reproducibility baked in.",
    deliverables: [
      "System diagram: sensing ? feature engineering ? model ? decision layer.",
      "Data ethics: consent, anonymization, bias audits, or synthetic augmentation.",
      "Hyperparameters + calibration, plus sensitivity to data gaps.",
      "Validation strategy: k-fold, blocked CV, or out-of-city transfer tests."
    ],
    metrics: "MAE/MAPE, generalized cost, resilience index, computational budget",
    reviewerNotes: "Mention software stack (e.g., SUMO+Python) and share GitHub/Zenodo links.",
    phrases: ["Data were curated from…", "We implemented a hybrid solver combining…", "Robustness checks include…"]
  },
  {
    id: "results",
    title: "Results & Discussion",
    promise: "Tie quantitative gains to engineering implications and sensitivity insights.",
    deliverables: [
      "Dashboard of metrics vs baselines across multiple demand regimes.",
      "Scenario analysis (peak/off-peak, extreme weather, policy toggles).",
      "Interpretability: SHAP, elasticity, or dual variables to explain drivers.",
      "Discussion paragraphs answering \"So what?\" for planners, operators, equity leads."
    ],
    metrics: "Benefit–cost ratio, emission avoided, accessibility uplift",
    reviewerNotes: "Explicitly mention statistical tests (Wilcoxon, ANOVA) and confidence intervals.",
    phrases: ["Operationally, this means…", "Under the typhoon stress test we observe…"]
  },
  {
    id: "conclusion",
    title: "Conclusion & Next Steps",
    promise: "Revisit the promise, declare deployment readiness, and set a future research agenda.",
    deliverables: [
      "Summary paragraph linking back to objectives (no new numbers).",
      "Implementation readiness level and partnership invitations.",
      "Limitations (data drift, generalizability, governance).",
      "Roadmap for scaling or integrating with policy instruments."
    ],
    metrics: "Technology readiness, policy adoption milestones",
    reviewerNotes: "Reviewers appreciate explicit \"Data & Code Availability\" statements in this section.",
    phrases: ["Future work will extend…", "Deployment requires…"]
  }
];

const domainData = {
  transportation: {
    title: "Transportation Infrastructure",
    tagline: "Focus on network reliability, safety, and throughput across multi-modal corridors.",
    dataset: ["Probe vehicle speeds (floating car, GPS traces)", "Signal phase and timing archives", "Freight manifests / AIS"],
    angle: ["Model resilience under compound disruptions (flood + demand spike)", "Quantify accessibility for vulnerable users", "Translate benefits to passenger-km served"],
    impact: ["Queue spillback reduced 31% on Sukhumvit arterial", "Incident clearance lags shortened by 12 min", "Reliability index improved from 0.74 to 0.89"],
    policy: "Tie recommendations to transport master plans or Nationally Determined Contributions (NDCs)."
  },
  sustainability: {
    title: "Sustainable Systems",
    tagline: "Frame work around lifecycle emissions, circularity, and community benefits.",
    dataset: ["LCA inventories & ecoinvent", "Smart meter / grid interaction", "Transit-oriented development KPIs"],
    angle: ["Show cradle-to-grave outcomes for materials and operations", "Discuss co-benefits: heat mitigation, biodiversity corridors", "Use social cost of carbon + cost recovery"],
    impact: ["Net-zero bus depot roadmap validated", "44 kt CO2e avoided under electrified freight scenario", "Recycling index +18 points for asphalt mixes"],
    policy: "Reference Green Deal, COP28, or Thailand BCG economy targets to ground narratives."
  },
  ai: {
    title: "AI & Decision Intelligence",
    tagline: "Emphasize data governance, generalization, and human-aligned deployment.",
    dataset: ["Federated perception datasets", "Synthetic agents / digital twins", "Edge-compute logs"],
    angle: ["Highlight interpretability strategies", "Report robustness to unseen cities", "Explain latency + hardware footprint"],
    impact: ["Reinforcement learning policy generalizes to 3 ASEAN capitals", "False-positive rate dropped 40% after fairness tuning", "Edge inference at 40ms enables field deployment"],
    policy: "Map outputs to AI governance frameworks (IEEE 7000, ISO/IEC 42001)."
  },
  mobility: {
    title: "Human-centered Mobility",
    tagline: "Tie analytics to lived experience, accessibility, and inclusive design.",
    dataset: ["Household travel surveys", "Crowdsourced perception data", "First/last-mile service logs"],
    angle: ["Segment personas (students, logistics riders, seniors)", "Use participatory sensing to validate predictions", "Show affordability + equity metrics"],
    impact: ["Low-income commuters gain 22 min/day", "55% safer pedestrian crossings along pilot corridor", "Paratransit revenue stabilized despite MaaS"],
    policy: "Connect to Vision Zero, TOD compacts, or inclusive mobility charters."
  }
};

const methodBlocks = [
  {
    title: "Simulation × Field sensing",
    tactics: [
      "Fuse microsimulation (SUMO/Aimsun) with IoT/loop detectors to calibrate demand.",
      "Discuss how calibration error propagates to KPI uncertainty.",
      "Mention open-source scripts or Docker images for reproducibility."
    ]
  },
  {
    title: "Causal inference × Policy lab",
    tactics: [
      "Frame interventions as quasi-experiments (DiD, synthetic control).",
      "Include robustness checks for confounders like fuel price shocks.",
      "Translate coefficients into policy thresholds (fare subsidies, congestion charge)."
    ]
  },
  {
    title: "Hybrid AI × Optimization",
    tactics: [
      "Show how ML prediction feeds into mathematical programs or heuristics.",
      "Explain coupling constraints and warm-start strategies.",
      "Report both prediction accuracy and optimization objective deltas."
    ]
  },
  {
    title: "Lifecycle × Multi-criteria",
    tactics: [
      "Integrate LCA indicators with stakeholder weights via TOPSIS/AHP.",
      "Discuss sensitivity to stakeholder weights and scenario definitions.",
      "Provide visualization (radar, dominance matrix) to support decisions."
    ]
  }
];

const qualityGates = [
  {
    title: "Contribution statement",
    detail: "Three bullet format delivered, aligned with journal scope."
  },
  {
    title: "Data transparency",
    detail: "Data availability / ethics paragraph finalized with DOIs."
  },
  {
    title: "Method reproducibility",
    detail: "Pseudo-code + hyperparameters archived in repo."
  },
  {
    title: "Result interpretation",
    detail: "All figures include narrative + policy translation sentences."
  },
  {
    title: "Language polish",
    detail: "Passive voice trimmed, tense consistent, Grammarly/Word tune pass done."
  },
  {
    title: "Submission pack",
    detail: "Cover letter, highlights, graphical abstract, checklist exported as PDF."
  }
];

const promptBlocks = [
  {
    title: "Problem hook",
    prompt:
      "Within {city/sector}, {statistic} shows {pain point}. Without {innovation lever}, {stakeholder} faces {quantified loss}."
  },
  {
    title: "Gap articulation",
    prompt:
      "Existing {method/standard} optimizes {metric} but ignores {constraint}. This creates {risk} for {context}."
  },
  {
    title: "Method overview",
    prompt:
      "We integrate {data source} with {model} to {action}. Key stages: {stage 1}, {stage 2}, {stage 3}."
  },
  {
    title: "Result storyline",
    prompt:
      "Compared with {baseline}, our approach {verb} {metric} by {value} under {scenario}. This enables {decision}."
  },
  {
    title: "Policy translation",
    prompt:
      "For {agency}, the findings imply {action} that unlocks {impact metric} within {time horizon}."
  },
  {
    title: "Future work",
    prompt:
      "To generalize, we will {extension} using {dataset/partner}, targeting {new objective}."
  }
];

const blueprintContainer = document.getElementById("blueprint-grid");
const timelineContainer = document.getElementById("timeline");
const foundationContainer = document.getElementById("foundations-grid");
const domainButtons = document.getElementById("domain-buttons");
const domainDisplay = document.getElementById("domain-display");
const methodGrid = document.getElementById("method-grid");
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
        <p class="eyebrow">Datasets / evidence</p>
        <ul>${domain.dataset.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="eyebrow">Angles reviewers applaud</p>
        <ul>${domain.angle.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="eyebrow">Impact statements</p>
        <ul>${domain.impact.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
    <p><strong>Policy hook:</strong> ${domain.policy}</p>
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
renderDomains();
renderMethodLab();
renderQualityList();
renderPrompts();
