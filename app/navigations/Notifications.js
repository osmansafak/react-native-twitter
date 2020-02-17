import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import images from 'config/images';
import palette from 'config/palette';
import NotificationsScreen from 'screens/Notifications';

const NotificationsNavigation = createStackNavigator({
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: ({navigation}) => ({
      ...palette.header,
      headerTitle: 'Notifications',
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={styles.headerLeftImage}
              source={images.profile_image}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={() => console.log('test')}>
            <Image
              style={styles.headerRightImage}
              source={images.settings_selected}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});

const styles = StyleSheet.create({
  headerLeftContainer: {...palette.header.headerLeftContainer},
  headerLeftImage: {...palette.header.image, borderRadius: 15},
  headerRightContainer: {...palette.header.headerRightContainer},
  headerRightImage: {...palette.header.image},
});

export default NotificationsNavigation;
