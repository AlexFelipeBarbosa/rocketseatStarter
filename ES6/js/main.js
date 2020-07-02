class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

/* Herança --> A classe TodoList herda da classe List */
class TodoList extends List {
  constructor() {
    super();
    this.usuario = 'Alex Barbosa';
  }

  mostrarUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo registro');
};

MinhaLista.mostrarUsuario();
