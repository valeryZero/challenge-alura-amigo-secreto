// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde guardaremos los nombres
const amigos = [];

// Referencias a elementos del DOM
const input = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const listaResultado = document.getElementById('resultado');

// Agrega un nombre a la lista
function agregarAmigo() {
  const nombre = (input.value || '').trim();

  if (!nombre) {
    alert('ingrese un nombre valido');
    input.focus();
    return;
  }

  amigos.push(nombre);
  input.value = '';
  input.focus();
  renderLista();
  limpiarResultado();
}

// Sortea un amigo al azar
function sortearAmigo() {
  limpiarResultado();

  if (amigos.length === 0) {
    alert('Primero agrega al menos un nombre.');
    input.focus();
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  const li = document.createElement('li');
  li.textContent = `El amigo secreto sorteado es: ${elegido}`;
  listaResultado.appendChild(li);
}

// Dibuja la lista de nombres en pantalla
function renderLista() {
  listaAmigos.innerHTML = '';
  amigos.forEach((nombre, i) => {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${nombre}`;
    listaAmigos.appendChild(li);
  });
}

// Limpia el resultado del sorteo
function limpiarResultado() {
  listaResultado.innerHTML = '';
}

// (Opcional) Permitir agregar con Enter
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarAmigo();
});
