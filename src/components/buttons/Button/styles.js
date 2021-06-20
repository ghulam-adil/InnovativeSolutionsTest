import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../units';
import {appTheme} from '../../../utils';

const styles = StyleSheet.create({
  button: {
    backgroundColor: appTheme.red,
    padding: vh * 1,
    width: vw * 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 1,
  },
});

export default styles;
