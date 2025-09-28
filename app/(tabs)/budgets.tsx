import { StyleSheet, Text, View } from "react-native";

export default function BudgetsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budgets</Text>
      <Text>Here you can view and manage your budgets.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});