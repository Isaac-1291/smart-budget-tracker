import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.card}>
        <MaterialIcons name="person" size={28} color="#4a90e2" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Isaac</Text>
        </View>
      </View>
      <View style={styles.card}>
        <MaterialIcons name="email" size={28} color="#4a90e2" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>isaac@example.com</Text>
        </View>
      </View>
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
  label: { fontSize: 16, color: '#555' },
  value: { fontSize: 18, fontWeight: 'bold', marginTop: 4, color: '#333' },
});