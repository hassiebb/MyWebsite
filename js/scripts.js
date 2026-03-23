/**
 * Portfolio Scripts
 */
(function () {
  'use strict';

  const THEME_KEY = 'portfolio-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const dark = saved === 'dark' || (!saved && prefersDark.matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem(THEME_KEY, isDark ? 'light' : 'dark');
  }

  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  initTheme();

  const techSection = document.getElementById('techSection');
  const creativeSection = document.getElementById('creativeSection');
  const sectionTabs = document.querySelectorAll('.section-tab');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  const techTargets = ['#about', '#skills', '#projects', '#experience', '#education', '#contact'];
  const creativeTargets = ['#about-creative', '#creative-intro', '#photography-intro', '#achievements', '#experience-creative', '#skills-creative', '#contact-creative'];

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

  function updateSidebarHrefs(section) {
    const targets = section === 'tech' ? techTargets : creativeTargets;
    const labels = section === 'tech'
      ? ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']
      : ['About', 'Creative Work', 'Photography', 'Achievements', 'Experience', 'Tools', 'Contact'];
    const links = Array.from(sidebarLinks);
    const extraLink = links.find(l => l.classList.contains('sidebar-link-extra'));
    if (extraLink) extraLink.style.display = section === 'tech' ? 'none' : '';
    const navLinks = section === 'tech' ? links.filter(l => !l.classList.contains('sidebar-link-extra')) : links;
    navLinks.forEach((link, i) => {
      if (targets[i]) {
        link.setAttribute('href', targets[i]);
        link.textContent = labels[i];
      }
    });
  }

  sectionTabs.forEach((tab) => {
    tab.addEventListener('click', () => switchSection(tab.dataset.section));
  });

  function renderSection(section) {
    if (typeof PORTFOLIO_CONFIG === 'undefined') return;
    const data = PORTFOLIO_CONFIG[section];
    if (!data) return;

    document.querySelectorAll(`[data-content="${section}-about"]`).forEach((el) => { el.textContent = data.about || ''; });
    document.querySelectorAll(`[data-content="creative-about"]`).forEach((el) => { el.textContent = PORTFOLIO_CONFIG.creative?.about || ''; });
    document.querySelectorAll(`[data-content="creative-intro"]`).forEach((el) => { el.textContent = PORTFOLIO_CONFIG.creative?.creativeIntro || ''; });
    document.querySelectorAll(`[data-content="photography-intro"]`).forEach((el) => { el.textContent = PORTFOLIO_CONFIG.creative?.photographyIntro || ''; });
    document.querySelectorAll(`[data-content="contact-cta"]`).forEach((el) => { el.textContent = PORTFOLIO_CONFIG.contact?.cta || ''; });
    document.querySelectorAll(`[data-content="contact-cta-creative"]`).forEach((el) => { el.textContent = PORTFOLIO_CONFIG.contact?.cta || ''; });

    const expContainer = document.getElementById(`${section}-experience`);
    if (expContainer && data.experience?.length) {
      expContainer.innerHTML = data.experience.map(exp => renderExperience(exp)).join('');
    }

    const eduData = data.education?.length ? data.education : PORTFOLIO_CONFIG.tech?.education;
    const eduContainer = document.getElementById(`${section}-education`);
    if (eduContainer && eduData?.length) {
      eduContainer.innerHTML = eduData.map(edu => renderEducation(edu)).join('');
    }

    const skillsContainer = document.getElementById(`${section}-skills`);
    if (skillsContainer && data.skills) {
      skillsContainer.innerHTML = renderSkills(data.skills);
    }

    const projContainer = document.getElementById(`${section}-projects`);
    if (projContainer && data.projects?.length) {
      projContainer.innerHTML = `<div class="projects-grid">${data.projects.map(p => renderProject(p)).join('')}</div>`;
    }

    const achievementsEl = document.getElementById('creative-achievements');
    if (achievementsEl && data.achievements?.length) {
      achievementsEl.innerHTML = data.achievements.map(a => `<li><i class="fas fa-check"></i> ${escapeHtml(a)}</li>`).join('');
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
          <span class="experience-meta">${escapeHtml(exp.period)}<br>${escapeHtml(exp.location || '')}</span>
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
        ${meta ? `<div class="education-meta">${escapeHtml(meta)}${edu.gpa ? ` · GPA: ${escapeHtml(edu.gpa)}` : ''}</div>` : ''}
      </div>
    `;
  }

  function renderSkills(skills) {
    if (skills.categories?.length) {
      return skills.categories.map(cat => `
        <div class="skills-category">
          <div class="skills-category-name">${escapeHtml(cat.name)}</div>
          <div class="skills-category-items">${(cat.items || []).map(i => `<span class="skill-tag">${escapeHtml(i)}</span>`).join('')}</div>
        </div>
      `).join('');
    }
    const tools = (skills.tools || []).map(t => `<div class="skill-tool"><i class="${t.icon}"></i><span>${escapeHtml(t.name)}</span></div>`).join('');
    const workflow = (skills.workflow || []).map(w => `<li><i class="fas fa-check"></i> ${escapeHtml(w)}</li>`).join('');
    return `
      <div class="skills-tools">${tools}</div>
      ${workflow ? `<div class="subheading mb-3">Workflow</div><ul class="skills-workflow">${workflow}</ul>` : ''}
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
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

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
  sidebar?.querySelectorAll('.sidebar-link').forEach((link) => link.addEventListener('click', closeMobileNav));

  const allSidebarLinks = document.querySelectorAll('.sidebar-link');

  window.addEventListener('scroll', () => {
    const panel = document.querySelector('.portfolio-section.active');
    if (!panel) return;
    const panelSections = panel.querySelectorAll('.resume-section');
    const scrollY = window.scrollY;
    let currentId = null;
    panelSections.forEach((sec) => {
      const top = sec.offsetTop - 180;
      if (scrollY >= top) currentId = sec.id;
    });
    if (!currentId && panelSections.length) currentId = panelSections[0].id;

    allSidebarLinks.forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentId}`);
    });
  }, { passive: true });

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

  // Scroll-triggered section animations
  function initScrollAnimations() {
    const sections = document.querySelectorAll('.resume-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    sections.forEach((sec) => observer.observe(sec));
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof PORTFOLIO_CONFIG !== 'undefined') {
      document.querySelectorAll('[data-content="tech-about"]').forEach((el) => { el.textContent = PORTFOLIO_CONFIG.tech?.about || ''; });
      document.querySelectorAll('[data-content="creative-about"]').forEach((el) => { el.textContent = PORTFOLIO_CONFIG.creative?.about || ''; });
      document.querySelectorAll('[data-content="creative-intro"]').forEach((el) => { el.textContent = PORTFOLIO_CONFIG.creative?.creativeIntro || ''; });
      document.querySelectorAll('[data-content="photography-intro"]').forEach((el) => { el.textContent = PORTFOLIO_CONFIG.creative?.photographyIntro || ''; });
      document.querySelectorAll('[data-content="contact-cta"]').forEach((el) => { el.textContent = PORTFOLIO_CONFIG.contact?.cta || ''; });
      document.querySelectorAll('[data-content="contact-cta-creative"]').forEach((el) => { el.textContent = PORTFOLIO_CONFIG.contact?.cta || ''; });

      const techExp = document.getElementById('tech-experience');
      if (techExp && PORTFOLIO_CONFIG.tech?.experience?.length) techExp.innerHTML = PORTFOLIO_CONFIG.tech.experience.map(renderExperience).join('');
      const techEdu = document.getElementById('tech-education');
      if (techEdu && PORTFOLIO_CONFIG.tech?.education?.length) techEdu.innerHTML = PORTFOLIO_CONFIG.tech.education.map(renderEducation).join('');
      const techSkills = document.getElementById('tech-skills');
      if (techSkills && PORTFOLIO_CONFIG.tech?.skills) techSkills.innerHTML = renderSkills(PORTFOLIO_CONFIG.tech.skills);
      const techProj = document.getElementById('tech-projects');
      if (techProj && PORTFOLIO_CONFIG.tech?.projects?.length) techProj.innerHTML = `<div class="projects-grid">${PORTFOLIO_CONFIG.tech.projects.map(renderProject).join('')}</div>`;

      const creExp = document.getElementById('creative-experience');
      if (creExp && PORTFOLIO_CONFIG.creative?.experience?.length) creExp.innerHTML = PORTFOLIO_CONFIG.creative.experience.map(renderExperience).join('');
      const creSkills = document.getElementById('creative-skills');
      if (creSkills && PORTFOLIO_CONFIG.creative?.skills) creSkills.innerHTML = renderSkills(PORTFOLIO_CONFIG.creative.skills);
      const achievements = document.getElementById('creative-achievements');
      if (achievements && PORTFOLIO_CONFIG.creative?.achievements?.length) achievements.innerHTML = PORTFOLIO_CONFIG.creative.achievements.map(a => `<li><i class="fas fa-check"></i> ${escapeHtml(a)}</li>`).join('');

      updateSidebarHrefs('tech');
    }
    initScrollAnimations();
  });
})();
