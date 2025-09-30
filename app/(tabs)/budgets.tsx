import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const budgets = [
  { id: '1', category: 'Food', limit: 200, icon: 'fastfood' },
  { id: '2', category: 'Transport', limit: 100, icon: 'commute' },
  { id: '3', category: 'Entertainment', limit: 150, icon: 'movie' },
];

export default function Budgets() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budgets</Text>
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialIcons name={item.icon} size={28} color="#4a90e2" />
            <View style={styles.textContainer}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.amount}>${item.limit}</Text>
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
  category: { fontSize: 18, fontWeight: '600', color: '#333' },
  amount: { fontSize: 16, fontWeight: 'bold', color: '#4a90e2', marginTop: 4 },
});