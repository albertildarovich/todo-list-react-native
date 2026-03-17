import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { useTodoStore } from '../../../features/todo-list/model/store';
import { AddTodoForm } from '../../../features/todo-list/ui/AddTodoForm';
import { TodoList } from '../../../features/todo-list/ui/TodoList';
import { TodoStats } from '../../../widgets/todo-stats/ui/TodoStats';
import { TodoFilter } from '../../../entities/todo/model/types';

export const HomePage: React.FC = () => {
  const { todos, filter, addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } =
    useTodoStore();

  const filteredTodos = React.useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <AddTodoForm onAdd={addTodo} />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
          <TodoStats
            total={todos.length}
            completed={completedCount}
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
          />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 0,
  },
});