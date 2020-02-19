import * as React from 'react';
import {View, FlatList} from 'react-native';
import colors from 'config/colors';
import palette from 'config/palette';
import Tweet from 'components/Tweet';
import TweetData from 'data/tweets.json';

const Home = props => (
  <View style={{...palette.screen.container}}>
    <FlatList data={TweetData} renderItem={({item}) => <Tweet data={item} />} />
  </View>
);

export default Home;
