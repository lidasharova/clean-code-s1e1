//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


// Event handling, user interaction is what starts the code execution.

var taskInput=document.querySelector(".add__task");//Add a new task.
var addButton=document.querySelector(".add__button");//first button
var incompleteTaskHolder=document.getElementById("todo-list");//ul of #todo-list
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){

    var listItem=document.createElement("li");
     listItem.className="todo-item";
    //input (checkbox)
    var checkBox=document.createElement("input");//checkbx
    //p
    var p=document.createElement("p");//p
    //input (text)
    var editInput=document.createElement("input");//text
    editInput.className="todo-item__text";
    //button.edit
    var editButton=document.createElement("button");//edit button

    //button.delete
    var deleteButton=document.createElement("button");//delete button
    var deleteButtonImg=document.createElement("img");//delete button image

    p.innerText=taskString;
    p.className='task';

    //Each elements, needs appending
    checkBox.type="checkbox";
    checkBox.className="todo-item__checkbox";
    editInput.type="text";
    editInput.className="todo-item__text task";
    editButton.innerText="Edit"; //innerText encodes special characters, HTML does not.
    editButton.className="todo-item__edit-btn button";
    deleteButton.className="todo-item__delete-btn button";
    deleteButtonImg.src='./remove.svg';
    deleteButtonImg.className="todo-item__delete-img";
    deleteButton.appendChild(deleteButtonImg);


    //and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(p);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}



var addTask=function(){
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    if (!taskInput.value) return;
    var listItem=createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";

}

//Edit an existing task.

var editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");


    var listItem=this.parentNode;

    var editInput=listItem.querySelector('input[type=text]');
    var p=listItem.querySelector("p");
    console.log(p)
    var editBtn=listItem.querySelector(".todo-item__edit-btn");
    var containsClass=listItem.classList.contains("todo-item_edit");
    //If class of the parent is .todo-item_edit
    if(containsClass){

        //switch to .todo-item_edit
        //p becomes the inputs value.
        p.innerText=editInput.value;
        editBtn.innerText="Edit";
    }else{
        editInput.value=p.innerText;
        editBtn.innerText="Save";
    }

    //toggle .todo-item_edit on the parent.
    listItem.classList.toggle("todo-item_edit");
};


//Delete task.
var deleteTask=function(){
    console.log("Delete Task...");
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
}


//Mark task completed
var taskCompleted=function(){
    console.log("Complete Task...");
    //Append the task list item to the #completed-tasks
    var listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}


var taskIncomplete=function(){
    console.log("Incomplete Task...");
//Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #todo-list.
    var listItem=this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
    console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");
//select ListItems children
    var checkBox=taskListItem.querySelector(".todo-item__checkbox");
    var editButton=taskListItem.querySelector(".todo-item__edit-btn");
    var deleteButton=taskListItem.querySelector(".todo-item__delete-btn");


    //Bind editTask to edit button.
    editButton.onclick=editTask;
    //Bind deleteTask to delete button.
    deleteButton.onclick=deleteTask;
    //Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i=0; i<incompleteTaskHolder.children.length;i++){

    //bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (var i=0; i<completedTasksHolder.children.length;i++){
    //bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}




// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change edit to save when you are in edit mode.