/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
  Alert,
  Switch,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';

const App = () => {
  const [isSwitchEnabled, setSwitch] = useState(false);
  return (
    <View style={styles.main}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View>
          <Text style={styles.heading}>Round View</Text>
          <View style={styles.roundView} />
        </View>
        <View>
          <Text style={styles.heading}>Image</Text>
          <Image
            style={styles.image}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={styles.heading}>Image Background</Text>
        <ImageBackground
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.imageBackground}
        />
        <Text style={styles.heading}>Activity Indicator</Text>
        <ActivityIndicator size="small" color="#0000ff" />
        <Text style={styles.heading}>Normal Button</Text>
        <Button title="Normal Button" onPress={()=>{Alert.alert('Normal button pressed');}} color="#ffa629" />
        <TouchableOpacity>
          <Text style={styles.heading}>This text is inside touchable opacity</Text>
        </TouchableOpacity>
        <Pressable onPress={()=> Alert.alert('Pressable pressed')}>
          <Text style={[styles.heading, {color: 'red'}]}>I'm pressable!</Text>
        </Pressable>
        <Text style={styles.heading}>Switch</Text>
        <Switch
          value={isSwitchEnabled}
          onValueChange={(value)=>setSwitch(value)}
          style={{alignSelf: 'center'}}
          trackColor={{true: 'red', false: 'white'}}
        />
        <Text style={styles.heading}>Text Input</Text>
        <TextInput style={{backgroundColor: 'white', borderWidth: 1, borderColor: 'grey', padding: 0}}/>
        <TouchableHighlight underlayColor="grey" onPress={()=>{Alert.alert('touchable highlight touched');}}>
          <Text style={styles.heading}>Touchable Hightlight</Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Pressed!')}>
          <Text style={styles.heading}>Touchable Without Feedback</Text>
        </TouchableWithoutFeedback>
        <TouchableNativeFeedback
          onPress={() => {Alert.alert('Touched native Feedback');}}>
          <View >
            <Text style={styles.heading}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#0fa87d',
    padding: 10,
  },
  heading: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  roundView: {
    backgroundColor: '#fffbbd',
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 100,
  },
  imageBackground: {
    marginTop: 10,
    alignSelf: 'stretch',
    height: 100,
    justifyContent: 'center',
  },
  touch: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default App;
