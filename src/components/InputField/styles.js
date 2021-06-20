import {StyleSheet} from 'react-native';
import {vh, vw} from '../../units';
import {appTheme} from '../../utils';

const styles = StyleSheet.create({
  inputContainer: {
    elevation: 10,
    backgroundColor: appTheme.white,
    borderRadius: vh * 2, paddingHorizontal: vw * 2
  },
  container: {
      marginBottom: vh * 3
  },
  labelStyle: {
    marginBottom: vh * 1,
  },
});

export default styles;
