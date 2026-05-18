document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const panels = document.querySelectorAll('.panel-item, .card-microsoft');

    panels.forEach(panel => {
        const title = panel.querySelector('h3').textContent.toLowerCase();
        const tags = panel.getAttribute('data-tags').toLowerCase();
        const category = panel.querySelector('.panel-category').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || tags.includes(searchTerm) || category.includes(searchTerm)) {
            panel.style.display = 'flex';
        } else {
            panel.style.display = 'none';
        }
    });
});