import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import images from 'config/images';
import palette from 'config/palette';
import MessagesScreen from 'screens/Messages';

const MessagesNavigation = createStackNavigator({
  Messages: {
    screen: MessagesScreen,
    navigationOptions: ({navigation}) => ({
      ...palette.header,
      headerTitle: 'Messages',
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
    }),
  },
});

const styles = StyleSheet.create({
  headerLeftContainer: {...palette.header.headerLeftContainer},
  headerLeftImage: {...palette.header.image, borderRadius: 15},
});

export default MessagesNavigation;
