import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const transactions = [
  { id: '1', description: 'Groceries', amount: -50 },
  { id: '2', description: 'Salary', amount: 500 },
  { id: '3', description: 'Movie', amount: -20 },
];

export default function Transactions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
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
  description: { fontSize: 18 },
  amount: { fontSize: 18, fontWeight: 'bold' },
});