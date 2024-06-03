import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions,ScrollView  } from 'react-native';
import Swiper from 'react-native-swiper';
import Logo from "../components/Logo";
import { Box } from "@gluestack-ui/themed";
  
const ShopScreen = () => {
  return (
    <ScrollView>
        <Box>
        <Logo />

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
            <Image source={require('../img/shop1.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../img/shop2.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../img/shop3.png')} style={styles.image} />
          </View>
        </Swiper>
        </View>   

        <View style={styles.horizontalImagesContainer}>
            <Image source={require('../img/paint.png')} style={styles.horizontalImage} />
            <Image source={require('../img/paint1.png')} style={styles.horizontalImage} />
            <Image source={require('../img/curtain.png')} style={styles.horizontalImage} />
        </View>
        <View style={styles.titleImageContainer}>
            <Image source={require('../img/shop_title.png')} style={styles.titleImage} />         
        </View> 
        <View style={styles.horizontalImagesContainer}>
            <Image source={require('../img/paint-1.png')} style={styles.horizontalImage} />
            <Image source={require('../img/paint-2.png')} style={styles.horizontalImage} />
            <Image source={require('../img/paint-3.png')} style={styles.horizontalImage} />
        </View>
        <View style={styles.titleImageContainer}>
            <Image source={require('../img/shop_title2.png')} style={styles.titleImage} />         
        </View> 
        <View style={styles.horizontalImagesContainer}>
            <Image source={require('../img/other-1.png')} style={styles.horizontalImage} />
            <Image source={require('../img/other-2.png')} style={styles.horizontalImage} />
            <Image source={require('../img/other-3.png')} style={styles.horizontalImage} />
        </View>
        </View>
        </Box>       
    </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  carouselContainer: {
    height: Dimensions.get('window').height * 0.2,
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  horizontalImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom:10,
  },
  horizontalImage: {
    width: Dimensions.get('window').width / 3 - 10, // Adjust width to fit 3 images
    height: Dimensions.get('window').width / 3 - 10, // Adjust height to keep it square
    resizeMode: 'cover',
    marginHorizontal: 5,
  },
  titleImageContainer: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  titleImage: {
    width: Dimensions.get('window').width *1, // Adjust width as needed
    height: Dimensions.get('window').height * 0.1, // Adjust height as needed
    resizeMode: 'contain',
  },

});

export default ShopScreen;