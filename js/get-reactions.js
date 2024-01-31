window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const places = JSON.parse(localStorage.getItem('places')) || [];

    if (id) {
        const placeFound = places.find((place) => place.id === id);
        const placeTitle = document.getElementById('place');
        placeTitle.textContent = placeFound.place
    }

    function displayReactions() {
        const resultsBody = document.getElementById('resultsBody');
        resultsBody.innerHTML = '';

        const reactions = JSON.parse(localStorage.getItem('reactions')) || [];
        const places = JSON.parse(localStorage.getItem('places')) || [];
        const reactionsFiltered = reactions.filter((reaction => reaction.idPlace === id))

        reactionsFiltered.forEach(reaction => {
            const row = resultsBody.insertRow();
            const dateTimeCell = row.insertCell(0);
            const reactionCell = row.insertCell(1);

            dateTimeCell.textContent = reaction.dateTime;
            reactionCell.textContent = reaction.reaction;
        });
    }

    displayReactions();
}
