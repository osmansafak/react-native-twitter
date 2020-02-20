import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import colors from 'config/colors';
import images from 'config/images';

const Tweet = ({data, navigation, isReply, replayTo}) => (
  <>
    <TouchableOpacity
      style={styles.container}
      disabled={isReply}
      onPress={() => {
        navigation.navigate('Tweet', data);
      }}>
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
        {isReply && (
          <Text style={styles.reply}>
            Replying to <Text style={styles.replyTo}>{replayTo}</Text>
          </Text>
        )}
        <Text style={styles.tweetText}>
          {data.tweetText.split(/\B(\#[a-zA-Z]+\b)(?!;)/).map(item => {
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
        {!isReply && data.image && (
          <Image
            style={styles.tweetImage}
            source={{
              uri: data.image,
            }}
          />
        )}
        <View style={styles.groupList}>
          {data.actions.map(item => (
            <View style={groupStyle(item.key)} key={`${data.key}-${item.key}`}>
              <Image style={styles.groupIcon} source={images[item.key]} />
              {item.value !== 0 && (
                <Text style={styles.groupText}>{item.value}</Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
    <View style={styles.seperator} />
  </>
);

const groupStyle = key => {
  return {
    flexGrow: key === 'share' ? 0 : 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };
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
  reply: {
    fontSize: 16,
    color: colors.textFaded,
    marginTop: 5,
  },
  replyTo: {
    color: colors.link,
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
  groupList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  groupIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  groupText: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.textFaded,
  },
  seperator: {
    backgroundColor: colors.seperator,
    height: 0.5,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Tweet;
