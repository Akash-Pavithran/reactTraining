/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import TopBar from './app/components/TopBar';
import BottomBar from './app/components/BottomBar';
import StoryContainer from './app/components/StoryContainer';
// import UserPost from './app/components/UserPost';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';


export default class App extends React.Component {
  state = {
    counter: 0,
  }
  render() {
    return (
      <View style={styles.body}>
        <TopBar />
        <ScrollView style={styles.content}>
          <Text style={styles.textHeading}>Stories</Text>
          <StoryContainer/>
          {/* <UserPost/> */}
          <Text style={{alignSelf: 'center', marginTop: 50, fontSize: 25, fontWeight: 'bold'}}>
            Click on <Text style={{color: 'red'}}>Start</Text> to start timer
          </Text>
          <Text style={{alignSelf: 'center', marginTop: 0, fontSize: 180}}>{this.state.counter}</Text>
          <View style={{alignSelf: 'stretch', justifyContent: 'space-between'}}>
            <Button
            title= "Start"
            onPress={()=> this.setState({counter: this.state.counter + 1})}
            color= "green"
            />
            <View style={styles.space} />
            <Button
            title= "Stop"
            onPress={()=> this.setState({counter: this.state.counter = 0})}
            color= "red"
            />
          </View>
        </ScrollView>
        <BottomBar />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  contentText: {
    fontSize: 16,
    marginTop: 10,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: '700',
  },
  counterButton: {
    backgroundColor: 'red',
  },
  space: {
    height: 10,
  },
});
