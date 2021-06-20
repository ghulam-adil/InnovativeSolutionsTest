import {StyleSheet} from 'react-native';
import {vh, vw} from '../../units';
import {appTheme} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: vw * 40, marginVertical: vh * 2
  },
  buttonText: {
    color: appTheme.white,
    fontSize: vh * 3,
  },
});

export default styles;
