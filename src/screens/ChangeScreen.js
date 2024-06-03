import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions,ScrollView,TouchableOpacity  } from 'react-native';

import Logo from "../components/Logo";
import { Box,Card } from "@gluestack-ui/themed";
const ChangeScreen = () => {
  return (
    <ScrollView>
        <Box>
        <Logo />
        <View style={styles.Container}>
        <Image source={require('../img/change-1.jpeg')} style={styles.verticalImage} />
        <Text style={styles.cardTitle}>想自己改造空間，卻不知道怎麼開始嗎？</Text>
        <Text style={styles.cardTitle1}>專屬小預算的空間 DIY 改造線上課程</Text>
        <Text style={styles.cardtext}>April Spring 致力於幫每一個人打造屬於自己的空間風格，並將過程拍成影片與大家分享，2017 年開始至今，我們創造了 200 多種風格，累積超過 100 支影片以及超過 4000 萬的觀看量。</Text>
        <Text style={styles.cardtext}>此外，我們也會定期撰寫各種改造文章，分享心得與中間的技巧等，協助大家 DIY 改造自己的空間。</Text>
        <Text style={styles.cardtext}>即便如此，我們發現依然有很多人詢問改造相關的問題，所以我們將過往改造的經驗、影片與文章的內容整理成系統化的內容，推出線上課程：</Text>
        <Text style={styles.cardTitle1}>空間風格改造術｜小預算DIY擁抱生活儀式感</Text>
        <Text style={styles.cardtext}>如果你是小資族，想要自己嘗試臥房套房改造、不需硬裝工程且願意自己動手 DIY 的人，誠摯邀請你加入這堂空間風格養成課，和我們一起動手改造打造屬於自己的專屬風格！</Text>
        <TouchableOpacity style={styles.card} activeOpacity={0.5}>
            <Card style={styles.card}>
              <Text style={styles.cardText}>完整課程說明</Text>
            </Card>
            </TouchableOpacity>

      </View>
        </Box>
    </ScrollView>
  
  );
};


  

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'flex-start', // Align items to the start (left)
    justifyContent: 'flex-start', // Align content to the start (left)
    margin: 15,
  },
  carouselContainer: {
    height: Dimensions.get('window').height * 0.3,
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
  },
  verticalImage:{
    width:'100%',
    height: 200,
    resizeMode: 'contain', // Use 'contain' to maintain aspect ratio
  },
 cardTitle: {
    marginTop: 10,
    marginLeft:10,
    fontSize:18,
    fontWeight: 'bold',
    textAlign: 'left', // Align text to the left
    alignSelf: 'flex-start', // Align self to the start (left) within the card
  },
  cardTitle1: {
    marginTop: 10,
    marginLeft:10,
    fontSize:16,
    fontWeight: 'bold',
    color: '#B98966',
    textAlign: 'left', // Align text to the left
    alignSelf: 'flex-start', // Align self to the start (left) within the card
  },
  cardtext: {
    marginTop: 10,
    marginBottom:10,
    marginLeft:10,
    fontSize:14,
    letterSpacing: 1.5,
    textAlign: 'left', // Align text to the left
    alignSelf: 'flex-start', // Align self to the start (left) within the card
    lineHeight: 22,
  },
  cardText: {
    color:'#BB6F37',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5,
    fontSize: 14,
    textAlign: 'left', // Align text to the left
  },
  cardTouchable: {
    alignSelf: 'flex-start', // Align the card to the start (left)
  },
  card: { 
    borderRadius: 5,
    padding: 5,
  },


});

export default ChangeScreen;