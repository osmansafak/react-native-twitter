import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MenuItem from 'components/MenuItem';
import colors from 'config/colors';
import images from 'config/images';

const menuData = [
  {
    icon: images.profile,
    text: 'Profile',
  },
  {
    icon: images.topics,
    text: 'Topics',
  },
  {
    icon: images.lists,
    text: 'Lists',
  },
  {
    icon: images.bookmarks,
    text: 'Bookmarks',
  },
  {
    icon: images.moments,
    text: 'Moments',
  },
  {
    icon: 'seperator',
    text: 'Seperator 1',
  },
  {
    icon: images.twitter_ads,
    text: 'Twitter Ads',
  },
  {
    icon: images.analytics,
    text: 'Analytics',
  },
  {
    icon: 'seperator',
    text: 'Seperator 2',
  },
  {
    icon: images.settings,
    text: 'Settings and privacy',
  },
  {
    icon: images.help,
    text: 'Help Center',
  },
];

class Menu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>
            <Image style={styles.profileImage} source={images.profile_image} />
            <Text style={styles.displayName}>Osman Safak</Text>
            <Text style={styles.profileName}>@osmansafak</Text>
            <View style={styles.profileCounts}>
              <Text style={styles.profileCountValue}>250</Text>
              <Text style={styles.profileCountText}>Following</Text>
              <Text style={styles.profileCountValue}>85</Text>
              <Text style={styles.profileCountText}>Followers</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.switch}>
              <Image style={styles.switchIcon} source={images.switch} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          {menuData.map(item =>
            item.icon === 'seperator' ? (
              <View key={item.text} style={styles.seperator} />
            ) : (
              <MenuItem data={item} key={item.text} />
            ),
          )}
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Log out @osmansafak</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: 50,
    paddingRight: 10,
    paddingBottom: 30,
    paddingLeft: 10,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  profileImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  displayName: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  profileName: {
    color: colors.textFaded,
    fontSize: 16,
  },
  profileCounts: {
    flexDirection: 'row',
    marginTop: 20,
  },
  profileCountValue: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileCountText: {
    color: colors.textFaded,
    fontSize: 16,
    marginLeft: 5,
    marginRight: 15,
  },
  switch: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: colors.link,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchIcon: {
    width: 26,
    height: 26,
  },
  scrollView: {
    marginTop: 30,
    marginBottom: 30,
  },
  seperator: {
    backgroundColor: colors.seperator,
    height: 0.5,
    marginTop: 10,
    marginBottom: 10,
  },
  footerText: {
    color: colors.text,
    fontSize: 16,
  },
});

export default Menu;
