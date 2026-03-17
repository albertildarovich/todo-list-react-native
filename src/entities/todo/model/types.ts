export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number; // timestamp
}

export type TodoFilter = 'all' | 'active' | 'completed';