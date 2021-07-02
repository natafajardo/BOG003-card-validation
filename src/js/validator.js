const validator = {
  isValid: function (numeroTarjeta) {
    console.log(typeof numeroTarjeta);
    const invertido = invertirNumeros(numeroTarjeta);
    const numerosOperados = operacionPares(invertido);
    const residuo = obtenerResiduo(numerosOperados);


    if (residuo === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function (numeroTarjeta) {
    const splitNumber = numeroTarjeta.split("");
    const maskedArray = splitNumber.map((item, index) => {
      if (index < splitNumber.length - 4) {
        return item.replace(item, '#')
      } else {
        return item;
      }
    });
    return maskedArray.join("");
  }
};


function invertirNumeros(numero) {
  const splitNumber = numero.split("");// metodo para retornar un array
  const reverseArray = splitNumber.reverse(); // metodo par areversar el nuevo array
  const joinArray = reverseArray.join(""); // metodo para convertirlo en una cadena de texto

  return joinArray;
}

function operacionPares(invertido) {
  const splitNumber = invertido.split("");//metodo para retornar un array
  const arrayNumber = splitNumber.map(item => parseInt(item));
  const operatedNumber = arrayNumber.map((item, index) => {
    if ((index + 1) % 2 === 0) {
      if (item * 2 >= 10) {
        const splitItem = (item * 2).toString().split("");
        return parseInt(splitItem[0]) + parseInt(splitItem[1]);
      } else {
        return item * 2;
      }
    } else {
      return item;
    }
  })
  //console.log(operatedNumber);           // 3578  8753   8556

  return operatedNumber.reduce((total, num) => {
    return total + num;
  });

}

function obtenerResiduo(numerosOperados) {
  console.log(numerosOperados % 10);
  return numerosOperados % 10;
}

export default validator;

