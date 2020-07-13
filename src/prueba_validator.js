/*const validator = function isValid(creditCardNumber) {  // funcion que valida la tarjeta de credito 
  let number = document.getElementById("creditCardNumber").value;  //obtener Número de tarjeta de credito ingresado por el usuario en formulario 
  if (numero === '' ||  NaN || numero === ' '){
      alert("Por favor escribe numeros sin espacios o letras en este espacio para poder validar la tarjeta ");
  } 
  else {
      let creditCardNumber = numero.split('');  //.split divide un objeto de tipo String en un array de cadenas mediante la separacion de la cadena en subcadenas.
      creditCardNumber = creditCardNumber.reverse(); //.reverse invierte el orden de los elementos de un array. El pimer elemento pasa a ser el ultimo y el ultimo al primero.
  }
  }
  let cardPar = [];  //aqui se almacenaran los números pares del array con los numeros de la tarjeta a la inversa.
  for (i = 0; i < creditCardNumber.length; i++) {
      if(creditCardNumber[i] % 2 === 0) {
          let multiplicaPar = cardPar * 2;  //identifica los pares del array y los multiplica * 2
          if (multiplicaPar > 9) {
              multiplicaPar = multiplicaPar - 9;} // Si la multiplicación es mayor a 9, reste 9.
          let inpar = (creditCardNumber[i] % 2 !== 0); // si no es igual, identifica a estos numeros como impares 
          let suma = (inpar + multiplicaPar);  //Suma los pares multiplicados por 2 y los impares
          cardPar.push(parseInt(creditCardNumber[i]));
      }
      sumaTotal = cardPar.push(parseInt(creditCardNumber[i])) % 10;  //Si la sumatoria de los digitos es modulo de 10, el residuo debe ser 0.
      return sumaTotal;
      if (sumaTotal === 0) {
          
          document.write ("Su Tarjeta es Valida");
          document.style.color = "green"; 
      }
      else (sumaTotal !== 0) 
      {document.write ("Su Tarjeta de crédito NO es Valida");
          document.style.color = "red";
          console.log(cardPar);
      }
    }
    
  function maskify(creditCardNumber) {
      const longitud = creditCardNumber.length;
      if (longitud < 4) 
      return creditCardNumber;
      return '#'.repeat(longitud - 4) + creditCardNumber.slice(-4);
    }
    
export default validator;

/*const validator = {
 
    // ...
  };
  
  export default validator;*/

