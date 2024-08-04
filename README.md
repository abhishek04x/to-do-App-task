# This is the to-do-App made with React+vite.
React -> React is a JavaScript Library for bulding user Interface mostly for creating simple page application.It is developed and maintained by facebook.

Vite->Vite is a fast, modern build tool and development server for web projects, optimized for speed and performance.Vite provides instant server start, lightning-fast HMR (Hot Module Replacement), and optimized build output. It is particularly popular for frameworks like Vue and React.

# Overview
This Todo List application is built using React and Vite. It provides users with the ability to create, update, mark as done, search, and view tasks in an expandable list format. Tasks are displayed with their description and the timestamp of the last update. This project demonstrates core React concepts and state management. I also add a dummy jason file which stores the data.


#  Features
-> Create Task: Add new tasks with a title and description.
-> Update Task: Edit existing tasks, including the title and description.
-> Mark as Done: Toggle the completion status of tasks.
-> Search Tasks: Filter tasks by title using a search input.
-> Expandable List: View task details, including description and last update timestamp, when the task is   expanded.

# Implementation Details
State Management: Tasks are managed using React's useState hook. State is updated when tasks are added, updated, or deleted.
Component Interaction: Components communicate via props and callback functions. For example, TaskList passes tasks to TaskItem, which handles individual task interactions.
Data Handling: Task data is initially loaded from a dummy JSON file. The application maintains task state locally, simulating basic CRUD operations.

# Setup and run 
1.Clone the repository(download zip file from my github)
2.Install Dependencies (npm i)
3.then run in chrome (npm run dev)
