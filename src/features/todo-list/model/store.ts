import { create } from 'zustand';
import { Todo, TodoFilter } from '../../../entities/todo/model/types';

interface TodoStore {
  todos: Todo[];
  filter: TodoFilter;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: TodoFilter) => void;
  clearCompleted: () => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [
    { id: '1', title: 'Learn React Native', completed: true, createdAt: Date.now() },
    { id: '2', title: 'Implement Feature-Sliced Design', completed: false, createdAt: Date.now() },
    { id: '3', title: 'Build a TODO app', completed: false, createdAt: Date.now() },
  ],
  filter: 'all',
  addTodo: (title) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now().toString(),
          title,
          completed: false,
          createdAt: Date.now(),
        },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  setFilter: (filter) => set({ filter }),
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
}));