const nomePaciente = 'Alex';
const idadePaciente = 38;

const paciente = {
  nomePaciente: nomePaciente,
  idadePaciente: idadePaciente,
  empresa: 'Alex Barbosa',
};

console.log(paciente);

/* Utilizando short sintax não é necessario repetir o valor para nomePaciente 
e idadePaciente, pois os nomes são iguais.
*/

const paciente2 = {
  nomePaciente, // não precisa repetir aqui
  idadePaciente, // não precisa repetir aqui
  empresa: 'Alex Barbosa',
};

console.log(paciente2);
