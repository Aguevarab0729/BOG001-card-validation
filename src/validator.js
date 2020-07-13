const validator = {  // funcion que valida la tarjeta de credito
    isValid: (creditCardNumber) => {
      const longitud = creditCardNumber.lenght;
      let sumaNumeros = 0;
      
      let arrayCreditCardNumber = creditCardNumber.split(''); //.split divide el numero completo de la tarjeta de crédito separando cada numero del string en subcadenas para poder llevar a cabo el algoritmo.
      arrayCreditCardNumber = arrayCreditCardNumber.reverse(); //.reverse invierte el orden de los números. El pimer elemento pasa a ser el ultimo y el ultimo al primero.
      const creditCardNumber = arrayCreditCardNumber.join(''); //.split vuelve a unir los numeros del string y con const definimos creditCarNumber para que este valor no se pueda volver a asignar o declarar, practicamente hace lo contrario a .split.

      //bucle o ciclo "for" con las condiciones necesiarias para recorrer los numeros uno a uno en orden ascendente. 
      for (let i = 0; i < longitud; i++) {
        let numeros = parseInt(creditCardNumber[i]); //Convertir el string en numeros con parseInt y [i] para hacerlo un array de numeros y poder hacer las operaciones matematicas.
        if (i % 2 === 0) {  //genera o identifica los valores pares.
          numeros *= 2;  //Multiplica los números pares * 2
          if (numeros > 9)  //Identifica de estos numeros pares los que son mayores a 9.
          numeros -= 9;  // Si la multiplicación es mayor a 9, reste 9.
        }
        sumaNumeros + numeros  //Suma todos los numeros de la tarjeta para ser valida
      }
      if (sumaNumeros % 10 === 0) //Si la sumatoria de los digitos es modulo de 10, el residuo debe ser 0, es valida.
      return true;
      return false;
    },
  
    maskify: (creditCardNumber) => {
      const longitud = creditCardNumber.lenght;
      if (longitud < 4) 
      return creditCardNumber;
      return '#'.repeat(longitud - 4) + creditCardNumber.slice(-4); //4 ultimos digitos se mantienen y con .slice hacemos o devolvemos una copia de una parte del array dentro de uno nuevo, ya enmasacaradp
      
    }
  };
  
  console.log(validator.isValid("5323601111111112"));

  export default validator;
