import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TransactionScreen({ navigation }) {
  const [transactionType, setTransactionType] = useState('expense');
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSave = () => {
    const isIncome = transactionType === 'income';

    // Formata os dados antes de passar de volta para a Home
    const newTransaction = {
      label: transactionName,
      value: isIncome ? parseFloat(amount) : `-${parseFloat(amount)}`,
      date: new Date().toLocaleDateString(),
      type: isIncome ? 1 : 0,
    };

    // Passa as informações de volta para a tela anterior (Home).
    navigation.navigate('Home', { newTransaction });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de Transação:</Text>
      <View style={styles.transactionTypeContainer}>
        <TouchableOpacity
          style={[styles.transactionTypeButton, transactionType === 'expense' && styles.selectedButton]}
          onPress={() => setTransactionType('expense')}
        >
          <Text>Gasto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.transactionTypeButton, transactionType === 'income' && styles.selectedButton]}
          onPress={() => setTransactionType('income')}
        >
          <Text>Ganho</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={transactionName}
        onChangeText={(text) => setTransactionName(text)}
      />

      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  transactionTypeContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  transactionTypeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  selectedButton: {
    backgroundColor: '#e0e0e0',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
