function suma() {
  let num1 = prompt("Ingrese un primer número para al suma");
  let num2 = prompt("Ingrese un segundo número para al suma");
  resultado = parseInt(num1) + parseInt(num2);
  return resultado;
}
function resta() {
  let num1 = prompt("Ingrese un primer número para al resta");
  let num2 = prompt("Ingrese un segundo número para al resta");
  resultado = parseInt(num1) - parseInt(num2);
  if (resultado < 0) {
    return 0
  } 
  return resultado
}
var resultado;
document.write(`El resultado de la suma es:
        ${suma()} <br>`);
document.write(`El resultado de la resta es:
        ${resta()}`);


