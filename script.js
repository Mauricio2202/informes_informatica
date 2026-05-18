document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const panels = document.querySelectorAll('.panel-item, .card-microsoft');
    const gridDashboard = document.getElementById('cardsGrid');
    const alertContainer = document.getElementById('androidAlert');

    if (searchTerm.length >= 3 && (
        'android'.includes(searchTerm) || 
        'studio'.includes(searchTerm) || 
        searchTerm.includes('and') || 
        searchTerm.includes('stud')
    )) {
        gridDashboard.style.display = 'none';
        alertContainer.style.display = 'block';
        alertContainer.style.borderColor = '#420813';
        alertContainer.innerHTML = `
            <h4>AVISO DE LOGÍSTICA: RESTRICCIÓN DE ENTORNO (ANDROID)</h4>
            <p>Por motivos de infraestructura y optimización de recursos en la estación de revisión, <strong>Android Studio no está soportado</strong>. Los proyectos basados en esta tecnología colapsan el hardware de la coordinación, por lo que no se aceptarán para entrega académica.</p>
        `;
        return;
    }

    if (searchTerm.length >= 3 && (
        'unity'.includes(searchTerm) || 
        searchTerm.includes('uni') || 
        searchTerm.includes('unt')
    )) {
        gridDashboard.style.display = 'none';
        alertContainer.style.display = 'block';
        alertContainer.style.borderColor = '#d97706';
        alertContainer.innerHTML = `
            <h4>AVISO DE LOGÍSTICA: RESTRICCIÓN DE MOTOR (UNITY)</h4>
            <p>El motor de desarrollo <strong>Unity no está habilitado para revisión local</strong> en este ciclo académico. Debido al alto consumo de GPU/CPU que requiere su ejecución y renderizado, estos proyectos saturan el equipo de la coordinación. Favor de apegarse a las herramientas ligeras autorizadas.</p>
        `;
        return;
    }

    alertContainer.style.display = 'none';
    gridDashboard.style.display = 'grid';

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