import {StyleSheet} from 'react-native';
import {vh} from '../../../units';
import {appTheme} from '../../../utils';

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: appTheme.blue,
    height: vh * 10,
    width: vh * 10,
    alignItems: 'center',
    justifyContent: 'center', elevation: 10
  },
});

export default styles;
