// src/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './List';

test('renders todo list component', () => {
  const todos = [
    { id: 1, text: 'Todo 1', done: false },
    { id: 2, text: 'Todo 2', done: true },
  ];

  const deleteTodoMock = jest.fn();
  const completeTodoMock = jest.fn();

  render(<TodoList todos={todos} deleteTodo={deleteTodoMock} completeTodo={completeTodoMock} />);

  const todoElements = screen.getAllByText(/Todo \d/i);
  expect(todoElements).toHaveLength(2);

  // Add more assertions based on your component's behavior
});
