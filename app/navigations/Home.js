import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import colors from 'config/colors';
import images from 'config/images';
import palette from 'config/palette';
import HomeScreen from 'screens/Home';
import TweetScreen from 'screens/Tweet';

const HomeNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      ...palette.header,
      headerTitle: () => (
        <Image style={styles.headerLogo} source={images.logo} />
      ),
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
            <Image style={styles.headerRightImage} source={images.trend} />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
  Tweet: {
    screen: TweetScreen,
    navigationOptions: () => ({
      title: 'Tweet',
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.link,
    }),
  },
});

const styles = StyleSheet.create({
  headerLeftContainer: {...palette.header.headerLeftContainer},
  headerLeftImage: {...palette.header.image, borderRadius: 15},
  headerRightContainer: {...palette.header.headerRightContainer},
  headerRightImage: {...palette.header.image},
  headerLogo: {
    height: 30,
    width: 30,
    resizeMode: 'center',
  },
});

export default HomeNavigation;
