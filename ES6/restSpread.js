/* REST --> Serve para "pegar" o resto das propriedades.
   SPREAD --> Serve para "propagar" repassar as informação de um objeto ou um array
    pra outra estrutura de dados.
*/

const aluno = {
  nomeAluno: 'Alex',
  idade: 38,
  cidade: 'Batatais',
  curso: 'Desenvolvimento Web',
};

/* Neste exemplo já usando a desestruturação.
   Na variavel nomeAluno, vai trazer somente Alex
   Na variavel resto, vai trazer todas as outras propriedades de aluno  
   ... --> REST 
*/
const { nomeAluno, ...resto } = aluno;

console.log(nomeAluno);
console.log(resto);

/*  Também é possivel utilizar em arrays
 */
const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, ...c] = meuArray;
console.log(a); // retorna 1
console.log(b); // retorna 2
console.log(c); // retorna [3,4,5,6,7,8,9,10]

/* Utilizando em parametros de funções
 */
function soma(a, b, ...params) {
  return params;
}
console.log(soma(1, 2, 3, 4, 5, 6, 7)); // retorna: [3,4,5,6,7]

/************ SPREAD */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Neste exemplo ele concatena a informação dos dois arrays
const arr3 = [...arr1, ...arr2];
console.log(arr3); // retorna: [1,2,3,4,5,6]

const usuario1 = {
  nome: 'Alex',
  idade: 38,
  empresa: 'Alex Barbosa',
};

// Neste exemplo vai pegar todas as propriedades do usuario1 e alterar o nome
const usuario2 = { ...usuario1, nome: 'Felipe' };
console.log(usuario2); // retorna: {nome: "Felipe", idade: 38, empresa: "Alex Barbosa"}
