let input = document.getElementById("taskInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
}); 

function addTask(){
  if(input.value.length>0){
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem('tasks', input.value);
    }else{
      let myTasks = localStorage.getItem('tasks').split(",");
      myTasks.push(input.value);
      localStorage.setItem('tasks', myTasks.toString());
    }
  }
  input.value = "";
  updateTaskList();
}

function updateTaskList(){
  if (localStorage.getItem("tasks")!= null){
    let myTasks = localStorage.getItem("tasks").split(",");
    let taskSection = document.getElementById("tasks");
    if(taskSection.children.length>2){
      let toDelete = taskSection.children.length-2;
      for(let j=0; j<toDelete; j++){
        taskSection.removeChild(taskSection.children[0]);
      }
    }
    let insertPoint = document.getElementsByClassName("circle")[0];
    for(let i=0; i<myTasks.length; i++){
      let newCircle = insertPoint.cloneNode(deep=true);
      let newTask = document.createElement("p");
      newTask.textContent = myTasks[i];
      taskSection.insertBefore(newCircle, insertPoint);
      taskSection.insertBefore(newTask, insertPoint);
    }
  }else{
    let taskSection = document.getElementById("tasks");
    if(taskSection.children.length>2){
      let toDelete = taskSection.children.length-2;
      for(let j=0; j<toDelete; j++){
        taskSection.removeChild(taskSection.children[0]);
      }
    }
  }
}

function removeItem(e){

  var svg = e.currentTarget;
  var circle = svg.children[0];
  var paragraph = svg.nextSibling;
  let text = paragraph.textContent;

  let strikeText = document.createElement("s");
  strikeText.textContent=text;
  paragraph.textContent="";
  strikeText.textContent = text;
  paragraph.appendChild(strikeText);
  circle.style.fill="black";
  let myItems = localStorage.getItem("tasks").split(',');
  for(let i = 0; i<myItems.length; i++){
    if(myItems[i]==text){
      myItems.splice(i, 1);
    }
  }
  if(myItems.length==0){
    localStorage.removeItem("tasks");
  }else{localStorage.setItem("tasks", myItems.toString());}
  
}

updateTaskList();