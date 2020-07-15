import validator from './validator.js';

function comprar() {
  document.getElementById('vista3').style.display = "block";
  document.getElementById('vista2').style.display = "none";
} 
comprar();
// Formulario en el cual despues de dar en el boton confirmar pago se ejecuta el validator
/*let validarP = document.getElementById('botonValidar');
validarP.addEventListener('click', validarPago)*/

function validarPago() {
  document.getElementById('vista1').style.display="none";
  document.getElementById('vista2').style.display="none";
  document.getElementById('vista3').style.display="block";
  document.getElementById('vista4').style.display="block";
}
console.log(validarPago());
//funcion para volver al inicio y cancelar transacción 
/*const cancelarPago = document.getElementById('volver');
cancelarPago.addEventListener('click', cancelar)*/

function cancelar() {
  document.getElementById('vista1').style.display="block";
  document.getElementById('vista2').style.display="none";
  document.getElementById('vista3').style.display="none";
}
cancelar();

const creditCardNumber = document.getElementById('creditCardNumber').value;
const enmascarar = document.getElementById('tarjetaEnmascarada');
enmascarar = document.write() = validator.maskify(creditCardNumber); //innerHTML o textContent hubiese servido mejor 

let validar = validator.isValid(creditCardNumber);

if (creditCardNumber === '' ||  NaN || creditCardNumber === ' '){
  alert('Si deseas continuar con la compra ingrese un numero de tarjeta');
} 
else {
  validar = validator.isValid(creditCardNumber);
 }

 if (validar) {
  creditCardNumber = document.getElementById('creditCardNumber');
  document.getElementById('vista4').innerHTML = 'Su tarjeta de credito ' + enmascarar +''+ 'es VALIDA';
 }
else {
  creditCardNumber = document.getElementById('creditCardNumber');
  document.getElementById('vista4').innerHTML = 'Su tarjeta de credito' + enmascarar +''+ 'es INVALIDA, por favor verifique que haya ingresado bien el numero de su tarjeta'
}

console.log(validator);  
