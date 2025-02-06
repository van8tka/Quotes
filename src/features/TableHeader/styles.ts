import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
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
  firstColumn: {
    flex: 1.6,
  },
});

export default styles;
