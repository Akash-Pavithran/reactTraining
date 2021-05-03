/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserPost = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHead}>
        <View style={styles.cardDummyImage} />
        <Text style={styles.cardUsername}>Dummy User</Text>
      </View>
      <Text style={styles.contentText}>
        Nam officiis praesentium cupiditate ullam repellendus, laborum deleniti
        possimus atque. Vel voluptatum consequuntur, . Debitis, expedita?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderWidth: 0.1,
    borderRadius: 3,
    padding: 10,
  },
  cardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  cardDummyImage: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 100,
    marginRight: 10,
  },
  cardUsername: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentText: {
      paddingTop: 10,
  },
});
export default UserPost;
