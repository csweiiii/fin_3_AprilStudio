import React, { useRef, useEffect } from 'react';
import { Animated,StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    console.log("Animation starting");
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 7000,
        useNativeDriver: true,
      }
    ).start(() => {
      console.log("Animation completed");
    });
  }, [fadeAnim]);

  return (
    <Animated.View 
      style={{
        ...props.style,
        opacity: fadeAnim, 
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const Card = ({ image, description, height }) => {
    return (
      <View style={[styles.card, { height: height }]}>
        <Image source={image} style={[styles.cardImage, { height: height }]} />
        <FadeInView>
        <Text style={styles.cardText}>{description}</Text>
        </FadeInView>
      </View>
    );
  };
  const Card2 = ({ image, title, description, height, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.card2, { height: height }]}>
        <Text style={styles.cardText}>{title}</Text>
        <Image source={image} style={styles.cardImage2} />
        <Text style={styles.cardText}>{description}</Text>
      </TouchableOpacity>
    );
  };
  
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Swiper style={styles.wrapper} 
                showsButtons={true}
                dotColor="#D2B48C"
                activeDotColor="#000000"
                prevButton={<Text style={styles.buttonText}>{'<'}</Text>}
                nextButton={<Text style={styles.buttonText}>{'>'}</Text>}
                autoplay={true} 
                autoplayTimeout={2} 
              >
          <View style={styles.slide}>
            <Image source={require('../img/image1.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../img/image2.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../img/image3.jpg')} style={styles.image} />
          </View>
        </Swiper>
      </View>

      <View style={styles.bottomContent}>

        <FadeInView style={styles.fadingContainer}>
        <Text style={styles.title}>You can choice...</Text>
        </FadeInView>

        <View style={styles.row}>
          <View style={[styles.block, { flex: 4.9 }]}>
            <Card image={require('../img/image4.jpg')} description="屬於自己的星球世界" height={280}/>
            <Card image={require('../img/image5.jpg')} description="在家也能休閒辦公" height={170} />
          </View>
          
          <View style={[styles.block, { flex: 0.2 }]}>
            {/* 第二個區塊內容 */}
            <Line  />
          </View>
          
          <View style={[styles.block, { flex: 4.9 }]}>
            <Card image={require('../img/image6.jpg')} description="下班後的放鬆時光"height={140} />
            <Card image={require('../img/image7.jpg')} description="假日放空的秘密基地" height={140}/>
            <Card image={require('../img/image9.jpg')} description="孩子們的小天地"height={140} />
          </View>
        </View> 

      </View>

      <View style={styles.row}>
          <View style={[styles.block, { flex: 3.3 }]}>        
            <Card2 
              title="專欄文章" 
              image={require('../img/article.jpg')} 
              description="每個房間，都有屬於自己的故事..." 
              height={200}
              onPress={() => navigation.navigate('Article')}
            />
            
          </View>
           
          <View style={[styles.block, { flex: 3.3 }]}>
            <Card2 
              title="Arpil商城" 
              image={require('../img/shop.jpg')} 
              description="風格分類&顏色推薦，馬上開始選購吧！" 
              height={200}
              onPress={() => navigation.navigate('Shop')}
            />
          </View>
          
          <View style={[styles.block, { flex: 3.3 }]}>
            <Card2 
              title="空間改造課程" 
              image={require('../img/change.jpg')} 
              description="想改造自己的房間，卻不知道從何開始嗎？" 
              height={200}
              onPress={() => navigation.navigate('Change')}
            />
          </View>        
        </View>
      
    </View>
  );
};
   
const Line = () => {
    return (
        <View style={styles.line}></View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  carouselContainer: {
    height: Dimensions.get('window').height * 0.3,
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 5,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonText: {
    color: '#D2B48C',
    fontSize: 35,
  },
  title:{
    margin:10,
    marginBottom:12,
    fontSize:14,
  },

  line: {
    flexDirection: 'row',
    position: 'absolute',
    height: '100%', 
    backgroundColor: 'black',
    alignItems: 'center',
    width: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  block: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingVertical: 20,
  },
  card: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  card2: {
    width: '90%',
    backgroundColor:'#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:10,
    borderRadius: 5,
  },
  cardImage: {
    width: '105%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  cardImage2: {
    width: '100%',
    height:80,
    resizeMode: 'cover',
  },
  cardText: {
    padding: 10,
    fontSize:12,
    textAlign: 'left',
  },

});

export default Home;