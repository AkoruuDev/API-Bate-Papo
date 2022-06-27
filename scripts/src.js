let mensagem;

buscarMensagensDoServidor();
setInterval(buscarMensagensDoServidor, 3000);
puxarMensagensParaOFinaldaPagina();
setTimeout(setInterval(usuarioPermaneceLogado, 5000), 4000);

// Funções do sistema
function buscarMensagensDoServidor(){
    // OnLoad
    // Pega todas as mensagens salvas no servidor
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promise.then(tratarSucesso);
}

function tratarSucesso(resposta){
    //  Verifica o status da API
    //  Função chamada pela f buscarMensagensDoServidor()
    let status = resposta.status;
    if (status != 200) {
        tratarErro(status);
    } else {
        mensagem = resposta.data;
        mostrarMensagensNoChat(mensagem);
    }
}

function mostrarMensagensNoChat(mensagem){
    // Mostra na tela do chat as mensagens
    // Função chamada pela f tratarSucesso(resposta)
    const chatDeMensagens = document.querySelector(".listaDeMensagens");   
    chatDeMensagens.innerHTML = "";
    const msg = mensagem.length;
    for(let i = 0; msg > i; i ++){
        const from = (mensagem[i].from);
        const text = (mensagem[i].text);
        const time = (mensagem[i].time);
        const to = (mensagem[i].to);
        const type = (mensagem[i].type);

        if (type == "status"){
            let mensagem = `
                <li class= "suaMensagemAqui entrou-saiu">
                    <div class="hora">
                        <span>(${time})</span>
                    </div>
                    <div>
                        <span><strong>${from}</strong></span>
                        ${text}
                    </div>
                </li>`;
            chatDeMensagens.innerHTML += mensagem;
        }

        if (type == "message"){
            let mensagem = `
                <li class= "suaMensagemAqui mensagemPadrao">
                    <div class="hora">
                        <span>(${time})</span>
                    </div>
                    <div>
                        <span><strong>${from}</strong></span>
                         para 
                        <span><strong>${to}</strong>:
                        </span><span>${text}</span>
                    </div>
                </li>`;
            chatDeMensagens.innerHTML += mensagem;
        }

        if(type == "private_message"){
            let mensagem = `
                <li class= "suaMensagemAqui mensagemPrivada">
                    <div class="hora">
                        <span>(${time})</span>
                    </div>
                    <div>
                        <span><strong>${from}</strong></span>
                         reservadamente para 
                        <span><strong>${to}</strong>:
                        </span><span>${text}</span>
                    </div>
                </li>`;
            chatDeMensagens.innerHTML += mensagem;
        }
    }
}

function puxarMensagensParaOFinaldaPagina() {
    // OnLoad
    // Deixa as ultimas mensagens visiveis
    const chat = document.querySelector('.listaDeMensagens');
    chat.scrollIntoView();
}

function usuarioPermaneceLogado() {
    const usuarioOnline = {
        name: user
    }

    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/status", usuarioOnline);
}

function conferirUsuarioCadastrado() {
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
    promise.then(conferirUsers);
    promise.catch(tratarErro);
}

function conferirUsers(resposta) {
    let users = resposta.data;
    let i = 0;
    while (i < users.length) {
        if (user === users[i]) {
            tratarErro(400);
        } else {
            
        }
        i++
    }
}


// Funções de envio das mensagens
const user = nomearUsuario();

function nomearUsuario() {
    // Pega o nome do usuário e salva na variável global user
    const user = prompt('Qual seu lindo nome?');

    const nome = {
        name: user
    }
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nome);
    
    promise.then(conferirUsuarioCadastrado)
    promise.catch(tratarErro);
    
    return user;
}

function enviarMensagem() {
    const mensagemParaEnviar = document.querySelector(".send-messenge").value;

    novaMensagemParaOServidor = {
        from: user,
        to: 'Todos',
        text: mensagemParaEnviar,
        type: 'message'
    }

    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", novaMensagemParaOServidor);

    promise.then(buscarMensagensDoServidor);
    promise.catch(tratarErroEFazerLogin);
}

function pegarHoras() {
    //  Pega as horas:minutos:segundos atual
    const time = new Date();
    let HH = time.getHours();
    let MM = time.getMinutes();
    let SS = time.getSeconds();

    const formatTime = formatarHoras(HH, MM, SS);
    return formatTime;
}

function formatarHoras(HH, MM, SS) {
    //  Pega as var e as deixam com duas casas
    //  Função chamada pela f pegarHoras()
    let fHH = HH.toFixed();
    let fMM = MM.toFixed();
    let fSS = SS.toFixed();

    if (fHH.length < 2) {
        fHH = '0' + fHH;
    }

    if (fMM.length < 2) {
        fMM = '0' + fMM;
    }

    if (fSS.length < 2) {
        fSS = '0' + fSS;
    }

    const formatTime = `${fHH}:${fMM}:${fSS}`;
    return formatTime;
}

// Area de Tratamento de erros
function tratarErro(status) {
    let mensagemDeErro = EscreverMensagemDeErro(status);
    prepararAlertadeErro(mensagemDeErro);
}

function EscreverMensagemDeErro(status) { // Precisa conferir
    //  Traduz o status de erro para o Usuario
    //  Função chamada pela f tratarErro()
    let mensagemDeErro = "";
    
    if (status == 200) {
        mensagemDeErro = `
        ${status}
        `;
    } else if (status == 400) {
        mensagemDeErro = `
        O usuario ${user} já está sendo usado, por favor, escolha outro
        `;
    }

    return mensagemDeErro;
}

function prepararAlertadeErro(mensagemDeErro) {
    //  Escreve na tela de alerta a mensagem
    //  Função chamada pela f tratarErro()
    let alerta = document.querySelector(".alerta")
    alerta.innerHTML = "";
    alerta.innerHTML += mensagemDeErro;
    mostrarAlertaErro();
}

function mostrarAlertaErro() {
    //  Mostra na tela a caixa de alerta
    //  Função chamada pela f prepararAlertadeErro(mensagemDeErro)
    document.querySelector(".alerta").classList.remove("none");
}

function tirarAlertaErro() {
    //  Tira da tela a caixa de alerta
    document.querySelector(".alerta").classList.add("none");
}

function tratarErroEFazerLogin() { // Precisa conferir
    alert("Parece que você não está mais logado, faça o login novamente!")
    window.location.reload()
}


// Dá uma olhada aqui, boi
entrarsala();

function entrarsala(){
    
}