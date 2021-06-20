import {StyleSheet} from 'react-native';
import {vh, vw} from './src/units';
import {appTheme} from './src/utils';

const styles = StyleSheet.create({
  button: {
    backgroundColor: appTheme.red,
    padding: vh * 1,
    width: vw * 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 1,
  },
  backdropContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: vh * 3,
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: vh * 2,
    paddingVertical: vh * 2,
    borderBottomWidth: 1,
    borderColor: appTheme.lightGray,
  },
  buttonImage: {
    height: vh * 6,
    width: vh * 6,
    tintColor: appTheme.white,
  },
});

export default styles;
