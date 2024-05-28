function IMC (peso, altura) {
    return (peso / ((altura / 100) ** 2)).toFixed(2);
}

function notANumber (value) {
    return isNaN(value) || value == ''
}

export { IMC, notANumber }