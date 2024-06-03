import React from 'react';
import { View, Image, Text, ScrollView,TouchableOpacity, StyleSheet } from 'react-native';

const PlaygroundIntro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>  
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../img/Playground.jpg')} style={styles.image} />
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: '#6E7776' }]} />
          <View style={[styles.circle, { backgroundColor: '#A3805F' }]} />
          <View style={[styles.circle, { backgroundColor: '#B3ADB1' }]} />
          <View style={[styles.circle, { backgroundColor: '#BAAEA3' }]} />
          <View style={[styles.circle, { backgroundColor: '#CABDAB' }]} />
        </View>
      </View>

      <Text style={styles.title}> 生活遊樂場 Playground</Text>

      <View style={styles.title2}>
        <Text style={styles.subtitle}>風格：木質自然風</Text>
        <Text style={styles.subtitle}>設計空間：客餐廳</Text>
        <Text style={styles.subtitle}>格局：一廳</Text>
        <Text style={styles.subtitle}>坪數：15坪</Text>
      </View>

      <View style={styles.title3}>
        <Text style={styles.intro}>適合孩子的空間不一定要很童趣！</Text>
        <Text style={styles.intro}>將米灰色融合木頭元素，使空間溫馨、明亮</Text>
        <Text style={styles.intro}>客餐廳除了大人起居外</Text>
        <Text style={styles.intro}>改造完也非常適合孩子成長玩耍和學習！</Text>
        <Text style={styles.intro}>讓全家人都能一起生活玩樂，享受每個相處的時光！</Text> 
        <Text style={styles.intro}>喜歡嗎！這個專屬於你自由奔跑的遊樂場。</Text>       
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // 修改为 ''
    justifyContent: 'flex-start', // 修改为 'flex-start'
    marginTop: 60,
    width: '100%', // 设置宽度为 '100%'
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
    marginLeft:15,

  },
});

export default PlaygroundIntro;