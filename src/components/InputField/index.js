import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const InputField = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput {...props} />
      </View>
    </View>
  );
};

export default InputField;
