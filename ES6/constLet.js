/* const --> não pode ter seu valor reatribuido. Mas é permitido mutação.
   let --> Variavel de escopo, é possivel reatribuir valor.
 */

// exemplo de mutação
const usuario = { nome: 'Alex' };
usuario.nome = 'Felipe';

console.log(usuario); // mostra Felipe

function teste(x) {
  let y = 2;
  if (x > 5) {
    // neste exemplo o valor de Y é reatribuido de 2 para 4
    let y = 4;
    console.log(x, y);
  }
}
teste(10); // mostra 10 4
