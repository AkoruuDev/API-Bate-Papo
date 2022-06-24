let usuarios = [
    {nome: 'Admin', password: 'Adev@156234'}
];

function renderizar() {
    const promisse = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
    console.log(promisse)
    promisse.then(verificarRender);
}

function verificarRender(resposta) {
    console.log(resposta.data)
}

renderizar();