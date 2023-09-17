//document.addEventListener("DOMContentLoaded", () => {
  // your code here
//});

//CREATE GLOBAL VARIABLES
const taskForm = document.querySelector("#create-task-form")
const taskUl = document.querySelector("#tasks")

function addTask(e) {
  //block page refreshes
  e.preventDefault()
  //determine what the user typed
  const input = e.target["new-task-description"].value
  //Add new li to the collectionwith user input as text
  const newLi = document.createElement('li') //*returns a new Node
  newLi.textContent = input
  
  
  const btn = document.createElement("button")
  btn.addEventListener("click", () => newLi.remove())
  btn.textContent = "X"
  newLi.append(btn)

  taskUl.appendChild(newLi)
  //Append the li as child of the Ul
  e.target.reset()
}

function attachListeners() {
  // attach all listeners that we might need
  taskForm.addEventListener("submit", addTask)

}


attachListeners()
