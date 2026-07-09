    /* ============================================================
       UTILITY FUNCTIONS
    ============================================================ */

    /** Social icon map */
    function getSocialIcon(key) {
      var map = {
        facebook: 'fab fa-facebook-f',
        instagram: 'fab fa-instagram',
        youtube: 'fab fa-youtube',
        linkedin: 'fab fa-linkedin-in',
        github: 'fab fa-github'
      };
      return map[key] || 'fas fa-link';
    }

    /** Skill group icon map */
    function getSkillGroupIcon(groupName) {
      var map = {
        'Programming': 'fas fa-laptop-code',
        'Embedded / Edge': 'fas fa-microchip',
        'Cloud / Database': 'fas fa-database',
        'AI / ML': 'fas fa-brain',
        'Other': 'fas fa-tools'
      };
      return map[groupName] || 'fas fa-star';
    }

    /** Toolkit group icon map */
    function getToolkitIcon(key) {
      var map = {
        ai: 'fas fa-robot',
        technical: 'fas fa-code',
        creative: 'fas fa-palette',
        learning: 'fas fa-graduation-cap'
      };
      return map[key] || 'fas fa-wrench';
    }

    /** Toolkit group label map */
    function getToolkitLabel(key) {
      var map = {
        ai: 'AI Tools',
        technical: 'Technical Tools',
        creative: 'Creative Tools',
        learning: 'Currently Learning'
      };
      return map[key] || key;
    }

    /** Metric icon map */
    function getMetricIcon(key) {
      var k = key.toLowerCase();
      if (k.indexOf('view') > -1 || k.indexOf('reach') > -1) return 'fas fa-eye';
      if (k.indexOf('engage') > -1) return 'fas fa-heart';
      if (k.indexOf('ctr') > -1 || k.indexOf('click') > -1) return 'fas fa-mouse-pointer';
      if (k.indexOf('conver') > -1) return 'fas fa-bullseye';
      if (k.indexOf('roi') > -1 || k.indexOf('revenue') > -1 || k.indexOf('sale') > -1) return 'fas fa-dollar-sign';
      if (k.indexOf('cpa') > -1) return 'fas fa-tag';
      if (k.indexOf('accura') > -1) return 'fas fa-crosshairs';
      if (k.indexOf('time') > -1 || k.indexOf('response') > -1) return 'fas fa-clock';
      if (k.indexOf('stabil') > -1 || k.indexOf('uptime') > -1) return 'fas fa-check-circle';
      if (k.indexOf('effic') > -1 || k.indexOf('energy') > -1) return 'fas fa-bolt';
      if (k.indexOf('alert') > -1) return 'fas fa-bell';
      return 'fas fa-chart-bar';
    }

    /* ============================================================
       RENDER FUNCTIONS
    ============================================================ */
    /** Render TikTok profile cards into a given container (used by dropdown + mobile modal) */
    function renderTikTokProfiles(containerId) {
      var container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = '';
      var profiles = socialData.tiktok;
      for (var i = 0; i < profiles.length; i++) {
        var p = profiles[i];
        var initial = p.title.charAt(0).toUpperCase();
        var card = document.createElement('div');
        card.className = 'dropdown-profile';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', 'Visit ' + p.title + ' on TikTok');
        card.dataset.url = p.url;
        card.innerHTML = '<div class="dropdown-profile-avatar-wrap">' +
            '<img src="' + p.avatar + '" alt="' + p.title + '" loading="eager" />' +
            '<div class="avatar-fb">' + initial + '</div>' +
          '</div>' +
          '<div class="dropdown-profile-info">' +
            '<div class="name">' + p.title + '</div>' +
            '<div class="category">' + p.category + '</div>' +
            '<div class="username">' + p.username + '</div>' +
            '<div class="description">' + p.description + '</div>' +
          '</div>' +
          '<span class="visit-btn">Visit Profile \u2192</span>';
        /* Avatar fallback via JS listener (no inline handler) */
        var avatarImg = card.querySelector('img');
        (function(imgEl) {
          imgEl.addEventListener('error', function() {
            this.parentElement.classList.add('fallback');
          });
        })(avatarImg);
        /* Card click */
        (function(url) {
          card.addEventListener('click', function() { window.open(url, '_blank', 'noopener,noreferrer'); });
        })(p.url);
        container.appendChild(card);
        if (i < profiles.length - 1) {
          var divider = document.createElement('div');
          divider.className = 'dropdown-divider';
          container.appendChild(divider);
        }
      }
    }

    /** Render hero section – avatar, name, socials, stats (bio removed, terminal added) */
    function renderHero() {
      document.getElementById('heroQuote').textContent = quote;
      document.getElementById('heroAvatar').src = personal.avatar;
      document.getElementById('heroAvatar').onerror = function() { handleImageError(this); };
      document.getElementById('heroName').textContent = personal.name;

      /* Social icons (Facebook, LinkedIn, Instagram) */
      var socialsHtml = '';
      var socialEntries = Object.entries(personal.social);
      for (var i = 0; i < socialEntries.length; i++) {
        var platform = socialEntries[i][0];
        var url = socialEntries[i][1];
        socialsHtml += '<a href="' + url + '" class="social-icon social-icon--light" aria-label="' + platform + '" target="_blank" rel="noopener"><i class="' + getSocialIcon(platform) + '"></i></a>';
      }

      /* TikTok trigger icon (dropdown is appended to body by initTikTokDropdown) */
      socialsHtml += '<div class="tiktok-wrapper" id="tiktokWrapper">' +
        '<button class="tiktok-trigger" id="tiktokTrigger" aria-label="TikTok profiles" aria-haspopup="true" aria-expanded="false"><i class="fab fa-tiktok"></i></button>' +
      '</div>';
      document.getElementById('heroSocials').innerHTML = socialsHtml;

      /* Render TikTok profile cards into mobile modal */
      renderTikTokProfiles('tiktokModalProfiles');
    }

    /** Render Capability Cards */
    function renderCapabilities() {
      var grid = document.getElementById('capabilitiesGrid');
      if (!grid) return;
      var html = '';
      for (var i = 0; i < capabilities.length; i++) {
        var cap = capabilities[i];
        html += '<div class="capability-card">' +
                  '<div class="capability-card__icon">' + cap.icon + '</div>' +
                  '<h3 class="capability-card__title">' + cap.title + '</h3>' +
                  '<p class="capability-card__desc">' + cap.desc + '</p>' +
                '</div>';
      }
      grid.innerHTML = html;
    }

    /** Render about section – gallery images and dots */
    function renderAbout() {
      /* Gallery images */
      var galleryEl = document.getElementById('aboutGallery');
      for (var g = 0; g < personal.storyGallery.length; g++) {
        var img = document.createElement('img');
        img.src = personal.storyGallery[g];
        img.alt = 'Story image ' + (g + 1);
        img.loading = 'lazy';
        img.className = g === 0 ? 'active' : 'inactive';
        img.onerror = function() { handleImageError(this); };
        galleryEl.appendChild(img);
      }

      /* Gallery pagination dots */
      var dotsEl = document.getElementById('aboutGalleryDots');
      for (var d = 0; d < personal.storyGallery.length; d++) {
        var dot = document.createElement('button');
        dot.className = 'dot' + (d === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to image ' + (d + 1));
        dot.dataset.index = d;
        dotsEl.appendChild(dot);
      }
    }

    /** Render experience cards – horizontal scroll track */
    function renderExperience() {
      var html = '';
      for (var i = 0; i < experiences.length; i++) {
        var exp = experiences[i];
        var tasksHtml = '';
        var maxPreview = 3;
        var tasksToShow = exp.tasks.slice(0, maxPreview);
        for (var t = 0; t < tasksToShow.length; t++) {
          tasksHtml += '<li>' + tasksToShow[t] + '</li>';
        }
        if (exp.tasks.length > maxPreview) {
          tasksHtml += '<li style="color:var(--primary-dark);font-weight:500">+' + (exp.tasks.length - maxPreview) + ' more</li>';
        }

        var skillsHtml = '';
        var skillsToShow = exp.skills.slice(0, 4);
        for (var s = 0; s < skillsToShow.length; s++) {
          skillsHtml += '<span class="badge" style="font-size:0.7rem;padding:3px 10px">' + skillsToShow[s] + '</span>';
        }
        if (exp.skills.length > 4) {
          skillsHtml += '<span class="badge badge--accent" style="font-size:0.7rem;padding:3px 10px">+' + (exp.skills.length - 4) + '</span>';
        }

        var logoHtml = exp.logoImg
          ? '<div class="exp-card__logo exp-card__logo--img"><img src="' + exp.logoImg + '" alt="' + exp.company + '" loading="lazy" /></div>'
          : '<div class="exp-card__logo" style="background:' + exp.logoColor + '">' + exp.logo + '</div>';

        html += '<div class="exp-card" data-exp-id="' + exp.id + '">' +
          '<div class="exp-card__header">' +
            logoHtml +
            '<div class="exp-card__info"><div class="exp-card__company">' + exp.company + '</div><div class="exp-card__role">' + exp.role + '</div></div>' +
          '</div>' +
          '<div class="exp-card__meta"><span class="badge exp-card__period">' + exp.period + '</span><span class="exp-card__employment">' + exp.employment + '</span></div>' +
          '<ul class="exp-card__tasks">' + tasksHtml + '</ul>' +
          '<div class="exp-card__skills">' + skillsHtml + '</div>' +
          '<button class="exp-card__view-btn" data-exp-id="' + exp.id + '" aria-label="View details for ' + exp.company + '">View Details <i class="fas fa-arrow-right"></i></button>' +
        '</div>';
      }
      document.getElementById('experienceTrack').innerHTML = html;
    }

    /** Render projects grid – masonry layout */
    function renderProjects() {
      var html = '';
      for (var i = 0; i < projects.length; i++) {
        var proj = projects[i];
        html += '<div class="project-card" data-project-id="' + proj.id + '" role="button" tabindex="0" aria-label="View details for ' + proj.title + '">' +
          '<img src="' + proj.thumbnail + '" alt="' + proj.title + '" class="project-card__image" loading="lazy" onerror="handleImageError(this)" />' +
          '<div class="project-card__overlay">' +
            '<div class="project-card__icon"><i class="fas fa-search-plus"></i></div>' +
            '<div class="project-card__title">' + proj.title + '</div>' +
            '<div class="project-card__desc">' + proj.description + '</div>' +
          '</div>' +
        '</div>';
      }
      document.getElementById('projectsGrid').innerHTML = html;
    }


    /** Render toolkit groups – AI, Technical, Creative, Learning */
    function renderToolkit() {
      var html = '';
      var keys = Object.keys(toolkit);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var items = toolkit[key];
        var tagsHtml = '';
        for (var j = 0; j < items.length; j++) {
          tagsHtml += '<span class="badge">' + items[j] + '</span>';
        }
        html += '<div class="toolkit__group">' +
          '<div class="toolkit__group-title"><i class="' + getToolkitIcon(key) + '"></i> ' + getToolkitLabel(key) + '</div>' +
          '<div class="toolkit__tags">' + tagsHtml + '</div>' +
        '</div>';
      }
      document.getElementById('toolkitGroups').innerHTML = html;
    }

    /** Render skills with animated progress bars */
    function renderSkills() {
      var html = '';
      var groups = Object.keys(skills);
      for (var i = 0; i < groups.length; i++) {
        var groupName = groups[i];
        var items = skills[groupName];
        var itemsHtml = '';
        for (var j = 0; j < items.length; j++) {
          itemsHtml += '<div class="skill__item">' +
            '<div class="skill__header"><span class="skill__name">' + items[j].name + '</span><span class="skill__level">' + items[j].level + '%</span></div>' +
            '<div class="skill__bar"><div class="skill__bar-fill" style="--level:' + items[j].level + '%"></div></div>' +
          '</div>';
        }
        html += '<div class="skills__group">' +
          '<div class="skills__group-title"><i class="' + getSkillGroupIcon(groupName) + '"></i> ' + groupName + '</div>' +
          itemsHtml +
        '</div>';
      }
      document.getElementById('skillsGrid').innerHTML = html;
    }

    /** Render education, certifications, and languages */
    function renderEducation() {
      /* Left column: Education card */
      var leftHtml = '<div class="edu-card">' +
        '<div class="edu-card__icon"><i class="fas fa-graduation-cap"></i></div>' +
        '<div class="edu-card__degree">' + education.degree + '</div>' +
        '<div class="edu-card__school">' + education.school + '</div>' +
        '<div class="edu-card__period">' + education.period + '</div>' +
        '<p class="edu-card__desc">' + education.description + '</p>' +
      '</div>';

      /* Right column: Certifications (USAID only) */
      var rightHtml = '<div style="font-family:var(--font-heading);font-weight:600;font-size:1rem;margin-bottom:16px;color:var(--text-primary)"><i class="fas fa-certificate" style="color:var(--primary);margin-right:8px"></i>Certifications</div>';
      rightHtml += '<div class="cert-card">' +
        '<div class="cert-card__icon"><i class="fas fa-award"></i></div>' +
        '<div><div class="cert-card__name">USAID BUILT-IT DOW VIETNAM STEM PROGRAM</div><div class="cert-card__issuer">USAID \u00b7 2022</div></div>' +
      '</div>';

      /* Currently Learning block */
      var learningItems = [
        { name: 'Generative AI: Foundation Models and Platforms', issuer: 'IBM', year: '2025 (In Progress)' },
        { name: 'Introduction to Neural Networks and PyTorch', issuer: 'IBM', year: '2026 (In Progress)' },
        { name: 'Introduction to DevOps', issuer: 'IBM', year: '2026 (In Progress)' },
        { name: 'Introduction to Git and GitHub', issuer: 'Google', year: '2026 (In Progress)' }
      ];
      rightHtml += '<div style="font-family:var(--font-heading);font-weight:600;font-size:1rem;margin-top:24px;margin-bottom:16px;color:var(--text-primary)">' +
        '\uD83D\uDCDA Currently Learning</div>';
      for (var cl = 0; cl < learningItems.length; cl++) {
        rightHtml += '<div class="cert-card">' +
          '<div class="cert-card__icon"><i class="fas fa-award"></i></div>' +
          '<div><div class="cert-card__name">' + learningItems[cl].name + '</div>' +
          '<div class="cert-card__issuer">' + learningItems[cl].issuer + ' \u00b7 ' + learningItems[cl].year + '</div></div>' +
        '</div>';
      }

      /* Languages */
      rightHtml += '<div style="font-family:var(--font-heading);font-weight:600;font-size:1rem;margin-top:24px;margin-bottom:12px;color:var(--text-primary)"><i class="fas fa-language" style="color:var(--primary);margin-right:8px"></i>Languages</div>';
      var langLevels = {
        'Vietnamese': 'Native',
        'English': 'Conversational (Able to communicate fluently in everyday and professional discussions.)'
      };
      for (var l = 0; l < languages.length; l++) {
        var langLevel = langLevels[languages[l].name] || languages[l].level;
        rightHtml += '<div class="lang-card" style="margin-bottom:10px">' +
          '<div class="lang-card__icon">' + (languages[l].name === 'Vietnamese' ? '\uD83C\uDDFB\uD83C\uDDF3' : '\uD83C\uDDFA\uD83C\uDDF8') + '</div>' +
          '<div><div class="lang-card__name">' + languages[l].name + '</div><div class="lang-card__level">' + langLevel + '</div></div>' +
        '</div>';
      }

      document.getElementById('educationGrid').innerHTML =
        '<div class="education__left">' + leftHtml + '</div>' +
        '<div class="education__right">' + rightHtml + '</div>';
    }

    /** Render footer – CTA buttons and availability */
    function renderFooter() {
      /* Contact info */
      var contactHtml = '<div class="footer__contact-item"><i class="fas fa-envelope"></i> ' + personal.email + '</div>' +
        '<div class="footer__contact-item"><i class="fas fa-phone"></i> ' + personal.phone + '</div>' +
        '<div class="footer__contact-item"><i class="fas fa-map-marker-alt"></i> ' + personal.location + '</div>';
      document.getElementById('footerContact').innerHTML = contactHtml;

      /* CTA buttons */
      var ctaHtml = '<a href="https://mail.google.com/mail/?view=cm&fs=1&to=vannghi2712@gmail.com&su=Collaboration%20Opportunity&body=Hi%20Louise,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding..." class="btn btn--outline" aria-label="Send Email" target="_blank" rel="noopener noreferrer">' +
        '\uD83D\uDCE7 Send Email \u2192</a>' +
        '<a href="https://www.linkedin.com/in/van-nghi-nguyen-6b5081322/" class="btn btn--outline" aria-label="Connect on LinkedIn" target="_blank" rel="noopener noreferrer">' +
        '\uD83D\uDCBC Connect on LinkedIn \u2192</a>' +
        '<a href="resume/Van-Nghi-Nguyen-CV.pdf" class="btn btn--outline" aria-label="Download Resume" target="_blank" rel="noopener noreferrer">' +
        '\uD83D\uDCC4 Download Resume \u2192</a>';
      document.getElementById('footerSocials').innerHTML = ctaHtml;

      /* Availability caption */
      document.getElementById('footerAvailability').textContent = 'Currently open to AI, Creative Technology, and Digital Marketing opportunities.';
    }

    /* --- Hamburger Menu --- */
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('navMenu');
    var menuBackdrop = document.getElementById('menuBackdrop');

    function toggleMenu() {
      hamburger.classList.toggle('navbar__hamburger--active');
      navMenu.classList.toggle('navbar__menu--active');
      menuBackdrop.classList.toggle('menu-backdrop--active');
      var isOpen = navMenu.classList.contains('navbar__menu--active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    }

    hamburger.addEventListener('click', toggleMenu);
    menuBackdrop.addEventListener('click', toggleMenu);

    /* Close menu on nav link click */
    var navLinks = document.querySelectorAll('.navbar__link');
    for (var nl = 0; nl < navLinks.length; nl++) {
      navLinks[nl].addEventListener('click', function() {
        if (navMenu.classList.contains('navbar__menu--active')) toggleMenu();
      });
    }

    /* --- Dark Mode --- */
    var darkToggle = document.getElementById('darkToggle');
    var isDark = false;

    function setDarkMode(dark) {
      isDark = dark;
      if (dark) {
        document.body.classList.add('dark');
        darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
        darkToggle.setAttribute('aria-label', 'Switch to light mode');
      } else {
        document.body.classList.remove('dark');
        darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
        darkToggle.setAttribute('aria-label', 'Switch to dark mode');
      }
      try { localStorage.setItem('darkMode', dark ? 'true' : 'false'); } catch(e) { /* localStorage unavailable */ }
    }

    /* Initialize dark mode from localStorage or system preference */
    (function initDarkMode() {
      var stored = null;
      try { stored = localStorage.getItem('darkMode'); } catch(e) {}
      if (stored === 'true') {
        setDarkMode(true);
      } else if (stored === 'false') {
        setDarkMode(false);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    })();

    darkToggle.addEventListener('click', function() { setDarkMode(!isDark); });

    /* --- Navbar scroll effect --- */
    window.addEventListener('scroll', function() {
      var navbar = document.getElementById('navbar');
      if (window.scrollY > 50) { navbar.classList.add('navbar--scrolled'); }
      else { navbar.classList.remove('navbar--scrolled'); }
    });

    /* --- Scroll to Top button --- */
    var scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) { scrollTopBtn.classList.add('scroll-top--visible'); }
      else { scrollTopBtn.classList.remove('scroll-top--visible'); }
    });
    scrollTopBtn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    /* --- Typing Effect (plays ONCE, then stops) --- */
    function initTypingEffect() {
      var titleText = 'AI Content & Creative Specialist';
      var el = document.getElementById('heroTyping');
      var cursor = document.getElementById('heroCursor');
      var charIndex = 0;

      function type() {
        if (charIndex < titleText.length) {
          el.textContent += titleText.charAt(charIndex);
          charIndex++;
          setTimeout(type, 55);
        } else {
          /* Typing complete – keep cursor blinking briefly then hide */
          setTimeout(function() {
            cursor.classList.add('hero__cursor--done');
          }, 1500);
        }
      }
      setTimeout(type, 400);
    }

    /* --- Terminal Animation (line-by-line reveal) --- */
    function initTerminalAnimation() {
      var lines = [
        { text: '$ boot louise.profile', cls: 't-prompt' },
        { text: 'Loading personality...', cls: 't-loading' },
        { text: '\u2713 Purple aesthetic', cls: 't-check' },
        { text: '\u2713 AI & IoT graduate', cls: 't-check' },
        { text: '\u2713 Creative AI enthusiast', cls: 't-check' },
        { text: '\u2713 Marketing meets technology', cls: 't-check' },
        { text: '\u2713 Prompt engineering', cls: 't-check' },
        { text: '\u2713 Workflow automation', cls: 't-check' },
        { text: '\u2713 Powered by matcha', cls: 't-check' },
        { text: '\u2713 Always curious', cls: 't-check' },
        { text: 'System ready.', cls: 't-ready' }
      ];
      var container = document.getElementById('terminalContent');
      var lineIndex = 0;

      function showLine() {
        if (lineIndex >= lines.length) return;
        var data = lines[lineIndex];
        var div = document.createElement('div');
        div.className = 'terminal-line';
        div.innerHTML = '<span class="' + data.cls + '">' + data.text + '</span>';
        container.appendChild(div);
        /* Trigger reflow then add visible class for transition */
        void div.offsetWidth;
        div.classList.add('terminal-line--visible');

        var delay = 200;
        if (lineIndex === 0) delay = 400;  /* pause after boot command */
        if (lineIndex === 1) delay = 350;  /* pause after loading */
        if (lineIndex === lines.length - 1) delay = 0; /* last line, no next */

        lineIndex++;
        if (lineIndex < lines.length) {
          setTimeout(showLine, delay);
        }
      }
      /* Start terminal after typing title has a head start */
      setTimeout(showLine, 2200);
    }

    /* --- Story Gallery (scroll-synced with chapters) --- */
    function initStoryGallery() {
      var galleryEl = document.getElementById('aboutGallery');
      var dotsEl = document.getElementById('aboutGalleryDots');
      var chapters = document.querySelectorAll('.chapter');
      if (!galleryEl || !dotsEl || chapters.length === 0) return;

      var images = galleryEl.querySelectorAll('img');
      var dots = dotsEl.querySelectorAll('.dot');

      function goToImage(index) {
        var safeIndex = index % images.length;
        for (var i = 0; i < images.length; i++) {
          images[i].className = i === safeIndex ? 'active' : 'inactive';
        }
        for (var d = 0; d < dots.length; d++) {
          if (dots[d]) dots[d].className = d === safeIndex ? 'dot active' : 'dot';
        }
      }

      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var idx = Array.prototype.indexOf.call(chapters, entry.target);
            chapters.forEach(function(ch) { ch.classList.remove('active'); });
            entry.target.classList.add('active');
            goToImage(idx);
          }
        });
      }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

      chapters.forEach(function(chapter) { observer.observe(chapter); });

      for (var d = 0; d < dots.length; d++) {
        (function(idx) {
          dots[idx].addEventListener('click', function() {
            if (chapters[idx]) {
              chapters[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          });
        })(d);
      }
    }

    /* --- TikTok Dropdown (fixed, body-appended) + Mobile Bottom Sheet --- */
    function initTikTokDropdown() {
      var trigger = document.getElementById('tiktokTrigger');
      var overlay = document.getElementById('tiktokModalOverlay');
      var closeBtn = document.getElementById('tiktokModalClose');
      if (!trigger) return;

      /* Create fixed dropdown and append to body (prevents clipping) */
      var dropdown = document.createElement('div');
      dropdown.className = 'tiktok-dropdown';
      dropdown.id = 'tiktokDropdownFixed';
      dropdown.innerHTML = '<h4 class="dropdown-title">Choose a TikTok</h4>' +
        '<p class="dropdown-subtitle">Explore two sides of my creativity.</p>' +
        '<div class="dropdown-profiles" id="tiktokDropdownProfiles"></div>';
      document.body.appendChild(dropdown);
      renderTikTokProfiles('tiktokDropdownProfiles');

      var isOpen = false;

      function positionDropdown() {
        var rect = trigger.getBoundingClientRect();
        var dw = Math.min(400, window.innerWidth - 32);
        var left = Math.min(window.innerWidth - dw - 16, Math.max(16, rect.right - dw));
        dropdown.style.top = (rect.bottom + 12) + 'px';
        dropdown.style.left = left + 'px';
      }

      function openDropdown() {
        if (isOpen) return;
        isOpen = true;
        positionDropdown();
        dropdown.classList.add('active');
        trigger.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        /* Focus first profile card */
        setTimeout(function() {
          var first = dropdown.querySelector('.dropdown-profile');
          if (first) first.focus();
        }, 100);
      }

      function closeDropdown() {
        if (!isOpen) return;
        isOpen = false;
        dropdown.classList.remove('active');
        trigger.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }

      function openBottomSheet() {
        if (!overlay) return;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(function() {
          var first = overlay.querySelector('.dropdown-profile');
          if (first) first.focus();
        }, 400);
      }

      function closeBottomSheet() {
        if (!overlay) return;
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        trigger.focus();
      }

      function isMobile() { return window.innerWidth < 768; }

      /* Trigger click: toggle dropdown (desktop) or open bottom sheet (mobile) */
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (isMobile()) {
          openBottomSheet();
        } else {
          isOpen ? closeDropdown() : openDropdown();
        }
      });

      /* Click outside closes dropdown */
      document.addEventListener('click', function(e) {
        if (!isOpen) return;
        if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
          closeDropdown();
        }
      });

      /* Reposition on scroll/resize */
      window.addEventListener('scroll', function() { if (isOpen) positionDropdown(); }, { passive: true });
      window.addEventListener('resize', function() {
        if (isOpen) {
          if (isMobile()) { closeDropdown(); openBottomSheet(); }
          else positionDropdown();
        }
      });

      /* Keyboard navigation inside dropdown */
      dropdown.addEventListener('keydown', function(e) {
        var profiles = dropdown.querySelectorAll('.dropdown-profile');
        var arr = Array.prototype.slice.call(profiles);
        var idx = arr.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); arr[(idx + 1) % arr.length].focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); arr[(idx - 1 + arr.length) % arr.length].focus(); }
        else if (e.key === 'Enter' && document.activeElement.classList.contains('dropdown-profile')) { document.activeElement.click(); }
        else if (e.key === 'Escape') { closeDropdown(); }
      });

      /* ESC closes dropdown or bottom sheet */
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          if (isOpen) closeDropdown();
          if (overlay && overlay.classList.contains('active')) closeBottomSheet();
        }
      });

      /* Bottom sheet close button & backdrop */
      if (closeBtn) closeBtn.addEventListener('click', closeBottomSheet);
      if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) closeBottomSheet(); });

      /* Keyboard nav inside bottom sheet */
      if (overlay) {
        overlay.addEventListener('keydown', function(e) {
          var profiles = overlay.querySelectorAll('.dropdown-profile');
          var arr = Array.prototype.slice.call(profiles);
          var idx = arr.indexOf(document.activeElement);
          if (e.key === 'ArrowDown') { e.preventDefault(); arr[(idx + 1) % arr.length].focus(); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); arr[(idx - 1 + arr.length) % arr.length].focus(); }
          else if (e.key === 'Enter' && document.activeElement.classList.contains('dropdown-profile')) { document.activeElement.click(); }
        });
      }
    }

    /* --- Scroll reveal (Intersection Observer) --- */
    function initScrollReveal() {
      var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        /* Make all elements visible immediately */
        var els = document.querySelectorAll('.reveal');
        for (var i = 0; i < els.length; i++) { els[i].classList.add('visible'); }
        return;
      }

      var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            entries[i].target.classList.add('visible');
            observer.unobserve(entries[i].target);
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

      var elements = document.querySelectorAll('.reveal');
      for (var j = 0; j < elements.length; j++) { observer.observe(elements[j]); }
    }

    /* --- Skill bar animation --- */
    function initSkillBars() {
      var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var skillSection = document.getElementById('skills');
      if (!skillSection) return;

      if (prefersReduced) {
        var bars = skillSection.querySelectorAll('.skill__bar-fill');
        for (var i = 0; i < bars.length; i++) { bars[i].classList.add('skill__bar-fill--animated'); }
        return;
      }

      var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            var bars = entries[i].target.querySelectorAll('.skill__bar-fill');
            for (var b = 0; b < bars.length; b++) {
              (function(bar, delay) {
                setTimeout(function() { bar.classList.add('skill__bar-fill--animated'); }, delay);
              })(bars[b], b * 100);
            }
            observer.unobserve(entries[i].target);
          }
        }
      }, { threshold: 0.2 });

      observer.observe(skillSection);
    }

    /* ============================================================
       INITIALIZATION
    ============================================================ */
    document.addEventListener('DOMContentLoaded', function() {
      try {
        /* 1. Render all sections from data */
        renderHero();
        renderCapabilities();
        renderAbout();
        renderExperience();
        renderProjects();
        renderTikTok();
        renderFooter();

        /* 2. Initialize interactions */
        initTypingEffect();
        initTerminalAnimation();
        initTikTokDropdown();
        initStoryGallery();
        initScrollReveal();
      } catch (error) {
        console.error('Initialization Error:', error);
      } finally {
        /* 3. Hide preloader — always runs, even on exception */
        setTimeout(function() {
          document.getElementById('preloader').classList.add('preloader--hidden');
        }, 600);
      }
    });
