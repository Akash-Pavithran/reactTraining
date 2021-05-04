// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
import React from 'react';
import TopBar from './app/components/TopBar';
import BottomBar from './app/components/BottomBar';
import StoryContainer from './app/components/StoryContainer';
// import UserPost from './app/components/UserPost';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      minutes_Counter: '00',
      seconds_Counter: '00',
    }
  }
  onButtonStart = () => {

    let timer = setInterval(() => {

      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;

      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }

      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num
      });
    }, 1000);
    this.setState({ timer });
  }


  onButtonStop = () => {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <View style={styles.body}>
        <TopBar />
        <ScrollView style={styles.content}>
          <Text style={styles.textHeading}>Stories</Text>
          <StoryContainer/>
          {/* <UserPost/>  */}
          <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 25, fontWeight: 'bold'}}>
            Click on <Text style={{color: '#0fa87d'}}>Start</Text> to start timer
          </Text>
          <Text style={{alignSelf: 'center', fontSize: 80, marginTop: -15, color: 'orange'}}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
          <View style={{alignSelf: 'stretch', justifyContent: 'space-evenly', flexDirection: 'row', marginBottom: 30}}>
            <Button
            title= "Start"
            onPress={this.onButtonStart}
            color= "#0fa87d"
            />
            {/* <View style={styles.space} />       */}
            <Button
            title= "Stop"
            onPress={this.onButtonStop}
            color= "orange"
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
    backgroundColor: 'white',
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

