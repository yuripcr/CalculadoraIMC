const form = document.querySelector('form');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura'); 
const alertError = document.querySelector('.alert-error')

/* 
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal h1')
const modalBtn = document.querySelector('.modal button.close')
*/

import { Modal } from "./modal.js";
import { IMC, notANumber } from "./utils.js";

// 3 maneiras de criar e atribuir função a um elemento
// form.onsubmit = () => {}
//form.onsubmit = handleSubmit - ai cria a função handleSubmit
form.onsubmit = function(e) {
    e.preventDefault();
    const peso =  inputPeso.value;
    const altura = inputAltura.value;

    const pesoOrAltuNan = notANumber(peso) || notANumber(altura)
    if (pesoOrAltuNan || peso <= 0 || altura <= 0) {
        alertError.classList.add('open')
        return;
    }

    alertError.classList.remove('open')
    const result = IMC(peso, altura)
    displayResultMessage(result)
    inputPeso.value = '' 
    inputAltura.value = ''
}

function displayResultMessage(result){
    const message = `Seu IMC é ${result}`
    Modal.message.innerText = message
    Modal.open()
}

inputPeso.oninput = function () {
    alertError.classList.remove('open')
}

inputAltura.oninput = function () {
    alertError.classList.remove('open')
}


/** 
modalBtn.addEventListener('click', () => {
    modalWrapper.classList.remove('open')
}) */

/**
modalBtn.onclick = function () {
    modalWrapper.classList.remove('open')
}
 */