import {StyleSheet} from 'react-native';
import {vh, vw} from '../../units';
import {appTheme} from '../../utils';

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    height: vh * 10,
    width: vh * 10,
    tintColor: appTheme.white,
  },
  floatingButtonContainer: {
    bottom: vh * 3,
    right: vw * 3,
    position: 'absolute',
  },
});

export default styles;
