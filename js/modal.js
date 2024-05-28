export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal h1'),
    btnClose: document.querySelector('.modal button.close'),
    open() {
        Modal.wrapper.classList.add('open')
    },

    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.btnClose.onclick = function () {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event){
    if (event.key === 'Escape') {
        Modal.close()
    }
}

