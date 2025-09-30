import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
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
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  description: { fontSize: 16, marginBottom: 12 },
});