# Task Manager

### Simple task manager built with React. 
### Supports task creation, json-server(only in developer mode), and local storage persistence.

## Demo
#### https://lshakel.github.io/Todo_react/

## Features:
* Add and delete tasks
* Mark tasks as completed
* Search task
* Show first incomplete task
* Tasks are saved in localStorage or on server
* Responsive UI

## Advanced Features:
* Client-side routing (SPA) 
* Custom 404 page handling for Github pages
* Global state management using React Context
* React Router

## Tech Stack:
- React (Hooks, Context API)
- React Router
- JavaScript
- SCSS
- Vite (build tool)
- json-server (mock API)

## State Architecture
- Context API for global state
- useReducer for state transitions
- Custom hooks for business logic separation

## Custom Hooks
- useTasks – handles task state logic
- useIncompleteTaskFinder – to identify the first incomplete task in the list

## Pages:
- TasksPage – displays list of tasks
- TaskPage – displays detailed task information
- NotFoundPage – handles invalid routes and missing tasks

## Routing
- / – TasksPage (main list view)
- /tasks/:id – TaskPage (task details view)

Implemented using React Router for SPA navigation.

## Backend (Dev only)
Mock REST API implemented using json-server for local development.

Run:  
npm run server

## Deployment
Deployed using GitHub Pages with gh-pages package.

## Key Design Decisions
- useReducer was chosen over multiple useState hooks for better state predictability
- Context API used to avoid prop drilling
- Memoization applied to reduce unnecessary re-renders in task list
- Custom hooks introduced to separate business logic from UI components

## Performance
- React.memo used to prevent unnecessary re-renders of task components
- useCallback used to stabilize function references

## Installation
git clone: https://github.com/lShaKel/Todo_react.git  
cd Todo_react  
npm install  
npm run dev 
