import React from 'react';
import { View, Image, Text,ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const SyokudouIntro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../img/Home-Syokudou.jpg')} style={styles.image} />
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: '#4B6F4A' }]} />
          <View style={[styles.circle, { backgroundColor: '#81A653' }]} />
          <View style={[styles.circle, { backgroundColor: '#90895D' }]} />
          <View style={[styles.circle, { backgroundColor: '#BE9D85' }]} />
          <View style={[styles.circle, { backgroundColor: '#CDAA74' }]} />
        </View>
      </View>

      <Text style={styles.title}>小確幸食堂 Home Syokudou</Text>

      <View style={styles.title2}>
        <Text style={styles.subtitle}>風格：日系綠植風</Text>
        <Text style={styles.subtitle}>設計空間：客餐廳、臥室</Text>
        <Text style={styles.subtitle}>格局：兩房一廳</Text>
        <Text style={styles.subtitle}>坪數：9.5坪</Text>
      </View>

      <View style={styles.title3}>
        <Text style={styles.intro}>選用了符合屋主喜好的黃綠色漆成亮眼的單面主牆，</Text>
        <Text style={styles.intro}>搭配溫潤的木質調傢具，創造出電影濾鏡般的和諧感，</Text>
        <Text style={styles.intro}>使一進家門的客餐廳區能打造出溫馨的居所。</Text>
        <Text style={styles.intro}>造型簡單的燈具、足量的收納空間以及適度的留白，</Text>
        <Text style={styles.intro}>在有限的空間裡保有家的寬闊感。</Text>
        <Text style={styles.intro}>幸福，就是和重要的家人，</Text> 
        <Text style={styles.intro}>在舒適療癒的屋子裡好好吃一頓飯吧。</Text>       
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

export default SyokudouIntro;

