const codigo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newCodigo = codigo.map((item) => item * 2);
console.log(newCodigo);

const teste1 = () => {
  return 'Isso é um teste!';
};
console.log(teste1());

const teste2 = () => [1, 2, 3];
console.log(teste2());

const teste3 = () => {
  return { nome: 'Alex' };
};
console.log(teste3());

const teste4 = () => ({ nome: 'Felipe' });
console.log(teste4());
