window.__applyErNewsContentEn = function (ctx) {
  if (!ctx) return;
  const f500En = [
    { lastEventEn: "2026 Q3–Q4 global RIF hits sales and support", teamsEn: "Sales · Customer Success · some consulting", apacNoteEn: "IN Bangalore and SG regional roles affected; Azure / Security still hiring", severanceEn: "Notice (contract/policy) + severance weeks (often 2–3 weeks per year, capped) + ESOP/RSU per grant", extrasEn: "Outplacement; immigration wrap-up (EP/482 holders)", riskEn: "Mutual separation common; documentation even without collective rules", sourceEn: "Earnings calls + employee community reports" },
    { lastEventEn: "2026 AWS/Retail stack adjustments continue", teamsEn: "AWS legacy support · Retail OPS · some corporate", apacNoteEn: "Larger scale in IN; AU FC network consolidation", severanceEn: "Statutory (IN gratuity/notice) + ex-gratia; SG/AU often global band", extrasEn: "Separation policy (US template reference, localized)", riskEn: "IN ex-gratia negotiation common; AU genuine redundancy", sourceEn: "Reuters / local press" },
    { lastEventEn: "2026 partial PA hiring freeze", teamsEn: "Parts of Ads, internal tools", apacNoteEn: "Large RIFs in 2023–24; now scattered team-level moves", severanceEn: "Global grid: min 16 weeks + tenure weeks + medical (US template, APAC grid)", extrasEn: "Accelerated vest in some packages", riskEn: "SG wrongful dismissal rare but docs still matter", sourceEn: "2023–24 public reporting carries forward" },
    { lastEventEn: "2026 Reality Labs APAC shrinks again", teamsEn: "Reality Labs · some Infra", severanceEn: "~4 weeks/year + base cushion (US norm); SG CPF cessation", extrasEn: "EP cancellation and tax clearance", riskEn: "Review non-compete consideration", sourceEn: "Trade press" },
    { lastEventEn: "2026 restructuring ~8k globally", teamsEn: "On-prem consulting · legacy support", severanceEn: "German HQ framework + local statutory floor", extrasEn: "Works councils in EU; APAC consultation meetings", riskEn: "AU redundancy consultation timeline", sourceEn: "SAP News Center" },
    { lastEventEn: "2026 delivery reorganisation", teamsEn: "GTS · Consulting", severanceEn: "From ~2 weeks/year + statutory", extrasEn: "Internal transfer before partner offload", riskEn: "PH Labour notice when scale is large", sourceEn: "Public news" },
    { lastEventEn: "2026 capacity strategy ripple", teamsEn: "Manufacturing ecosystem; some SG sales", severanceEn: "Manufacturing separation policy (weeks-based)", extrasEn: "Relocation/retention vs layoff tracks", riskEn: "MY manufacturing layoffs politically sensitive", sourceEn: "Bloomberg / finance media" },
    { lastEventEn: "2026 support trim", teamsEn: "Support · Success (partial)", severanceEn: "US norm ~2 weeks/year + benefits narrative", extrasEn: "Tableau/Mulesoft sub-brand tweaks", riskEn: "AU permanent vs contractor distinction", sourceEn: "Industry reports" },
    { lastEventEn: "2026 GTM optimisation", teamsEn: "Marketing · some sales", severanceEn: "Lump sum + notice", extrasEn: "—", riskEn: "Middle managers have negotiation room", sourceEn: "Finance media" },
    { lastEventEn: "Cyclical PC downturn layoffs", teamsEn: "Print/PC GTM", severanceEn: "Reported ~2–4 weeks/year", extrasEn: "—", riskEn: "Vendor separation spillover risk", sourceEn: "Historic playbook similar" }
  ];
  const notableEn = [
    { lastEventEn: "2025–26 multiple optimization rounds", teamsEn: "Gaming, non-core B2B, duplicate platforms", apacNoteEn: "SG hub in focus; labour ministry rarely intervenes on individual cases", severanceEn: "Often 1–3 months base + annual leave payout; senior sign-on clawback talks", extrasEn: "RSU vest end date; bonus pro-rata disputes", riskEn: "Batch templates trigger comparison complaints", sourceEn: "Reuters / forums (verify)" },
    { lastEventEn: "2026 middle-management consolidation", teamsEn: "Duplicate PM/Eng leaders", severanceEn: "Local statutory + 1–3 months negotiated", extrasEn: "Alibaba-group equity per grant", riskEn: "Cross-border repatriation then re-RIF service years", sourceEn: "SEA tech media" },
    { lastEventEn: "2026 fintech experiment shutdown", teamsEn: "Fintech pilots", severanceEn: "Moderate: ~1–2 months + leave", extrasEn: "Core mobility still hiring", riskEn: "Small-scale individual settlements", sourceEn: "Local press" },
    { lastEventEn: "2026 back-office reorganise", teamsEn: "Non-Shop core; some Trust & Safety", severanceEn: "Rumoured 1–3 months base; strict confidentiality clauses", extrasEn: "Data compliance heavier than non-compete", riskEn: "Foreign EP tax and timeline", sourceEn: "HR community / unverified" },
    { lastEventEn: "2026 Mobile layoffs", teamsEn: "Mobile carrier-related", severanceEn: "Voluntary retirement incentives primary", extrasEn: "JP lawful dismissal bar very high", riskEn: "Avoid unfair dismissal", sourceEn: "Japan business news" },
    { lastEventEn: "2026 logistics automation adjustment", teamsEn: "Fulfillment OPS", severanceEn: "Statutory severance + voluntary top-up split", extrasEn: "Union dialogue affects package", riskEn: "Korean Labour Standards Act strict", sourceEn: "Korea media" },
    { lastEventEn: "2025–26 org 1+6+N aftermath", teamsEn: "Non-core BU; Cloud international", severanceEn: "CN: N+1 reference; SG per MOM", extrasEn: "Long-term incentive vesting", riskEn: "CN labour arbitration common", sourceEn: "Tech press + disclosures" },
    { lastEventEn: "Logistics and retail line optimisation", teamsEn: "Regional ops; some tech", severanceEn: "CN negotiated N–N+1", extrasEn: "—", riskEn: "Group protest risk", sourceEn: "CN finance media" },
    { lastEventEn: "2025–26 small team cuts", teamsEn: "Non-core Japan business", severanceEn: "Voluntary exit preferred; formal dismissal rare", extrasEn: "—", riskEn: "Small case-by-case", sourceEn: "Japan tech news" }
  ];
  const sevEn = [
    { scenarioEn: "RIF / mutual separation", formulaEn: "Unused notice + ~2–3 weeks/year (cap) + unused leave", noticeEn: "Often 1–3 months in contract", equityEn: "RSU per grant; vest stops after exit", confidenceEn: "Policy + community" },
    { scenarioEn: "Genuine redundancy", formulaEn: "FW Act minimum + company ex-gratia (weeks/year)", noticeEn: "1–5 weeks statutory", equityEn: "Per plan", confidenceEn: "Law + policy" },
    { scenarioEn: "Closure / redundancy", formulaEn: "Gratuity (if eligible) + notice pay + 0.5–2 months ex-gratia", noticeEn: "30–90 days", equityEn: "RSU per terms", confidenceEn: "Community + practice" },
    { scenarioEn: "Layoff", formulaEn: "Local grid (global min weeks + tenure)", noticeEn: "Advance notice; possible garden leave", equityEn: "Some acceleration in packages", confidenceEn: "2023–24 public ref" },
    { scenarioEn: "Team elimination", formulaEn: "~4 weeks/year + base cushion", noticeEn: "2–4 weeks+", equityEn: "RSU typically stops", confidenceEn: "Press reports" },
    { scenarioEn: "Restructuring", formulaEn: "Statutory redundancy + negotiated weeks", noticeEn: "After consultation", equityEn: "Rare", confidenceEn: "Company statement" },
    { scenarioEn: "Offshore rationalisation", formulaEn: "Statutory + from ~2 weeks/year", noticeEn: "30 days", equityEn: "—", confidenceEn: "Practice" },
    { scenarioEn: "Support RIF", formulaEn: "Global severance in SGD", noticeEn: "1–2 months", equityEn: "Per grant", confidenceEn: "Industry reports" },
    { scenarioEn: "Multi-round optimization", formulaEn: "1–3 months base + leave encashment", noticeEn: "Immediate – 1 month", equityEn: "Sea RSU ends", confidenceEn: "Press / community" },
    { scenarioEn: "Local entity RIF", formulaEn: "Mass process under job creation law + deal", noticeEn: "Statutory", equityEn: "—", confidenceEn: "Local counsel guides" },
    { scenarioEn: "Management layer cut", formulaEn: "Statutory + 1–2 months", noticeEn: "2–4 weeks", equityEn: "Alibaba-group", confidenceEn: "HR practice" },
    { scenarioEn: "Reorganisation", formulaEn: "Rumoured 1–3 months + bonus pro-rata disputes", noticeEn: "Negotiated", equityEn: "Usually none", confidenceEn: "Low (unofficial)" },
    { scenarioEn: "Project shutdown", formulaEn: "~1–2 months + AL encashment", noticeEn: "2–4 weeks", equityEn: "Few RSU", confidenceEn: "Medium" },
    { scenarioEn: "Voluntary retirement", formulaEn: "Statutory + incentive 3–12 months (varies)", noticeEn: "Negotiated", equityEn: "—", confidenceEn: "Japan media" },
    { scenarioEn: "OPS optimization", formulaEn: "Statutory severance (≥1 yr = 30 days/yr) + voluntary", noticeEn: "Statutory", equityEn: "Options per agreement", confidenceEn: "Law + press" },
    { scenarioEn: "BU shutdown", formulaEn: "N+1 reference (negotiated) + insurance stop", noticeEn: "30 days", equityEn: "Vesting disputes common", confidenceEn: "Many arbitration cases" }
  ];
  const legalEn = [
    { countryEn: "Singapore", pointsEn: [
      { kEn: "Statutory severance", vEn: "No universal statutory formula; contract and MOM guidance (non-mandatory formula)" },
      { kEn: "Notice", vEn: "Employment Act: 1 day–4 weeks by service (citizens/PR 3+ months)" },
      { kEn: "EP holders", vEn: "Pass cancelled after termination; ICA/MOM timelines" },
      { kEn: "Practice", vEn: "MNCs often pay ~2 weeks–1 month/year ex-gratia" }
    ]},
    { countryEn: "Australia", pointsEn: [
      { kEn: "Genuine redundancy", vEn: "Fair Work Act: consultation + genuine redundancy test" },
      { kEn: "Minimum severance", vEn: "NES: up to 16 weeks by service (small employer exceptions)" },
      { kEn: "Notice", vEn: "1–5 weeks by service" },
      { kEn: "Practice", vEn: "Tech often N+1 month above NES" }
    ]},
    { countryEn: "Mainland China", pointsEn: [
      { kEn: "Economic compensation", vEn: "N = one month per year; cap 12 years × 3× average wage" },
      { kEn: "Unlawful termination", vEn: "2N penalty risk" },
      { kEn: "Mass layoff", vEn: "20+ or 10%+ headcount triggers process and filing" },
      { kEn: "Practice", vEn: "Tech often negotiates N, N+1, half-year packages" }
    ]},
    { countryEn: "Japan", pointsEn: [
      { kEn: "Dismissal", vEn: "Four-factor test; formal dismissal rare" },
      { kEn: "Voluntary retirement", vEn: "Main route + incentives" },
      { kEn: "Notice", vEn: "30 days or pay in lieu" },
      { kEn: "Practice", vEn: "Retirement allowance rules + negotiated incentives" }
    ]},
    { countryEn: "Korea", pointsEn: [
      { kEn: "Severance pay", vEn: "≥1 year: 30 days average wage per year" },
      { kEn: "Dismissal limits", vEn: "Just cause + written process; collective sensitivity" },
      { kEn: "Notice", vEn: "30 days" },
      { kEn: "Practice", vEn: "Voluntary severance on top of statutory" }
    ]},
    { countryEn: "India", pointsEn: [
      { kEn: "Gratuity", vEn: "≥5 years: 15 days wages per year (Payment of Gratuity Act)" },
      { kEn: "Notice", vEn: "Contract / shop & establishment rules" },
      { kEn: "Practice", vEn: "IT ex-gratia negotiation common" },
      { kEn: "Risk", vEn: "Industrial disputes vary by employer category" }
    ]},
    { countryEn: "Malaysia / Indonesia", pointsEn: [
      { kEn: "MY", vEn: "Employment Act termination pay tiers by service (up to ~19.5 days/year)" },
      { kEn: "ID", vEn: "Job Creation Law: mass termination needs twin options (redeploy/deal)" },
      { kEn: "Practice", vEn: "Regional tech hubs volatile" },
      { kEn: "Work pass", vEn: "Foreign permits must align with termination" }
    ]}
  ];

  (ctx.F500_PROFILES || []).forEach((p, i) => Object.assign(p, f500En[i] || {}));
  (ctx.NOTABLE_PROFILES || []).forEach((p, i) => Object.assign(p, notableEn[i] || {}));
  (ctx.SEVERANCE_TABLE || []).forEach((r, i) => Object.assign(r, sevEn[i] || {}));
  (ctx.LEGAL_BASELINE || []).forEach((l, i) => {
    const e = legalEn[i] || {};
    if (e.countryEn) l.countryEn = e.countryEn;
    if (e.pointsEn && l.points) e.pointsEn.forEach((pt, j) => Object.assign(l.points[j], pt));
  });
};