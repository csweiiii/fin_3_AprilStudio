import React from 'react';
import { View, Image, ScrollView,Text, TouchableOpacity, StyleSheet } from 'react-native';

const AutumnIntro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../img/Autumn-Days.jpg')} style={styles.image} />
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: '#204047' }]} />
          <View style={[styles.circle, { backgroundColor: '#436174' }]} />
          <View style={[styles.circle, { backgroundColor: '#5F645A' }]} />
          <View style={[styles.circle, { backgroundColor: '#7A6C4D' }]} />
          <View style={[styles.circle, { backgroundColor: '#A09A8D' }]} />
        </View>
      </View>

      <Text style={styles.title}>秋日沈靜 Autumn Days</Text>

      <View style={styles.title2}>
        <Text style={styles.subtitle}>風格：北歐輕奢風</Text>
        <Text style={styles.subtitle}>設計空間：客餐廳、臥室</Text>
        <Text style={styles.subtitle}>格局：一房一廳</Text>
        <Text style={styles.subtitle}>坪數：10坪</Text>
      </View>

      <View style={styles.title3}>
        <Text style={styles.intro}>結合男女主人對精緻質感的追求和摩艾石像的喜愛。</Text>
        <Text style={styles.intro}>運用大理石、玻璃和霧面金屬營造出輕奢，</Text>
        <Text style={styles.intro}>並搭配跳色、編織的民俗風元素。</Text>
        <Text style={styles.intro}>以玻璃取代不可透視的隔間設計，</Text>
        <Text style={styles.intro}>配上窗簾讓陽光與隱私共存。</Text>
        <Text style={styles.intro}>窗邊的臥榻成為愜意的放鬆角落。</Text> 
        <Text style={styles.intro}>整體空間帶著優雅，又不失家居的溫馨氣息。</Text>       
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

export default AutumnIntro;

