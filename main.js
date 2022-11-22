var newTask = document.querySelector("#new-task");
var addTaskBtn = document.querySelector("#addTask");

var toDoUl = document.querySelector(".todo-list-div ul");
var completeUl = document.querySelector(".complete-list ul");

var createNewTask = function (task) {
  console.log("Creating task...");

  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");

  label.innerText = task;

  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

var addTask = function () {
  console.log("Adding task...");

  var listItem = createNewTask(newTask.value);

  toDoUl.appendChild(listItem);

  newTask.value = "";

  bindIncompleteItems(listItem, completeTask);
};

var completeTask = function () {
  var listItem = this.parentNode;

  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  var checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();

  completeUl.appendChild(listItem);

  bindCompleteItems(listItem, deleteTask);
};

var deleteTask = function () {
  console.log("Deleting task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
};

var bindIncompleteItems = function (taskItem, checkBoxClick) {
  console.log("Binding the incomplete list...");

  var checkBox = taskItem.querySelector("input[type=checkbox]");

  checkBox.onchange = checkBoxClick;
};

var bindCompleteItems = function (taskItem, deleteButtonPress) {
  console.log("Binding the complete list...");

  var deleteButton = taskItem.querySelector(".delete");

  deleteButton.onclick = deleteButtonPress;
};

for (var i = 0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}

for (var i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

addTaskBtn.addEventListener("click", addTask);