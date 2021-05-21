
/*
JS é Case Sensitive = reconhece letras maiusculas e minusculas
por tag: getElementByTagNAme ()
por Id: getElementByID ()
por nome: getElementByName ()
por calsse: getElementsClassName ()
por Seletor: querySelector ()
*/
let  nome = window.document.getElementById ('nome')
let email = document.querySelector ('#email')
let assunto = document.querySelector ('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector ('#mapa')
let foto = document.querySelector ('#')
nome.style.width = '100%'
email.style.width = '100%'
 
function validaNome () {
    let txt =document.querySelector ('#txtNome')
    if (nome.value.length < 3){
txt.innerHTML = 'Nome Inválido'
txt.style.color = 'red' }
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail () {
    let txtEmail =document.querySelector ('#txtEmail')
if ( email.value.indexOf ('@')== -1 || email.value.indexOf ('.') == -1 ) {
txtEmail.innerHTML= 'Email Inválido'
txtEmail.style.color = 'red'
}
else {
    txtEmail.innerHTML = 'Email Válido'
    txtEmail.style.color = 'green'
   emailOk = true
}} 
 function validaAssunto () {
    let txtAssunto =document.querySelector ('#txtAssunto')
    if (assunto.value.length >=100) {
      txtAssunto.innerHTML = 'Texto maior que o esperado, digite no máximo 100 caracteres'
      txtAssunto.style.color = 'red'
      txtAssunto.style.display = 'block'
    }
    else {
      txtAssunto.style.display = 'none'
     assuntoOk = true
    }
}
function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    }
    else {
        alert ('Preencha os dados corretamente!')
    }
}
function mapaZoom () {
 mapa.style.width = '800px'
 mapa.style.heigth = '600px'
}
function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'
}



