![App Screenshot](https://github.com/Gitzak/todo-list-Redux-Toolkit/blob/main/Screenshot.png)

## Redux Toolkit Todo List App

This is a simple Todo List application built with React, Redux Toolkit, and Vite. The app allows users to add, edit, toggle, and delete tasks, with data saved in the browser's localStorage. The app also includes a confirmation dialog before deleting tasks.

## Features

*   **Add Tasks:** Users can add new tasks. Tasks are displayed at the top of the list.
*   **Edit Tasks:** Double-click on a task to edit its content. Press Enter or click outside the input to save changes.
*   **Toggle Tasks:** Mark tasks as completed by clicking the checkbox.
*   **Delete Tasks:** Remove tasks with a confirmation dialog to prevent accidental deletion.
*   **Persist Data:** All tasks are saved in localStorage, so they persist even after refreshing the page.

## Installation

1.  Clone the repository:
    
    `git clone https://github.com/Gitzak/todo-list-Redux-Toolkit`
    
    `cd redux-toolkit-example`
    
2.  Install dependencies:
    
    `npm install`
    
3.  Start the development server:
    
    `npm run dev`
    
4.  Open your browser and navigate to `http://localhost:5173`.

## Project Structure

*   **src/components**: Contains the components for input, task list, and task item.
*   **src/reduxToolkit**: Contains Redux Toolkit slice (`todosSlice.js`) and store setup.
*   **public**: Holds the main HTML file.
*   **README.md**: Documentation for the app.

## Technologies Used

*   **React**: For building the user interface.
*   **Redux Toolkit**: For state management, making it easier to handle complex state logic.
*   **Vite**: For fast and optimized development with React.
*   **SweetAlert2**: For displaying confirmation dialogs before task deletion.
*   **Tailwind CSS**: For styling the components in a simple and responsive way.

## Usage

1.  **Add a Task**: Enter a task in the input field and press Enter or click the "Add" button.
2.  **Edit a Task**: Double-click on a task, modify the text, and press Enter to save.
3.  **Toggle a Task**: Click on the checkbox to mark a task as completed or incomplete.
4.  **Delete a Task**: Click the "Delete" button and confirm the deletion in the popup dialog.

## License

This project is open-source and available under the MIT License.
