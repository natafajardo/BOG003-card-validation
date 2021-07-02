import validator from './validator.js';

const formularioTarjeta = document.querySelector('#formularioTarjeta'); // id formulario 
const formularioBoton = document.querySelector('#formularioBoton'); 


formularioTarjeta.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formularioTarjeta.inputNumero.value = valorInput
        .replace(/\s/g, '')//Espacios de cualquier tipo
        .replace(/\D/g, '')//No es un Digito (0-9)
        .trim();//elimina ultimo espacio
});

 if (formularioBoton) {
    formularioBoton.addEventListener('click',  (e) => {
        //e.preventDefault();
        const validated = validator.isValid(formularioTarjeta.inputNumero.value);
        const maskedNumber = formularioTarjeta.inputNumero.value;   
         formularioTarjeta.reset();
        showAlert(validated, maskedNumber);
    });
} 
 
function showAlert(validated, maskedNumber) {
    if (!validated) {
        alert(`La tarjeta de crédito ${maskedNumber} es Invalida`);
   } else {
        alert(`La tarjeta de crédito ${maskedNumber} es Valida`);
   }
}
