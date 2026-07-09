    /* ============================================================
       INTERACTION HANDLERS
    ============================================================ */

    /* --- Project Modal --- */
    var projectModalOverlay = document.getElementById('projectModalOverlay');
    var projectModalClose = document.getElementById('projectModalClose');
    var lastProjectTrigger = null;

    function openProjectModal(projectId) {
      var proj = null;
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === projectId) { proj = projects[i]; break; }
      }
      if (!proj) return;

      var modal = document.getElementById('projectModal');
      var imgEl = document.getElementById('projectModalImg');
      var bodyEl = document.querySelector('#projectModal .modal__body');

      if (proj.isPremiumCase) {
        modal.classList.add('modal--case-study');
        imgEl.style.display = 'none';
        bodyEl.innerHTML = proj.caseHtml;
      } else {
        modal.classList.remove('modal--case-study');
        imgEl.style.display = 'block';
        imgEl.src = proj.thumbnail;
        imgEl.alt = proj.title;
        imgEl.onerror = function() { handleImageError(this); };

        var metricsHtml = '';
        var metricKeys = Object.keys(proj.detail.metrics);
        for (var m = 0; m < metricKeys.length; m++) {
          var key = metricKeys[m];
          metricsHtml += '<div class="modal__metric"><i class="' + getMetricIcon(key) + '"></i> ' + key + ': ' + proj.detail.metrics[key] + '</div>';
        }

        bodyEl.innerHTML = '<h3 class="modal__title" id="projectModalTitle">' + proj.title + '</h3>' +
                           '<p class="modal__text" id="projectModalText">' + proj.detail.content + '</p>' +
                           '<div class="modal__metrics" id="projectModalMetrics">' + metricsHtml + '</div>';
      }

      projectModalOverlay.classList.add('modal-overlay--active');
      document.body.style.overflow = 'hidden';
      projectModalClose.focus();
    }

    function closeProjectModal() {
      projectModalOverlay.classList.remove('modal-overlay--active');
      document.body.style.overflow = '';
      if (lastProjectTrigger) { lastProjectTrigger.focus(); lastProjectTrigger = null; }
    }

    projectModalClose.addEventListener('click', closeProjectModal);
    projectModalOverlay.addEventListener('click', function(e) { if (e.target === projectModalOverlay) closeProjectModal(); });

    /* Projects grid event delegation */
    document.getElementById('projectsGrid').addEventListener('click', function(e) {
      var card = e.target.closest('.project-card');
      if (card) { lastProjectTrigger = card; openProjectModal(parseInt(card.dataset.projectId, 10)); }
    });
    document.getElementById('projectsGrid').addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var card = e.target.closest('.project-card');
        if (card) { e.preventDefault(); lastProjectTrigger = card; openProjectModal(parseInt(card.dataset.projectId, 10)); }
      }
    });

    /* --- Experience Modal --- */
    var expModalOverlay = document.getElementById('expModalOverlay');
    var expModalClose = document.getElementById('expModalClose');
    var lastExpTrigger = null;

    function openExpModal(expId) {
      var exp = null;
      for (var i = 0; i < experiences.length; i++) {
        if (experiences[i].id === expId) { exp = experiences[i]; break; }
      }
      if (!exp) return;

      var tasksHtml = '';
      for (var t = 0; t < exp.tasks.length; t++) {
        tasksHtml += '<li>' + exp.tasks[t] + '</li>';
      }

      var skillsHtml = '';
      for (var s = 0; s < exp.skills.length; s++) {
        skillsHtml += '<span class="badge">' + exp.skills[s] + '</span>';
      }

      var achievementsHtml = '';
      if (exp.achievements && exp.achievements.length > 0) {
        for (var a = 0; a < exp.achievements.length; a++) {
          achievementsHtml += '<li>' + exp.achievements[a] + '</li>';
        }
      }

      var toolsHtml = '';
      for (var tl = 0; tl < exp.tools.length; tl++) {
        toolsHtml += '<span class="badge badge--accent">' + exp.tools[tl] + '</span>';
      }

      var modalLogoHtml = exp.logoImg
        ? '<div class="modal__logo-container modal__logo-container--img"><img src="' + exp.logoImg + '" alt="' + exp.company + '" /></div>'
        : '<div class="modal__logo-container" style="background:' + exp.logoColor + '">' + exp.logo + '</div>';

      var bodyHtml = '<div style="display:flex;align-items:center;gap:16px;margin-bottom:24px">' +
        modalLogoHtml +
        '<div><h3 class="modal__title" style="margin-bottom:4px">' + exp.company + '</h3><div style="color:var(--primary-dark);font-weight:600;font-size:0.95rem">' + exp.role + '</div></div>' +
      '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px"><span class="badge">' + exp.period + '</span><span class="badge badge--accent">' + exp.employment + '</span><span class="badge" style="background:var(--bg);color:var(--text-secondary)">' + exp.industry + '</span></div>' +
      '<div class="modal__section-title">Responsibilities</div><ul class="modal__list">' + tasksHtml + '</ul>' +
      '<div class="modal__section-title" style="margin-top:24px">Key Skills</div><div class="modal__tags">' + skillsHtml + '</div>' +
      (achievementsHtml ? '<div class="modal__section-title" style="margin-top:24px">Achievements</div><ul class="modal__list">' + achievementsHtml + '</ul>' : '') +
      '<div class="modal__section-title" style="margin-top:24px">Tools Used</div><div class="modal__tags">' + toolsHtml + '</div>';

      document.getElementById('expModalBody').innerHTML = bodyHtml;
      expModalOverlay.classList.add('modal-overlay--active');
      document.body.style.overflow = 'hidden';
      expModalClose.focus();
    }

    function closeExpModal() {
      expModalOverlay.classList.remove('modal-overlay--active');
      document.body.style.overflow = '';
      if (lastExpTrigger) { lastExpTrigger.focus(); lastExpTrigger = null; }
    }

    expModalClose.addEventListener('click', closeExpModal);
    expModalOverlay.addEventListener('click', function(e) { if (e.target === expModalOverlay) closeExpModal(); });

    /* Experience track event delegation */
    document.getElementById('experienceTrack').addEventListener('click', function(e) {
      var btn = e.target.closest('.exp-card__view-btn');
      if (btn) { lastExpTrigger = btn; openExpModal(parseInt(btn.dataset.expId, 10)); }
    });

    /* --- ESC key closes any open modal --- */
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (projectModalOverlay.classList.contains('modal-overlay--active')) closeProjectModal();
        if (expModalOverlay.classList.contains('modal-overlay--active')) closeExpModal();
      }
    });

    /* --- Focus trap for modals --- */
    function trapFocus(overlay) {
      overlay.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;
        var focusable = overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { last.focus(); e.preventDefault(); }
        } else {
          if (document.activeElement === last) { first.focus(); e.preventDefault(); }
        }
      });
    }
    trapFocus(projectModalOverlay);
    trapFocus(expModalOverlay);
