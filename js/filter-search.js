/**
 * E-PORTOFOLIO PPL MANDIRI DI SD LABORATORIUM UM
 * Realtime Search and Category Filtering Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initFilterAndSearch();
});

function initFilterAndSearch() {
  const searchInput = document.getElementById('docSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const docCards = document.querySelectorAll('.doc-card');
  const countDisplay = document.getElementById('docFilterCount');
  const emptyDisplay = document.getElementById('docFilterEmpty');

  if (!docCards.length && !searchInput) return;

  let currentCategory = 'all';
  let currentQuery = '';

  function applyFilter() {
    let visibleCount = 0;

    docCards.forEach(card => {
      const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
      const cardTitle = (card.querySelector('.doc-title')?.textContent || '').toLowerCase();
      const cardDesc = (card.querySelector('.doc-description')?.textContent || '').toLowerCase();
      const cardType = (card.getAttribute('data-type') || '').toLowerCase();

      const matchesCategory = currentCategory === 'all' || 
                              cardCategory.includes(currentCategory) || 
                              cardType.includes(currentCategory);
                              
      const matchesSearch = !currentQuery || 
                            cardTitle.includes(currentQuery) || 
                            cardDesc.includes(currentQuery) || 
                            cardCategory.includes(currentQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countDisplay) {
      countDisplay.textContent = `Menampilkan ${visibleCount} dokumen`;
    }

    if (emptyDisplay) {
      if (visibleCount === 0) {
        emptyDisplay.style.display = 'block';
      } else {
        emptyDisplay.style.display = 'none';
      }
    }
  }

  // Search input events
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value.toLowerCase().trim();
      if (clearBtn) {
        clearBtn.style.display = currentQuery ? 'block' : 'none';
      }
      applyFilter();
    });
  }

  // Clear button
  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentQuery = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
      applyFilter();
    });
  }

  // Filter pills
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = (pill.getAttribute('data-filter') || 'all').toLowerCase();
      applyFilter();
    });
  });

  // Initial trigger to update count
  applyFilter();
}

