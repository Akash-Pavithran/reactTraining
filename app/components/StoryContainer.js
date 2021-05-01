/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

const StoryContainer = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.stories}>
        <View style={styles.storyContainer} />
        <View style={styles.storyContainer} />
        <View style={styles.storyContainer} />
        <View style={styles.storyContainer} />
        <View style={styles.storyContainer} />
        <View style={styles.storyContainer} />
        <View style={styles.storyContainer} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  storyContainer: {
    width: 100,
    height: 130,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginRight: 10,
  },
  stories: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
  },
});

export default StoryContainer;
