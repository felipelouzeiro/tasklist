function addCard(element) {
  const ul = element.previousElementSibling.id; // pega o id do elemento irmão anterior
  console.log('ul: ', ul)

  const task = prompt("Digite o nome da tarefa:");
  console.log('task: ', task)

  const board = document.getElementById(ul);
  console.log('board: ', board)

  const template =
    `<li id="${new Date().getTime()}">
      <p>${task}</p>
      <p class="remove" onClick="removeCard(this)">x</p>
    </li>`;

  board.innerHTML = board.innerHTML + template;
}

function removeCard(element) {
  const li = element.parentElement.id; // pega o id do elemento pai
  console.log('li: ', li)

document.getElementById(li).remove();
}