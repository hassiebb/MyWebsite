/**
 * Portfolio Scripts
 * Dark mode, section switching, dynamic content from config
 */
(function () {
  'use strict';

  // ===== Dark Mode =====
  const THEME_KEY = 'portfolio-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const dark = saved === 'dark' || (!saved && prefersDark.matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    return dark;
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
  }

  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  initTheme();

  // ===== Section Switching =====
  const techSection = document.getElementById('techSection');
  const creativeSection = document.getElementById('creativeSection');
  const sectionTabs = document.querySelectorAll('.section-tab');

  function switchSection(section) {
    const isTech = section === 'tech';
    techSection?.classList.toggle('active', isTech);
    creativeSection?.classList.toggle('active', !isTech);
    creativeSection?.setAttribute('hidden', isTech ? '' : null);
    sectionTabs.forEach((tab) => {
      const active = tab.dataset.section === section;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active);
    });
    renderSection(section);
    updateSidebarHrefs(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  sectionTabs.forEach((tab) => {
    tab.addEventListener('click', () => switchSection(tab.dataset.section));
  });

  // ===== Render Content from Config =====
  function renderSection(section) {
    if (typeof PORTFOLIO_CONFIG === 'undefined') return;
    const data = PORTFOLIO_CONFIG[section];
    const profile = PORTFOLIO_CONFIG.profile;
    if (!data) return;

    // About
    const aboutEl = document.querySelector(`[data-content="${section}-about"]`);
    if (aboutEl) aboutEl.textContent = data.about;

    // Experience
    const expContainer = document.getElementById(`${section}-experience`);
    const expEmpty = document.getElementById(`${section}-experience-empty`);
    if (expContainer) {
      if (data.experience && data.experience.length > 0) {
        expContainer.innerHTML = data.experience.map(exp => renderExperience(exp)).join('');
        if (expEmpty) expEmpty.style.display = 'none';
      } else {
        expContainer.innerHTML = '';
        if (expEmpty) expEmpty.style.display = 'block';
      }
    }

    // Education
    const eduData = data.education?.length ? data.education : PORTFOLIO_CONFIG.tech?.education;
    const eduContainer = document.getElementById(`${section}-education`);
    const eduEmpty = document.getElementById(`${section}-education-empty`);
    if (eduContainer) {
      if (eduData && eduData.length > 0) {
        eduContainer.innerHTML = eduData.map(edu => renderEducation(edu)).join('');
        if (eduEmpty) eduEmpty.style.display = 'none';
      } else {
        eduContainer.innerHTML = '';
        if (eduEmpty) eduEmpty.style.display = 'block';
      }
    }

    // Skills
    const skillsContainer = document.getElementById(`${section}-skills`);
    if (skillsContainer && data.skills) {
      skillsContainer.innerHTML = renderSkills(data.skills);
    }

    // Projects
    const projContainer = document.getElementById(`${section}-projects`);
    const projEmpty = document.getElementById(`${section}-projects-empty`);
    if (projContainer) {
      if (data.projects && data.projects.length > 0) {
        projContainer.innerHTML = `<div class="projects-grid">${data.projects.map(p => renderProject(p)).join('')}</div>`;
        if (projEmpty) projEmpty.style.display = 'none';
      } else {
        projContainer.innerHTML = '';
        if (projEmpty) projEmpty.style.display = 'block';
      }
    }
  }

  function renderExperience(exp) {
    const highlights = (exp.highlights || [])
      .map(h => `<li><i class="fas fa-check"></i> ${escapeHtml(h)}</li>`)
      .join('');
    return `
      <div class="experience-item">
        <div class="experience-header">
          <h3 class="experience-title">${escapeHtml(exp.title)}</h3>
          <span class="experience-meta">${escapeHtml(exp.period)}<br>${escapeHtml(exp.location)}</span>
        </div>
        <div class="experience-company">${escapeHtml(exp.company)} · ${escapeHtml(exp.type)}</div>
        <p class="experience-description">${escapeHtml(exp.description)}</p>
        ${highlights ? `<ul class="experience-highlights">${highlights}</ul>` : ''}
        ${exp.skills ? `<div class="experience-skills">${escapeHtml(exp.skills)}</div>` : ''}
      </div>
    `;
  }

  function renderEducation(edu) {
    const meta = [edu.period, edu.expectedGrad ? `Expected: ${edu.expectedGrad}` : ''].filter(Boolean).join(' · ');
    return `
      <div class="education-item">
        <div class="education-degree">${escapeHtml(edu.degree)}</div>
        <div class="education-school">${escapeHtml(edu.school)}${edu.track ? ` · ${escapeHtml(edu.track)}` : ''}</div>
        <div class="education-meta">${escapeHtml(meta)}${edu.gpa ? ` · GPA: ${escapeHtml(edu.gpa)}` : ''}</div>
        ${edu.skills ? `<div class="education-skills">${escapeHtml(edu.skills)}</div>` : ''}
      </div>
    `;
  }

  function renderSkills(skills) {
    const tools = (skills.tools || [])
      .map(t => `<div class="skill-tool"><i class="${t.icon}"></i><span>${escapeHtml(t.name)}</span></div>`)
      .join('');
    const workflow = (skills.workflow || [])
      .map(w => `<li><i class="fas fa-check"></i> ${escapeHtml(w)}</li>`)
      .join('');
    return `
      <div class="skills-tools">${tools}</div>
      <div class="subheading mb-3">Workflow</div>
      <ul class="skills-workflow">${workflow}</ul>
    `;
  }

  function renderProject(p) {
    const links = [];
    if (p.link) links.push(`<a href="${escapeAttr(p.link)}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Demo</a>`);
    if (p.github) links.push(`<a href="${escapeAttr(p.github)}" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>`);
    return `
      <div class="project-item">
        <div class="project-header">
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <span class="project-period">${escapeHtml(p.period)}</span>
        </div>
        <div class="project-type">${escapeHtml(p.type)}</div>
        <p class="project-description">${escapeHtml(p.description)}</p>
        ${links.length ? `<div class="project-links">${links.join('')}</div>` : ''}
      </div>
    `;
  }

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
  function escapeAttr(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // ===== Mobile Sidebar =====
  const sidebar = document.getElementById('sideNav');
  const overlay = document.getElementById('sidebarOverlay');
  const mobileToggle = document.getElementById('mobileNavToggle');

  function openMobileNav() {
    sidebar?.classList.add('mobile-open');
    overlay?.classList.add('active');
    overlay?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    sidebar?.classList.remove('mobile-open');
    overlay?.classList.remove('active');
    overlay?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', () => {
    sidebar?.classList.contains('mobile-open') ? closeMobileNav() : openMobileNav();
  });
  overlay?.addEventListener('click', closeMobileNav);

  sidebar?.querySelectorAll('.sidebar-link').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  // ===== Scroll Spy for Sidebar Links =====
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  window.addEventListener('scroll', () => {
    const panel = document.querySelector('.portfolio-section.active');
    if (!panel) return;
    const panelSections = panel.querySelectorAll('.resume-section');
    const scrollY = window.scrollY;

    let currentId = null;
    panelSections.forEach((sec) => {
      const top = sec.offsetTop - 150;
      if (scrollY >= top) currentId = sec.id;
    });
    if (!currentId && panelSections.length) currentId = panelSections[0].id;

    sidebarLinks.forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentId}`);
    });
  }, { passive: true });

  // ===== Smooth Scroll =====
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== Update sidebar hrefs when switching sections =====
  function updateSidebarHrefs(section) {
    const isTech = section === 'tech';
    const targets = isTech
      ? ['#about', '#experience', '#education', '#skills', '#projects']
      : ['#about-creative', '#experience-creative', '#education-creative', '#skills-creative', '#projects-creative'];
    sidebarLinks.forEach((link, i) => {
      if (targets[i]) link.setAttribute('href', targets[i]);
    });
  }

  // ===== Initial Load =====
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof PORTFOLIO_CONFIG !== 'undefined') {
      renderSection('tech');
      updateSidebarHrefs('tech');
    }
  });
})();
