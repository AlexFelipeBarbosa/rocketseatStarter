/* Utilizando um metodo estatico
  Este metodo não enxerga o restante da classe.
*/

class Matematica {
  //static --> define que o metodo é estativo
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 5));
