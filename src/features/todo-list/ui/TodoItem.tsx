import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';
import { Todo } from '../../../entities/todo/model/types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <View style={styles.container}>
      <Checkbox
        status={todo.completed ? 'checked' : 'unchecked'}
        onPress={() => onToggle(todo.id)}
      />
      <Text
        style={[styles.title, todo.completed && styles.completed]}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {todo.title}
      </Text>
      <IconButton
        icon="delete"
        size={20}
        onPress={() => onDelete(todo.id)}
        style={styles.deleteButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    margin: 0,
  },
});