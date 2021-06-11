/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../components/TopBar';
import StoryContainer from '../components/StoryContainer';
// import {data} from '../apis/data';
import newsApi from '../apis/newsApi'

function HomeScreen({navigation}) {
  const [news, setNews] = useState([])
  useEffect(()=>{
    newsResponse()
  },[])
  const newsResponse = async()=> {
    const response = await newsApi.get('top-headlines?sources=techcrunch&apiKey=d74998efe40342a69ba6a8d16d53b6fb')
    .then(function (response){
      setNews(response.data.articles)

    })
  }
  
  if (!news) {
    return null
  }
  return (
    <View style={styles.container}>
      <TopBar/>
      <ScrollView>
        <Text style={styles.heading}>Home</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {news.map((item, index) => {
            return (
              <StoryContainer source={{uri:item.urlToImage}} key={index}/>
            );
          })}
        </ScrollView>
        <View>
          {
            news.map((item, index)=>{
              return (
                <TouchableOpacity style={styles.item} key={index}>
                  <Image style={styles.photo} source={{uri:item.urlToImage}} />
                  <Text style={styles.title}>{item.author}</Text>
                </TouchableOpacity>
              );
            })
          }
        </View>
        <View style={styles.blankSpace}/>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 2,
    backgroundColor: '#F8F8F8',
  },
  heading: {
    marginTop:10,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 16,
    paddingTop: 10,
  },
  photo: {
    width:60,
    height:60,
    borderRadius:30,
    marginRight:20,
  },
  blankSpace:{
    height: 120,
  },
});


export default HomeScreen;
