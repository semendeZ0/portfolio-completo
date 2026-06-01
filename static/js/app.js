/* ═══════════════════════════════════════════════════════════════════
   DEV RESPAWN — app.js
   Salvar em: static/js/app.js
═══════════════════════════════════════════════════════════════════ */

/* ── i18n: traduções PT / EN ──────────────────────────────────── */
const i18n = {
  pt: {
    // Nav
    nav_home:      'Home',
    nav_services:  'Serviços',
    nav_portfolio: 'Portfólio',
    nav_contact:   'Contato',

    // Hero
    hero_badge:    'SISTEMA ONLINE',
    hero_title_1:  'Código que resolve.',
    hero_title_2:  'Interface que impressiona.',
    hero_sub:      'Dev backend solo. Flask, Python, APIs e automação —\nentrega real, sem papo de agência.',
    hero_cta1:     'Solicitar orçamento',
    hero_cta2:     'Ver projetos',
    meta_status:   'Disponível para projetos',
    scroll_hint:   'scroll',

    // Serviços
    services_eyebrow: 'CAPABILITIES',
    services_title:   'O que eu construo',
    services_sub:     'Sem template genérico. Cada entrega é pensada do zero.',
    svc_tag_1:  'LAUNCH',  svc_title_1: 'Landing Pages',
    svc_desc_1: 'Cinematográficas, focadas em conversão e com linguagem tech startup premium.',
    svc_tag_2:  'BRAND',   svc_title_2: 'Websites',
    svc_desc_2: 'Institucional com arquitetura limpa, contraste forte e experiência consistente.',
    svc_tag_3:  'SYSTEM',  svc_title_3: 'Sistemas Web',
    svc_desc_3: 'Flask, SQLite/PostgreSQL, autenticação, CRUD e integrações robustas.',
    svc_tag_4:  'API',     svc_title_4: 'APIs & Integrações',
    svc_desc_4: 'RESTful APIs, webhooks e integrações com serviços externos. Documentado e escalável.',
    svc_tag_5:  'AUTO',    svc_title_5: 'Automação',
    svc_desc_5: 'Scripts Python, bots, scrapers e pipelines que economizam tempo de verdade.',
    svc_tag_6:  'UI/UX',   svc_title_6: 'UI/UX',
    svc_desc_6: 'Minimal sci-fi com hierarquia sólida e identidade visual própria.',
    svc_link:   'Ver mais →',

    // Diferenciais
    diff_eyebrow: 'APPROACH',
    diff_title:   'MENOS CAMADAS. MAIS RESULTADO.',
    diff_sub:     'Construindo o futuro do seu negócio!',
    diff_1: 'Código limpo e documentado',
    diff_2: 'Comunicação direta, sem enrolação',
    diff_3: 'Entrega rápida e estruturada',
    diff_4: 'Performance e responsividade reais',
    diff_5: 'Morreu no bug? Respawna e tenta de novo.',
    stat_1:       'Projetos entregues',
    stat_2:       'Tempo de resposta',
    stat_3:       'Dev. Você sabe com quem fala.',
    stat_tagline: 'Morreu no bug?<br><strong>Respawna e tenta de novo.</strong>',

    // CTA
    cta_badge:  'READY',
    cta_title:  'Pronto para começar?',
    cta_sub:    'Descreve o contexto. Em até 24h você recebe um plano claro com custo e prazo.',

    // Footer
    footer_tagline: 'Morreu no bug? Respawna e tenta de novo.',
    footer_rights:  'Todos os direitos reservados.',
  },

  en: {
    // Nav
    nav_home:      'Home',
    nav_services:  'Services',
    nav_portfolio: 'Portfolio',
    nav_contact:   'Contact',

    // Hero
    hero_badge:    'SYSTEM ONLINE',
    hero_title_1:  'Code that solves.',
    hero_title_2:  'Interface that impresses.',
    hero_sub:      'Solo backend dev. Flask, Python, APIs and automation —\nreal delivery, no agency talk.',
    hero_cta1:     'Request a quote',
    hero_cta2:     'See projects',
    meta_status:   'Available for projects',
    scroll_hint:   'scroll',

    // Services
    services_eyebrow: 'CAPABILITIES',
    services_title:   'What I build',
    services_sub:     'No generic template. Every delivery is crafted from scratch.',
    svc_tag_1:  'LAUNCH',  svc_title_1: 'Landing Pages',
    svc_desc_1: 'Cinematic, conversion-focused with premium tech startup language.',
    svc_tag_2:  'BRAND',   svc_title_2: 'Websites',
    svc_desc_2: 'Institutional with clean architecture, strong contrast and consistent experience.',
    svc_tag_3:  'SYSTEM',  svc_title_3: 'Web Systems',
    svc_desc_3: 'Flask, SQLite/PostgreSQL, authentication, CRUD and robust integrations.',
    svc_tag_4:  'API',     svc_title_4: 'APIs & Integrations',
    svc_desc_4: 'RESTful APIs, webhooks and third-party integrations. Documented and scalable.',
    svc_tag_5:  'AUTO',    svc_title_5: 'Automation',
    svc_desc_5: 'Python scripts, bots, scrapers and pipelines that save real time.',
    svc_tag_6:  'UI/UX',   svc_title_6: 'UI/UX',
    svc_desc_6: 'Minimal sci-fi with solid hierarchy and unique visual identity.',
    svc_link:   'Learn more →',

    // Differentials
    diff_eyebrow: 'APPROACH',
    diff_title:   'Fewer layers. Better results.',
    diff_sub:     "Building the future of your business!",
    diff_1: 'Clean and documented code',
    diff_2: 'Direct communication, no fluff',
    diff_3: 'Fast and structured delivery',
    diff_4: 'Real performance and responsiveness',
    diff_5: 'Died on the bug? Respawn and try again.',
    stat_1:       'Projects delivered',
    stat_2:       'Response time',
    stat_3:       'Dev. You know who you are talking to.',
    stat_tagline: 'Died on the bug?<br><strong>Respawn and try again.</strong>',

    // CTA
    cta_badge:  'READY',
    cta_title:  'Ready to start?',
    cta_sub:    'Describe the context. In up to 24h you receive a clear plan with cost and deadline.',

    // Footer
    footer_tagline: 'Died on the bug? Respawn and try again.',
    footer_rights:  'All rights reserved.',
  }
};

/* ── Terminal typing sequences ────────────────────────────────── */
const terminalSequences = {
  pt: [
    'iniciando sistema...',
    'carregando módulos...',
    'Python ✓  Flask ✓  SQL ✓',
    'sistema pronto.',
  ],
  en: [
    'initializing system...',
    'loading modules...',
    'Python ✓  Flask ✓  SQL ✓',
    'system ready.',
  ]
};

/* ── Estado global ────────────────────────────────────────────── */
let currentLang = 'pt';

/* ── Aplica traduções no DOM ──────────────────────────────────── */
function applyTranslations(lang) {
  const t = i18n[lang];
  if (!t) return;

  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  document.documentElement.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
}

/* ── Sistema de idiomas ───────────────────────────────────────── */
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) return;

      currentLang = lang;

      // Atualiza todos os botões
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });

      // Aplica traduções
      applyTranslations(lang);

      // Reinicia o terminal com a sequência correta
      restartTerminal(lang);
    });
  });
}

/* ── Efeito de digitação no terminal ─────────────────────────── */
let terminalTimeout = null;

function typeTerminal(lang) {
  const el = document.getElementById('terminal-text');
  if (!el) return;

  const sequences = terminalSequences[lang] || terminalSequences.pt;
  let seqIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let pause = false;

  function tick() {
    const current = sequences[seqIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        // Pausa no fim da palavra
        pause = true;
        terminalTimeout = setTimeout(() => {
          pause = false;
          isDeleting = true;
          tick();
        }, 1800);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        seqIndex = (seqIndex + 1) % sequences.length;
      }
    }

    const speed = isDeleting ? 40 : (charIndex === 1 ? 300 : 55);
    terminalTimeout = setTimeout(tick, speed);
  }

  tick();
}

function restartTerminal(lang) {
  if (terminalTimeout) clearTimeout(terminalTimeout);
  const el = document.getElementById('terminal-text');
  if (el) el.textContent = '';
  setTimeout(() => typeTerminal(lang), 400);
}

/* ── Navbar scroll ────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Hamburger menu ───────────────────────────────────────────── */
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fecha ao clicar em link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });
}

/* ── Animações de entrada (IntersectionObserver) ─────────────── */
function initScrollAnimations() {
  const targets = document.querySelectorAll(
    '.svc-card, .stat-card, .diff-item, .section-header, .diff-left, .diff-right, .cta-inner'
  );

  targets.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}

/* ── Hero content entrance ────────────────────────────────────── */
function initHeroEntrance() {
  const elements = [
    '.hero-badge',
    '.terminal-bar',
    '.hero-title',
    '.hero-sub',
    '.hero-ctas',
    '.hero-meta',
    '.hero-visual',
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
    }, 200 + i * 100);
  });
}

/* ── Partículas flamejantes ao redor da foto ──────────────────── */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W = canvas.offsetWidth;
  let H = canvas.offsetHeight;
  canvas.width  = W;
  canvas.height = H;

  // Centro do hex (relativo ao canvas, que tem inset: -60px)
  const cx = W / 2;
  const cy = H / 2;

  // Raio aproximado do hex
  const hexR = Math.min(W, H) * 0.36;

  // Paleta flamejante: azul-roxo com flashes brancos
  const colors = [
    'rgba(78, 27, 196, A)',   // blue
    'rgba(27, 24, 115, A)',   // midnight
    'rgba(130, 70, 255, A)',  // lilás
    'rgba(180, 130, 255, A)', // lavanda
    'rgba(250, 255, 242, A)', // sugar (faísca)
  ];

  class Particle {
    constructor() { this.reset(true); }

    reset(initial = false) {
      // Posição: ao longo do contorno do hex
      const angle   = Math.random() * Math.PI * 2;
      const spread  = hexR * (0.85 + Math.random() * 0.25);
      this.x  = cx + Math.cos(angle) * spread;
      this.y  = cy + Math.sin(angle) * spread;

      // Velocidade: sobe e se afasta do centro
      const outward = 0.2 + Math.random() * 0.5;
      this.vx = Math.cos(angle) * outward * (Math.random() > 0.5 ? 1 : -1) * 0.4;
      this.vy = -(0.5 + Math.random() * 1.2); // sobe

      // Visual
      this.size    = initial ? Math.random() * 2.5 : 1 + Math.random() * 2.5;
      this.alpha   = initial ? Math.random() * 0.8 : 0.8 + Math.random() * 0.2;
      this.decay   = 0.008 + Math.random() * 0.014;
      this.color   = colors[Math.floor(Math.random() * colors.length)];
      this.flicker = Math.random() > 0.75; // algumas faíscas piscam

      // Vida inicial aleatória pro efeito não começar todo junto
      if (initial) this.alpha *= Math.random();
    }

    update() {
      this.x     += this.vx;
      this.y     += this.vy;
      this.vy    -= 0.012; // aceleração pra cima (chama sobe)
      this.vx    *= 0.98;  // resistência lateral
      this.alpha -= this.decay;
      this.size  *= 0.993;
      if (this.flicker) this.alpha += (Math.random() - 0.5) * 0.04;
    }

    draw() {
      if (this.alpha <= 0) return;
      const a = Math.max(0, Math.min(1, this.alpha));
      ctx.save();
      ctx.globalAlpha = a;
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0.3, this.size), 0, Math.PI * 2);
      ctx.fillStyle = this.color.replace('A', a.toFixed(2));

      // Partículas maiores têm glow
      if (this.size > 1.5) {
        ctx.shadowColor  = this.color.replace('A', '0.9');
        ctx.shadowBlur   = 8;
      }
      ctx.fill();
      ctx.restore();
    }

    isDead() { return this.alpha <= 0 || this.size < 0.2; }
  }

  const POOL = 120;
  const particles = Array.from({ length: POOL }, () => new Particle());

  let raf;
  function loop() {
    ctx.clearRect(0, 0, W, H);

    // Emite novas partículas pra repor as mortas
    const dead = particles.filter(p => p.isDead());
    dead.forEach(p => p.reset());

    particles.forEach(p => { p.update(); p.draw(); });
    raf = requestAnimationFrame(loop);
  }

  loop();

  // Responsivo
  const ro = new ResizeObserver(() => {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width  = W;
    canvas.height = H;
  });
  ro.observe(canvas);

  // Para animação quando fora da tela (performance)
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) raf = requestAnimationFrame(loop);
      else cancelAnimationFrame(raf);
    });
  });
  io.observe(canvas);
}


document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  initLangToggle();
  initNavbar();
  initHamburger();
  initScrollAnimations();

  // Pequeno delay antes de iniciar o terminal (espera a entrada da hero)
  setTimeout(() => typeTerminal(currentLang), 900);

  // Entrance da hero
  initHeroEntrance();

  // Partículas flamejantes na foto
  initParticles();
});