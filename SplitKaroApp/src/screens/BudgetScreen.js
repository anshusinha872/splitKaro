import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';

const initialBudgets = [
  { id: '1', name: 'Groceries', amount: 500 },
  { id: '2', name: 'Transportation', amount: 300 },
  { id: '3', name: 'Entertainment', amount: 200 },
];

const BudgetScreen = () => {
  const [budgets, setBudgets] = useState(initialBudgets);
  const [newBudgetName, setNewBudgetName] = useState('');
  const [newBudgetAmount, setNewBudgetAmount] = useState('');

  const addBudget = () => {
    if (newBudgetName && newBudgetAmount) {
      const newBudget = {
        id: (budgets.length + 1).toString(),
        name: newBudgetName,
        amount: parseFloat(newBudgetAmount),
      };
      setBudgets((prevBudgets) => [...prevBudgets, newBudget]);
      setNewBudgetName('');
      setNewBudgetAmount('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.budgetItem}>
      <Text style={styles.budgetText}>{item.name}: ₹{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Budgets</Text>

      <TextInput
        style={styles.input}
        placeholder="Budget Name"
        value={newBudgetName}
        onChangeText={setNewBudgetName}
      />
      <TextInput
        style={styles.input}
        placeholder="Budget Amount"
        value={newBudgetAmount}
        keyboardType="numeric"
        onChangeText={setNewBudgetAmount}
      />

      <Button title="Add Budget" onPress={addBudget} />

      <FlatList
        data={budgets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  budgetItem: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  budgetText: {
    fontSize: 18,
  },
});

export default BudgetScreen;  // Ensure it's exported properly
