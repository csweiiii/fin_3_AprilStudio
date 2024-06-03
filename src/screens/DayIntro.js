import React from 'react';
import { View, Image, Text,  ScrollView,TouchableOpacity, StyleSheet } from 'react-native';

const DayIntro = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
    
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../img/Day-Dream.jpg')} style={styles.image} />
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: '#425050' }]} />
          <View style={[styles.circle, { backgroundColor: '#75878B' }]} />
          <View style={[styles.circle, { backgroundColor: '#919C9D' }]} />
          <View style={[styles.circle, { backgroundColor: '#BCB4A1' }]} />
          <View style={[styles.circle, { backgroundColor: '#D9D8D3' }]} />
        </View>
      </View>

      <Text style={styles.title}>我的白日夢 DayDream</Text>

      <View style={styles.title2}>
        <Text style={styles.subtitle}>風格：北歐渡假風</Text>
        <Text style={styles.subtitle}>設計空間：臥室</Text>
        <Text style={styles.subtitle}>格局：一房</Text>
        <Text style={styles.subtitle}>坪數：4坪</Text>
      </View>

      <View style={styles.title3}>
        <Text style={styles.intro}>木頭、藤編與植物交織、療癒清新的白綠搭配，</Text>
        <Text style={styles.intro}>陽光灑下的那一刻，彷彿置身度假小島。</Text>
        <Text style={styles.intro}>圍繞北歐與度假的風格，整體空間我們選擇淺色調，</Text>
        <Text style={styles.intro}>運用紗簾讓陽光自然流入同時柔和光線，</Text>
        <Text style={styles.intro}>床頭上方的雲朵吊燈，</Text>
        <Text style={styles.intro}>在結束忙碌的一天後，</Text> 
        <Text style={styles.intro}>點綴了夜晚的寧靜。</Text>       
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
   
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 3,
    zIndex: 1,
  },
  backButtonText: {
    color: 'black',
    fontSize: 26,
    textAlign: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 380,
  },
  circleContainer: {
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 13,
    marginTop: 60,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginBottom: 18,

  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  title2: {
    backgroundColor: '#D9D9D9',
    width: '95%',
    height: 180,
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 20,
    marginTop: 20,
  },
  title3: {
    marginTop: 10,
    marginBottom: 30,
  },
  intro: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 15,
  },
});

export default DayIntro;

