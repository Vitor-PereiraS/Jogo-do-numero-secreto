/*let titulo = document.querySelector('H1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
*/
let listasDeNumerosSorteados = [];
let numeroLimite = 100;
let tentativas = 1
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)

function exibirtextoNaTela (Tag, texto) {
    let campo = document.querySelector(Tag);
    campo.innerHTML = texto;
    
    if ('speechSynthesis' in window) {
      let utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'pt-BR'; 
      utterance.rate = 1.2; 
      window.speechSynthesis.speak(utterance); 
  } else {
      console.log("Web Speech API não suportada neste navegador.");
  }
}

function exibirMensagemInicial(){
exibirtextoNaTela('h1' ,'Jogo do número secreto');
exibirtextoNaTela('p' ,'Escolha um numero entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
      exibirtextoNaTela('h1', 'acertou');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o numero secreto com 
      ${tentativas} ${palavraTentativa}`;
      exibirtextoNaTela('p' , mensagemTentativas);
    } else {
      if (chute > numeroSecreto) {
        exibirtextoNaTela('p', 'o numero secreto é menor' );
        } else {
          exibirtextoNaTela('p' , 'o numero secreto é maior');
        } 
        tentativas++
        limparCampo()
        document.getElementById('reiniciar').removeAttribute('disabled')
    }

}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite){
    listasDeNumerosSorteados = [];
  }

  if (listasDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
  } else {
      listasDeNumerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  console.log(numeroSecreto)
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
  }


