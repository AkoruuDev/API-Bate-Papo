/*
function irParaNovoCadastro() {
    let paginas = document.querySelectorAll(".aplicativo-entrar");
    paginaEntrar = paginas[0];
    paginaCadastro = paginas[1];
    
    paginaEntrar.classList.add("none");
    paginaCadastro.classList.remove("none");
}

function irParaLogin() {
    conferirAlerta();

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
    let mensagem = '<p class="mensagem">Faltaram campos.<br>Por favor, preencha:</p>';
    
    if (novoUsuario.nome == '') {
        mensagem += '<p>Seu nickname</p>'
    }
    if (novoUsuario.password == '') {
        mensagem += '<p>Senha</p>'
    }

    let conferirSenha = document.querySelector(".repitpassword").value;
    if (conferirSenha != '') {
        if ((novoUsuario.nome != '') && conferirSenha == novoUsuario.password) {
            return true;
        } else {
            mensagem = "<p>As senhas não coicidem</p>";
        }
    } else {
        mensagem += '<p>Confirmar senha</p>'
    }
    if (novoUsuario.nome == '' || novoUsuario.password == '' || conferirSenha != novoUsuario.password) {
        let alerta = document.querySelector(".alerta")
        alerta.innerHTML = "";
        mensagem += `
            <div class="buttons">
                <div class="tentar-denovo" onclick="mostrarAlerta()">Tentar denovo</div>
            </div>
        `
        alerta.innerHTML += mensagem;
        mostrarAlerta();
        return false;
    }

    return true;
}


function mostrarAlerta() {
    document.querySelector(".alerta").classList.toggle("none");
}

function conferirAlerta() {
    let alerta = document.querySelector(".alerta");
    if (alerta.classList.toggle("none").value) {
        alerta.classList.remove("none");
    }
}

function alertaUsuarioExistente() {
    let alerta = document.querySelector(".alerta");
    let usuario = document.querySelector(".nome").value;
    alerta.innerHTML = "";
    mensagem = `
        <p class="mensagem">O usuário <span>${usuario}</span> que você escolheu já existe, por favor, escolha outro Nickname ou volte para o Login</p>
        <div class="buttons">
            <div class="login" onclick="irParaLogin()">Login</div>
            <div class="tentar-denovo" onclick="mostrarAlerta()">Tentar denovo</div>
        </div>
    `
    alerta.innerHTML += mensagem

    mostrarAlerta();
}
*/