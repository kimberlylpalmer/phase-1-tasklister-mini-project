const form = document.addEventListener('#create-task-form')

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target['new-task-description'].value)
    form.reset()
  })
})

function handleToDo(todo) {
  const li = document.createElement('li')
  li.textContent = `${todo}      *`
  const btn = document.createElement('button')
  btn.textContent = 'delete'
  btn.addEventListener('click', handleDelete)
  li.appendChild(btn)
  const ul = document.getElementById('tasks')
  ul.appendChild('li')
}

function handleDelete() {
  e.target.parentNode.remove()
}

// const form = document.querySelector("#create-task-form")

// document.addEventListener("DOMContentLoaded", () => {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     handleToDo(e.target['new-task-description'].value)
//     form.reset()
//   })
// })

// function handleToDo(todo) {
//   const li = document.createElement('li');
//   li.textContent = `${todo}     `
//   const btn = document.createElement('button')
//   btn.textContent = 'delete'
//   btn.addEventListener('click', handleDelete)
//   li.appendChild(btn)
//   const ul = document.getElementById('tasks')
//   ul.appendChild(li)
// }

// function handleDelete(e) {
//   e.target.parentNode.remove()
// }


// const form = document.querySelector("#create-task-form");
// document.addEventListener("DOMContentLoaded", () => {
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   handleToDo(e.target['new-task-description'].value)
//   // your code here
//   form.reset()
// })
// })

// function handleToDo(todo) {
//   const li = document.createElement('li');
//   li.textContent = `${todo}   `
//   const btn = document.createElement('button')
//   btn.textContent = 'delete'
//   btn.addEventListener('click', handleDelete)
//   li.appendChild(btn)
//   const ul = document.getElementById('tasks')
//   ul.appendChild(li)
// }

// function handleDelete(e) {
//   e.target.parentNode.remove()
// }

//   let form = document.getElementById("create-task-form");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     handleToDo(e.target["new-task-description"].value);
//     form.reset();
//   });
// });

// function handleToDo(todo) {
//   console.log(todo);
//   let li = document.createElement("li");
//   let btn = document.createElement("button");
//   btn.addEventListener("click", handleDelete); //build this function
//   btn.textContent = "x";
//   li.textContent = `${todo} `;
//   li.appendChild(btn);
//   console.log(li);
//   document.getElementById("tasks").appendChild(li);
// }

// function handleDelete(e) {
//   e.target.parentNode.remove();
// }
