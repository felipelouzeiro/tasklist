function addCard(element) {
  const ul = element.previousElementSibling.id;
  console.log('ul: ', ul)
  
  const task = prompt("Digite o nome da tarefa:");
  console.log('task: ', task)
  
  const board = document.getElementById(ul);
  console.log('board: ', board)

  const template = 
    `<li>
      <p>${task}</p>
      <p class="remove">x</p>
    </li>`;

  board.innerHTML = board.innerHTML + template;
}