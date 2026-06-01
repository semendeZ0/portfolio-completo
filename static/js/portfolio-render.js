/* ═══════════════════════════════════════════════════════════════════
   DEV RESPAWN — portfolio-render.js
   Renderização de cards do portfólio via fetch() do JSON estático
   Compatível com hospedagem estática (Vercel/Netlify) sem Flask/Jinja.
═══════════════════════════════════════════════════════════════════ */

(function () {
  const PF_ROOT_ID = 'pf-projects-root';
  const PF_EMPTY_ID = 'pf-empty-state';

  const PF_IMAGE_BASE = './static/';
  const DEFAULT_PLACEHOLDER_IMAGE = '';

  let pfProjectsCache = null;

  function getElement(id) {
    return document.getElementById(id);
  }

  async function loadProjectsJson() {
    if (pfProjectsCache) return pfProjectsCache;

    const res = await fetch('./static/data/projects.json', { method: 'GET' });
    if (!res.ok) throw new Error('Failed to load static/data/projects.json');

    pfProjectsCache = await res.json();
    return pfProjectsCache;
  }

  function safeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function normalizeProjectForCards(project, index) {
    const stack = safeArray(project?.stack);
    const imageRel = typeof project?.imagem === 'string' ? project.imagem : '';
    const imageSrc = imageRel ? (PF_IMAGE_BASE + imageRel) : DEFAULT_PLACEHOLDER_IMAGE;

    return {
      index,
      titulo: typeof project?.titulo === 'string' ? project.titulo : (typeof project?.titilo === 'string' ? project.titilo : ''),
      descricao: typeof project?.descricao === 'string' ? project.descricao : '',
      categoria: typeof project?.categoria === 'string' ? project.categoria : '',
      stack,
      imagem: imageSrc,
      url_demo: typeof project?.url_demo === 'string' ? project.url_demo : '',
      url_github: typeof project?.url_github === 'string' ? project.url_github : '',
      destaque: Boolean(project?.destaque),
      titulo_en: typeof project?.titulo_en === 'string' ? project.titulo_en : undefined,
      descricao_en: typeof project?.descricao_en === 'string' ? project.descricao_en : undefined,
      categoria_en: typeof project?.categoria_en === 'string' ? project.categoria_en : undefined,
      stack_en: safeArray(project?.stack_en),
    };
  }

  function createProjectCard(project, isFeatured, index) {
    const card = document.createElement('div');

    // ✅ Corrigido: featured NÃO recebe pf-card--grid
    if (isFeatured) {
      card.className = 'pf-card pf-card--featured';
    } else {
      card.className = 'pf-card pf-card--grid';
    }

    card.setAttribute('data-category', (project.categoria || '').toString());

    card.innerHTML = `
      <div class="pf-card-img-wrap">
        <img class="pf-card-img" alt="" src="${project.imagem || ''}">
        <div class="pf-card-scan"></div>
        <div class="pf-card-glow"></div>

        <div class="pf-hud-badge">
          <span class="pf-hud-index">#${String(index + 1).padStart(2, '0')}</span>
          <span class="pf-hud-cat">${(project.categoria || '').toUpperCase()}</span>
        </div>

        <div class="pf-card-overlay">
          <div class="pf-overlay-actions">
            ${project.url_demo ? `<a class="pf-overlay-btn" href="${project.url_demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
            ${project.url_github ? `<a class="pf-overlay-btn pf-overlay-btn--ghost" href="${project.url_github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
          </div>

          <div class="pf-stack pf-stack--overlay" aria-label="Stack">
            ${project.stack
              .slice(0, 6)
              .map(s => `<span class="pf-stack-chip">${String(s).toUpperCase()}</span>`)
              .join('')}
          </div>
        </div>
      </div>

      <div class="pf-card-body ${isFeatured ? '' : 'pf-card-body--compact'}">
        <div class="pf-card-index">ARCHIVE ${String(index + 1).padStart(2, '0')}</div>
        <h3 class="pf-card-title">${project.titulo || ''}</h3>
        <div class="pf-card-desc">${project.descricao || ''}</div>

        <div class="pf-stack" aria-label="Stack">
          ${project.stack
            .slice(0, 6)
            .map(s => `<span class="pf-stack-chip">${String(s).toUpperCase()}</span>`)
            .join('')}
        </div>
      </div>
    `.trim();

    return card;
  }

  function clearContainer(root) {
    while (root.firstChild) root.removeChild(root.firstChild);
  }

  function showEmptyState(show) {
    const empty = getElement(PF_EMPTY_ID);
    if (!empty) return;
    empty.style.display = show ? 'block' : 'none';
  }

  async function render() {
    const root = getElement(PF_ROOT_ID);
    if (!root) return;

    const empty = getElement(PF_EMPTY_ID);
    if (empty) empty.style.display = 'none';

    clearContainer(root);

    let projects = [];
    try {
      projects = safeArray(await loadProjectsJson());
    } catch (e) {
      showEmptyState(true);
      document.dispatchEvent(new CustomEvent('pf:projects-render-failed', { detail: { error: String(e) } }));
      return;
    }

    if (!projects.length) {
      showEmptyState(true);
      document.dispatchEvent(new CustomEvent('pf:projects-rendered', { detail: { projects: [] } }));
      return;
    }

    // Featured: apenas quem tem destaque: true
    const featuredProject = projects.find(p => Boolean(p?.destaque));
    const featuredIndex = featuredProject ? projects.indexOf(featuredProject) : -1;

    // Renderiza o featured primeiro (se existir)
    if (featuredProject) {
      const featuredCard = createProjectCard(
        normalizeProjectForCards(featuredProject, featuredIndex),
        true,
        featuredIndex
      );
      root.appendChild(featuredCard);
    }

    // Grid: todos os outros (sem destaque)
    const gridProjects = projects.filter((_, idx) => idx !== featuredIndex);

    gridProjects.forEach((p, gridIdx) => {
      const originalIndex = featuredIndex >= 0 && gridIdx >= featuredIndex ? gridIdx + 1 : gridIdx;
      const project = normalizeProjectForCards(p, originalIndex);
      const card = createProjectCard(project, false, originalIndex);
      root.appendChild(card);
    });

    showEmptyState(false);

    document.dispatchEvent(new CustomEvent('pf:projects-rendered', { detail: { projects } }));
  }

  document.addEventListener('DOMContentLoaded', () => {
    render();
  });
})();