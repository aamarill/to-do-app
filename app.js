function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false,
    });
    newToDoText.value = ''; // empty out the input textbox

    renderTheUI(toDos);
  }

  function renderTheUI(toDos){
    function deleteEntry(deleteButtonID){
      var deleteButtonPressed = document.getElementById(deleteButtonID);
      var liToBeRemoved = deleteButtonPressed.parentNode;
      liToBeRemoved.remove();
    };

    var toDoList = document.getElementById('toDoList');
    toDoList.innerHTML = '';
    var IDs =1;

    toDos.forEach(function(toDo){
      var newLi    = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      var deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'delete';
      deleteButton.id = 'id'+IDs;
      ++IDs;
      deleteButton.addEventListener("click", function(){deleteEntry(deleteButton.id)});

      newLi.innerHTML = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

    });
  }


  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}

window.onload = function(){
    onReady();
};
