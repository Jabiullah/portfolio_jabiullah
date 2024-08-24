document.addEventListener('DOMContentLoaded', () => {
    // Get all tabs and tab contents
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listener to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove upper line and underline from all tabs and remove selected class
            tabs.forEach(t => {
                t.style.borderTop = 'none';
                t.style.textDecoration = 'none';
                t.classList.remove('selected');
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

            // Add the selected class to the clicked tab
            tab.classList.add('selected');
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
});
