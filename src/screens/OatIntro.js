import React from 'react';
import { View, Image, Text,ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const OatIntro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../img/Oat-Milk-Latte.jpg')} style={styles.image} />
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: '#765F4C' }]} />
          <View style={[styles.circle, { backgroundColor: '#9C896B' }]} />
          <View style={[styles.circle, { backgroundColor: '#D1B189' }]} />
          <View style={[styles.circle, { backgroundColor: '#CEB6A1' }]} />
          <View style={[styles.circle, { backgroundColor: '#DDCCBA' }]} />
        </View>
      </View>

      <Text style={styles.title}> 燕麥拿鐵的午後 Oat Milk Latte</Text>

      <View style={styles.title2}>
        <Text style={styles.subtitle}>風格：日式木質風</Text>
        <Text style={styles.subtitle}>設計空間：臥室</Text>
        <Text style={styles.subtitle}>格局：一房</Text>
        <Text style={styles.subtitle}>坪數：4坪</Text>
      </View>

      <View style={styles.title3}>
        <Text style={styles.intro}>「將空間調整成最適合當下的模樣」</Text>
        <Text style={styles.intro}>這是屋主為第三次的空間改造下的註解。</Text>
        <Text style={styles.intro}>牆面使用奶油色做出區隔，明亮中帶有柔和氛圍感。</Text>
        <Text style={styles.intro}>明亮中帶有柔和氛圍</Text>
        <Text style={styles.intro}>牆上的金屬字、床頭的香氛蠟燭與鮮花，</Text> 
        <Text style={styles.intro}>為空間勾勒出生活的輪廓。</Text>       
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

export default OatIntro;