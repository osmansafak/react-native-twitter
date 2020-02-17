import * as React from 'react';
import {AppRegistry, StatusBar, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {name as appName} from './app.json';
import colors from 'config/colors';
import Menu from 'navigations/Menu';
import MainNavigation from 'navigations/Main.js';

StatusBar.setBarStyle('light-content', true);
StatusBar.backgroundColor = colors.background;

const Navigation = createDrawerNavigator(
  {
    MainNavigation,
  },
  {
    contentComponent: Menu,
    drawerWidth: Dimensions.get('window').width - 100,
    drawerType: 'slide',
  },
);

const Main = createAppContainer(Navigation);
const Root = () => <Main />;

AppRegistry.registerComponent(appName, () => Root);
