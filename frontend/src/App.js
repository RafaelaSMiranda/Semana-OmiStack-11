import React from 'react';

import './pages/ListTodos'

import ListTodos from './pages/ListTodos';
import AddTodo from './pages/AddTodo'

export default function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>Seja bem vinda, Rafa</h2>
      <ListTodos />
      <AddTodo />
    </div>
  );
}