let usuarios = [
    {nome: 'Admin', password: 'Adev@156234'}
];

function irParaNovoCadastro() {
    let paginas = document.querySelectorAll(".aplicativo-entrar");
    paginaEntrar = paginas[0];
    paginaCadastro = paginas[1];
    
    paginaEntrar.classList.add("none");
    paginaCadastro.classList.remove("none");
}

function irParaLogin() {
    let paginas = document.querySelectorAll(".aplicativo-entrar");
    paginaEntrar = paginas[0];
    paginaCadastro = paginas[1];

    paginaEntrar.classList.remove("none");
    paginaCadastro.classList.add("none");
}

function fazerPrimeiroLogin() {
    let paginas = document.querySelectorAll(".aplicativo-entrar");
    paginaEntrar = paginas[0];
    paginaCadastro = paginas[2];

    paginaEntrar.classList.remove("none");
    paginaCadastro.classList.add("none");
}

function novoCadastro() {
    let novoUsuario = this.lerDados();

    if (this.validarCadastro(novoUsuario)) {
        terminarCadastro(novoUsuario);
    }

    console.log(usuarios)
}

function terminarCadastro(novoUsuario) {
    usuarios.push(novoUsuario);
    let paginaCadastro = document.querySelector(".novo-cadastro");
    let cadastroConcluido = document.querySelector(".cadastro-concluido");
    paginaCadastro.classList.add("none");
    cadastroConcluido.classList.remove("none");
}

function lerDados() {
    let novoUsuario = {};

    novoUsuario.nome = document.querySelector(".nome").value;
    novoUsuario.password = document.querySelector(".newpassword").value;;

    return novoUsuario;
}

function validarCadastro(novoUsuario) {
    let msg = 'Preencha todos os campos.\nPor favor, informe:\n\n';
    
    if (novoUsuario.nome == '') {
        msg += 'Seu nickname\n'
    }
    if (novoUsuario.password == '') {
        msg += 'Senha\n'
    }
    if (novoUsuario.nome == '' || novoUsuario.password == '') {
        alert(msg);
        return false;
    }

    return true;
}