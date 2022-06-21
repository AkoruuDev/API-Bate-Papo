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

function novoCadastro() {
    let usuario = this.lerDados();

    let novoUsuario = usuarios.length
}

function lerDados() {
    let usuario = {};

    usuario.nome = document.querySelector(".nome").value;
    usuario.password = document.querySelector(".newpassword").value;;

    return usuario;
}