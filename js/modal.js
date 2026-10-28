/**
 * E-PORTOFOLIO PPL MANDIRI DI SD LABORATORIUM UM
 * Modal Controller: Document Viewer, Google Drive PDF Viewer, Video Player & Authentic Reflection Sheets
 */

document.addEventListener('DOMContentLoaded', () => {
  // Create Modal Elements dynamically if not present in the DOM
  initModals();
});

function initModals() {
  // 1. Document / PDF Modal (Local / Direct File)
  if (!document.getElementById('docPreviewModal')) {
    const docModalHtml = `
      <div id="docPreviewModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="docModalTitle">
        <div class="modal-dialog">
          <div class="modal-header">
            <div>
              <span id="docModalBadge" class="badge badge-orange" style="margin-bottom: 0.35rem; display: inline-block;">Perangkat Pembelajaran</span>
              <h3 id="docModalTitle" class="modal-title">Pratinjau Dokumen</h3>
            </div>
            <button type="button" class="modal-close-btn" aria-label="Tutup Pratinjau" onclick="closeModal('docPreviewModal')">&times;</button>
          </div>
          <div class="modal-body" id="docModalBody">
            <!-- Dynamic Content -->
          </div>
          <div class="modal-footer" id="docModalFooter">
            <button type="button" class="btn btn-secondary btn-sm" onclick="closeModal('docPreviewModal')">Tutup</button>
            <button type="button" id="docModalPrintBtn" class="btn btn-secondary btn-sm" style="display: none;" onclick="window.print()">Cetak / Simpan Lembar</button>
            <a id="docModalDownloadBtn" href="#" class="btn btn-primary btn-sm" download>Unduh Berkas</a>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', docModalHtml);
  }

  // 2. Video Player Modal
  if (!document.getElementById('videoPlayerModal')) {
    const videoModalHtml = `
      <div id="videoPlayerModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="videoModalTitle">
        <div class="modal-dialog" style="max-width: 860px;">
          <div class="modal-header">
            <div>
              <span class="badge badge-navy" style="margin-bottom: 0.35rem; display: inline-block;">Video Praktik Pembelajaran</span>
              <h3 id="videoModalTitle" class="modal-title">Pemutar Video</h3>
            </div>
            <button type="button" class="modal-close-btn" aria-label="Tutup Video" onclick="closeModal('videoPlayerModal')">&times;</button>
          </div>
          <div class="modal-body" id="videoModalBody">
            <!-- Dynamic Content -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-sm" onclick="closeModal('videoPlayerModal')">Tutup</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', videoModalHtml);
  }

  // 3. Search Quick Modal
  if (!document.getElementById('quickSearchModal')) {
    const searchModalHtml = `
      <div id="quickSearchModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="searchModalTitle">
        <div class="modal-dialog" style="max-width: 650px;">
          <div class="modal-header">
            <h3 id="searchModalTitle" class="modal-title">Cari Dokumen & Topik PPL</h3>
            <button type="button" class="modal-close-btn" aria-label="Tutup Pencarian" onclick="closeModal('quickSearchModal')">&times;</button>
          </div>
          <div class="modal-body">
            <div class="search-input-group" style="margin-bottom: 1.25rem;">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input type="text" id="modalSearchInput" class="search-input" placeholder="Ketik kata kunci (misal: Bola Basket, LK 3, LK 4, Siklus 1, Pamong)..." autofocus>
            </div>
            <div id="modalSearchResults" style="max-height: 380px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.65rem;">
              <p class="text-muted text-center" style="padding: 1.5rem 0;">Mulai mengetik untuk mencari berkas di seluruh Topik PPL.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', searchModalHtml);

    const modalSearchInput = document.getElementById('modalSearchInput');
    if (modalSearchInput) {
      modalSearchInput.addEventListener('input', handleQuickSearch);
    }
  }

  // 4. Dedicated Google Drive PDF Viewer Modal
  if (!document.getElementById('gdrivePdfModal')) {
    const gdriveModalHtml = `
      <div id="gdrivePdfModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="gdriveModalTitle">
        <div class="modal-dialog modal-gdrive">
          <div class="modal-header">
            <div class="gdrive-viewer-title-group">
              <span class="badge badge-gdrive">
                <svg viewBox="0 0 87.3 78" width="14" height="14" style="vertical-align: middle;">
                  <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3-6.65-11.55c-.8 1.4-1.2 2.95-1.2 4.6 0 1.65.4 3.2 1.2 4.6z" fill="#0066da"/>
                  <path d="m43.65 25-12.3-21.3c-1.3.8-2.4 1.9-3.2 3.3l-21.55 37.35c-.8 1.4-1.2 2.95-1.2 4.6h24.6z" fill="#00ac47"/>
                  <path d="m73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 3.85-6.65c.8-1.4 1.2-2.95 1.2-4.6s-.4-3.2-1.2-4.6l-21.55-37.35c-.8-1.4-1.9-2.5-3.2-3.3l-12.3 21.3 16.15 28z" fill="#ea4335"/>
                  <path d="m43.65 25 12.3-21.3c-1.3-.8-2.8-1.2-4.45-1.2h-15.7c-1.65 0-3.15.4-4.45 1.2z" fill="#00832d"/>
                  <path d="m59.8 53.5h-32.3l-12.3 21.3c1.3.8 2.8 1.2 4.45 1.2h47.9c1.65 0 3.15-.4 4.45-1.2z" fill="#2684fc"/>
                  <path d="m73.4 26.5-6.65-11.55-12.3 21.3 6.65 11.55c.8-1.4 1.9-2.5 3.2-3.3z" fill="#ffba00"/>
                </svg>
                Google Drive PDF Viewer
              </span>
              <h3 id="gdriveModalTitle" class="modal-title">Pratinjau PDF Google Drive</h3>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <a id="gdriveModalOpenExternalBtn" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gdrive btn-sm" style="display: none; background: rgba(255,255,255,0.15); color: #FFF !important; border-color: rgba(255,255,255,0.3);">
                Buka di GDrive &nearr;
              </a>
              <button type="button" class="modal-close-btn" aria-label="Tutup Penampil Google Drive" onclick="closeModal('gdrivePdfModal')">&times;</button>
            </div>
          </div>
          <div class="modal-body" id="gdriveModalBody" style="min-height: 520px; flex: 1;">
            <!-- Dynamic Content (iframe or placeholder) -->
          </div>
          <div class="modal-footer" id="gdriveModalFooter">
            <span id="gdriveModalCategoryHint" class="text-muted" style="font-size: 0.8rem; margin-right: auto;"></span>
            <button type="button" class="btn btn-secondary btn-sm" onclick="closeModal('gdrivePdfModal')">Tutup</button>
            <a id="gdriveModalFooterExternalBtn" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-gdrive btn-sm" style="display: none;">
              Buka di Tab Baru Google Drive &nearr;
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', gdriveModalHtml);
  }

  // Close modals on Escape key or backdrop click
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });
}

// Helper to convert standard Google Drive URL to embeddable preview format
window.formatGdriveEmbedUrl = function(url) {
  if (!url || typeof url !== 'string') return '';
  url = url.trim();
  if (!url) return '';
  if (url.includes('/preview')) return url;

  // Pattern: https://drive.google.com/file/d/FILE_ID/view...
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch && fileMatch[1]) {
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  }

  // Pattern: https://drive.google.com/open?id=FILE_ID
  const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
  }

  return url;
};

// Open Dedicated Google Drive PDF Viewer Modal
window.openGdriveModal = function(identifier, title, category, gdriveUrl, docDesc) {
  initModals();

  const modal = document.getElementById('gdrivePdfModal');
  const titleEl = document.getElementById('gdriveModalTitle');
  const bodyEl = document.getElementById('gdriveModalBody');
  const openExternalBtn = document.getElementById('gdriveModalOpenExternalBtn');
  const footerExternalBtn = document.getElementById('gdriveModalFooterExternalBtn');
  const categoryHint = document.getElementById('gdriveModalCategoryHint');

  if (!modal || !titleEl || !bodyEl) return;

  // Lookup data from PPL_DATA if identifier is provided
  if (identifier && window.PPL_DATA) {
    // Check in reflections
    if (window.PPL_DATA.reflections && window.PPL_DATA.reflections[identifier]) {
      const ref = window.PPL_DATA.reflections[identifier];
      title = title || ref.sheetTitle;
      category = category || `${ref.type} • Lembar Refleksi`;
      gdriveUrl = gdriveUrl || ref.gdriveUrl || '';
      docDesc = docDesc || `Lembar refleksi autentik ${ref.type} oleh ${ref.studentName}.`;
    } else if (window.PPL_DATA.topics) {
      // Check in topics items
      for (const t of window.PPL_DATA.topics) {
        const found = t.items.find(it => it.id === identifier || it.title === identifier);
        if (found) {
          title = title || found.title;
          category = category || found.category;
          gdriveUrl = gdriveUrl || found.gdriveUrl || '';
          docDesc = docDesc || found.description;
          break;
        }
      }
    }
  }

  title = title || 'Pratinjau PDF Google Drive';
  category = category || 'Dokumen PPL Mandiri';
  docDesc = docDesc || 'Dokumen terintegrasi untuk portofolio PPL Mandiri SD Laboratorium UM.';

  titleEl.textContent = title;
  if (categoryHint) {
    categoryHint.textContent = `Kategori: ${category}`;
  }

  const hasUrl = !!(gdriveUrl && gdriveUrl.trim());

  if (hasUrl) {
    const embedUrl = window.formatGdriveEmbedUrl(gdriveUrl);
    bodyEl.innerHTML = `
      <div class="gdrive-frame-container" style="height: 100%; min-height: 560px;">
        <iframe src="${embedUrl}" class="gdrive-iframe" allow="autoplay" allowfullscreen title="${escapeHtml(title)}"></iframe>
      </div>
    `;

    if (openExternalBtn) {
      openExternalBtn.style.display = 'inline-flex';
      openExternalBtn.setAttribute('href', gdriveUrl);
    }
    if (footerExternalBtn) {
      footerExternalBtn.style.display = 'inline-flex';
      footerExternalBtn.setAttribute('href', gdriveUrl);
    }
  } else {
    // Elegant Placeholder state
    bodyEl.innerHTML = `
      <div class="gdrive-placeholder-frame">
        <div class="gdrive-placeholder-icon-wrap">
          <svg viewBox="0 0 87.3 78" width="44" height="44">
            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3-6.65-11.55c-.8 1.4-1.2 2.95-1.2 4.6 0 1.65.4 3.2 1.2 4.6z" fill="#0066da"/>
            <path d="m43.65 25-12.3-21.3c-1.3.8-2.4 1.9-3.2 3.3l-21.55 37.35c-.8 1.4-1.2 2.95-1.2 4.6h24.6z" fill="#00ac47"/>
            <path d="m73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 3.85-6.65c.8-1.4 1.2-2.95 1.2-4.6s-.4-3.2-1.2-4.6l-21.55-37.35c-.8-1.4-1.9-2.5-3.2-3.3l-12.3 21.3 16.15 28z" fill="#ea4335"/>
            <path d="m43.65 25 12.3-21.3c-1.3-.8-2.8-1.2-4.45-1.2h-15.7c-1.65 0-3.15.4-4.45 1.2z" fill="#00832d"/>
            <path d="m59.8 53.5h-32.3l-12.3 21.3c1.3.8 2.8 1.2 4.45 1.2h47.9c1.65 0 3.15-.4 4.45-1.2z" fill="#2684fc"/>
            <path d="m73.4 26.5-6.65-11.55-12.3 21.3 6.65 11.55c.8-1.4 1.9-2.5 3.2-3.3z" fill="#ffba00"/>
          </svg>
        </div>
        <span class="badge badge-gdrive-pending" style="margin-bottom: 0.75rem;">Slot Pratinjau Tersedia • Menunggu Tautan Google Drive</span>
        <h3 class="gdrive-placeholder-title">${escapeHtml(title)}</h3>
        <p class="gdrive-placeholder-desc">
          Tempat pratinjau interaktif PDF Google Drive untuk dokumen ini telah disiapkan. Ketika pemilik portofolio melampirkan tautan Google Drive, pratinjau dokumen akan langsung tampil di layar ini tanpa perlu mengunduh berkas.
        </p>
        <div class="gdrive-placeholder-guide">
          <h6>
            <svg style="width: 16px; height: 16px; color: var(--color-athletic-orange);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0114 0z"></path>
            </svg>
            Petunjuk Penyematan Berkas Google Drive:
          </h6>
          <ol>
            <li>Buka dokumen PDF di Google Drive Anda, klik <strong>Bagikan</strong> &rarr; pastikan setelan akses adalah <em>"Siapa saja yang memiliki link dapat melihat"</em>.</li>
            <li>Salin link Google Drive tersebut.</li>
            <li>Kirimkan tautan tersebut di chat atau tempelkan pada parameter <code>gdriveUrl</code> di berkas <code>js/data.js</code>.</li>
          </ol>
        </div>
      </div>
    `;

    if (openExternalBtn) openExternalBtn.style.display = 'none';
    if (footerExternalBtn) footerExternalBtn.style.display = 'none';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Open Authentic Reflection Sheet Modal (LK 3 / LK 4)
window.openReflectionModal = function(reflectionKey) {
  const modal = document.getElementById('docPreviewModal');
  const titleEl = document.getElementById('docModalTitle');
  const badgeEl = document.getElementById('docModalBadge');
  const bodyEl = document.getElementById('docModalBody');
  const downloadBtn = document.getElementById('docModalDownloadBtn');
  const printBtn = document.getElementById('docModalPrintBtn');

  if (!modal || !titleEl || !badgeEl || !bodyEl) return;

  const ref = window.PPL_DATA?.reflections?.[reflectionKey];
  if (!ref) return;

  if (ref.status === 'pending') {
    // Empty state for Siklus 3
    window.openDocModal(
      ref.sheetTitle || 'Refleksi Praktik Mandiri Siklus 3',
      'Dokumen Refleksi Resmi',
      'assets/docs/Refleksi_Siklus_3.pdf',
      false,
      'Lembar refleksi Siklus 3 sedang dalam proses penyusunan dan pengesahan Guru Pamong.'
    );
    return;
  }

  titleEl.textContent = ref.sheetTitle;
  badgeEl.className = 'badge badge-status-available';
  badgeEl.textContent = `${ref.type} • Tersedia & Terverifikasi`;

  let qaHtml = '';

  if (ref.type === 'LK 3') {
    // LK 3 Format (Praktik Mengajar Terbimbing)
    qaHtml = `
      <div style="margin-bottom: 1.5rem;">
        <h5 style="color: var(--color-athletic-orange); font-size: 0.95rem; margin-bottom: 0.5rem; text-transform: uppercase;">A. Refleksi Kegiatan Praktik Mengajar Terbimbing</h5>
        
        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">1. Aktivitas pembelajaran yang berhasil dilaksanakan:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.successActivities}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">2. Kendala / hambatan yang dihadapi:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.obstacles}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">3. Reaksi dan antusiasme peserta didik:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.studentReactions}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">4. Umpan balik & masukan Guru Pamong (Anang Marzuqi, S.Pd.):</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.pamongFeedback}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">5. Rencana perbaikan untuk praktik mandiri:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.improvementPlans}</p>
        </div>
      </div>
    `;
  } else {
    // LK 4 Format (Praktik Mandiri Siklus 1, 2, 4)
    qaHtml = `
      <div style="margin-bottom: 1.5rem;">
        <h5 style="color: var(--color-athletic-orange); font-size: 0.95rem; margin-bottom: 0.5rem; text-transform: uppercase;">A. Refleksi Pelaksanaan Praktik Pembelajaran Mandiri (${ref.cycle})</h5>
        
        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">1. Keberhasilan Apersepsi Pembelajaran:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.apersepsi}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">2. Aktivitas pembelajaran yang paling berhasil dilaksanakan:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.successActivities}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">3. Kendala, tantangan, atau kesulitan yang dihadapi guru di lapangan:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.obstacles}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">4. Efektivitas pemanfaatan media pembelajaran & alat praktik:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.mediaEffectiveness}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">5. Reaksi, antusiasme, dan dinamika keaktifan siswa kelas V:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.studentReactions}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">6. Umpan balik & rekomendasi Guru Pamong (Anang Marzuqi, S.Pd.):</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.pamongFeedback}</p>
        </div>

        <div style="background: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; border-left: 3px solid var(--color-athletic-orange);">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">7. Rencana tindak lanjut dan strategi perbaikan pembelajaran:</p>
          <p style="font-size: 0.92rem; color: var(--color-graphite); line-height: 1.6; margin: 0;">${ref.improvementPlans}</p>
        </div>
      </div>
    `;
  }

  bodyEl.innerHTML = `
    <div style="padding: 0.5rem 0;">
      <!-- Google Drive Quick Action Banner -->
      <div style="background: linear-gradient(90deg, #E8F0FE 0%, #FFFFFF 100%); border: 1px solid #C2E7FF; border-radius: var(--radius-sm); padding: 0.85rem 1.25rem; margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <svg viewBox="0 0 87.3 78" width="22" height="22">
            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3-6.65-11.55c-.8 1.4-1.2 2.95-1.2 4.6 0 1.65.4 3.2 1.2 4.6z" fill="#0066da"/>
            <path d="m43.65 25-12.3-21.3c-1.3.8-2.4 1.9-3.2 3.3l-21.55 37.35c-.8 1.4-1.2 2.95-1.2 4.6h24.6z" fill="#00ac47"/>
            <path d="m73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 3.85-6.65c.8-1.4 1.2-2.95 1.2-4.6s-.4-3.2-1.2-4.6l-21.55-37.35c-.8-1.4-1.9-2.5-3.2-3.3l-12.3 21.3 16.15 28z" fill="#ea4335"/>
            <path d="m43.65 25 12.3-21.3c-1.3-.8-2.8-1.2-4.45-1.2h-15.7c-1.65 0-3.15.4-4.45 1.2z" fill="#00832d"/>
            <path d="m59.8 53.5h-32.3l-12.3 21.3c1.3.8 2.8 1.2 4.45 1.2h47.9c1.65 0 3.15-.4 4.45-1.2z" fill="#2684fc"/>
            <path d="m73.4 26.5-6.65-11.55-12.3 21.3 6.65 11.55c.8-1.4 1.9-2.5 3.2-3.3z" fill="#ffba00"/>
          </svg>
          <span style="font-size: 0.88rem; font-weight: 700; color: #1557B0;">Integrasi Penampil PDF Google Drive</span>
        </div>
        <button type="button" class="btn btn-outline-gdrive btn-sm" onclick="closeModal('docPreviewModal'); openGdriveModal('${reflectionKey}')">
          Pratinjau PDF Asli (Google Drive) &rarr;
        </button>
      </div>

      <!-- Identity Metadata Box -->
      <div style="background-color: var(--color-navy-subtle); border-radius: var(--radius-sm); padding: 1.25rem; margin-bottom: 1.5rem; border: 1px solid rgba(20, 36, 58, 0.1);">
        <h4 style="font-size: 1.05rem; color: var(--color-midnight-navy); margin-bottom: 0.5rem; font-weight: 800;">
          ${ref.sheetTitle}
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; font-size: 0.85rem; color: var(--color-graphite);">
          <div>Nama Mahasiswa: <strong style="color: var(--color-midnight-navy);">${ref.studentName}</strong></div>
          <div>NIM: <strong style="color: var(--color-midnight-navy);">${ref.nim}</strong></div>
          <div>Bidang Studi: <strong style="color: var(--color-midnight-navy);">${ref.subject}</strong></div>
          <div>Sekolah PPL Mandiri: <strong style="color: var(--color-midnight-navy);">${ref.school}</strong></div>
        </div>
      </div>

      <!-- Q&A Content -->
      ${qaHtml}

      <!-- Official Approval Signatures Box -->
      <div style="background: #FAF9F6; border: 1px solid var(--color-warm-border); border-radius: var(--radius-sm); padding: 1.25rem; margin-top: 1.5rem;">
        <div style="font-weight: 800; font-size: 0.85rem; color: var(--color-midnight-navy); text-transform: uppercase; margin-bottom: 0.75rem; text-align: center;">
          Lembar Pengesahan Hasil Refleksi
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; text-align: center; font-size: 0.88rem;">
          <div style="padding: 0.5rem; border: 1px dashed var(--color-warm-border); border-radius: var(--radius-xs); background: #FFFFFF;">
            <p class="text-muted" style="margin-bottom: 2.5rem;">Menyetujui,<br><strong>Guru Pamong</strong></p>
            <p style="font-weight: 800; color: var(--color-midnight-navy); margin: 0; text-decoration: underline;">${ref.signatures?.pamong || 'Anang Marzuqi, S.Pd.'}</p>
            <span style="font-size: 0.75rem; color: var(--color-graphite-muted);">SD Laboratorium UM</span>
          </div>
          <div style="padding: 0.5rem; border: 1px dashed var(--color-warm-border); border-radius: var(--radius-xs); background: #FFFFFF;">
            <p class="text-muted" style="margin-bottom: 2.5rem;">Menyetujui,<br><strong>Dosen Pembimbing Lapangan</strong></p>
            <p style="font-weight: 800; color: var(--color-midnight-navy); margin: 0; text-decoration: underline;">${ref.signatures?.dpl || 'Prof. Yusuf Hanafi, S.Ag, M.Fil.I'}</p>
            <span style="font-size: 0.75rem; color: var(--color-graphite-muted);">Universitas Negeri Malang</span>
          </div>
        </div>
      </div>
    </div>
  `;

  if (downloadBtn) downloadBtn.style.display = 'none';
  if (printBtn) printBtn.style.display = 'inline-flex';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Open Document Preview / Upload Status
window.openDocModal = function(docTitle, docCategory, docPath, isAvailable, docDesc) {
  // Check if this document corresponds to one of our available authentic reflections!
  if (docPath) {
    if (docPath.includes('Refleksi_Praktik_Terbimbing')) {
      window.openReflectionModal('terbimbing');
      return;
    }
    if (docPath.includes('Refleksi_Siklus_1')) {
      window.openReflectionModal('siklus1');
      return;
    }
    if (docPath.includes('Refleksi_Siklus_2')) {
      window.openReflectionModal('siklus2');
      return;
    }
    if (docPath.includes('Refleksi_Siklus_3')) {
      window.openReflectionModal('siklus3');
      return;
    }
    if (docPath.includes('Refleksi_Siklus_4')) {
      window.openReflectionModal('siklus4');
      return;
    }
  }

  const modal = document.getElementById('docPreviewModal');
  const titleEl = document.getElementById('docModalTitle');
  const badgeEl = document.getElementById('docModalBadge');
  const bodyEl = document.getElementById('docModalBody');
  const downloadBtn = document.getElementById('docModalDownloadBtn');
  const printBtn = document.getElementById('docModalPrintBtn');

  if (!modal || !titleEl || !badgeEl || !bodyEl || !downloadBtn) return;

  if (printBtn) printBtn.style.display = 'none';

  titleEl.textContent = docTitle;
  badgeEl.className = 'badge badge-orange';
  badgeEl.textContent = docCategory || 'Dokumen PPL Mandiri';

  if (isAvailable && docPath && docPath !== '#' && !docPath.endsWith('.pdf')) {
    // Render actual viewer if available
    bodyEl.innerHTML = `
      <div style="background-color: var(--color-warm-white); border: 1px solid var(--color-warm-border); border-radius: var(--radius-md); padding: 1.5rem; text-align: center;">
        <h4 style="margin-bottom: 0.5rem; color: var(--color-midnight-navy);">${docTitle}</h4>
        <p class="text-muted" style="margin-bottom: 1.25rem;">${docDesc || 'Dokumen terverifikasi untuk portofolio PPL Mandiri SD Laboratorium UM.'}</p>
        <div style="padding: 2rem 1rem; border: 2px dashed var(--color-graphite-border); border-radius: var(--radius-sm); margin-bottom: 1.25rem;">
          <p><strong>Lokasi Berkas:</strong> <code>${docPath}</code></p>
        </div>
      </div>
    `;
    downloadBtn.style.display = 'inline-flex';
    downloadBtn.setAttribute('href', docPath);
    downloadBtn.textContent = 'Unduh Berkas';
  } else {
    // Official PPG Empty State with exact standard placeholder + Google Drive Preview Trigger
    bodyEl.innerHTML = `
      <div class="empty-state" style="border: none; padding: 1rem 0;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background-color: var(--status-pending-bg); border: 2px solid var(--status-pending-border); color: var(--status-pending-text); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem;">
          <svg style="width: 32px; height: 32px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <span class="badge badge-status-empty" style="font-size: 0.85rem; padding: 0.35rem 0.85rem; margin-bottom: 1rem;">Dokumen belum ditambahkan</span>
        <h4 style="color: var(--color-midnight-navy); margin-top: 0.5rem; margin-bottom: 0.5rem;">Status Berkas: Dalam Proses Pengunggahan</h4>
        <p class="text-muted" style="max-width: 520px; margin: 0 auto 1.25rem; font-size: 0.92rem; line-height: 1.55;">
          ${docDesc || 'Dokumen ini merupakan bagian resmi dari struktur portofolio PPL Mandiri di SD Laboratorium UM. Berkas digital asli belum disematkan oleh pemilik portofolio.'}
        </p>
        
        <!-- Google Drive Preview Trigger Button -->
        <div style="margin: 1.25rem auto 1.5rem; text-align: center;">
          <button type="button" class="btn btn-outline-gdrive btn-sm" onclick="closeModal('docPreviewModal'); openGdriveModal('', '${escapeHtml(docTitle)}', '${escapeHtml(docCategory)}', '', '${escapeHtml(docDesc)}')">
            <svg viewBox="0 0 87.3 78" width="16" height="16" style="vertical-align: middle;">
              <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3-6.65-11.55c-.8 1.4-1.2 2.95-1.2 4.6 0 1.65.4 3.2 1.2 4.6z" fill="#0066da"/>
              <path d="m43.65 25-12.3-21.3c-1.3.8-2.4 1.9-3.2 3.3l-21.55 37.35c-.8 1.4-1.2 2.95-1.2 4.6h24.6z" fill="#00ac47"/>
              <path d="m73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 3.85-6.65c.8-1.4 1.2-2.95 1.2-4.6s-.4-3.2-1.2-4.6l-21.55-37.35c-.8-1.4-1.9-2.5-3.2-3.3l-12.3 21.3 16.15 28z" fill="#ea4335"/>
              <path d="m43.65 25 12.3-21.3c-1.3-.8-2.8-1.2-4.45-1.2h-15.7c-1.65 0-3.15.4-4.45 1.2z" fill="#00832d"/>
              <path d="m59.8 53.5h-32.3l-12.3 21.3c1.3.8 2.8 1.2 4.45 1.2h47.9c1.65 0 3.15-.4 4.45-1.2z" fill="#2684fc"/>
              <path d="m73.4 26.5-6.65-11.55-12.3 21.3 6.65 11.55c.8-1.4 1.9-2.5 3.2-3.3z" fill="#ffba00"/>
            </svg>
            Buka Tempat Pratinjau PDF Google Drive
          </button>
        </div>

        <div style="background-color: var(--color-warm-white); border: 1px solid var(--color-warm-border); border-radius: var(--radius-md); padding: 1rem; text-align: left; max-width: 520px; margin: 0 auto; font-size: 0.85rem;">
          <p style="font-weight: 700; color: var(--color-midnight-navy); margin-bottom: 0.35rem;">Petunjuk untuk Pemilik Portofolio:</p>
          <p class="text-muted" style="margin-bottom: 0.5rem;">Letakkan file dokumen Anda ke dalam folder proyek berikut atau lampirkan tautan Google Drive-nya:</p>
          <code style="display: block; background: #FFFFFF; padding: 0.5rem; border: 1px solid var(--color-graphite-border); border-radius: var(--radius-xs); word-break: break-all; color: var(--color-midnight-navy); font-weight: 600;">
            ${docPath || 'assets/docs/nama_dokumen.pdf'}
          </code>
        </div>
      </div>
    `;
    downloadBtn.style.display = 'none';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Open Video Player Modal
window.openVideoModal = function(title, videoPath, note) {
  const modal = document.getElementById('videoPlayerModal');
  const titleEl = document.getElementById('videoModalTitle');
  const bodyEl = document.getElementById('videoModalBody');

  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = title;

  if (videoPath && videoPath.trim()) {
    const isGdrive = videoPath.includes('drive.google.com');
    const embedUrl = isGdrive ? window.formatGdriveEmbedUrl(videoPath) : videoPath;

    bodyEl.innerHTML = `
      <div style="background-color: #000000; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.25rem; border: 1px solid var(--color-warm-border);">
        <div style="position: relative; width: 100%; height: 480px; max-height: 60vh;">
          <iframe 
            src="${embedUrl}" 
            style="width: 100%; height: 100%; border: none;" 
            allow="autoplay; fullscreen" 
            allowfullscreen 
            title="${escapeHtml(title)}">
          </iframe>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
        <span class="badge badge-status-available">Rekaman Video Tersedia</span>
        ${isGdrive ? `
          <a href="${videoPath}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gdrive btn-sm">
            <svg viewBox="0 0 87.3 78" width="14" height="14" style="vertical-align: middle;"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3-6.65-11.55c-.8 1.4-1.2 2.95-1.2 4.6 0 1.65.4 3.2 1.2 4.6z" fill="#0066da"/><path d="m43.65 25-12.3-21.3c-1.3.8-2.4 1.9-3.2 3.3l-21.55 37.35c-.8 1.4-1.2 2.95-1.2 4.6h24.6z" fill="#00ac47"/><path d="m73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 3.85-6.65c.8-1.4 1.2-2.95 1.2-4.6s-.4-3.2-1.2-4.6l-21.55-37.35c-.8-1.4-1.9-2.5-3.2-3.3l-12.3 21.3 16.15 28z" fill="#ea4335"/><path d="m43.65 25 12.3-21.3c-1.3-.8-2.8-1.2-4.45-1.2h-15.7c-1.65 0-3.15.4-4.45 1.2z" fill="#00832d"/><path d="m59.8 53.5h-32.3l-12.3 21.3c1.3.8 2.8 1.2 4.45 1.2h47.9c1.65 0 3.15-.4 4.45-1.2z" fill="#2684fc"/><path d="m73.4 26.5-6.65-11.55-12.3 21.3 6.65 11.55c.8-1.4 1.9-2.5 3.2-3.3z" fill="#ffba00"/></svg>
            Buka di Google Drive &nearr;
          </a>
        ` : ''}
      </div>
      <div style="background-color: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; border-left: 4px solid var(--color-athletic-orange);">
        <h5 style="margin-bottom: 0.25rem; font-size: 0.9rem; color: var(--color-midnight-navy);">Catatan Observasi Praktik:</h5>
        <p style="font-size: 0.85rem; color: var(--color-graphite-light); margin: 0;">
          ${note || 'Video mencakup tahapan pembelajaran aktif di SD Laboratorium UM.'}
        </p>
      </div>
    `;
  } else {
    bodyEl.innerHTML = `
      <div style="background-color: #000000; border-radius: var(--radius-md); overflow: hidden; position: relative; padding-top: 56.25%; margin-bottom: 1.25rem;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #FFFFFF; text-align: center; padding: 2rem; background: radial-gradient(circle, #1E314B 0%, #0D1827 100%);">
          <svg style="width: 54px; height: 54px; color: var(--color-athletic-orange); margin-bottom: 1rem;" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"></path>
          </svg>
          <h4 style="color: #FFFFFF; margin-bottom: 0.4rem;">${escapeHtml(title)}</h4>
          <span class="badge badge-status-empty" style="margin-bottom: 0.75rem;">Dokumen belum ditambahkan</span>
          <p style="font-size: 0.85rem; color: rgba(255, 255, 255, 0.7); max-width: 440px;">
            Tautan rekaman video pembelajaran PPG akan disematkan di sini setelah proses pengeditan dan unggah video pembelajaran selesai.
          </p>
        </div>
      </div>
      <div style="background-color: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; border-left: 4px solid var(--color-athletic-orange);">
        <h5 style="margin-bottom: 0.25rem; font-size: 0.9rem; color: var(--color-midnight-navy);">Catatan Observasi Praktik:</h5>
        <p style="font-size: 0.85rem; color: var(--color-graphite-light); margin: 0;">
          ${note || 'Video mencakup tahapan apersepsi gerak aktif, kegiatan inti pembelajaran berorientasi pendekatan active learning di SD Laboratorium UM, dan penutup reflektif bersama siswa.'}
        </p>
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Open Image Modal
window.openImageModal = function(title, imageUrl, gdriveUrl, note) {
  const modal = document.getElementById('docPreviewModal');
  const titleEl = document.getElementById('docModalTitle');
  const badgeEl = document.getElementById('docModalBadge');
  const bodyEl = document.getElementById('docModalBody');
  const downloadBtn = document.getElementById('docModalDownloadBtn');
  const printBtn = document.getElementById('docModalPrintBtn');

  if (!modal || !titleEl || !badgeEl || !bodyEl) return;

  titleEl.textContent = title;
  badgeEl.className = 'badge badge-soft-green';
  badgeEl.textContent = 'Dokumentasi Foto Kegiatan';
  if (printBtn) printBtn.style.display = 'none';

  const viewUrl = gdriveUrl || imageUrl;
  const isGdrive = viewUrl && viewUrl.includes('drive.google.com');

  bodyEl.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.25rem;">
      <div style="background: #000; border-radius: var(--radius-md); overflow: hidden; max-height: 520px; display: flex; align-items: center; justify-content: center;">
        <img src="${imageUrl || viewUrl}" alt="${escapeHtml(title)}" style="max-width: 100%; max-height: 520px; object-fit: contain;" onerror="this.onerror=null; this.src='assets/images/hero-illustration.svg';">
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
      <span class="badge badge-status-available">Foto Asli Kegiatan Terverifikasi</span>
      ${isGdrive ? `
        <a href="${viewUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gdrive btn-sm">
          <svg viewBox="0 0 87.3 78" width="14" height="14" style="vertical-align: middle;"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3-6.65-11.55c-.8 1.4-1.2 2.95-1.2 4.6 0 1.65.4 3.2 1.2 4.6z" fill="#0066da"/><path d="m43.65 25-12.3-21.3c-1.3.8-2.4 1.9-3.2 3.3l-21.55 37.35c-.8 1.4-1.2 2.95-1.2 4.6h24.6z" fill="#00ac47"/><path d="m73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 3.85-6.65c.8-1.4 1.2-2.95 1.2-4.6s-.4-3.2-1.2-4.6l-21.55-37.35c-.8-1.4-1.9-2.5-3.2-3.3l-12.3 21.3 16.15 28z" fill="#ea4335"/><path d="m43.65 25 12.3-21.3c-1.3-.8-2.8-1.2-4.45-1.2h-15.7c-1.65 0-3.15.4-4.45 1.2z" fill="#00832d"/><path d="m59.8 53.5h-32.3l-12.3 21.3c1.3.8 2.8 1.2 4.45 1.2h47.9c1.65 0 3.15-.4 4.45-1.2z" fill="#2684fc"/><path d="m73.4 26.5-6.65-11.55-12.3 21.3 6.65 11.55c.8-1.4 1.9-2.5 3.2-3.3z" fill="#ffba00"/></svg>
          Buka Resolusi Penuh di GDrive &nearr;
        </a>
      ` : ''}
    </div>
    <div style="background-color: var(--color-warm-white); border-radius: var(--radius-sm); padding: 1rem; border-left: 4px solid var(--color-soft-green);">
      <h5 style="margin-bottom: 0.25rem; font-size: 0.9rem; color: var(--color-midnight-navy);">Keterangan Dokumentasi Kegiatan:</h5>
      <p style="font-size: 0.85rem; color: var(--color-graphite-light); margin: 0;">
        ${note || 'Dokumentasi otentik pelaksanaan Praktik Pengalaman Lapangan (PPL) Mandiri di SD Laboratorium UM.'}
      </p>
    </div>
  `;

  if (downloadBtn) {
    if (isGdrive) {
      downloadBtn.style.display = 'inline-flex';
      downloadBtn.href = viewUrl;
      downloadBtn.target = '_blank';
      downloadBtn.textContent = 'Buka di Google Drive';
    } else {
      downloadBtn.style.display = 'none';
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Quick Search Modal Handler
window.openSearchModal = function() {
  const modal = document.getElementById('quickSearchModal');
  const input = document.getElementById('modalSearchInput');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (input) {
      setTimeout(() => input.focus(), 150);
    }
  }
};

function handleQuickSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const resultsContainer = document.getElementById('modalSearchResults');
  if (!resultsContainer) return;

  if (!query) {
    resultsContainer.innerHTML = '<p class="text-muted text-center" style="padding: 1.5rem 0;">Mulai mengetik untuk mencari berkas di seluruh Topik PPL.</p>';
    return;
  }

  if (typeof window.PPL_DATA === 'undefined') return;

  const matches = [];
  window.PPL_DATA.topics.forEach(topic => {
    topic.items.forEach(item => {
      if (item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          topic.title.toLowerCase().includes(query)) {
        matches.push({ ...item, topicTitle: topic.title, topicSlug: topic.slug });
      }
    });
  });

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="empty-state" style="padding: 1.5rem;">
        <p class="empty-state-title" style="font-size: 1rem;">Tidak ada dokumen ditemukan</p>
        <p class="empty-state-desc" style="font-size: 0.85rem;">Tidak ada dokumen yang cocok dengan kata kunci "<strong>${escapeHtml(query)}</strong>". Coba kata kunci lain.</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matches.map(item => `
    <div style="background-color: var(--color-warm-white); border: 1px solid var(--color-warm-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;">
      <div style="flex-grow: 1;">
        <div style="font-size: 0.72rem; color: var(--color-athletic-orange); font-weight: 700; text-transform: uppercase;">${escapeHtml(item.topicTitle)} • ${escapeHtml(item.category)}</div>
        <div style="font-weight: 700; color: var(--color-midnight-navy); font-size: 0.92rem; margin: 0.15rem 0;">${escapeHtml(item.title)}</div>
        <div style="font-size: 0.8rem; color: var(--color-graphite-light);">${escapeHtml(item.description)}</div>
      </div>
      <div style="display: flex; gap: 0.35rem; align-items: center;">
        <button type="button" class="btn btn-outline-gdrive btn-sm" onclick="closeModal('quickSearchModal'); openGdriveModal('${item.id}', '${escapeHtml(item.title)}', '${escapeHtml(item.category)}', '${item.gdriveUrl || ''}', '${escapeHtml(item.description)}')">
          GDrive
        </button>
        <button type="button" class="btn btn-outline-navy btn-sm" onclick="closeModal('quickSearchModal'); openDocModal('${escapeHtml(item.title)}', '${escapeHtml(item.category)}', '${item.filePath}', ${item.status === 'available'}, '${escapeHtml(item.description)}')">
          Buka
        </button>
      </div>
    </div>
  `).join('');
}

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.closeAllModals = function() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
};

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}
