import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Headers';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import TransactionScreen from '../../components/TransactionScreen';

const Home = ({ route }) => {
  const [movements, setMovements] = useState([]);
  const [totalBalance, setTotalBalance] = useState(9250.9); // Saldo inicial
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(527);

  const navigation = useNavigation();

  const updateMovementsList = (newMovement) => {
    setMovements((prevMovements) => [newMovement, ...prevMovements]);

    // Atualiza os valores de ganhos e gastos
    if (newMovement.type === 1) {
      setTotalIncome((prevIncome) => prevIncome + parseFloat(newMovement.value));
    } else {
      setTotalExpenses((prevExpenses) => prevExpenses + parseFloat(newMovement.value));
    }

    // Atualiza o saldo total
    setTotalBalance((prevBalance) => prevBalance + parseFloat(newMovement.value));
  };

  // Atualizar a lista quando há uma nova transação
  useEffect(() => {
    const { newTransaction } = route.params || {};
    if (newTransaction) {
      updateMovementsList(newTransaction);
    }
  }, [route.params]);

  const navigateToTransactionScreen = () => {
    navigation.navigate('TransactionScreen', { updateMovementsList });
  };

  return (
    <View style={styles.container}>
      <Header name="Quinho" />

      <Balance saldo={totalBalance.toFixed(2)} gastos={`-${totalExpenses.toFixed(2)}`} />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={movements}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Movements data={item} />
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={navigateToTransactionScreen}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 32,
  },
});

export default Home;
