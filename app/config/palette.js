import colors from 'config/colors';

const palette = {
  header: {
    headerStyle: {
      backgroundColor: colors.tabBackground,
    },
    headerTintColor: colors.text,
    headerTitleStyle: {
      // eslint-disable-next-line no-undef
      fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    },
    image: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
    },
    headerLeftContainer: {
      width: 30,
      marginLeft: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerRightContainer: {
      width: 30,
      marginRight: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  tab: {
    image: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
    },
  },
  screen: {
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  },
};

export default palette;
