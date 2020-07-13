import validator from './validator.js';

// Seleccionar producto para abrir formulario de validacion de pago

let comprarProducto1 = document.getElementById('comprarProductos1');
comprarProducto1.addEventListener('click', comprar);
let comprarProducto2 = document.getElementById('comprarProductos2');
comprarProducto2.addEventListener('click', comprar);
function comprar() {
  document.getElementById('vista2').style.display = "block";
  document.getElementById('vista1').style.display = "none";
} 

// Formulario en el cual despues de dar en el boton confirmar pago se ejecuta el validator
let validarP = document.getElementById('botonValidar');
validarP.addEventListener('click', validarPago)
function validarPago() {
  document.getElementById('vista1').style.display="none";
  document.getElementById('vista2').style.display="none";
  document.getElementById('vista3').style.display="block";
}

//funcion para volver al inicio y cancelar transacción 
const cancelarPago = document.getElementById('volver');
cancelarPago.addEventListener('click', cancelar)
function cancelar() {
  document.getElementById('volver');
}

let numeroTarjeta = document.pago.numeroTarjeta.value;
let enmascarar = validator.maskify(numeroTarjeta);
let validar = validator.isValid(numeroTarjeta);

if (numeroTarjeta === '' ||  NaN || numeroTarjeta === ' '){
  alert('Si deseas continuar con la compra ingrese un numero de tarjeta');
} 
else {
  validar = validator.isValid(numeroTarjeta);
 }

 if (validar) {
  numeroTarjeta = document.pago.numeroTarjeta.value;
  document.getElementById('').innerHTML = 'Su tarjeta de credito ' + enmascarar +''+ 'es VALIDA';
 }
else {
  numeroTarjeta = document.pago.numeroTarjeta.value;
  document.getElementById('').innerHTML = 'Su tarjeta de credito' + enmascarar +''+ 'es INVALIDA, por favor verifique que haya ingresado bien el numero de su tarjeta'
}

console.log(validator);

/*
  .classList.remove('hide');
  .classList.add('hide');*/

  
