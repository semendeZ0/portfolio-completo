/* ═══════════════════════════════════════════════════════════════════
   DEV RESPAWN — services.js
   Salvar em: static/js/services.js
   Requer: app.js carregado antes
═══════════════════════════════════════════════════════════════════ */

/* ── Traduções da página de serviços ─────────────────────────── */
const servicesI18n = {
  pt: {
    sv_badge:      'CAPABILITIES ONLINE',
    sv_title_1:    'O que eu',
    sv_title_2:    'construo.',
    sv_sub:        'Sem template genérico. Cada entrega é pensada do zero — código limpo, design com propósito, prazo real.',
    sv_eyebrow:    'SERVICES',
    sv_grid_title: 'Cada serviço, um sistema próprio.',
    sv_grid_sub:   'Do briefing ao deploy — entrega real com identidade.',

    sv_tag_1: 'LAUNCH', sv_name_1: 'Landing Pages',
    sv_desc_1: 'Páginas de conversão cinematográficas com headline forte, CTA direto e estrutura que sustenta produto de verdade. Focadas em resultado, não em enfeite.',

    sv_tag_2: 'BRAND', sv_name_2: 'Websites',
    sv_desc_2: 'Sites institucionais com arquitetura limpa, responsividade real e identidade visual forte. Estruturados com Flask/Jinja para fácil manutenção futura.',

    sv_tag_3: 'SYSTEM', sv_name_3: 'Sistemas Web',
    sv_desc_3: 'Dashboards, painéis admin, CRUDs completos e sistemas internos. Backend robusto com Flask, banco de dados e autenticação segura.',

    sv_tag_4: 'DEBUG', sv_name_4: 'Correção de Bugs',
    sv_desc_4: 'Morreu no bug? Eu entro, analiso e resolvo. Flask, Python, JavaScript — diagnóstico claro e solução documentada. Sem enrolação.',

    sv_tag_5: 'API', sv_name_5: 'APIs & Integrações',
    sv_desc_5: 'RESTful APIs documentadas, webhooks e integrações com serviços externos. Construídas pra escalar e fáceis de manter.',

    sv_tag_6: 'AUTO', sv_name_6: 'Automação',
    sv_desc_6: 'Scripts Python, bots, scrapers e pipelines que eliminam trabalho repetitivo. Você descreve o processo — eu automatizo.',

    sv_cta: 'Solicitar →',

    proc_eyebrow: 'PROCESS',
    proc_title:   'Como funciona.',
    proc_sub:     'Do primeiro contato ao deploy — sem surpresas no meio do caminho.',

    proc_tag_1: 'BRIEFING',  proc_name_1: 'Você descreve o problema.',
    proc_desc_1: 'Me conta o contexto, o objetivo e o que você precisa. Pode ser por WhatsApp, Telegram ou formulário — sem burocracia.',

    proc_tag_2: 'PROPOSTA',  proc_name_2: 'Plano claro em até 24h.',
    proc_desc_2: 'Você recebe um plano detalhado com escopo, prazo e custo. Sem letra miúda, sem cobrança surpresa.',

    proc_tag_3: 'BUILD',     proc_name_3: 'Desenvolvimento com atualizações.',
    proc_desc_3: 'Você acompanha o progresso em tempo real. Builds iterativas com feedback constante — sem surpresas no final.',

    proc_tag_4: 'DEPLOY',    proc_name_4: 'Entrega + suporte pós-deploy.',
    proc_desc_4: 'Deploy completo com código documentado. Suporte pós-entrega incluso — porque bug não avisa hora.',

    sv_cta_title: 'Pronto pra começar?',
    sv_cta_sub:   'Descreve o contexto. Em até 24h você recebe um plano claro com custo e prazo.',

    cta_badge:      'READY',
    footer_tagline: 'Morreu no bug? Respawna e tenta de novo.',
    footer_rights:  'Todos os direitos reservados.',
    nav_home:       'Home',
    nav_services:   'Serviços',
    nav_portfolio:  'Portfólio',
    nav_contact:    'Contato',
  },

  en: {
    sv_badge:      'CAPABILITIES ONLINE',
    sv_title_1:    'What I',
    sv_title_2:    'build.',
    sv_sub:        'No generic template. Every delivery is crafted from scratch — clean code, purposeful design, real deadlines.',
    sv_eyebrow:    'SERVICES',
    sv_grid_title: 'Each service, its own system.',
    sv_grid_sub:   'From briefing to deploy — real delivery with identity.',

    sv_tag_1: 'LAUNCH', sv_name_1: 'Landing Pages',
    sv_desc_1: 'Cinematic conversion pages with strong headlines, direct CTAs and structure that holds up real products. Focused on results, not decoration.',

    sv_tag_2: 'BRAND', sv_name_2: 'Websites',
    sv_desc_2: 'Institutional sites with clean architecture, real responsiveness and strong visual identity. Built with Flask/Jinja for easy future maintenance.',

    sv_tag_3: 'SYSTEM', sv_name_3: 'Web Systems',
    sv_desc_3: 'Dashboards, admin panels, full CRUDs and internal systems. Robust backend with Flask, database and secure authentication.',

    sv_tag_4: 'DEBUG', sv_name_4: 'Bug Fixing',
    sv_desc_4: "Died on the bug? I come in, analyze and fix it. Flask, Python, JavaScript — clear diagnosis and documented solution. No fluff.",

    sv_tag_5: 'API', sv_name_5: 'APIs & Integrations',
    sv_desc_5: 'Documented RESTful APIs, webhooks and third-party integrations. Built to scale and easy to maintain.',

    sv_tag_6: 'AUTO', sv_name_6: 'Automation',
    sv_desc_6: 'Python scripts, bots, scrapers and pipelines that eliminate repetitive work. You describe the process — I automate it.',

    sv_cta: 'Request →',

    proc_eyebrow: 'PROCESS',
    proc_title:   'How it works.',
    proc_sub:     'From first contact to deploy — no surprises along the way.',

    proc_tag_1: 'BRIEFING',  proc_name_1: 'You describe the problem.',
    proc_desc_1: "Tell me the context, the goal and what you need. WhatsApp, Telegram or form — no bureaucracy.",

    proc_tag_2: 'PROPOSAL',  proc_name_2: 'Clear plan within 24h.',
    proc_desc_2: 'You receive a detailed plan with scope, deadline and cost. No fine print, no surprise charges.',

    proc_tag_3: 'BUILD',     proc_name_3: 'Development with updates.',
    proc_desc_3: 'You follow the progress in real time. Iterative builds with constant feedback — no surprises at the end.',

    proc_tag_4: 'DEPLOY',    proc_name_4: 'Delivery + post-deploy support.',
    proc_desc_4: 'Full deploy with documented code. Post-delivery support included — because bugs don\'t schedule appointments.',

    sv_cta_title: 'Ready to start?',
    sv_cta_sub:   'Describe the context. In up to 24h you receive a clear plan with cost and deadline.',

    cta_badge:      'READY',
    footer_tagline: 'Died on the bug? Respawn and try again.',
    footer_rights:  'All rights reserved.',
    nav_home:       'Home',
    nav_services:   'Services',
    nav_portfolio:  'Portfolio',
    nav_contact:    'Contact',
  }
};

/* ── Terminal sequences ───────────────────────────────────────── */
const svTerminalSequences = {
  pt: ['listando serviços...', 'verificando stack...', 'pronto pra buildar.'],
  en: ['listing services...', 'verifying stack...', 'ready to build.'],
};

let svTermTimeout = null;

function typeSvTerminal(lang) {
  const el = document.getElementById('sv-terminal-text');
  if (!el) return;

  const sequences = svTerminalSequences[lang] || svTerminalSequences.pt;
  let seqIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = sequences[seqIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        svTermTimeout = setTimeout(() => { deleting = true; tick(); }, 1600);
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

    svTermTimeout = setTimeout(tick, deleting ? 35 : 60);
  }

  tick();
}

/* ── Scroll animations ────────────────────────────────────────── */
function initSvScrollAnimations() {
  const targets = document.querySelectorAll(
    '.sv-card, .sv-process-step, .section-header, .sv-hero-title, .sv-hero-sub, .sv-hero-meta'
  );

  targets.forEach(el => {
    if (!el.classList.contains('fade-up')) el.classList.add('fade-up');
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || 0);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}

/* ── Hero entrance ────────────────────────────────────────────── */
function initSvHeroEntrance() {
  ['.sv-hero-meta', '.sv-hero-title', '.sv-hero-sub'].forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.cssText = 'opacity:0;transform:translateY(20px);transition:opacity 0.6s ease,transform 0.6s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 150 + i * 120);
  });
}

/* ── Scroll progress bar ─────────────────────────────────────── */
function initSvScrollProgress() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position:fixed;top:0;left:0;height:2px;
    background:var(--blue);box-shadow:0 0 8px var(--accent-glow);
    z-index:9999;width:0%;transition:width 0.1s linear;pointer-events:none;
  `;
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const d = document.documentElement;
    const pct = d.scrollHeight - d.clientHeight > 0
      ? (window.scrollY / (d.scrollHeight - d.clientHeight)) * 100 : 0;
    bar.style.width = `${pct}%`;
  }, { passive: true });
}

/* ── Extensão do i18n do app.js ──────────────────────────────── */
function extendSvI18n() {
  if (typeof i18n !== 'undefined') {
    Object.keys(servicesI18n).forEach(lang => {
      if (i18n[lang]) Object.assign(i18n[lang], servicesI18n[lang]);
    });
  }
}

/* ── Init ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  extendSvI18n();

  const lang = document.documentElement.getAttribute('data-lang') || 'pt';
  if (typeof applyTranslations === 'function') applyTranslations(lang);

  initSvScrollAnimations();
  initSvScrollProgress();
  initSvHeroEntrance();

  setTimeout(() => typeSvTerminal(lang), 800);
});
