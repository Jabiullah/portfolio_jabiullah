// ==================== TAB NAVIGATION MODULE ====================
const TabNavigation = (function() {
    const navItems = document.querySelectorAll('.nav__item');
    const contentSections = document.querySelectorAll('.content');

    function switchTab(targetTab) {
        // Remove active state from all tabs
        navItems.forEach(item => {
            item.classList.remove('nav__item--active');
        });

        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.remove('content--active');
        });

        // Activate selected tab
        const activeNavItem = document.querySelector(`[data-tab="${targetTab}"]`);
        const activeContent = document.getElementById(`${targetTab}-content`);

        if (activeNavItem && activeContent) {
            activeNavItem.classList.add('nav__item--active');
            activeContent.classList.add('content--active');
        }
    }

    function init() {
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                switchTab(targetTab);
            });

            // Keyboard accessibility
            item.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const targetTab = this.getAttribute('data-tab');
                    switchTab(targetTab);
                }
            });
        });
    }

    return { init };
})();

// ==================== IMAGE MODAL MODULE ====================
const ImageModal = (function() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.modal__close');

    function openModal(imageSrc, imageAlt) {
        if (!modal || !modalImg) return;
        
        modal.classList.add('modal--active');
        modalImg.src = imageSrc;
        modalImg.alt = imageAlt;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeModal() {
        if (!modal) return;
        
        modal.classList.remove('modal--active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    function init() {
        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // Close on background click
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Attach click handlers to all project images
        const projectImages = document.querySelectorAll('[data-modal-img]');
        projectImages.forEach(img => {
            img.addEventListener('click', function() {
                openModal(this.src, this.alt);
            });
        });
    }

    return { init };
})();

// ==================== INITIALIZE APP ====================
document.addEventListener('DOMContentLoaded', function() {
    TabNavigation.init();
    ImageModal.init();
});