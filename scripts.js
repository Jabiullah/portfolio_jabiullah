// Get all tabs and tab contents
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        // Add click event listener to each tab
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove upper line and underline from all tabs
                tabs.forEach(tab => {
                    tab.style.borderTop = 'none';
                    tab.style.textDecoration = 'none';
                });

                // Hide all tab contents
                tabContents.forEach(content => {
                    content.style.display = 'none';
                });

                // Show the corresponding tab content and add upper line to the selected tab
                const tabId = tab.textContent.toLowerCase() + '-content';
                const tabContent = document.getElementById(tabId);
                if (tabContent) {
                    tabContent.style.display = 'block';
                    tab.style.borderTop = '2px solid black'; // Add upper line to selected tab
                    tab.style.textDecoration = 'none'; // Remove underline from selected tab
                }

                // Add hover event listener to each tab to show underline when not selected
                tab.addEventListener('mouseenter', () => {
                    if (!tab.classList.contains('selected')) {
                        tab.style.textDecoration = 'underline';
                    }
                });

                // Remove underline when mouse leaves the tab
                tab.addEventListener('mouseleave', () => {
                    if (!tab.classList.contains('selected')) {
                        tab.style.textDecoration = 'none';
                    }
                });
            });
        });

        // Modal functionality for project images
        const modal = document.createElement('div');
        modal.classList.add('modal');
        document.body.appendChild(modal);

        const modalContent = document.createElement('img');
        modalContent.classList.add('modal-content');
        modal.appendChild(modalContent);

        const closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.innerHTML = '&times;';
        modal.appendChild(closeButton);

        const projectImages = document.querySelectorAll('.project-img');
        projectImages.forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'flex'; // Display modal as flex container
                modalContent.src = img.src;
                if (img.width > window.innerWidth * 0.8 || img.height > window.innerHeight * 0.8) {
                    modalContent.style.width = '80%'; // Limit larger images to 80% of the window width
                    modalContent.style.height = 'auto'; // Maintain aspect ratio
                } else {
                    modalContent.style.width = 'auto'; // Allow smaller images to be displayed at their natural width
                    modalContent.style.height = 'auto'; // Allow smaller images to be displayed at their natural height
                }
            });
        });


        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });