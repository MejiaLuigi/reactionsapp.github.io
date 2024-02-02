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
        const goToReact = document.createElement('button');
        goToReact.innerHTML = 'Reaccionar';
        goToReact.classList.add('btn', 'btn-outline-primary', 'btn-sm');
        goToReact.addEventListener('click', function() {
            window.location.href = `index.html?id=${place.id}`;
        });
        actionsCell.appendChild(goToReact);

        // Botón para redirigir a la página de ver-reacciones con el id del lugar

        const goToDetails = document.createElement('button');
        goToDetails.innerHTML = 'Ver registros';
        goToDetails.classList.add('btn', 'btn-outline-primary', 'btn-sm');
        goToDetails.addEventListener('click', function() {
            window.location.href = `see-reactions.html?id=${place.id}`;
        });
        actionsCell.appendChild(goToDetails);

        //Botón para eliminar
        const deleteCell = document.createElement('button');
        deleteCell.innerHTML = 'Eliminar';
        deleteCell.classList.add('btn', 'btn-danger', 'btn-sm');

        deleteCell.addEventListener('click', function( ){
            const deleteRow = deleteCell.parentNode.parentNode;
            const places = JSON.parse(localStorage.getItem('places')) || [];
            const placesFound = places.filter((places => places.id !== place.id));

            localStorage.setItem('places', JSON.stringify(placesFound));

            const reactions = JSON.parse(localStorage.getItem('reactions')) || [];
            

            const reactionsFound = reactions.filter(reaction => reaction.idPlace !== place.id);

            localStorage.setItem('reactions', JSON.stringify(reactionsFound));
            deleteRow.remove();
        })

        actionsCell.appendChild(deleteCell);

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
