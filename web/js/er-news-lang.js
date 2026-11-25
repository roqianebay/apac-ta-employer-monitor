(function (global) {
  const KEY = "apac-er-news-lang";

  function L(zh, en) {
    return { zh, en };
  }

  const UI = {
    pageTitle: L("APAC ER News Update", "APAC ER News Update"),
    subtitle: L(
      "亚太员工关系 · 裁员与组织优化 · 补偿金方案 · 500 强外企 & 知名企业追踪",
      "APAC employee relations · layoffs & restructuring · severance · F500 & notable employers"
    ),
    live: L("ER 情报", "ER intel"),
    updated: L("更新", "Updated"),
    intro: L(
      "<strong>数据从哪来？</strong>看板内容<strong>不是自动爬虫</strong>，而是由 ER 场景整理的<strong>人工索引</strong>： Reuters / Bloomberg / 公司 IR 新闻稿、各国劳工部门官网、Fair Work / MOM 等公开指引。有公开报道时，<strong>来源链接写在正文句末</strong>（不再单独挂一长串外链）。补偿金额为<strong>报道归纳或政策框架示意</strong>，非雇主官方承诺；个案请以合同与解除协议为准。",
      "<strong>Sources:</strong> Curated <strong>manual index</strong> (not a live crawler): Reuters / Bloomberg / company IR, labour ministry sites, Fair Work / MOM guidance. Where a solid public URL exists, <strong>one inline link sits in the item text</strong> — no separate link blocks. Severance figures are <strong>illustrative</strong>; check contracts for live cases."
    ),
    tierF500: L("500强外企", "F500"),
    tierNotable: L("其他知名", "Notable"),
    legendLayoff: L("裁员", "Layoff"),
    legendRestructure: L("架构优化", "Restructure"),
    legendSeverance: L("补偿方案", "Severance"),
    legendFreeze: L("招聘冻结", "Hiring freeze"),
    searchPh: L("搜索公司、市场、补偿、团队...", "Search company, market, severance, team…"),
    filterMarket: L("全部市场", "All markets"),
    filterTier: L("全部企业类型", "All employer types"),
    filterTierF500: L("500 强外企", "Fortune 500 MNCs"),
    filterTierNotable: L("其他知名企业", "Other notable employers"),
    filterCategory: L("全部事件类型", "All event types"),
    catLayoff: L("裁员", "Layoff"),
    catRestructure: L("团队/架构优化", "Team / restructure"),
    catFreeze: L("招聘冻结", "Hiring freeze"),
    catClosure: L("办公室/业务收缩", "Office / business contraction"),
    catSeverance: L("补偿政策更新", "Severance policy update"),
    tabOverview: L("动态总览", "Overview"),
    tabF500: L("500 强外企", "F500"),
    tabNotable: L("其他知名企业", "Notable"),
    tabSeverance: L("补偿金对照表", "Severance table"),
    tabLegal: L("法定底线", "Legal floor"),
    tabIndex: L("来源索引", "Source index"),
    latestNews: L("最新 ER 相关动态", "Latest ER updates"),
    badgeEr: L("裁员 · 优化 · 补偿", "Layoffs · restructure · severance"),
    erFocus: L("APAC 优化潮 — ER 关注要点", "APAC restructuring — ER focus"),
    erFocusBody: L(
      "<p style=\"margin-bottom: 0.75rem\"><strong style=\"color:var(--text)\">500 强外企：</strong>多采用全球 RIF playbook — 通知期 + 法定谷底线 + 额外 severance package（多按年限阶梯）。SG/AU 外包与 hub 职能易波动；IN 以 performance / stack rank 与 site consolidation 为主。</p><p style=\"margin-bottom: 0.75rem\"><strong style=\"color:var(--text)\">科技/电商平台：</strong>业务线关停 + 中层 flatten 常见；核对<strong style=\"color:var(--accent-light)\">股权 vest、年度奖金 pro-rata、未休年假</strong>是否纳入结算。</p><p><strong style=\"color:var(--text)\">实操清单：</strong>解除协议模板、集体咨询（AU/欧资）、社保公积金停缴时点、Work Pass 注销与 30 天离境宽限期（SG）、竞业与 confidentiality 对价。</p>",
      "<p style=\"margin-bottom:0.75rem\"><strong style=\"color:var(--text)\">F500:</strong> Global RIF playbook — notice, statutory floor and tenure-based top-up. SG/AU hubs volatile; IN stack-rank and consolidation.</p><p style=\"margin-bottom:0.75rem\"><strong style=\"color:var(--text)\">Tech / marketplaces:</strong> Line shutdowns and flattening; verify <strong style=\"color:var(--accent-light)\">equity vest, bonus pro-rata and unused leave</strong>.</p><p><strong style=\"color:var(--text)\">Checklist:</strong> Templates, consultation (AU/EU), insurance stop, work pass (SG), non-compete.</p>"
    ),
    scale: L("规模", "Scale"),
    sevHint: L("补偿线索", "Severance hint"),
    statLayoffs: L("裁员/优化事件", "Layoff / restructure events"),
    statSample: L("样本库", "Sample items"),
    statF500: L("500 强外企", "F500"),
    statProfiles: L("档案", "Profiles"),
    statNotable: L("其他知名企业", "Notable"),
    statSev: L("补偿方案条目", "Severance rows"),
    statSevSub: L("跨市场对照 · 含链接", "Cross-market · linked"),
    statLegal: L("法定市场摘要", "Legal market briefs"),
    statLegalSub: L("APAC ER 底线", "APAC ER floors"),
    sourceInText: L("来源", "Source"),
    readMore: L("原文 / 搜索链接", "Sources / search"),
    readExt: L("延伸报道 / 官方", "Further reports / official"),
    readLinks: L("链接", "Links"),
    readOfficial: L("官方法规 / 指引", "Official law / guidance"),
    kLastEvent: L("最近事件", "Latest event"),
    kTeams: L("涉及团队", "Teams"),
    kApac: L("APAC 要点", "APAC notes"),
    kExtras: L("附加支持", "Extras"),
    kRisk: L("ER 风险", "ER risk"),
    kSource: L("摘要来源", "Source summary"),
    sevBlock: L("补偿 / 遣散框架", "Severance framework"),
    hubIndex: L("APAC People Policy Dictionary", "APAC People Policy Dictionary"),
    hubLabor: L("流程与劳动法", "Process & labor law"),
    hubTalent: L("Talent Employer Monitor", "Talent Employer Monitor"),
    hubGov: L("政府政策 Monitor", "Gov policy monitor"),
    hubBenefits: L("法定福利", "Statutory benefits"),
    searchRelated: L("搜索相关报道", "Search related"),
    searchSite: L("站内搜索", "Site search"),
    searchMarket: L("搜索", "Search"),
    footer1: L(
      "APAC ER News Update · 仅供 HR / ER 内部参考 · 不构成法律意见",
      "APAC ER News Update · HR/ER internal reference only · not legal advice"
    ),
    footer2: L(
      "建议核实来源：公司 8-K / 投资者新闻稿、各国劳工部门指引、Reuters / Bloomberg、当地雇主协会、解除协议范本与 precedent cases",
      "Verify: company 8-K/IR, labour ministry guidance, Reuters/Bloomberg, employer bodies, settlement precedents"
    ),
    sevPanelTitle: L("补偿金 / 遣散方案对照（Senior · Manager 层级 · 示意）", "Severance comparison (Senior / Manager · illustrative)"),
    sevPanelBadge: L("含法定 + 公司额外", "Statutory + voluntary"),
    indexPanelTitle: L("全部外链一览（按栏目）", "All outbound links (by section)"),
    indexMethodHtml: L(
      "<h2>内容如何索引？</h2><ul><li><strong>动态总览</strong>：Reuters / Bloomberg / 公司新闻稿整理的 ER 摘要；列表日期为<strong>栏目归档月</strong>。</li><li><strong>公司档案 & 补偿表</strong>：公开裁员报道 + 法定底线归纳；补偿数字为<strong>报道/惯例示意</strong>。</li><li><strong>法定底线</strong>：政府机关公开网页。</li><li><strong>非自动爬虫</strong>：人工维护；可后续接入 RSS / GitHub Actions。</li></ul>",
      "<h2>How is content indexed?</h2><ul><li><strong>Overview:</strong> ER summaries from Reuters/Bloomberg/IR; list dates are <strong>archive months</strong>.</li><li><strong>Profiles & severance table:</strong> public layoff reports + legal floors; figures are <strong>illustrative</strong>.</li><li><strong>Legal floor:</strong> official government pages.</li><li><strong>Not a live crawler:</strong> manually curated; RSS/Actions possible later.</li></ul>"
    ),
    indexNewsHead: L("按动态归类的外链", "Links by news item"),
    indexLegalHead: L("官方法规汇总", "Official law links"),
    srcDefault: L("原文 / 搜索链接", "Sources / search")
  };

  const MARKET_OPTS_EN = {
    SG: "Singapore", AU: "Australia", JP: "Japan", KR: "Korea", CN: "Mainland China",
    TW: "Taiwan", HK: "Hong Kong", IN: "India", MY: "Malaysia", ID: "Indonesia"
  };

  const MARKET_EN = {
    SG: "Singapore", AU: "Australia", JP: "Japan", KR: "Korea", CN: "China", TW: "Taiwan", HK: "Hong Kong",
    IN: "India", MY: "Malaysia", ID: "Indonesia", VN: "Vietnam", PH: "Philippines"
  };

  const TAG_ZH = {
    layoff: "裁员", restructure: "优化", severance: "补偿", freeze: "冻结",
    closure: "收缩", f500: "500强", notable: "知名", scale: "市场"
  };

  const state = { lang: localStorage.getItem(KEY) === "en" ? "en" : "zh" };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return v[state.lang] || v.zh || v.en || "";
    return v == null ? "" : String(v);
  }

  function itemField(item, key) {
    const enKey = key + "En";
    if (state.lang === "en" && item[enKey]) return item[enKey];
    return item[key];
  }

  function pointField(p, key) {
    return itemField(p, key);
  }

  function publisherLabel(pub) {
    if (state.lang !== "en") return pub;
    const m = { "官方": "Official", "法规": "Law", "Google News": "Google News", "Reuters": "Reuters" };
    return m[pub] || pub;
  }

  function marketName(code) {
    if (state.lang === "en") return MARKET_EN[code] || code;
    return global.MARKET_NAMES && global.MARKET_NAMES[code] ? global.MARKET_NAMES[code] : code;
  }

  function tagLabel(tag) {
    if (state.lang === "en") return tag;
    return TAG_ZH[tag] || tag;
  }

  function setText(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function applyChrome() {
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
    document.title = t(UI.pageTitle);
    setText("ui-subtitle", t(UI.subtitle));
    setText("ui-live", t(UI.live));
    setText("ui-intro", t(UI.intro));
    setText("ui-legend-f500", t(UI.tierF500));
    setText("ui-legend-notable", t(UI.tierNotable));
    setText("ui-legend-layoff", t(UI.legendLayoff));
    setText("ui-legend-restructure", t(UI.legendRestructure));
    setText("ui-legend-severance", t(UI.legendSeverance));
    setText("ui-legend-freeze", t(UI.legendFreeze));
    const search = document.getElementById("searchInput");
    if (search) search.placeholder = t(UI.searchPh);
    ["ui-tab-overview", "ui-tab-f500", "ui-tab-notable", "ui-tab-severance", "ui-tab-legal", "ui-tab-index"].forEach((id, i) => {
      const keys = [UI.tabOverview, UI.tabF500, UI.tabNotable, UI.tabSeverance, UI.tabLegal, UI.tabIndex];
      setText(id, t(keys[i]));
    });
    setText("ui-latest-news", t(UI.latestNews));
    setText("ui-badge-er", t(UI.badgeEr));
    setText("ui-er-focus", t(UI.erFocus));
    setText("ui-er-focus-body", t(UI.erFocusBody));
    document.querySelectorAll("#lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });
    const cf = document.getElementById("countryFilter");
    if (cf && cf.options[0]) cf.options[0].textContent = t(UI.filterMarket);
    const tf = document.getElementById("tierFilter");
    if (tf) {
      [UI.filterTier, UI.filterTierF500, UI.filterTierNotable].forEach((lab, i) => {
        if (tf.options[i]) tf.options[i].textContent = t(lab);
      });
    }
    const cat = document.getElementById("categoryFilter");
    if (cat) {
      [UI.filterCategory, UI.catLayoff, UI.catRestructure, UI.catFreeze, UI.catClosure, UI.catSeverance].forEach((lab, i) => {
        if (cat.options[i]) cat.options[i].textContent = t(lab);
      });
    }
    setText("ui-footer-1", t(UI.footer1));
    setText("ui-footer-2", t(UI.footer2));
    setText("ui-hub-index", t(UI.hubIndex));
    setText("ui-hub-labor", t(UI.hubLabor));
    setText("ui-hub-talent", t(UI.hubTalent));
    setText("ui-hub-gov", t(UI.hubGov));
    const hubBen = document.getElementById("ui-hub-benefits");
    if (hubBen) setText("ui-hub-benefits", t(UI.hubBenefits));
    setText("ui-sev-title", t(UI.sevPanelTitle));
    setText("ui-sev-badge", t(UI.sevPanelBadge));
    setText("ui-index-title", t(UI.indexPanelTitle));
    const thSev = ["thSev0", "thSev1", "thSev2", "thSev3", "thSev4", "thSev5", "thSev6", "thSev7", "thSev8"];
    const sevHeadZh = ["企业类型", "公司", "主要市场", "优化情形", "补偿框架（示意）", "通知期", "股权/奖金", "信息可信度", "参考报道 / 法规"];
    const sevHeadEn = ["Tier", "Company", "Market", "Scenario", "Package (illustrative)", "Notice", "Equity/bonus", "Confidence", "Sources"];
    thSev.forEach((id, i) => setText(id, state.lang === "en" ? sevHeadEn[i] : sevHeadZh[i]));
    const cf2 = document.getElementById("countryFilter");
    if (cf2) {
      [...cf2.options].forEach((o, i) => {
        if (i === 0) o.textContent = t(UI.filterMarket);
        else if (o.value && MARKET_OPTS_EN[o.value]) {
          o.textContent = state.lang === "en" ? MARKET_OPTS_EN[o.value] : o.dataset.zhLabel || o.textContent;
        }
      });
    }
    if (typeof global.renderStats === "function") global.renderStats();
    if (typeof global.renderLegal === "function") global.renderLegal();
    if (typeof global.renderIndexPanel === "function") global.renderIndexPanel();
    if (typeof global.applyFilters === "function") global.applyFilters();
  }

  function tierLabel(tier) {
    return tier === "f500" ? t(UI.tierF500) : t(UI.tierNotable);
  }

  function init() {
    const sw = document.getElementById("lang-switch");
    if (sw) {
      sw.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-lang]");
        if (!btn) return;
        state.lang = btn.dataset.lang === "en" ? "en" : "zh";
        localStorage.setItem(KEY, state.lang);
        applyChrome();
      });
    }
    applyChrome();
  }

  global.ErNewsLang = { UI, t, itemField, pointField, publisherLabel, marketName, tagLabel, tierLabel, init, get lang() { return state.lang; } };
})(window);