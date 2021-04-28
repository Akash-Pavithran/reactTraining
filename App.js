import React from 'react';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import {ScrollView, View, Text} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <ScrollView>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nemo
            repellat est earum eius quia porro tenetur recusandae, aut assumenda
            ad officiis libero exercitationem ipsam facere neque numquam
            mollitia corporis?
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
