import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { TodoFilter } from '../../../entities/todo/model/types';

interface TodoStatsProps {
  total: number;
  completed: number;
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  onClearCompleted: () => void;
}

export const TodoStats: React.FC<TodoStatsProps> = ({
  total,
  completed,
  filter,
  onFilterChange,
  onClearCompleted,
}) => {
  const active = total - completed;

  return (
    <View style={styles.container}>
      <View style={styles.statsRow}>
        <Text style={styles.statText}>
          {active} {active === 1 ? 'item' : 'items'} left
        </Text>
        <Text style={styles.statText}>
          {completed} of {total} completed
        </Text>
      </View>
      <SegmentedButtons
        value={filter}
        onValueChange={(value) => onFilterChange(value as TodoFilter)}
        buttons={[
          { value: 'all', label: 'All' },
          { value: 'active', label: 'Active' },
          { value: 'completed', label: 'Completed' },
        ]}
        style={styles.segmented}
      />
      {completed > 0 && (
        <Text style={styles.clearButton} onPress={onClearCompleted}>
          Clear completed
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statText: {
    fontSize: 14,
    color: '#666',
  },
  segmented: {
    marginBottom: 12,
  },
  clearButton: {
    fontSize: 14,
    color: '#d32f2f',
    textAlign: 'center',
    paddingVertical: 8,
    fontWeight: '500',
  },
});