document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', function(evnt){
    evnt.preventDefault()
    let taskDescription = document.getElementById('new-task-description')
    let tasksUl = document.getElementById('tasks')
    let li = document.createElement("li")
    li.setAttribute("id", taskDescription.value)

    //create reset button
    let resetButton = document.createElement("button")
    resetButton.innerHTML = "Complete"
    resetButton.setAttribute("id", taskDescription.value)

    //append task list with new list element based on task description
    li.appendChild(document.createTextNode(taskDescription.value + " "))
    //append new list element with Complete button
    li.appendChild(resetButton)
    //append full list
    tasksUl.appendChild(li)
    console.log("added task")
  })

  document.getElementById('tasks').addEventListener('click', function(evnt){
    let deleteTarget = evnt.target.id
    let liTarget = document.getElementById(deleteTarget).remove()

  })
});
