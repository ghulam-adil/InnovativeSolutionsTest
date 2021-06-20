import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {generalImages} from '../../../assets/images';

import styles from './styles';

const FloatingButton = props => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress ? props.onPress : () => {}}>
      {props.children}
    </TouchableOpacity>
  );
};

export default FloatingButton;
