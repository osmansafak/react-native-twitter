import * as React from 'react';
import {View, FlatList} from 'react-native';
import palette from 'config/palette';
import Tweet from 'components/Tweet';
import TweetData from 'data/tweets.json';

const Home = ({navigation}) => (
  <View style={{...palette.screen.container}}>
    <FlatList
      data={TweetData}
      renderItem={({item}) => <Tweet data={item} navigation={navigation} />}
    />
  </View>
);

export default Home;
