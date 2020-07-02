const cliente = {
  nome: 'Alex',
  idade: 38,
  endereco: {
    cidade: 'Batatais',
    estado: 'SP',
  },
};
console.log(cliente);

// buscando as informações do cliente de forma tradicional
/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/

// usando agora a desestruturação
const {
  nome,
  idade,
  endereco: { cidade },
} = cliente;

console.log(nome);
console.log(idade);
console.log(cidade);

// utilizando a desestruturação nos parametros de funções
function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}
mostraNome(cliente);
