function addCard(element) {
  const ul = element.previousElementSibling.id; // pega o id do elemento irmão anterior
  console.log('ul: ', ul)

  const task = prompt("Digite o nome da tarefa:");
  console.log('task: ', task)

  const board = document.getElementById(ul);
  console.log('board: ', board)

  const template =
    `<li id="${new Date().getTime()}" draggable="true" ondragstart="drag(event)">
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


function drag(event) {
  event.dataTransfer.setData("card", event.target.id);  // salva o card temporariamente enquando é movido
}

function over(event) {
  event.preventDefault();
}

function drop(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  const data = event.dataTransfer.getData("card"); // recupera o card salvo temporariamente
  const card = document.getElementById(data);

  target.appendChild(card); // adiciona card a nova lista

  event.dataTransfer.clearData(); //limpa o card salvo da memória
}