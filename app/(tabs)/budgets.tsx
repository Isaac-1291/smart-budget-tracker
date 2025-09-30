import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const budgets = [
  { id: '1', category: 'Food', limit: 200 },
  { id: '2', category: 'Transport', limit: 100 },
  { id: '3', category: 'Entertainment', limit: 150 },
];

export default function Budgets() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budgets</Text>
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.limit}>${item.limit}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  category: { fontSize: 18 },
  limit: { fontSize: 18, fontWeight: 'bold' },
});