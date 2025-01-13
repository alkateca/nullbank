const arr = [];
let nome = document.getElementById('formularioNome').value;
let sobrenome = document.getElementById('formularioSobrenonome').value;
let formularioEmail = document.getElementById('formularioEmail');
let mensagem = document.getElementById('formularioEensagem').value;

arr.push(nome, sobrenome, formularioEmail, mensagem);

function setStorage(){
    localStorage.setItem('mensagem',arr);
    return;
}


const emailInput = document.getElementById('validarEmail');


const validarEmail = (email) => {
    const teste = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return teste.test(email);
}

function retornoValidacao(){

    const email = emailInput.value;

    const valido = validarEmail(email);

    if(valido){ 
        document.getElementById('confirmarEmail').innerHTML = 'Email adicionado ao Newsletter'
    } else {
        document.getElementById('confirmarEmail').innerHTML = 'Email com formato invalido'

    }
}





