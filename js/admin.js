function addPlace() {
    const placeInput = document.getElementById('placeInput');
    const place = placeInput.value.trim();

    if (place !== '') {
        const placeId = generateRandomId();
        const placeData = {
            id: placeId,
            place: place
        };

        let places = JSON.parse(localStorage.getItem('places')) || [];
        places.push(placeData);
        localStorage.setItem('places', JSON.stringify(places));

        // Mostrar en la tabla de resultados
        displayResultsPlace();

        // Limpiar el input después de agregar
        placeInput.value = '';
    } else {
        alert('Por favor, ingrese un lugar válido.');
    }
}

function displayResultsPlace() {
    const resultsBody = document.getElementById('resultsBody');
    resultsBody.innerHTML = '';

    const places = JSON.parse(localStorage.getItem('places')) || [];

    places.forEach(place => {
        const row = resultsBody.insertRow();
        const placeCell = row.insertCell(0);
        const actionsCell = row.insertCell(1);

        placeCell.textContent = place.place;

        // Botón para redirigir a la página de reacciones con el id del lugar
        const goToReact = document.createElement('a');
        goToReact.innerHTML = 'Reaccionar';
        goToReact.href = `index.html?id=${place.id}`;
        actionsCell.appendChild(goToReact);

        // Botón para redirigir a la página de reacciones con el id del lugar
        const goToDetails = document.createElement('a');
        goToDetails.innerHTML = 'Ver registros';
        goToDetails.href = `see-reactions.html?id=${place.id}`;
        actionsCell.appendChild(goToDetails);
    });
}

function redirectToReactionsPage(placeId) {
    // Redirigir a la página de reacciones con el id del lugar
    window.location.href = `index.html?id=${placeId}`;
}

function generateRandomId() {
    // Generar un id aleatorio simple (puedes personalizar esto según tus necesidades)
    return Math.random().toString(36).substring(2, 10);
}

// Mostrar resultados al cargar la página
displayResultsPlace();
