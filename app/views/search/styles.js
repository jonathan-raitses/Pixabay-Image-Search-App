import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  search: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default scaledStyles;
