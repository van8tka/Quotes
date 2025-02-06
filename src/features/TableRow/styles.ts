import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: '10@vs',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: '10@vs',
  },
  firstColumn: {
    flex: 1.6,
  },
  evenColumn: {
    color: '#557755',
  },
});

export default styles;
