const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

function goBack() {
    window.location.href = `index.html?id=${id}`;
}
