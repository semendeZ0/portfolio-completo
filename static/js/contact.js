const WHATSAPP_NUMBER = '5553984261057';

/* ── Traduções ────────────────────────────────────────────────── */
const contactI18n = {
  pt: {
    ct_badge: 'DISPONÍVEL AGORA',
    ct_title_1: 'Vamos', ct_title_2: 'construir.',
    ct_sub: 'Descreve o que você precisa. Em até 24h você tem um plano claro — sem burocracia, sem enrolação.',
    ct_form_eyebrow: 'BRIEFING',
    ct_form_title: 'Conta o contexto.',
    ct_form_sub: 'Preenche abaixo e clica em enviar — vou te responder via WhatsApp.',
    ct_label_name: 'Nome',
    ct_label_service: 'Tipo de projeto',
    ct_select_placeholder: 'Selecione um serviço',
    ct_opt_1: 'Landing Page', ct_opt_2: 'Website', ct_opt_3: 'Sistema Web',
    ct_opt_4: 'Correção de Bug', ct_opt_5: 'API / Integração',
    ct_opt_6: 'Automação', ct_opt_7: 'Outro',
    ct_label_desc: 'Descrição',
    ct_label_budget: 'Orçamento estimado',
    ct_budget_1: 'Até R$500', ct_budget_2: 'R$500–R$1.500',
    ct_budget_3: 'R$1.500–R$3k', ct_budget_4: 'Acima de R$3k',
    ct_submit: 'Enviar via WhatsApp',
    ct_channels_eyebrow: 'CANAIS',
    ct_channels_title: 'Fala direto comigo.',
    ct_wa_tag: 'Resposta rápida',
    ct_tg_tag: 'Disponível também',
    ct_ig_tag: 'Instagram',
    ct_response: 'Tempo de resposta médio: até 24h',
    ct_faq_eyebrow: 'FAQ',
    ct_faq_title: 'Perguntas frequentes.',
    faq_q1: 'Quanto custa?',
    faq_a1: 'Depende do escopo. Após o briefing você recebe um orçamento detalhado em até 24h — sem surpresas e sem letra miúda.',
    faq_q2: 'Qual o prazo de entrega?',
    faq_a2: 'Varia com a complexidade. Landing pages simples: 3–5 dias. Sistemas e websites: combinamos no briefing. Sempre com prazo real, não inflado.',
    faq_q3: 'Como funciona o pagamento?',
    faq_a3: 'Geralmente 50% na aprovação da proposta e 50% na entrega. Para projetos menores, pode ser combinado de outra forma.',
    faq_q4: 'Tem suporte após a entrega?',
    faq_a4: 'Sim. Suporte pós-entrega incluso — porque bug não avisa hora. Problemas relacionados ao que foi entregue são resolvidos sem custo adicional.',
    faq_q5: 'Você trabalha com quais tecnologias?',
    faq_a5: 'Python, Flask, SQLite, HTML5, CSS3 e JavaScript puro. Para projetos específicos, posso avaliar outras stacks.',
    nav_home: 'Home', nav_services: 'Serviços', nav_portfolio: 'Portfólio', nav_contact: 'Contato',
    footer_tagline: 'Morreu no bug? Respawna e tenta de novo.',
    footer_rights: 'Todos os direitos reservados.',
    cta_badge: 'READY',
  },
  en: {
    ct_badge: 'AVAILABLE NOW',
    ct_title_1: "Let's", ct_title_2: 'build.',
    ct_sub: "Describe what you need. In up to 24h you'll have a clear plan — no bureaucracy, no fluff.",
    ct_form_eyebrow: 'BRIEFING',
    ct_form_title: 'Tell me the context.',
    ct_form_sub: "Fill in below and hit send — I'll get back to you via WhatsApp.",
    ct_label_name: 'Name',
    ct_label_service: 'Project type',
    ct_select_placeholder: 'Select a service',
    ct_opt_1: 'Landing Page', ct_opt_2: 'Website', ct_opt_3: 'Web System',
    ct_opt_4: 'Bug Fix', ct_opt_5: 'API / Integration',
    ct_opt_6: 'Automation', ct_opt_7: 'Other',
    ct_label_desc: 'Description',
    ct_label_budget: 'Estimated budget',
    ct_budget_1: 'Up to R$500', ct_budget_2: 'R$500–R$1,500',
    ct_budget_3: 'R$1,500–R$3k', ct_budget_4: 'Above R$3k',
    ct_submit: 'Send via WhatsApp',
    ct_channels_eyebrow: 'CHANNELS',
    ct_channels_title: 'Talk directly to me.',
    ct_wa_tag: 'Quick response',
    ct_tg_tag: 'Also available',
    ct_ig_tag: 'Instagram',
    ct_response: 'Average response time: up to 24h',
    ct_faq_eyebrow: 'FAQ',
    ct_faq_title: 'Frequently asked questions.',
    faq_q1: 'How much does it cost?',
    faq_a1: "Depends on the scope. After the briefing you'll receive a detailed quote in up to 24h — no surprises, no fine print.",
    faq_q2: "What's the delivery timeline?",
    faq_a2: 'Varies with complexity. Simple landing pages: 3–5 days. Systems and websites: we agree on the briefing. Always a real deadline, not inflated.',
    faq_q3: 'How does payment work?',
    faq_a3: 'Usually 50% on proposal approval and 50% on delivery. For smaller projects, it can be arranged differently.',
    faq_q4: 'Is there post-delivery support?',
    faq_a4: "Yes. Post-delivery support included — because bugs don't schedule appointments. Issues related to what was delivered are fixed at no extra cost.",
    faq_q5: 'What technologies do you work with?',
    faq_a5: 'Python, Flask, SQLite, HTML5, CSS3 and vanilla JavaScript. For specific projects, I can evaluate other stacks.',
    nav_home: 'Home', nav_services: 'Services', nav_portfolio: 'Portfolio', nav_contact: 'Contact',
    footer_tagline: 'Died on the bug? Respawn and try again.',
    footer_rights: 'All rights reserved.',
    cta_badge: 'READY',
  }
};

/* ── Terminal ─────────────────────────────────────────────────── */
const ctTermSeq = {
  pt: ['iniciando briefing...', 'aguardando contexto...', 'pronto pra buildar.'],
  en: ['initializing briefing...', 'awaiting context...', 'ready to build.'],
};

let ctTermTimeout = null;

function typeCtTerminal(lang) {
  const el = document.getElementById('ct-terminal-text');
  if (!el) return;
  const seqs = ctTermSeq[lang] || ctTermSeq.pt;
  let si = 0, ci = 0, del = false;
  function tick() {
    const cur = seqs[si];
    if (!del) { ci++; el.textContent = cur.slice(0, ci); if (ci === cur.length) { ctTermTimeout = setTimeout(() => { del = true; tick(); }, 1600); return; } }
    else { ci--; el.textContent = cur.slice(0, ci); if (ci === 0) { del = false; si = (si + 1) % seqs.length; } }
    ctTermTimeout = setTimeout(tick, del ? 35 : 60);
  }
  tick();
}

/* ── Budget buttons ───────────────────────────────────────────── */
let selectedBudget = '';

function initBudgetBtns() {
  document.querySelectorAll('.ct-budget-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ct-budget-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedBudget = btn.getAttribute('data-value');
    });
  });
}

/* ── FAQ accordion ────────────────────────────────────────────── */
function initFaq() {
  document.querySelectorAll('.ct-faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Fecha todos
      document.querySelectorAll('.ct-faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const a = b.nextElementSibling;
        if (a) {
          a.style.maxHeight = '0';
          a.style.opacity  = '0';
          setTimeout(() => { if (b.getAttribute('aria-expanded') === 'false') a.hidden = true; }, 300);
        }
      });

      // Abre o clicado (se estava fechado)
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
        answer.style.maxHeight = '0';
        answer.style.opacity   = '0';
        answer.style.overflow  = 'hidden';
        answer.style.transition = 'max-height 0.35s ease, opacity 0.3s ease';
        requestAnimationFrame(() => {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          answer.style.opacity   = '1';
        });
      }
    });
  });
}

/* ── Formulário → WhatsApp ────────────────────────────────────── */
function initForm() {
  const submitBtn = document.getElementById('ct-submit');
  if (!submitBtn) return;

  submitBtn.addEventListener('click', () => {
    const nameEl    = document.getElementById('ct-name');
    const serviceEl = document.getElementById('ct-service');
    const descEl    = document.getElementById('ct-desc');

    // Limpa erros anteriores
    [nameEl, serviceEl, descEl].forEach(el => {
      el.classList.remove('error');
      const prev = el.parentNode.querySelector('.ct-field-error');
      if (prev) prev.remove();
    });

    let valid = true;

    const addError = (el, msg) => {
      el.classList.add('error');
      const span = document.createElement('span');
      span.className = 'ct-field-error';
      span.textContent = msg;
      el.parentNode.appendChild(span);
      valid = false;
    };

    const lang = document.documentElement.getAttribute('data-lang') || 'pt';

    if (!nameEl.value.trim())    addError(nameEl,    lang === 'pt' ? 'Nome obrigatório'           : 'Name is required');
    if (!serviceEl.value)        addError(serviceEl, lang === 'pt' ? 'Selecione um serviço'        : 'Select a service');
    if (!descEl.value.trim())    addError(descEl,    lang === 'pt' ? 'Descrição obrigatória'       : 'Description is required');

    if (!valid) return;

    const name    = nameEl.value.trim();
    const service = serviceEl.options[serviceEl.selectedIndex].text;
    const desc    = descEl.value.trim();
    const budget  = selectedBudget || (lang === 'pt' ? 'Não informado' : 'Not specified');

    const msg = lang === 'pt'
      ? `Olá! Me chamo *${name}*.\n\n*Serviço:* ${service}\n*Orçamento:* ${budget}\n\n*Descrição:*\n${desc}`
      : `Hello! My name is *${name}*.\n\n*Service:* ${service}\n*Budget:* ${budget}\n\n*Description:*\n${desc}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

/* ── Scroll animations ────────────────────────────────────────── */
function initCtScrollAnimations() {
  const targets = document.querySelectorAll('.ct-form-wrap, .ct-sidebar, .ct-hero-title, .ct-hero-sub, .ct-hero-meta');
  targets.forEach(el => { if (!el.classList.contains('fade-up')) el.classList.add('fade-up'); });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const d = parseInt(e.target.dataset.delay || 0);
        setTimeout(() => e.target.classList.add('visible'), d);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* ── Hero entrance ────────────────────────────────────────────── */
function initCtHeroEntrance() {
  ['.ct-hero-meta', '.ct-hero-title', '.ct-hero-sub'].forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.cssText = 'opacity:0;transform:translateY(20px);transition:opacity 0.6s ease,transform 0.6s ease';
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 150 + i * 120);
  });
}

/* ── Scroll progress ─────────────────────────────────────────── */
function initCtScrollProgress() {
  const bar = document.createElement('div');
  bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;background:var(--blue);box-shadow:0 0 8px var(--accent-glow);z-index:9999;width:0%;transition:width 0.1s linear;pointer-events:none;';
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const d = document.documentElement;
    const pct = d.scrollHeight - d.clientHeight > 0 ? (window.scrollY / (d.scrollHeight - d.clientHeight)) * 100 : 0;
    bar.style.width = `${pct}%`;
  }, { passive: true });
}

/* ── Extensão i18n ────────────────────────────────────────────── */
function extendCtI18n() {
  if (typeof i18n !== 'undefined') {
    Object.keys(contactI18n).forEach(lang => {
      if (i18n[lang]) Object.assign(i18n[lang], contactI18n[lang]);
    });
  }
}

/* ── Init ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  extendCtI18n();
  const lang = document.documentElement.getAttribute('data-lang') || 'pt';
  if (typeof applyTranslations === 'function') applyTranslations(lang);

  initBudgetBtns();
  initFaq();
  initForm();
  initCtScrollAnimations();
  initCtScrollProgress();
  initCtHeroEntrance();

  setTimeout(() => typeCtTerminal(lang), 800);
});