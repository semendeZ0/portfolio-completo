/* ═══════════════════════════════════════════════════════════════════
   DEV RESPAWN — portfolio.js
   Salvar em: static/js/portfolio.js
   Requer: app.js carregado antes (i18n, navbar, hamburger)
═══════════════════════════════════════════════════════════════════ */

/* ── Traduções adicionais do portfólio ────────────────────────── */
const portfolioI18n = {
  pt: {
    pf_badge:       'ARCHIVE ONLINE',
    pf_title_1:     'Experiências',
    pf_title_2:     'Deployadas.',
    pf_sub:         'Cada projeto aqui foi construído com intenção — design com propósito, código que sustenta.',
    filter_all:     'TODOS',
    filter_web:     'WEB',
    filter_system:  'SISTEMA',
    filter_ui:      'UI/UX',
    filter_auto:    'AUTOMAÇÃO',
    btn_demo:       'Live Demo',
    pf_cta_title:   'Quer um projeto assim?',
    pf_cta_sub:     'Descreve o contexto. Em até 24h você recebe um plano com custo e prazo.',
    pf_empty_badge: 'ARCHIVE VAZIO',
    pf_empty_title: 'Nenhum projeto disponível ainda.',
    pf_empty_sub:   'Volte em breve — novos deploys chegando.',
    cta_badge:      'READY',
    footer_tagline: 'Morreu no bug? Respawna e tenta de novo.',
    footer_rights:  'Todos os direitos reservados.',
    nav_home:       'Home',
    nav_services:   'Serviços',
    nav_portfolio:  'Portfólio',
    nav_contact:    'Contato',
  },
  en: {
    pf_badge:       'ARCHIVE ONLINE',
    pf_title_1:     'Experiences',
    pf_title_2:     'Deployed.',
    pf_sub:         'Every project here was built with intention — purposeful design, solid code.',
    filter_all:     'ALL',
    filter_web:     'WEB',
    filter_system:  'SYSTEM',
    filter_ui:      'UI/UX',
    filter_auto:    'AUTOMATION',
    btn_demo:       'Live Demo',
    pf_cta_title:   'Want a project like this?',
    pf_cta_sub:     'Describe the context. In up to 24h you receive a plan with cost and deadline.',
    pf_empty_badge: 'EMPTY ARCHIVE',
    pf_empty_title: 'No projects available yet.',
    pf_empty_sub:   'Check back soon — new deploys incoming.',
    cta_badge:      'READY',
    footer_tagline: 'Died on the bug? Respawn and try again.',
    footer_rights:  'All rights reserved.',
    nav_home:       'Home',
    nav_services:   'Services',
    nav_portfolio:  'Portfolio',
    nav_contact:    'Contact',
  }
};

/* ── Terminal sequences do portfólio ──────────────────────────── */
const pfTerminalSequences = {
  pt: ['escaneando archive...', 'carregando projetos...', 'deploy verificado.'],
  en: ['scanning archive...', 'loading projects...', 'deploy verified.'],
};

/* ── Agrupa grid cards em pares (2 colunas no desktop) ─────────── */
function groupGridCards() {
  const section = document.querySelector('.pf-section .container');
  if (!section) return;

  const gridCards = Array.from(section.querySelectorAll('.pf-card--grid'));
  if (gridCards.length === 0) return;

  // Remove wrappers anteriores se existirem
  section.querySelectorAll('.pf-grid-wrapper').forEach(w => {
    while (w.firstChild) w.parentNode.insertBefore(w.firstChild, w);
    w.remove();
  });

  // Agrupa em pares
  for (let i = 0; i < gridCards.length; i += 2) {
    const wrapper = document.createElement('div');
    wrapper.className = 'pf-grid-wrapper';

    gridCards[i].parentNode.insertBefore(wrapper, gridCards[i]);
    wrapper.appendChild(gridCards[i]);

    if (gridCards[i + 1]) {
      wrapper.appendChild(gridCards[i + 1]);
    }
  }
}

/* ── Filtros de categoria ─────────────────────────────────────── */
function initFilters() {
  const filters = document.querySelectorAll('.pf-filter');
  const cards   = document.querySelectorAll('.pf-card');

  if (!filters.length || !cards.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      // Ativa o botão clicado
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';

        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden-card');
          // Re-anima a entrada
          card.classList.remove('visible');
          requestAnimationFrame(() => {
            setTimeout(() => card.classList.add('visible'), 30);
          });
        } else {
          card.classList.add('hidden-card');
        }
      });

      // Re-agrupa os grid cards visíveis
      groupGridCards();
    });
  });
}

/* ── Terminal do hero do portfólio ───────────────────────────── */
let pfTermTimeout = null;

function typePfTerminal(lang) {
  const el = document.getElementById('pf-terminal-text');
  if (!el) return;

  const sequences = pfTerminalSequences[lang] || pfTerminalSequences.pt;
  let seqIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = sequences[seqIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);

      if (charIdx === current.length) {
        pfTermTimeout = setTimeout(() => { deleting = true; tick(); }, 1600);
        return;
      }
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);

      if (charIdx === 0) {
        deleting = false;
        seqIdx = (seqIdx + 1) % sequences.length;
      }
    }

    const speed = deleting ? 35 : 60;
    pfTermTimeout = setTimeout(tick, speed);
  }

  tick();
}

/* ── Animações de scroll ─────────────────────────────────────── */
function initPfScrollAnimations() {
  const targets = document.querySelectorAll('.pf-card, .pf-hero-title, .pf-hero-sub, .pf-filters, .pf-hero-meta');

  targets.forEach(el => {
    if (!el.classList.contains('fade-up')) {
      el.classList.add('fade-up');
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || 0);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}

/* ── Extensão do i18n do app.js ─────────────────────────────── */
function extendI18n() {
  // Mescla as traduções do portfolio no objeto global i18n
  if (typeof i18n !== 'undefined') {
    Object.keys(portfolioI18n).forEach(lang => {
      if (i18n[lang]) {
        Object.assign(i18n[lang], portfolioI18n[lang]);
      }
    });
  }
}

/* ── Swap de cards do portfólio (projetos PT/EN) ────────────── */
let pfProjectsCache = null;

async function loadProjectsJson() {
  if (pfProjectsCache) return pfProjectsCache;

  const res = await fetch('./static/data/projects.json', { method: 'GET' });
  if (!res.ok) throw new Error('Failed to load static/data/projects.json');

  pfProjectsCache = await res.json();
  return pfProjectsCache;
}

function normalizeProjectsForCards(projetos) {
  return Array.isArray(projetos) ? projetos : [];
}

function getCurrentPortfolioCards() {
  const section = document.querySelector('.pf-section .container');
  if (!section) return [];
  // cards featured + grid, in DOM order
  return Array.from(section.querySelectorAll('.pf-card'));
}

function applyProjectsLanguageToCards(projetos, lang) {
  const cards = getCurrentPortfolioCards();
  const safeProjects = normalizeProjectsForCards(projetos);

  if (!cards.length || !safeProjects.length) return;

  const len = Math.min(cards.length, safeProjects.length);

  for (let i = 0; i < len; i++) {
    const card = cards[i];
    const projeto = safeProjects[i];

    const title = lang === 'en' ? (projeto.titulo_en ?? projeto.titulo) : (projeto.titulo ?? '');
    const desc  = lang === 'en' ? (projeto.descricao_en ?? projeto.descricao) : (projeto.descricao ?? '');
    const stackList = lang === 'en' ? (projeto.stack_en ?? projeto.stack ?? []) : (projeto.stack ?? []);
    const cat = lang === 'en' ? (projeto.categoria_en ?? projeto.categoria) : (projeto.categoria ?? '');

    const hudCatEl = card.querySelector('.pf-hud-cat');
    if (hudCatEl && typeof cat === 'string') hudCatEl.textContent = cat.toUpperCase();

    const titleEl = card.querySelector('.pf-card-title');
    if (titleEl && typeof title === 'string') titleEl.textContent = title;

    const descEl = card.querySelector('.pf-card-desc');
    if (descEl) descEl.innerHTML = desc;

    const stackWrap = card.querySelector('.pf-stack');
    if (stackWrap && Array.isArray(stackList)) {
      const chips = Array.from(card.querySelectorAll('.pf-stack-chip'));
      // update existing chips
      for (let j = 0; j < chips.length && j < stackList.length; j++) chips[j].textContent = stackList[j];
      // remove extra chips
      for (let j = stackList.length; j < chips.length; j++) chips[j].remove();
      // add missing chips
      for (let j = chips.length; j < stackList.length; j++) {
        const chip = document.createElement('span');
        chip.className = 'pf-stack-chip';
        chip.textContent = stackList[j];
        stackWrap.appendChild(chip);
      }
    }
  }
}

/**
 * Deterministic toggle:
 * - Observe root data-lang changes
 * - On EN/PT, fetch cached projects and apply immediately
 * - Retry a few times because UI animations / grouping can move DOM slightly
 */
function initPortfolioLangSwap() {
  const root = document.documentElement;

  let lastLangApplied = null;
  let pending = 0;

  async function applyForLang(lang) {
    if (lastLangApplied === lang) return;
    pending++;
    const token = pending;

    try {
      const projetos = await loadProjectsJson();
      if (token !== pending) return;

      applyProjectsLanguageToCards(projetos, lang);
      lastLangApplied = lang;
    } catch (e) {
      // ignore; keep UI unchanged
    }
  }

  let retryTimer = null;

  function scheduleApply(lang) {
    if (retryTimer) clearTimeout(retryTimer);
    retryTimer = setTimeout(() => applyForLang(lang), 50);
    // small additional retries
    setTimeout(() => applyForLang(lang), 300);
    setTimeout(() => applyForLang(lang), 700);
  }

  // apply initial if needed
  const initialLang = root.getAttribute('data-lang') || 'pt';
  if (initialLang === 'en') scheduleApply('en');

  const mo = new MutationObserver(() => {
    const lang = root.getAttribute('data-lang') || 'pt';
    scheduleApply(lang === 'en' ? 'en' : 'pt');
  });

  mo.observe(root, { attributes: true, attributeFilter: ['data-lang'] });
}

/* ── Scroll progress bar ─────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  bar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: var(--blue);
    box-shadow: 0 0 8px var(--accent-glow);
    z-index: 9999;
    width: 0%;
    transition: width 0.1s linear;
    pointer-events: none;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const doc   = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = `${pct}%`;
  }, { passive: true });
}

/* ── Hero entrance do portfólio ──────────────────────────────── */
function initPfHeroEntrance() {
  const elements = [
    '.pf-hero-meta',
    '.pf-hero-title',
    '.pf-hero-sub',
    '.pf-filters',
  ];

  elements.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 150 + i * 120);
  });
}

/* ── Init ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  extendI18n();

  // Aplica tradução inicial (respeita lang atual do app.js)
  const currentLang = document.documentElement.getAttribute('data-lang') || 'pt';
  if (typeof applyTranslations === 'function') {
    applyTranslations(currentLang);
  }

  // Cards são inseridos dinamicamente por portfolio-render.js.
  // Portanto, filtros e agrupamento de grid precisam esperar `pf:projects-rendered`.
  const onProjectsRendered = () => {
    groupGridCards();
    initFilters();
    initPfScrollAnimations();
  };

  document.addEventListener('pf:projects-rendered', onProjectsRendered, { once: false });

  // Caso os cards já existam (ex: cache / reentrada), aplica imediatamente.
  // (safe: initFilters() também valida se há cards no DOM)
  onProjectsRendered();

  initScrollProgress();
  initPfHeroEntrance();
  initPortfolioLangSwap();

  setTimeout(() => typePfTerminal(currentLang), 800);
});
