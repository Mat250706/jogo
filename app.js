//let titulo = document.querySelector('h1');
//titulo.innerHTML = ('Jogo do numero secreto');

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = ('Escolha um numero entre 1 e 10');

let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela (tag, texto) {
    let tagtexto = document.querySelector (tag);
    tagtexto.innerHTML = (texto);
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2})
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value 
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela ('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
        
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O numero secreto é menor')
        }

        else {
            exibirTextoNaTela ('p', 'O numero secreto é maior')
        }
            
        tentativas++
        limparCampo()
    }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length

    if (quantidadeElementosLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } 

    else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
    
    
}

function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial()

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').disabled = true
    //document.getElementById('reiniciar').setAttribute('disabled',true)


}


