import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const user = {
  name: 'Isaac',
  email: 'isaac@example.com',
};

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Name</Text>
      <Text style={styles.value}>{user.name}</Text>
      <Text style={styles.label}>Email</Text>
      <Text style={styles.value}>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  label: { fontSize: 16, color: '#555', marginTop: 8 },
  value: { fontSize: 18, fontWeight: 'bold' },
});