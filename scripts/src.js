let usuarios = [
    {nome: 'Admin', password: 'Adev@156234'}
];

function irParaNovoCadastro() {
    let paginas = document.querySelectorAll(".aplicativo-entrar");
    paginaEntrar = paginas[0];
    paginaCadastro = paginas[1];

    paginaEntrar.classList.add("none");
    paginaCadastro.classList.remove("none")
}

function irParaLogin() {
    let paginas = document.querySelectorAll(".aplicativo-entrar");
    paginaEntrar = paginas[0];
    paginaCadastro = paginas[1];

    paginaEntrar.classList.remove("none");
    paginaCadastro.classList.add("none")
}