import React from 'react';
import {Image} from 'react-native';

import HomeNavigation from './Home';
import SearchNavigation from './Search';
import NotificationsNavigation from './Notifications';
import MessagesNavigation from './Messages';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import images from 'config/images';
import colors from 'config/colors';
import palette from 'config/palette';

const routeConfig = {
  Home: HomeNavigation,
  Search: SearchNavigation,
  Notifications: NotificationsNavigation,
  Messages: MessagesNavigation,
};

const navigatorConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({navigation}) => ({
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: colors.tabBackground,
        borderTopColor: colors.seperator,
        borderTopWidth: 0.5,
      },
    },
    tabBarIcon: ({focused}) => {
      const {routeName} = navigation.state;
      var icon;
      switch (routeName) {
        case 'Home':
          icon = focused ? images.home_selected : images.home;
          break;
        case 'Search':
          icon = focused ? images.search_selected : images.search;
          break;
        case 'Notifications':
          icon = focused ? images.notifications_selected : images.notifications;
          break;
        case 'Messages':
          icon = focused ? images.messages_selected : images.messages;
          break;
        default:
          icon = focused ? images.home_selected : images.home;
          break;
      }
      return <Image style={{...palette.header.image}} source={icon} />;
    },
  }),
};

const TabNavigation = createBottomTabNavigator(routeConfig, navigatorConfig);

export default TabNavigation;
