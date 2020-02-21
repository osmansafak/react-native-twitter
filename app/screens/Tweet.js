import * as React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import colors from 'config/colors';
import images from 'config/images';
import palette from 'config/palette';
import Tweet from 'components/Tweet';
import TweetData from 'data/tweets.json';

const TweetScreen = ({
  navigation: {
    state: {params},
  },
}) => (
  <View style={{...palette.screen.container}}>
    <FlatList
      data={TweetData}
      renderItem={({item}) => (
        <Tweet data={item} replayTo={params.profileName} />
      )}
      ListHeaderComponent={() => (
        <>
          <View style={styles.container}>
            <View style={styles.userInfo}>
              <Image
                style={styles.profilePhoto}
                source={{
                  uri: params.profilePhoto,
                }}
              />
              <View style={styles.userName}>
                <Text style={styles.displayName}>{params.displayName}</Text>
                <Text style={styles.profileName}>{params.profileName}</Text>
              </View>
            </View>
            <Text style={styles.tweetText}>
              {params.tweetText.split(/\B(\#[a-zA-Z]+\b)(?!;)/).map(item => {
                if (item.startsWith('#')) {
                  return (
                    <Text style={styles.tweetLink} key={item}>
                      {item}
                    </Text>
                  );
                }
                return item;
              })}
            </Text>
            {params.image && (
              <Image
                style={styles.tweetImage}
                source={{
                  uri: params.image,
                }}
              />
            )}
            <Text style={styles.date}>12:45 PM · Feb 20, 2020</Text>
            <View style={styles.seperator} />
            <Text style={styles.interaction}>
              <Text style={styles.bold}>3</Text> Retweets{'  ·  '}
              <Text style={styles.bold}>82</Text> Likes
            </Text>
            <View style={styles.seperator} />
          </View>
          <View style={styles.groupList}>
            {params.actions.map(item => (
              <Image
                style={styles.groupIcon}
                source={images[item.key]}
                key={`${item.key}-${params.key}`}
              />
            ))}
          </View>
          <View style={styles.seperator} />
        </>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  displayName: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 16,
    color: colors.textFaded,
  },
  tweetText: {
    marginTop: 10,
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold',
  },
  tweetLink: {
    color: colors.link,
  },
  tweetImage: {
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
  },
  date: {
    fontSize: 16,
    color: colors.textFaded,
    marginTop: 10,
    marginBottom: 10,
  },
  groupList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 5,
  },
  groupIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  interaction: {
    fontSize: 18,
    color: colors.textFaded,
  },
  bold: {
    fontWeight: 'bold',
    color: colors.text,
  },
  seperator: {
    backgroundColor: colors.seperator,
    height: 0.5,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default TweetScreen;
