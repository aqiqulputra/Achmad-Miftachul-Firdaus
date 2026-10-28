/**
 * E-PORTOFOLIO PPL MANDIRI DI SD LABORATORIUM UM
 * Interactive Google Drive PDF In-Page Component
 * Powers inline Google Drive viewers across all PPL topics and reflections
 */

document.addEventListener('DOMContentLoaded', () => {
  initGdriveViewers();
});

function initGdriveViewers() {
  const containers = document.querySelectorAll('.gdrive-interactive-box');
  if (!containers || containers.length === 0) return;

  containers.forEach(container => {
    const topicKey = container.getAttribute('data-topic');
    renderGdriveViewer(container, topicKey);
  });
}

function renderGdriveViewer(container, topicKey) {
  if (typeof window.PPL_DATA === 'undefined') {
    setTimeout(() => renderGdriveViewer(container, topicKey), 200);
    return;
  }

  let docItems = [];

  if (topicKey === 'refleksi') {
    // Collect all LK reflection sheets
    const refs = window.PPL_DATA.reflections;
    if (refs) {
      docItems = [
        {
          id: 'ref-terbimbing',
          title: 'LK 3 — Refleksi Praktik Mengajar Terbimbing',
          shortTitle: 'LK 3 (Terbimbing)',
          category: 'Lembar Refleksi Resmi',
          status: refs.terbimbing?.status || 'available',
          gdriveUrl: refs.terbimbing?.gdriveUrl || '',
          desc: 'Refleksi komprehensif pelaksanaan praktik terbimbing PJOK bola basket kelas V, evaluasi variasi motorik, umpan balik pamong, dan persetujuan DPL.'
        },
        {
          id: 'ref-siklus1',
          title: 'LK 4 — Refleksi Praktik Mandiri Siklus 1',
          shortTitle: 'LK 4 (Siklus 1)',
          category: 'Lembar Refleksi Resmi',
          status: refs.siklus1?.status || 'available',
          gdriveUrl: refs.siklus1?.gdriveUrl || '',
          desc: 'Evaluasi apersepsi kontekstual, manajemen pengawasan kelompok, dan transisi ke metode kolaboratif.'
        },
        {
          id: 'ref-siklus2',
          title: 'LK 4 — Refleksi Praktik Mandiri Siklus 2',
          shortTitle: 'LK 4 (Siklus 2)',
          category: 'Lembar Refleksi Resmi',
          status: refs.siklus2?.status || 'available',
          gdriveUrl: refs.siklus2?.gdriveUrl || '',
          desc: 'Analisis efektivitas pos latihan, integrasi kuis digital, dan modifikasi permainan bermakna.'
        },
        {
          id: 'ref-siklus3',
          title: 'LK 4 — Refleksi Praktik Mandiri Siklus 3',
          shortTitle: 'LK 4 (Siklus 3)',
          category: 'Lembar Refleksi Resmi',
          status: refs.siklus3?.status || 'available',
          gdriveUrl: refs.siklus3?.gdriveUrl || '',
          desc: 'Evaluasi jembatan kognitif apersepsi, diferensiasi bimbingan murid, efektivitas alat peraga fisik, serta pengawasan barisan belakang.'
        },
        {
          id: 'ref-siklus4',
          title: 'LK 4 — Refleksi Praktik Mandiri Siklus 4',
          shortTitle: 'LK 4 (Siklus 4)',
          category: 'Lembar Refleksi Resmi',
          status: refs.siklus4?.status || 'available',
          gdriveUrl: refs.siklus4?.gdriveUrl || '',
          desc: 'Puncak refleksi mandiri: student-centered learning, kepemimpinan murid (leader pemanasan), dan diferensiasi gerak.'
        }
      ];
    }
  } else {
    // Look for matching topic in topics list
    const topic = window.PPL_DATA.topics.find(t => t.id === topicKey || t.slug === topicKey || t.slug.includes(topicKey));
    if (topic && topic.items) {
      // Filter PDF and reflection/report documents
      docItems = topic.items
        .filter(item => item.type === 'pdf' || item.type === 'doc' || item.category.toLowerCase().includes('perangkat') || item.category.toLowerCase().includes('refleksi') || item.category.toLowerCase().includes('laporan') || item.category.toLowerCase().includes('penilaian'))
        .map(item => ({
          id: item.id,
          title: item.title,
          shortTitle: item.title.length > 28 ? item.title.substring(0, 26) + '...' : item.title,
          category: item.category,
          status: item.status,
          gdriveUrl: item.gdriveUrl || '',
          desc: item.description
        }));
    }
  }

  if (docItems.length === 0) return;

  // Render outer structure
  const containerId = 'gdriveViewer_' + (topicKey || 'default');
  let activeIndex = 0;

  function renderInner() {
    const activeDoc = docItems[activeIndex];
    const hasUrl = !!(activeDoc.gdriveUrl && activeDoc.gdriveUrl.trim());
    const embedUrl = hasUrl ? window.formatGdriveEmbedUrl(activeDoc.gdriveUrl) : '';

    const tabsHtml = docItems.map((item, idx) => `
      <button type="button" class="gdrive-tab-btn ${idx === activeIndex ? 'active' : ''}" data-idx="${idx}">
        <span>${escapeGdriveHtml(item.shortTitle)}</span>
        <span class="badge ${item.gdriveUrl ? 'badge-gdrive' : 'badge-gdrive-pending'}" style="font-size: 0.68rem; padding: 0.1rem 0.4rem;">
          ${item.gdriveUrl ? 'Tersedia' : 'Pending'}
        </span>
      </button>
    `).join('');

    const frameHtml = hasUrl ? `
      <div class="gdrive-frame-container">
        <iframe src="${embedUrl}" class="gdrive-iframe" allow="autoplay" allowfullscreen title="${escapeGdriveHtml(activeDoc.title)}"></iframe>
      </div>
    ` : `
      <div class="gdrive-placeholder-frame">
        <div class="gdrive-placeholder-icon-wrap">
          <svg viewBox="0 0 87.3 78" width="42" height="42">
            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3-6.65-11.55c-.8 1.4-1.2 2.95-1.2 4.6 0 1.65.4 3.2 1.2 4.6z" fill="#0066da"/>
            <path d="m43.65 25-12.3-21.3c-1.3.8-2.4 1.9-3.2 3.3l-21.55 37.35c-.8 1.4-1.2 2.95-1.2 4.6h24.6z" fill="#00ac47"/>
            <path d="m73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 3.85-6.65c.8-1.4 1.2-2.95 1.2-4.6s-.4-3.2-1.2-4.6l-21.55-37.35c-.8-1.4-1.9-2.5-3.2-3.3l-12.3 21.3 16.15 28z" fill="#ea4335"/>
            <path d="m43.65 25 12.3-21.3c-1.3-.8-2.8-1.2-4.45-1.2h-15.7c-1.65 0-3.15.4-4.45 1.2z" fill="#00832d"/>
            <path d="m59.8 53.5h-32.3l-12.3 21.3c1.3.8 2.8 1.2 4.45 1.2h47.9c1.65 0 3.15-.4 4.45-1.2z" fill="#2684fc"/>
            <path d="m73.4 26.5-6.65-11.55-12.3 21.3 6.65 11.55c.8-1.4 1.9-2.5 3.2-3.3z" fill="#ffba00"/>
          </svg>
        </div>
        <span class="badge badge-gdrive-pending" style="margin-bottom: 0.75rem;">Slot Pratinjau Siap • Menunggu Link Google Drive</span>
        <h3 class="gdrive-placeholder-title">${escapeGdriveHtml(activeDoc.title)}</h3>
        <p class="gdrive-placeholder-desc">
          Tempat pratinjau PDF interaktif Google Drive untuk <strong>${escapeGdriveHtml(activeDoc.category)}</strong> telah aktif di bingkai ini. Segera setelah Anda melampirkan tautan Google Drive, berkas PDF akan langsung ditampilkan secara utuh.
        </p>
        <div class="gdrive-placeholder-guide">
          <h6>
            <svg style="width: 16px; height: 16px; color: var(--color-athletic-orange);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0114 0z"></path>
            </svg>
            Cara Menautkan File PDF Google Drive:
          </h6>
          <ol>
            <li>Buka PDF di Google Drive &rarr; <em>Bagikan (Siapa saja yang memiliki link dapat melihat)</em>.</li>
            <li>Salin link berbagi tersebut.</li>
            <li>Kirimkan tautannya di percakapan ini untuk otomatis diaktifkan pada slot <code>${activeDoc.id}</code>.</li>
          </ol>
        </div>
      </div>
    `;

    container.innerHTML = `
      <div class="gdrive-viewer-wrapper" id="${containerId}">
        <div class="gdrive-viewer-header">
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
            <h4 class="gdrive-viewer-title">${escapeGdriveHtml(activeDoc.title)}</h4>
          </div>
          <div class="gdrive-viewer-actions">
            ${hasUrl ? `
              <a href="${activeDoc.gdriveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gdrive btn-sm" style="background: rgba(255,255,255,0.12); color: #FFFFFF !important; border-color: rgba(255,255,255,0.3);">
                Buka di GDrive &nearr;
              </a>
            ` : ''}
            <button type="button" class="btn btn-secondary btn-sm" onclick="openGdriveModal('${activeDoc.id}', '${escapeGdriveHtml(activeDoc.title)}', '${escapeGdriveHtml(activeDoc.category)}', '${activeDoc.gdriveUrl}', '${escapeGdriveHtml(activeDoc.desc)}')">
              Layar Penuh / Pop-up
            </button>
          </div>
        </div>

        <!-- Document Selector Tabs -->
        <div class="gdrive-selector-tabs">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--color-graphite-muted); margin-right: 0.25rem;">Pilih Berkas:</span>
          ${tabsHtml}
        </div>

        <!-- Frame Body -->
        ${frameHtml}

        <!-- Bottom Description Bar -->
        <div style="padding: 0.85rem 1.5rem; background-color: var(--color-warm-white); border-top: 1px solid var(--color-warm-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; font-size: 0.85rem;">
          <div style="color: var(--color-graphite);">
            <strong style="color: var(--color-midnight-navy);">${escapeGdriveHtml(activeDoc.category)}</strong>: ${escapeGdriveHtml(activeDoc.desc)}
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <button type="button" class="btn btn-outline-navy btn-sm" onclick="openGdriveModal('${activeDoc.id}', '${escapeGdriveHtml(activeDoc.title)}', '${escapeGdriveHtml(activeDoc.category)}', '${activeDoc.gdriveUrl}', '${escapeGdriveHtml(activeDoc.desc)}')">
              Buka di Modal Pratinjau
            </button>
          </div>
        </div>
      </div>
    `;

    // Attach click events to tabs
    const tabButtons = container.querySelectorAll('.gdrive-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const idx = parseInt(target.getAttribute('data-idx'), 10);
        if (!isNaN(idx) && idx !== activeIndex) {
          activeIndex = idx;
          renderInner();
        }
      });
    });
  }

  renderInner();
}

function escapeGdriveHtml(text) {
  if (!text) return '';
  return String(text).replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

