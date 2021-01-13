var tasker = {
    construct: function() {
        this.selectElements();
        var taskInput = document.getElementById('input-task');
        var addButton = document.getElementById('add-task-btn');
        var taskList = document.getElementById('tasks');
        var errorMessage = document.getElementById('error');
        var taskListChildren = document.getElementById('tasks');
    }
}

  tasker.buildTask: function() {
      var taskListItem = document.createElement('li').setAttribute("class", "button");
      var taskCheckBox = document.createElement('input');
      var taskValue = document.createTextNode("Tasks todo").value == "taskInput";
      var taskButton = document.createElement('button');
      var taskTrash = document.createElement('button').setAttribute("class", "button");
        taskTrash.appendChild(taskButton);
        taskCheckBox.appendChild(taskListItem);
        taskValue.appendChild(taskListItem);
        taskButton.appendChild(taskListItem);
        taskListItem.appendChild(taskList);
}

tasker.error: function() {
    if(document.getElementById("error").value == "") {
      document.getElementById("error").innerHTML="You must add a task!";
      return false;
    }
}
