document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburgerIcon');
  const searchToggle = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const searchInput = document.getElementById('searchInput');
  const languageButton = document.getElementById('languageButton');
  const languageDropdown = document.getElementById('languageDropdown');
  const languageDropdownMobile = document.getElementById('languageDropdownMobile');
  const mobileLanguageToggle = document.querySelector('.mobile-language-toggle');
  const mobileSearchTriggers = document.querySelectorAll('.mobile-search-trigger');
  const languageOptions = document.querySelectorAll('.language-option');
  const currentLanguageLabel = document.getElementById('currentLanguage');

  const closeLanguageDropdown = () => {
    if (languageDropdown) {
      languageDropdown.classList.remove('active');
      if (languageButton) {
        languageButton.setAttribute('aria-expanded', 'false');
      }
    }
    if (languageDropdownMobile) {
      languageDropdownMobile.classList.remove('active');
      if (mobileLanguageToggle) {
        mobileLanguageToggle.setAttribute('aria-expanded', 'false');
      }
    }
  };

  const closeSearchPanel = () => {
    if (!searchPanel) return;
    searchPanel.classList.remove('active');
    if (searchToggle) {
      searchToggle.setAttribute('aria-expanded', 'false');
    }
  };

  const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('active');
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
    if (hamburger) {
      hamburger.classList.remove('active');
    }
  };

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !mobileMenu.classList.contains('active');
      mobileMenu.classList.toggle('active');
      if (hamburger) {
        hamburger.classList.toggle('active', willOpen);
      }
      mobileToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      if (!willOpen) {
        closeLanguageDropdown();
      }
    });
  }

  if (searchToggle && searchPanel) {
    searchToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !searchPanel.classList.contains('active');
      searchPanel.classList.toggle('active', willOpen);
      searchToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      if (willOpen) {
        closeLanguageDropdown();
        setTimeout(() => {
          if (searchInput) {
            searchInput.focus();
          }
        }, 60);
      }
    });
  }

  if (mobileSearchTriggers.length) {
    mobileSearchTriggers.forEach((link) => {
      link.addEventListener('click', (event) => {
        if (searchPanel) {
          event.preventDefault();
          closeMobileMenu();
          searchPanel.classList.add('active');
          if (searchToggle) {
            searchToggle.setAttribute('aria-expanded', 'true');
          }
          setTimeout(() => {
            if (searchInput) {
              searchInput.focus();
            }
          }, 180);
        }
      });
    });
  }

  if (languageButton && languageDropdown) {
    languageButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !languageDropdown.classList.contains('active');
      languageDropdown.classList.toggle('active', willOpen);
      languageButton.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      if (willOpen) {
        closeSearchPanel();
      }
    });
  }

  if (mobileLanguageToggle && languageDropdownMobile) {
    mobileLanguageToggle.addEventListener('click', (event) => {
      event.preventDefault();
      const willOpen = !languageDropdownMobile.classList.contains('active');
      languageDropdownMobile.classList.toggle('active', willOpen);
      mobileLanguageToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  }

  if (languageOptions.length) {
    languageOptions.forEach((option) => {
      option.addEventListener('click', () => {
        const url = option.getAttribute('data-url');
        const label = option.textContent ? option.textContent.trim() : '';
        if (label && currentLanguageLabel) {
          currentLanguageLabel.textContent = label;
        }
        closeLanguageDropdown();
        if (url) {
          window.location.href = url;
        }
      });
    });
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    const isSearchTrigger = searchToggle && (target === searchToggle || searchToggle.contains(target));
    if (searchPanel && !searchPanel.contains(target) && !isSearchTrigger) {
      closeSearchPanel();
    }

    const isLanguageTrigger = languageButton && (target === languageButton || languageButton.contains(target));
    if (languageDropdown && !languageDropdown.contains(target) && !isLanguageTrigger) {
      languageDropdown.classList.remove('active');
      if (languageButton) {
        languageButton.setAttribute('aria-expanded', 'false');
      }
    }

    if (mobileMenu && mobileMenu.classList.contains('active')) {
      const toggleClicked = mobileToggle && (target === mobileToggle || mobileToggle.contains(target));
      if (!mobileMenu.contains(target) && !toggleClicked) {
        closeMobileMenu();
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSearchPanel();
      closeLanguageDropdown();
      closeMobileMenu();
    }

    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      if (searchPanel) {
        event.preventDefault();
        searchPanel.classList.add('active');
        if (searchToggle) {
          searchToggle.setAttribute('aria-expanded', 'true');
        }
        setTimeout(() => {
          if (searchInput) {
            searchInput.focus();
          }
        }, 60);
      }
    }
  });
});
