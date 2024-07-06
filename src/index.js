document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
      event.preventDefault();  // Prevents the default form submission behavior
      
      const newTaskDescription = document.getElementById('new-task-description').value;
      
      if (newTaskDescription) {
          // Create a new list item
          const newTask = document.createElement('li');

          // Use template literals for string interpolation
          newTask.innerHTML = `${newTaskDescription} <button class="delete-button">x</button>`;

          // Append the new task to the task list
          taskList.appendChild(newTask);

          // Clear the input field after adding the task
          document.getElementById('new-task-description').value = '';
      }
  });

  // Add a click event listener to the task list to handle delete button clicks
  taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-button')) {
          event.target.parentElement.remove();
      }
  });
});
