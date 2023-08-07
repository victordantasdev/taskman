# TaskMan - Simple Task Manager

TaskMan is a lightweight and user-friendly task manager built using Next.js and TypeScript. With TaskMan, you can effortlessly create tasks and subtasks, reorder them using drag and drop functionality, and delete tasks as needed. The application also ensures that all your task states are automatically saved to the browser's local storage, so even if you reload the page, you won't lose any of your tasks.

<img src="https://github.com/victordantasdev/taskman/assets/64330605/0242ac73-2904-453d-8174-d5bb8df33f21" width="100%" />

## Features
- Create tasks and subtasks.
- Reorder tasks and subtasks using drag and drop.
- Delete tasks and subtasks.
- Automatic state persistence using local storage.

## Getting Started

To get started with TaskMan, follow the steps below:

### Prerequisites
Before you begin, ensure that you have the following installed on your machine:
- Node.js: https://nodejs.org
- npm (Node Package Manager): This comes bundled with Node.js.

### Installation
1 - Clone the TaskMan repository to your local machine:

```bash
git clone https://github.com/your-username/taskman.git
cd taskman
```
2 - Install the project dependencies using npm:
```bash
npm install
```

### Running the Application
Now that the dependencies are installed, you can run the TaskMan application locally:

```bash
npm run dev
```

This will start the development server, and you can access TaskMan by navigating to http://localhost:3000 in your web browser.

## Usage
- To create a new task, type a task name and click on the "Add Task" button or press Enter key.
- To create a subtask, click on the "Add Subtask" button within the parent task and enter the subtask details then click on "add" button or press Enter.
- You can reorder tasks and subtasks by dragging and dropping them to the desired position.
- To delete a task or subtask, click on the delete icon (trash can) next to the task/subtask.

## Data Persistence
TaskMan automatically saves your tasks and subtasks to the browser's local storage. This means that even if you reload the page or close the browser, your tasks will be preserved.

## Technologies Used
- Next.js: https://nextjs.org
- TypeScript: https://www.typescriptlang.org

## Contributing
Contributions to TaskMan are welcome! If you find any bugs, have suggestions for new features, or want to improve the code, feel free to open an issue or submit a pull request on the GitHub repository.

## License
TaskMan is open-source software licensed under the MIT License.

## Acknowledgments
TaskMan was created with the support of the open-source community and the following resources:

- [Next.js Documentation]('https://nextjs.org/docs')
- [TypeScript Documentation]('https://www.typescriptlang.org/docs')
- [react-beautiful-dnd (rbd) Documentation]('https://github.com/atlassian/react-beautiful-dnd')

## benchmarks

|||
|---|---|
|Lighthouse on Mobile|![image](https://github.com/victordantasdev/taskman/assets/64330605/68563932-5388-45c8-8a63-3785a95d8031)
|Lighthouse on Desktop|![image](https://github.com/victordantasdev/taskman/assets/64330605/a93e64a9-b149-413f-b9a7-b0e836ecf770)
|Page load on slow 3g and no cache (10.63s)|![image](https://github.com/victordantasdev/taskman/assets/64330605/c88ccbfa-fb70-446f-b7c8-1ad74960f8cb)
