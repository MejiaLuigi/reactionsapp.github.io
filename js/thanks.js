const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

function goBack() {
    window.location.href = `index.html?id=${id}`;
}

//función para regresar automáticamente después de 15 segundos
function autoGoBack() {
    setTimeout(() => {
        goBack();
    }, 2000); // 15 segundos en milisegundos
}

//Se llama la función para iniciar el temporizador cuando se carga la página

    autoGoBack();

