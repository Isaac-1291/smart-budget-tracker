import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const transactions = [
  { id: '1', description: 'Groceries', amount: -50, icon: 'shopping-cart' },
  { id: '2', description: 'Salary', amount: 500, icon: 'attach-money' },
  { id: '3', description: 'Movie', amount: -20, icon: 'movie' },
];

export default function Transactions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialIcons name={item.icon} size={28} color={item.amount < 0 ? 'red' : 'green'} />
            <View style={styles.textContainer}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={[styles.amount, { color: item.amount < 0 ? 'red' : 'green' }]}>
                ${item.amount}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0f4f7' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: { marginLeft: 12 },
  description: { fontSize: 18, fontWeight: '600', color: '#333' },
  amount: { fontSize: 16, fontWeight: 'bold', marginTop: 4 },
});