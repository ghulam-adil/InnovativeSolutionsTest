import React from 'react';
import {TouchableOpacity} from 'react-native';

import styles from './styles';

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.button, {...props.style}]}
      onPress={props.onPress ? props.onPress : () => {}}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
