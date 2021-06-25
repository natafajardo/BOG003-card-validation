import validator from './validator.js';

console.log(validator);


const formularioTarjeta = document.querySelector('#formularioTarjeta');





formularioTarjeta.inputNumero.addEventListener('keyup' , (e) => {
    let valorInput = e.target.value;

    formularioTarjeta.inputNumero.value = valorInput
    .replace(/\s/g, '')
    .replace(/\D/g, '')
    .trim();
});


function validar (){
    var array = validar.split("");


}








