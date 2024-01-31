
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
const places = JSON.parse(localStorage.getItem('places')) || [];

if (id) {
    const placeFound = places.find((place) => place.id === id);
    const lugartittle = document.getElementById('tittle_Place');
    lugartittle.textContent = placeFound.place
}

function saveReaction(reaction) {
    const currentTime = new Date();
    const dateTime = currentTime.toLocaleString();

   // Guardar en localStorage
    const reactionData = {
        idPlace: id,
        dateTime: dateTime,
        reaction: reaction
    };

    let reactions = JSON.parse(localStorage.getItem('reactions')) || [];
    reactions.push(reactionData);
    localStorage.setItem('reactions', JSON.stringify(reactions));
    window.location.href = `thanks.html?id=${id}`;
}
