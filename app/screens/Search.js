import * as React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import numeral from 'numeral';
import colors from 'config/colors';
import images from 'config/images';
import palette from 'config/palette';
import TrendsData from 'data/trends.json';

const Search = props => {
  return (
    <View style={{...palette.screen.container}}>
      <FlatList
        data={TrendsData}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.header}>Germany trends</Text>
            <View style={styles.seperator} />
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity>
            <Text style={styles.footer}>Show more</Text>
          </TouchableOpacity>
        )}
        renderItem={({item}) => (
          <>
            <TouchableOpacity style={styles.container}>
              <View style={styles.titleGroup}>
                <Text style={styles.title}>{`${item.order} · Trending`}</Text>
                <Image style={styles.icon} source={images.arrow_bottom} />
              </View>
              <Text style={styles.text}>{item.text}</Text>
              {item.tweets && (
                <Text style={styles.count}>
                  {numeral(item.tweets)
                    .format('0.0 a')
                    .toLocaleUpperCase()}{' '}
                  Tweets
                </Text>
              )}
            </TouchableOpacity>
            <View style={styles.seperator} />
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    padding: 10,
    paddingTop: 15,
  },
  footer: {
    fontSize: 18,
    color: colors.link,
    padding: 10,
    paddingBottom: 20,
  },
  container: {
    padding: 10,
  },
  titleGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: colors.textFaded,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 10,
  },
  count: {
    fontSize: 18,
    color: colors.textFaded,
    marginTop: 5,
  },
  seperator: {
    backgroundColor: colors.seperator,
    height: 0.5,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Search;
