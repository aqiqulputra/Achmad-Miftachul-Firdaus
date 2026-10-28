/**
 * E-PORTOFOLIO PPL MANDIRI DI SD LABORATORIUM UM
 * Lightbox Controller for Image Gallery
 */

document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
});

let currentGallery = [];
let currentIndex = 0;

function initLightbox() {
  if (!document.getElementById('galleryLightboxModal')) {
    const lightboxHtml = `
      <div id="galleryLightboxModal" class="modal-overlay lightbox-modal" role="dialog" aria-modal="true" aria-label="Pratinjau Foto Dokumentasi">
        <div class="modal-dialog">
          <div class="modal-header" style="background: transparent; border: none; justify-content: flex-end; padding: 0.5rem 0.5rem 0 0;">
            <button type="button" class="modal-close-btn" style="background: rgba(0,0,0,0.5); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;" onclick="closeModal('galleryLightboxModal')" aria-label="Tutup Galeri">&times;</button>
          </div>
          <div class="lightbox-content">
            <div class="lightbox-img-wrap">
              <img id="lightboxImage" class="lightbox-img" src="" alt="Dokumentasi PPL">
              <button type="button" class="lightbox-nav-btn lightbox-prev" aria-label="Foto Sebelumnya" onclick="navigateLightbox(-1)">
                &#10094;
              </button>
              <button type="button" class="lightbox-nav-btn lightbox-next" aria-label="Foto Berikutnya" onclick="navigateLightbox(1)">
                &#10095;
              </button>
            </div>
            <div>
              <div id="lightboxCaption" class="lightbox-caption">Judul Foto</div>
              <div id="lightboxCounter" style="color: rgba(255,255,255,0.7); font-size: 0.8rem; margin-top: 0.35rem;">1 / 1</div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHtml);
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryLightboxModal');
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      }
    }
  });
}

window.openLightbox = function(imagesArray, startIndex = 0) {
  if (!imagesArray || imagesArray.length === 0) return;
  currentGallery = imagesArray;
  currentIndex = startIndex >= 0 && startIndex < imagesArray.length ? startIndex : 0;

  updateLightboxContent();

  const modal = document.getElementById('galleryLightboxModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.navigateLightbox = function(step) {
  if (!currentGallery || currentGallery.length <= 1) return;
  currentIndex = (currentIndex + step + currentGallery.length) % currentGallery.length;
  updateLightboxContent();
};

function updateLightboxContent() {
  const imgEl = document.getElementById('lightboxImage');
  const captionEl = document.getElementById('lightboxCaption');
  const counterEl = document.getElementById('lightboxCounter');

  if (!imgEl || !captionEl || !counterEl) return;

  const item = currentGallery[currentIndex];
  imgEl.src = item.src || item.filePath || '';
  imgEl.alt = item.caption || item.title || 'Dokumentasi PPL SD Lab UM';
  captionEl.textContent = item.caption || item.title || 'Dokumentasi PPL Mandiri';
  counterEl.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
}

