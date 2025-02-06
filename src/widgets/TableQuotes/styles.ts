import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    padding: '10@vs',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '11@vs',
  },
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
