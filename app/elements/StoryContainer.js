/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

const StoryContainer = () => {
  return <View style={styles.storyContainer} />;
};
const styles = StyleSheet.create({
  storyContainer: {
    width: 100,
    height: 130,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginRight: 10,
  },
});

export default StoryContainer;
