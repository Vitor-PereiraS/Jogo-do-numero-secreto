let titulo = document.querySelector('H1');
titulo.innerHTML = 'Hora do Desafio'

function botaoConsole() {
    console.log('O botão foi clicado')
}

function botaoAlert() {
    alert('Eu amo JS')
}

function botaoprompt() {
    let cidade = prompt('Digete o nome de alguma cidade brasileira:')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function botaoSoma() {
    let n1 = Number(prompt('Digite o primeiro numero'));
    let n2 = Number(prompt('Digite o segundo numero'));
    let soma = n1 + n2;
    alert(`A soma entre ${n1} e ${n2} é igual a ${soma}.`)

}
