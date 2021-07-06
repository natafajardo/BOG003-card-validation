import validator from './validator.js';

const formularioTarjeta = document.querySelector('#formularioTarjeta'); 
const formularioBoton = document.querySelector('#formularioBoton');


formularioTarjeta.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formularioTarjeta.inputNumero.value = valorInput
        .replace(/\s/g, '')//Espacios de cualquier tipo
        .replace(/\D/g, '')//No es un Digito (0-9)
        .trim();//elimina ultimo espacio
});

if (formularioBoton) {
    formularioBoton.addEventListener('click', (e) => {
        e.preventDefault();
        const validated = validator.isValid(formularioTarjeta.inputNumero.value);
        const maskedNumber = formularioTarjeta.inputNumero.value;
        formularioTarjeta.reset();

        setTimeout(function () {
            if (!validated) {
                alert(`La tarjeta de crédito ${validator.maskify(maskedNumber)} es Invalida`);
            } else {
                alert(`La tarjeta de crédito ${validator.maskify(maskedNumber)} es Valida`);
            }
        }, 100);

    });
}


