    /** Graceful image fallback – show gradient when image fails to load */
    function handleImageError(img) {
      img.onerror = null;
      img.style.background = 'linear-gradient(135deg, #E8C8FF, #FFD6E7)';
      img.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="%23E8C8FF" width="400" height="400"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Poppins,sans-serif" font-size="48" fill="%23B366E0" opacity="0.5">\uD83D\uDCF7</text></svg>');
    }

    /** Render TikTok grid – video cards with links */
    function renderReels() {
      var html = '';
      for (var i = 0; i < reelsData.length; i++) {
        var r = reelsData[i];
        var utmLink = r.url + (r.url.indexOf('?') > -1 ? '&' : '?') + 'utm_source=portfolio&utm_medium=website';
        html += '<div class="tiktok-card">' +
          '<a href="' + utmLink + '" target="_blank" rel="noopener" class="tiktok-card__video-wrapper" aria-label="Watch ' + r.title + ' on TikTok">' +
            '<img src="' + r.thumbnail + '" alt="' + r.title + '" class="tiktok-card__thumbnail" loading="lazy" />' +
            '<div class="tiktok-card__play-overlay">' +
              '<div class="tiktok-card__play-btn">' +
                '<i class="fas fa-play"></i>' +
              '</div>' +
               '<div class="tiktok-card__hover-metrics">' +
                '<span><i class="fas fa-eye"></i> ' + r.metrics.views + '</span>' +
                '<span><i class="fas fa-heart"></i> ' + r.metrics.likes + '</span>' +
              '</div>' +
            '</div>' +
          '</a>'+
    
          '<div class="tiktok-card__info">' +
            '<div class="tiktok-card__title">' + r.title + '</div>' +
            '<div class="tiktok-card__description">' + r.channel + '</div>' +
            '<div class="tiktok-card__meta">' +
              '<span><i class="fas fa-eye"></i> ' + r.metrics.views + '</span>' +
              '<span><i class="fas fa-heart"></i> ' + r.metrics.likes + '</span>' +
            '</div>' +
            '<a href="' + utmLink + '" class="btn btn--accent btn--sm" target="_blank" rel="noopener"><i class="fab fa-tiktok"></i> Watch on TikTok</a>' +
          '</div>' +
        '</div>';
      }
      document.getElementById('tiktokGrid').innerHTML = html;
    }

    function renderTikTok() {
      renderReels();
    }
