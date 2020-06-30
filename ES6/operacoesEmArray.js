/* 
  map --> percorre o vetor e retorna algo de dentro do vetor.
  reduce --> consumir todo o vetor e transformar em uma unica informação.
  filter --> filtra os itens do vetor, conforme alguma condição (retorna: true/false)
  find --> procurar alguma informação dentro do array.

*/

// Utilizando o MAP
const arr = [1, 3, 4, 5, 8, 9, 7, 12, 15];
const newArr = arr.map(function (item) {
  // vai percorrer todo o vetor e multiplicar por 2 item a item
  return item * 2;
});
console.log(newArr);

// Utilizando o REDUCE
const sum = arr.reduce(function (total, next) {
  /* vai percorrer todo o vetor e somar total mais o valor do proximo item
   e no final vai mostrar a soma total
   */
  return total + next;
});
console.log(sum);

// Utilizando o FILTER
const filter = arr.filter(function (item) {
  // filtrando somente os numeros pares
  return item % 2 === 0;
});
console.log(filter);

// Utilizando o FIND
const find = arr.find(function (item) {
  // procurando se dentro do array tem o item  4
  return item === 4;
});
console.log(find);
