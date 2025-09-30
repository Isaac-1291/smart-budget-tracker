import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <MaterialIcons name="explore" size={48} color="#4a90e2" style={styles.icon} />
      <Text style={styles.description}>
        Welcome to Smart Budget Tracker 🎉
      </Text>
      <Text style={styles.description}>
        Use this app to manage budgets, track transactions, and save money.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0f4f7', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  icon: { marginBottom: 16 },
  description: { fontSize: 18, textAlign: 'center', marginBottom: 12, color: '#555' },
});