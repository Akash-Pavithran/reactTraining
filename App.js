import React from 'react';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Header />
        <ScrollView style={styles.content}>
          <Text style={styles.contentText}>
            Nam officiis praesentium cupiditate ullam repellendus, laborum
            deleniti possimus atque. Vel voluptatum consequuntur, voluptatibus
            facilis placeat ea id aliquid iste obcaecati, nostrum recusandae
            porro perspiciatis ratione quod est quasi ab eum illum! Temporibus
            officia eius quam dolorem odio voluptas vero nobis est sit ab, illo
            minus consequatur culpa iure hic, possimus cum obcaecati, corrupti
            itaque inventore nostrum voluptate facere ratione quibusdam.
            Debitis, expedita?
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  contentText: {
    fontSize: 15,
  },
});
