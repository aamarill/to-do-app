function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList    = document.getElementById('toDoList');
  var idNumber = 1;
  addToDoForm.addEventListener('submit', (event) => {

    event.preventDefault();

    // Get the text.
    let title = newToDoText.value;

    // Create a new li.
    let newLi = document.createElement('li');
    // Set the li id.
    newLi.id = 'liID'+idNumber;

    // Create new input for the checkbox.
    let checkbox = document.createElement('input');
    // Set the input's type to checkbox.
    checkbox.type = 'checkbox';

    // Create the delete button.
    let deleteButton = document.createElement('button');
    // Set the delete button's type, text content and ID.
    deleteButton.type = 'button';
    deleteButton.textContent = 'delete';
    deleteButton.id = 'deleteButtonID' + idNumber;
    deleteButton.addEventListener("click", function(){
      deleteParent(deleteButton.id);
      }
    );

    // Set the title.
    newLi.textContent = title;

    // Attach the li item to the ul.
    toDoList.appendChild(newLi);

    // Attach the textbox to the li.
    newLi.appendChild(checkbox);

    // Attach the delete button
    newLi.appendChild(deleteButton);
    // Empty the input.
    newToDoText.value = '';

    // Increment the ID counter
    ++idNumber;

    // Function to delete the parent of the delete button
    function deleteParent(deleteButtonID){

      // Get the delete button object
      var deleteButton = document.getElementById(deleteButtonID);
      // Use the delete button to get "li" parent element
      var parentLi = deleteButton.parentNode;
      // Remove the parent "li"
      parentLi.remove();

    }
  });
}

window.onload = function(){
    alert('New page has loaded!');
    onReady();
};
