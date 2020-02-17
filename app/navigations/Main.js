import {createStackNavigator} from 'react-navigation-stack';
import TabNavigation from './Tab';

const routeConfig = {
  Main: {
    screen: TabNavigation,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
};

const MainNavigator = createStackNavigator(routeConfig);

export default MainNavigator;
