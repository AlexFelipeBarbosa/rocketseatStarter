/* Passando valor padrão de a = 3 e b = 6 */
function soma(a = 3, b = 6) {
  return a + b;
}
// nesse exemplo não foi passado nenhum valor, vai utilizar o padrão 3+6=9
console.log(soma());

// nesse exemplo não foi passado o valor de B, retorno: 1+6=7
console.log(soma(1));

// nesse exemplo vai fazer a conta normalmente, pois foi passado os dois valores
console.log(soma(10, 15));

/* O mesmo acontece se utilizarmos arrow function */
const novaSoma = (a = 5, b = 10) => a + b;
console.log(novaSoma()); // retorna 15
console.log(novaSoma(2)); // retorna 12
