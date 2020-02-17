import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import images from 'config/images';
import palette from 'config/palette';
import SearchScreen from 'screens/Search';
import colors from '../config/colors';

const SearchNavigation = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({navigation}) => ({
      ...palette.header,
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={images.search} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Twitter"
            placeholderTextColor={colors.textFaded}
          />
        </View>
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
  searchContainer: {
    width: Dimensions.get('window').width - 150,
    height: 30,
    flexDirection: 'row',
    flexBasis: 'auto',
    alignItems: 'center',
    backgroundColor: '#253341',
    borderRadius: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },
  searchInput: {
    flex: 1,
    padding: 5,
    color: colors.textFaded,
  },
});

export default SearchNavigation;
