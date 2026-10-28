/**
 * E-PORTOFOLIO PPL MANDIRI DI SD LABORATORIUM UM
 * Main Application Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initBackToTop();
  initGlobalShortcuts();
});

function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close');

  function openDrawer() {
    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', openDrawer);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  // Highlight active link according to current file
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-item, .mobile-nav-link, .mobile-subnav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      // If inside dropdown, also highlight parent trigger
      const parentDropdown = link.closest('.nav-item');
      if (parentDropdown) {
        const trigger = parentDropdown.querySelector('.dropdown-trigger');
        if (trigger) trigger.classList.add('active');
      }
    }
  });
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initGlobalShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K opens quick search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (typeof window.openSearchModal === 'function') {
        window.openSearchModal();
      }
    }
  });
}

