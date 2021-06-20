import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/buttons/Button';

import styles from './styles';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => props.navigation.navigate('EmployeesScreen')}>
        <Text style={styles.buttonText}>Employees</Text>
      </Button>

      <Button
        style={styles.button}
        onPress={() => props.navigation.navigate('WeatherScreen')}>
        <Text style={styles.buttonText}>Weather</Text>
      </Button>
    </View>
  );
};

export default HomeScreen;
