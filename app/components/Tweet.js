import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import colors from 'config/colors';

const Tweet = ({data}) => (
  <>
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePhoto}
          source={{
            uri: data.profilePhoto,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={styles.userInfo}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          <Text style={styles.displayName}>{data.displayName}</Text>{' '}
          {data.profileName} · {data.date}
        </Text>
        <Text style={styles.tweetText}>
          {data.tweetText.split(/\B(\#[a-zA-Z]+\b)(?!;)/).map(item => {
            if (item.startsWith('#')) {
              return <Text style={styles.tweetLink}>{item}</Text>;
            }
            return item;
          })}
        </Text>
        {data.image && (
          <Image
            style={styles.tweetImage}
            source={{
              uri: data.image,
            }}
          />
        )}
      </View>
    </View>
    <View style={styles.seperator} />
  </>
);

const RenderTweet = text => {
  const textSplit = text.split(/\B(\#[a-zA-Z]+\b)(?!;)/);
  let newText;
  textSplit.forEach(item => {
    if (item.startsWith('#')) {
      newText += <Text style={styles.tweetLink}>item</Text>;
    } else {
      newText += item;
    }
  });
  return newText;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
  },
  userInfo: {
    fontSize: 16,
    color: colors.textFaded,
  },
  displayName: {
    fontSize: 16,
    color: colors.text,
    fontWeight: 'bold',
  },
  tweetText: {
    marginTop: 5,
    fontSize: 16,
    color: colors.text,
  },
  tweetLink: {
    color: colors.link,
  },
  tweetImage: {
    width: '100%',
    marginTop: 10,
    aspectRatio: 9 / 6,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  seperator: {
    backgroundColor: colors.seperator,
    height: 0.5,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Tweet;
