import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import colors from 'config/colors';

const MenuItem = ({data}) => (
  <View key={data.text}>
    <TouchableOpacity style={styles.menuItem}>
      <Image style={styles.menuIcon} source={data.icon} />
      <Text style={styles.menuText}>{data.text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  menuIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 10,
  },
  menuText: {
    color: colors.text,
    fontSize: 18,
  },
});

export default MenuItem;
