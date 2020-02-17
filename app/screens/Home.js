import * as React from 'react';
import {View, Text} from 'react-native';
import colors from 'config/colors';

const Home = props => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.background,
        }}>
        <Text style={{color: 'white'}}>Home Screen</Text>
      </View>
    </>
  );
};

export default Home;
