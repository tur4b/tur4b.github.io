(function () {
  'use strict';

  /* ============================================================
     Experience Data
     ============================================================ */
  const EXPERIENCES = [
    {
      company: 'EPAM Systems',
      role: 'Software Engineer',
      start: '2026-04',
      end: null,
      location: 'Baku, Azerbaijan (Remote)',
      project: 'Restaurant Booking Application — "Green & Tasty" restaurant network',
      bullets: [
        'Initially built and deployed as a serverless AWS Lambda app (Java 17 + Syndicate); later migrated to Spring Boot 3 on an internal KubeRocketCI-based Kubernetes environment.',
        'Implemented the persistence layer using MongoDB and AWS DynamoDB for menu items, customer data, orders, and reservations.',
        'Integrated AWS SQS initially, then migrated to RabbitMQ for async event processing (order notifications, email triggers).',
        'Configured AWS SES for transactional emails (order confirmations, email verification).',
        'Managed schema versioning and migrations with Liquibase for consistent multi-environment deployments.',
        'Supported deployment of containerized services to Kubernetes via KubeRocketCI CI/CD pipelines.',
        'Implemented authentication and role-based authorization with Spring Security, including Google social login and CAPTCHA-protected sign-up.',
        'Designed RESTful APIs for front-end integration.',
        'Wrote unit tests with JUnit 5 and Mockito.',
        'Participated in code reviews, sprint planning, and Agile ceremonies.',
      ],
      tags: ['Java 17', 'Spring Boot 3', 'AWS Lambda', 'DynamoDB', 'MongoDB', 'RabbitMQ', 'SES', 'Kubernetes', 'Liquibase', 'Spring Security'],
      current: true,
    },
    {
      company: 'Ultra Technologies',
      role: 'Software Engineer',
      start: '2024-04',
      end: '2025-09',
      location: 'Baku, Azerbaijan',
      project: 'Eduman — Academic Management System (digitizes student enrollment, course management, grading, and role-based access)',
      bullets: [
        'Developed and integrated RESTful APIs connecting back-end services with front-end UIs.',
        'Optimized database interactions using ORM-based persistence (Hibernate/JPA), ensuring data integrity and performance.',
        'Drove feature development, resolved critical bugs, and maintained clean, well-documented code.',
        'Implemented a JWT-based security system covering authentication, authorization, and token revocation.',
        'Optimized entity relationships under performance constraints via refined lazy/eager loading and indexing strategies.',
        'Balanced API security with usability via a lightweight JWT layer with fine-grained roles.',
      ],
      tags: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate/JPA', 'REST APIs', 'Oracle DB'],
      current: false,
    },
    {
      company: 'Crocusoft MMC',
      role: 'Java Developer',
      start: null,
      end: null,
      location: 'Baku, Azerbaijan',
      project: null,
      bullets: [
        'Contributed to development and maintenance of Java-based applications using the Spring framework, following enterprise software standards.',
        'Supported system stability by assisting in writing and executing unit and integration tests.',
      ],
      tags: ['Java', 'Spring Boot', 'JUnit'],
      current: false,
    },
  ];

  /* ============================================================
     Utility: Compute Duration in Months
     ============================================================ */
  function parseDateToMonths(yyyymm) {
    if (!yyyymm) return null;
    const [y, m] = yyyymm.split('-').map(Number);
    return y * 12 + m;
  }

  function computeDurationMonths(start, end) {
    const s = parseDateToMonths(start);
    if (s === null) return 8; // default for undated entries
    const now = new Date();
    const eMonths = end
      ? parseDateToMonths(end)
      : now.getFullYear() * 12 + now.getMonth() + 1;
    return Math.max(1, eMonths - s);
  }

  function formatDateRange(start, end) {
    if (!start) return 'Baku, Azerbaijan';
    const fmt = (yyyymm) => {
      const [y, m] = yyyymm.split('-').map(Number);
      return new Date(y, m - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };
    return `${fmt(start)} — ${end ? fmt(end) : 'Present'}`;
  }

  /* ============================================================
     1. Particle / Constellation Canvas
     ============================================================ */
  function initParticles() {
    let rafId;

    // Pause when hero not in view (perf)
    const heroSection = document.getElementById('hero');
    const pauseObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // if (!rafId) { rafId = requestAnimationFrame(draw); }
        } else {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      });
    });
    pauseObserver.observe(heroSection);
  }

  /* ============================================================
     2. Custom Cursor
     ============================================================ */
  function initCursor() {
    if ('ontouchstart' in window) return; // touch device: hide

    const dot = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let rx = 0, ry = 0, mx = 0, my = 0;
    let rafId;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
    });

    function lerpRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
      rafId = requestAnimationFrame(lerpRing);
    }
    lerpRing();

    document.querySelectorAll('a, button, .skill-pill, .highlight-card').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        dot.classList.add('cursor--hover');
        ring.classList.add('cursor--hover');
      });
      el.addEventListener('mouseleave', () => {
        dot.classList.remove('cursor--hover');
        ring.classList.remove('cursor--hover');
      });
    });
  }

  /* ============================================================
     3. Typewriter
     ============================================================ */
  function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const phrases = [
      'Backend-Focused Java Developer',
      'Java Engineer',
      'Cloud-Native Systems Builder',
    ];

    let phraseIdx = 0, charIdx = 0, deleting = false;

    function tick() {
      const phrase = phrases[phraseIdx];

      if (!deleting) {
        charIdx++;
        el.textContent = phrase.slice(0, charIdx);
        if (charIdx === phrase.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
        setTimeout(tick, 55);
      } else {
        charIdx--;
        el.textContent = phrase.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, 300);
          return;
        }
        setTimeout(tick, 28);
      }
    }

    setTimeout(tick, 900);
  }

  /* ============================================================
     4. Timeline Builder
     ============================================================ */
  function buildTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;

    const PX_PER_MONTH = 9;
    const MIN_SEGMENT = 90;

    EXPERIENCES.forEach((exp, idx) => {
      const months = computeDurationMonths(exp.start, exp.end);
      const segH = Math.max(MIN_SEGMENT, months * PX_PER_MONTH);
      const isLast = idx === EXPERIENCES.length - 1;

      const entry = document.createElement('div');
      entry.className = 'timeline-entry';
      entry.setAttribute('data-idx', idx);

      // Left/right side (card)
      const side = document.createElement('div');
      side.className = 'timeline-side';

      const card = document.createElement('div');
      card.className = 'timeline-card';

      // Company row
      const companyRow = document.createElement('div');
      companyRow.className = 'card-company-row';

      const companyEl = document.createElement('div');
      companyEl.className = 'card-company';
      companyEl.textContent = exp.company;
      companyRow.appendChild(companyEl);

      if (exp.current) {
        const badge = document.createElement('span');
        badge.className = 'present-badge';
        badge.textContent = 'Present';
        companyRow.appendChild(badge);
      }
      card.appendChild(companyRow);

      const roleEl = document.createElement('div');
      roleEl.className = 'card-role';
      roleEl.textContent = exp.role;
      card.appendChild(roleEl);

      const metaEl = document.createElement('div');
      metaEl.className = 'card-meta';
      metaEl.textContent = `${formatDateRange(exp.start, exp.end)} · ${exp.location}`;
      card.appendChild(metaEl);

      if (exp.project) {
        const projEl = document.createElement('div');
        projEl.className = 'card-project';
        projEl.textContent = exp.project;
        card.appendChild(projEl);
      }

      const bulletsEl = document.createElement('ul');
      bulletsEl.className = 'card-bullets';
      exp.bullets.forEach((b) => {
        const li = document.createElement('li');
        li.textContent = b;
        bulletsEl.appendChild(li);
      });
      card.appendChild(bulletsEl);

      const tagsEl = document.createElement('div');
      tagsEl.className = 'card-tags';
      exp.tags.forEach((t) => {
        const pill = document.createElement('span');
        pill.className = 'tag-pill';
        pill.textContent = t;
        tagsEl.appendChild(pill);
      });
      card.appendChild(tagsEl);

      // Mark each card section for staggered child reveal
      [...card.children].forEach((child) => child.classList.add('card-child'));

      side.appendChild(card);

      // Node + segment column
      const nodeWrap = document.createElement('div');
      nodeWrap.className = 'timeline-node-wrap';

      const node = document.createElement('div');
      node.className = 'timeline-node' + (exp.current ? ' current' : '');
      if (exp.current) node.classList.add('ping-loop');
      nodeWrap.appendChild(node);

      if (!isLast) {
        const line = document.createElement('div');
        line.className = 'timeline-line';
        line.style.height = segH + 'px';
        const fill = document.createElement('div');
        fill.className = 'timeline-line-fill';
        line.appendChild(fill);
        nodeWrap.appendChild(line);
      }

      entry.appendChild(side);
      entry.appendChild(nodeWrap);

      // Clone side placeholder for the other half (flex symmetry)
      const phantom = document.createElement('div');
      phantom.className = 'timeline-side';
      entry.appendChild(phantom);

      container.appendChild(entry);
    });
  }

  /* ============================================================
     5. IntersectionObserver: Timeline Reveal
     ============================================================ */
  function initTimelineReveal() {
    const entries = document.querySelectorAll('.timeline-entry');
    if (!entries.length) return;

    const observer = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (!item.isIntersecting) return;
        const entry = item.target;
        if (entry.dataset.revealed) return;
        entry.dataset.revealed = '1';

        const node = entry.querySelector('.timeline-node');
        const fill = entry.querySelector('.timeline-line-fill');
        const card = entry.querySelector('.timeline-card');

        // 1. Node springs in immediately
        if (node) node.classList.add('node-entered');

        // 2. Sonar ping fires after node has popped in
        setTimeout(() => {
          if (node && !node.classList.contains('ping-loop')) {
            node.classList.add('ping-once');
          }
        }, 300);

        // 3. Spine line begins drawing
        setTimeout(() => {
          if (fill) fill.classList.add('revealed');
        }, 350);

        // 4. Card sweeps in with 3D depth
        setTimeout(() => {
          if (card) card.classList.add('revealed');
        }, 600);

        // 5. Card children stagger in row by row
        const children = card ? card.querySelectorAll('.card-child') : [];
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('child-in'), 900 + i * 75);
        });

        observer.unobserve(entry);
      });
    }, { threshold: 0.25 });

    entries.forEach((e) => observer.observe(e));
  }

  /* ============================================================
     6. IntersectionObserver: Generic Reveal (.reveal)
     ============================================================ */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver((items) => {
      items.forEach((item, i) => {
        if (!item.isIntersecting) return;
        const el = item.target;
        // Stagger siblings
        const siblings = el.parentElement ? [...el.parentElement.children] : [el];
        const idx = siblings.indexOf(el);
        setTimeout(() => el.classList.add('revealed'), idx * 80);
        observer.unobserve(el);
      });
    }, { threshold: 0.15 });

    els.forEach((el) => observer.observe(el));
  }

  /* ============================================================
     7. Scroll-spy Navbar
     ============================================================ */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[data-section]');
    if (!sections.length || !navLinks.length) return;

    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => {
            a.classList.toggle('active', a.dataset.section === entry.target.id);
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach((s) => spy.observe(s));
  }

  /* ============================================================
     8. Sticky Navbar (scrolled class)
     ============================================================ */
  function initStickyNav() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          navbar.classList.toggle('scrolled', window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ============================================================
     9. Mobile Hamburger
     ============================================================ */
  function initHamburger() {
    const btn = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('nav-links');
    if (!btn || !navbar) return;

    btn.addEventListener('click', () => {
      const open = navbar.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open);
    });

    // Close on link click
    if (navLinks) {
      navLinks.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
          navbar.classList.remove('nav-open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navbar.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ============================================================
     10. Hero Photo 3D Tilt
     ============================================================ */
  function initPhotoTilt() {
    if ('ontouchstart' in window) return;
    const wrap = document.getElementById('hero-photo');
    if (!wrap) return;

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      wrap.style.transform = `perspective(600px) rotateY(${dx * 12}deg) rotateX(${-dy * 12}deg)`;
    });

    wrap.addEventListener('mouseleave', () => {
      wrap.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
    });
  }

  /* ============================================================
     11. Page Load Animation
     ============================================================ */
  function initPageLoad() {
    document.body.classList.add('loaded');
  }

  /* ============================================================
     Bootstrap
     ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    // Respect reduced motion — skip heavy effects
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    buildTimeline();

    if (!reduced) {
      initParticles();
      initCursor();
      initTypewriter();
    } else {
      // Still show a static role label
      const tw = document.getElementById('typewriter');
      if (tw) tw.textContent = 'Backend-Focused Java Developer';
    }

    initTimelineReveal();
    initReveal();
    initScrollSpy();
    initStickyNav();
    initHamburger();

    if (!reduced) {
      initPhotoTilt();
    }

    // Short rAF delay so CSS transitions fire properly after DOM paint
    requestAnimationFrame(() => requestAnimationFrame(initPageLoad));
  });

})();
