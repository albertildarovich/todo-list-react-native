import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface AddTodoFormProps {
  onAdd: (title: string) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    const trimmed = title.trim();
    if (trimmed) {
      setIsSubmitting(true);
      onAdd(trimmed);
      setTitle('');
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="What needs to be done?"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        mode="outlined"
        dense
        disabled={isSubmitting}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        disabled={!title.trim() || isSubmitting}
        style={styles.button}
        icon="plus"
      >
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    marginRight: 12,
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 8,
  },
});