/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const StoryContainer = (props) => {
  return (
    <View style={styles.stories}>
      <Image style={styles.storyContainer} source={props.source}/>
    </View>
  );
};
const styles = StyleSheet.create({
  storyContainer: {
    width: 100,
    height: 130,
    // backgroundColor: '#0fa87d',
    borderRadius: 10,
    marginHorizontal: 5,
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
